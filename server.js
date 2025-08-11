const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

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

        res.json({ response: aiResponse });

    } catch (error) {
        console.error('Chat endpoint error:', error);
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