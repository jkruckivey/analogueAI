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
            approved: process.env.AUTO_APPROVE === 'true' || false, // Default to requiring approval
            flagged: false,
            qualityScore: 0,
            helpfulnessVotes: 0,
            reportedCount: 0
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

// Simple admin authentication middleware
function adminAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'; // Set this in your environment
    
    if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    next();
}

// Admin endpoint to get all community responses
app.get('/api/admin/all-responses', adminAuth, (req, res) => {
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
                approved: ex.approved || false,
                flagged: ex.flagged || false,
                qualityScore: ex.qualityScore || 0,
                helpfulnessVotes: ex.helpfulnessVotes || 0,
                reportedCount: ex.reportedCount || 0
            }));
        
        // Get stats for dashboard
        const stats = {
            total: adminView.length,
            approved: adminView.filter(r => r.approved).length,
            pending: adminView.filter(r => !r.approved && !r.flagged).length,
            flagged: adminView.filter(r => r.flagged).length,
            uniqueCards: new Set(adminView.map(r => r.cardNumber)).size
        };
        
        res.json({ 
            stats: stats,
            responses: adminView 
        });
    } catch (error) {
        console.error('Admin all-responses endpoint error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin endpoint to moderate responses (approve, reject, flag)
app.post('/api/admin/moderate/:responseId', adminAuth, (req, res) => {
    try {
        const responseId = req.params.responseId;
        const { action } = req.body; // 'approve', 'reject', 'flag', 'unflag'
        
        const examples = loadExamples();
        const responseIndex = examples.findIndex(ex => ex.id === responseId);
        
        if (responseIndex === -1) {
            return res.status(404).json({ error: 'Response not found' });
        }
        
        switch (action) {
            case 'approve':
                examples[responseIndex].approved = true;
                examples[responseIndex].flagged = false;
                break;
            case 'reject':
                examples[responseIndex].approved = false;
                examples[responseIndex].flagged = true;
                break;
            case 'flag':
                examples[responseIndex].flagged = true;
                break;
            case 'unflag':
                examples[responseIndex].flagged = false;
                break;
            default:
                return res.status(400).json({ error: 'Invalid action' });
        }
        
        fs.writeFileSync(EXAMPLES_FILE, JSON.stringify(examples, null, 2));
        console.log(`Response ${responseId} ${action}ed by admin`);
        
        res.json({ success: true, message: `Response ${action}ed successfully` });
    } catch (error) {
        console.error('Moderate endpoint error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin endpoint for bulk actions
app.post('/api/admin/bulk-moderate', adminAuth, (req, res) => {
    try {
        const { responseIds, action } = req.body;
        
        if (!Array.isArray(responseIds) || responseIds.length === 0) {
            return res.status(400).json({ error: 'Invalid response IDs' });
        }
        
        const examples = loadExamples();
        let updatedCount = 0;
        
        responseIds.forEach(responseId => {
            const responseIndex = examples.findIndex(ex => ex.id === responseId);
            if (responseIndex !== -1) {
                switch (action) {
                    case 'approve':
                        examples[responseIndex].approved = true;
                        examples[responseIndex].flagged = false;
                        updatedCount++;
                        break;
                    case 'reject':
                        examples[responseIndex].approved = false;
                        examples[responseIndex].flagged = true;
                        updatedCount++;
                        break;
                }
            }
        });
        
        fs.writeFileSync(EXAMPLES_FILE, JSON.stringify(examples, null, 2));
        console.log(`Bulk ${action}: ${updatedCount} responses updated`);
        
        res.json({ success: true, message: `${updatedCount} responses ${action}ed successfully` });
    } catch (error) {
        console.error('Bulk moderate endpoint error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin analytics endpoint
app.get('/api/admin/analytics', adminAuth, (req, res) => {
    try {
        const examples = loadExamples();
        
        // Card popularity analysis
        const cardUsage = {};
        examples.forEach(ex => {
            if (!cardUsage[ex.cardNumber]) {
                cardUsage[ex.cardNumber] = {
                    cardNumber: ex.cardNumber,
                    concept: ex.concept,
                    totalResponses: 0,
                    approvedResponses: 0,
                    averageInputLength: 0
                };
            }
            cardUsage[ex.cardNumber].totalResponses++;
            if (ex.approved) cardUsage[ex.cardNumber].approvedResponses++;
            
            // Calculate average input length
            const inputText = Object.values(ex.userInputs || {}).join(' ');
            cardUsage[ex.cardNumber].averageInputLength = 
                (cardUsage[ex.cardNumber].averageInputLength + inputText.length) / cardUsage[ex.cardNumber].totalResponses;
        });
        
        const popularCards = Object.values(cardUsage)
            .sort((a, b) => b.totalResponses - a.totalResponses)
            .slice(0, 10);
        
        // Time-based analytics
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const thisWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        
        const timeAnalytics = {
            today: examples.filter(ex => new Date(ex.timestamp) >= today).length,
            thisWeek: examples.filter(ex => new Date(ex.timestamp) >= thisWeek).length,
            thisMonth: examples.filter(ex => new Date(ex.timestamp) >= thisMonth).length,
            hourlyPattern: Array(24).fill(0)
        };
        
        // Hourly usage pattern
        examples.forEach(ex => {
            const hour = new Date(ex.timestamp).getHours();
            timeAnalytics.hourlyPattern[hour]++;
        });
        
        // Response quality metrics
        const qualityMetrics = {
            averageInputLength: examples.length > 0 ? 
                examples.reduce((sum, ex) => {
                    const inputText = Object.values(ex.userInputs || {}).join(' ');
                    return sum + inputText.length;
                }, 0) / examples.length : 0,
            approvalRate: examples.length > 0 ? 
                (examples.filter(ex => ex.approved).length / examples.length) * 100 : 0,
            flaggedRate: examples.length > 0 ?
                (examples.filter(ex => ex.flagged).length / examples.length) * 100 : 0
        };
        
        res.json({
            popularCards: popularCards,
            timeAnalytics: timeAnalytics,
            qualityMetrics: qualityMetrics
        });
    } catch (error) {
        console.error('Analytics endpoint error:', error);
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

// Feedback endpoint
app.post('/api/feedback', (req, res) => {
    try {
        const feedback = req.body;
        console.log('Feedback received:', feedback);
        
        // Add timestamp and ID if not present
        if (!feedback.timestamp) {
            feedback.timestamp = new Date().toISOString();
        }
        if (!feedback.id) {
            feedback.id = Date.now() + Math.random().toString(36).substr(2, 9);
        }
        
        // Store feedback (you could save to a file or database here)
        // For now, just log it
        console.log('User feedback:', {
            cardNumber: feedback.cardNumber,
            rating: feedback.rating,
            comment: feedback.comment,
            interactionType: feedback.interactionType,
            promptVariantId: feedback.promptVariantId,
            isABTest: feedback.isABTest,
            timestamp: feedback.timestamp
        });
        
        // If this is A/B test feedback, log it separately for analytics
        if (feedback.isABTest && feedback.promptVariantId) {
            console.log('A/B Test Result:', {
                variantId: feedback.promptVariantId,
                rating: feedback.rating,
                cardNumber: feedback.cardNumber,
                sessionId: feedback.sessionId
            });
        }
        
        res.json({ success: true, message: 'Feedback received successfully' });
        
    } catch (error) {
        console.error('Feedback endpoint error:', error);
        res.status(500).json({ error: 'Failed to process feedback' });
    }
});

// A/B Test Assignment endpoint
app.post('/api/ab-test/assignment', (req, res) => {
    try {
        const assignment = req.body;
        console.log('A/B Test Assignment:', {
            cardNumber: assignment.cardNumber,
            interactionType: assignment.interactionType,
            variantId: assignment.variantId,
            sessionId: assignment.sessionId,
            timestamp: assignment.timestamp
        });
        
        res.json({ success: true, message: 'A/B test assignment logged' });
        
    } catch (error) {
        console.error('A/B test assignment error:', error);
        res.status(500).json({ error: 'Failed to log A/B test assignment' });
    }
});

// A/B Test Analytics endpoint (for admins)
app.get('/api/admin/ab-test/analytics', adminAuth, (req, res) => {
    try {
        // This would normally query a database
        // For now, return a sample analytics structure
        const analytics = {
            summary: {
                totalAssignments: 0,
                totalFeedback: 0,
                averageRatingByVariant: {}
            },
            variants: {
                'default': { assignments: 0, ratings: [], averageRating: 0 },
                'socratic': { assignments: 0, ratings: [], averageRating: 0 },
                'creative': { assignments: 0, ratings: [], averageRating: 0 }
            }
        };
        
        res.json(analytics);
        
    } catch (error) {
        console.error('A/B test analytics error:', error);
        res.status(500).json({ error: 'Failed to get A/B test analytics' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});