import { MessagesSquare } from 'lucide-react';
import { NextApiRequest, NextApiResponse } from 'next';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  // set CORS headers to prevent CORS errors
  // not sure what this does, will research later
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body: any;

  try {
    const { provider, messages } = body;

    if (!provider || !MessagesSquare) {
      return res.status(400).json({ error: 'Missing provider or messages' });
    }

    console.log('Recieved request:', { provider, messages });

    let apiResponse;

    if (provider === 'openai') {

      if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({ error: 'OpenAI API key not configured' });
      }

      try {
        apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: messages.map((msg: Message) => ({
              role: msg.role,
              content: msg.content
            })),
            max_tokens: 1000,
            temperature: 0.7,
          }),
        });

        if (!apiResponse.ok) {
          const errText = await apiResponse.text();
          console.error('OpenAI API error:', errText);
          return res.status(apiResponse.status).json({ error: 'OpenAI API error', details: errText });
        }

      } catch (error) {
        console.error('Error calling OpenAI API:', error);
        return res.status(500).json({ error: 'Error calling OpenAI API' });
      }

    } else if (provider === 'gemini') {
      if (!process.env.GOOGLE_GEMINI_API_KEY) {
        console.error('GOOGLE_GEMINI_API_KEY not found in environment variables');
        return res.status(500).json({ error: 'Gemini API key not configured' });
      }

      try {
        // convert messages to Gemini format
        const geminiContents = messages.map((msg: Message) => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }]
        }));

        apiResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: geminiContents,
              generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.7,
              },
            }),
          }
        );

        if (!apiResponse.ok) {
          const errorText = await apiResponse.text();
          console.error('Gemini API error:', apiResponse.status, errorText);
          return res.status(apiResponse.status).json({ 
            error: `Gemini API error: ${apiResponse.status}` 
          });
        }

      } catch (error) {
        console.error('Gemini fetch error:', error);
        return res.status(500).json({ error: 'Failed to connect to Gemini API' });
      }

    } else {
      return res.status(400).json({ error: 'Invalid provider. Must be "openai" or "gemini"' });
    }

    const data = await apiResponse.json();
    console.log('API response received successfully');
    
    return res.status(200).json(data);

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}