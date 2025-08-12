const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Simple file-based storage for community examples
const EXAMPLES_FILE = './community-examples.json';

// Initialize examples file if it doesn't exist
if (!fs.existsSync(EXAMPLES_FILE)) {
    fs.writeFileSync(EXAMPLES_FILE, JSON.stringify([]));
}

// Helper functions for community examples
function loadExamples() {
    try {
        const data = fs.readFileSync(EXAMPLES_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading examples:', error);
        return [];
    }
}

function saveExample(cardNumber, concept, userInputs, aiResponse) {
    try {
        const examples = loadExamples();
        const newExample = {
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            timestamp: new Date().toISOString(),
            cardNumber: cardNumber,
            concept: concept,
            userInputs: userInputs,
            aiResponsePreview: aiResponse ? aiResponse.substring(0, 100) + '...' : '',
            approved: true // For now, auto-approve. Later could add moderation
        };
        
        examples.push(newExample);
        
        // Keep only the latest 1000 examples to prevent file from growing too large
        if (examples.length > 1000) {
            examples.splice(0, examples.length - 1000);
        }
        
        fs.writeFileSync(EXAMPLES_FILE, JSON.stringify(examples, null, 2));
        console.log('Saved community example for card', cardNumber);
    } catch (error) {
        console.error('Error saving example:', error);
    }
}

function getExamplesForCard(cardNumber, limit = 5) {
    try {
        const examples = loadExamples();
        const cardExamples = examples
            .filter(ex => ex.cardNumber === cardNumber && ex.approved)
            .sort(() => Math.random() - 0.5) // Random shuffle
            .slice(0, limit);
        
        // Return only the user inputs (no responses or metadata)
        return cardExamples.map(ex => ({
            inputs: ex.userInputs
        }));
    } catch (error) {
        console.error('Error getting examples:', error);
        return [];
    }
}

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json({ limit: '10mb' }));

// Serve static files with explicit content types
app.use(express.static('.', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve admin page
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// AI Chat endpoint
app.post('/api/chat', async (req, res) => {
    console.log('Chat request received:', req.body);
    
    try {
        const { message, cardContext, instructions, customPrompt } = req.body;
        
        if (!message) {
            console.log('Error: No message provided');
            return res.status(400).json({ error: 'Message is required' });
        }

        if (!process.env.ANTHROPIC_API_KEY) {
            console.log('Error: Anthropic API key not found');
            return res.status(500).json({ error: 'API key not configured' });
        }

        // Build the system prompt based on context
        let systemPrompt;
        
        if (customPrompt) {
            // Use card-specific prompt for guided interactions
            systemPrompt = customPrompt;
        } else {
            // Default generic chat prompt
            systemPrompt = `You are an AI learning assistant helping students engage with educational concepts. `;
            
            if (cardContext) {
                systemPrompt += `The student is currently exploring the concept "${cardContext.concept}". The learning activity is: "${cardContext.activity}". `;
            }
            
            if (instructions) {
                systemPrompt += `Additional context: ${instructions}. `;
            }
            
            systemPrompt += `Be encouraging, ask thoughtful questions, and help the student think critically. Keep responses concise but meaningful.`;
        }

        // Make request to Anthropic API
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'x-api-key': process.env.ANTHROPIC_API_KEY,
                'Content-Type': 'application/json',
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-haiku-20240307',
                max_tokens: 500,
                messages: [
                    { 
                        role: 'user', 
                        content: `${systemPrompt}\n\nUser: ${message}` 
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Anthropic API Error:', errorData);
            return res.status(500).json({ error: 'AI service temporarily unavailable' });
        }

        const data = await response.json();
        const aiResponse = data.content[0]?.text || 'Sorry, I couldn\'t generate a response.';

        // Save this interaction as a community example (if it was successful)
        if (req.body.customPrompt && req.body.cardContext) {
            saveExample(
                req.body.cardContext.cardNumber, 
                req.body.cardContext.concept,
                req.body.userInputs || {},
                aiResponse
            );
        }

        res.json({ response: aiResponse });

    } catch (error) {
        console.error('Chat endpoint error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get community examples for a specific card
app.get('/api/examples/:cardNumber', (req, res) => {
    try {
        const cardNumber = parseInt(req.params.cardNumber);
        if (!cardNumber || cardNumber < 1 || cardNumber > 50) {
            return res.status(400).json({ error: 'Invalid card number' });
        }
        
        const examples = getExamplesForCard(cardNumber);
        res.json({ examples: examples });
    } catch (error) {
        console.error('Examples endpoint error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin endpoint to get all community responses
app.get('/api/admin/all-responses', (req, res) => {
    try {
        const examples = loadExamples();
        
        // Sort by timestamp (newest first) and include more details for admin
        const adminView = examples
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .map(ex => ({
                id: ex.id,
                timestamp: ex.timestamp,
                cardNumber: ex.cardNumber,
                concept: ex.concept,
                userInputs: ex.userInputs,
                aiResponsePreview: ex.aiResponsePreview,
                approved: ex.approved
            }));
        
        res.json({ 
            total: adminView.length,
            responses: adminView 
        });
    } catch (error) {
        console.error('Admin all-responses endpoint error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        hasApiKey: !!process.env.ANTHROPIC_API_KEY,
        apiKeyPrefix: process.env.ANTHROPIC_API_KEY ? process.env.ANTHROPIC_API_KEY.substring(0, 7) + '...' : 'none'
    });
});

// Simple test endpoint
app.post('/api/test', (req, res) => {
    console.log('Test endpoint hit:', req.body);
    res.json({ message: 'Test successful', received: req.body });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});