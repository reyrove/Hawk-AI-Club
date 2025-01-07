import express from 'express';
import fetch from 'node-fetch';
import path from 'path';

const app = express(); // Initialize the Express app
const PORT = 3000;

// Middleware to parse incoming JSON
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Root route (serve the HTML frontend)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to generate code
app.post('/generate-code', async (req, res) => {
  const prompt = req.body.prompt;
  const apiKey = '';

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Use the updated model
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt },
        ],
        max_tokens: 150,
      }),
    });

    const data = await response.json();

    // Log the data to inspect the response from OpenAI
    console.log('OpenAI API response:', data);

    // Check if the data has choices and if the first choice exists
    if (data.choices && data.choices.length > 0) {
      res.json({ output: data.choices[0].message.content.trim() });
    } else {
      res.status(500).send('No code generated, OpenAI response structure is unexpected');
    }
  } catch (error) {
    console.error('Error generating code:', error);
    res.status(500).send('Error generating code');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


