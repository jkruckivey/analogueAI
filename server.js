const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// AI Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, cardContext, instructions } = req.body;
        
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Build the system prompt based on context
        let systemPrompt = `You are an AI learning assistant helping students engage with educational concepts. `;
        
        if (cardContext) {
            systemPrompt += `The student is currently exploring the concept "${cardContext.concept}". The learning activity is: "${cardContext.activity}". `;
        }
        
        if (instructions) {
            systemPrompt += `Additional context: ${instructions}. `;
        }
        
        systemPrompt += `Be encouraging, ask thoughtful questions, and help the student think critically. Keep responses concise but meaningful.`;

        // Make request to OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('OpenAI API Error:', errorData);
            return res.status(500).json({ error: 'AI service temporarily unavailable' });
        }

        const data = await response.json();
        const aiResponse = data.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';

        res.json({ response: aiResponse });

    } catch (error) {
        console.error('Chat endpoint error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});