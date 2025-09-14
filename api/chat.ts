import { NextApiRequest, NextApiResponse } from 'next';

const tavilySearchTool = {
  type: "function",
  function: {
    name: "tavily_search",
    description: "Search the web for current information, news, or facts",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The search query to look up on the web"
        }
      },
      required: ["query"]
    }
  }
};

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

async function performWebSearch(query: string) {
  const TAVILY_API_KEY = process.env.TAVILY_SEARCH_API_KEY;
  
  if (!TAVILY_API_KEY) {
    throw new Error('Tavily API key not configured');
  }

  const response = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TAVILY_API_KEY}`
    },
    body: JSON.stringify({
      query,
      max_results: 3,
      include_answer: true
    })
  });

  if (!response.ok) {
    throw new Error(`Tavily API error: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// main function that calls OpenAI and Google Gemini LLM's
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { provider, messages, webSearchEnabled } = req.body;

    if (!provider) {
      return res.status(400).json({ error: 'Missing provider' });
    }

    console.log('Recieved request:', { provider, messages });

    let apiResponse;

    // client is using gpt-3.5-turbo
    if (provider === 'openai') {

      if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({ error: 'OpenAI API key not configured' });
      }

      try {
        const requestBody = {
          model: 'gpt-3.5-turbo',
          messages: messages.map((msg: Message) => ({
            role: msg.role,
            content: msg.content
          })),
          max_tokens: 1000,
          temperature: 0.5,
          tools: [] as any[],
          tool_choice: "none" as "none" | "auto" | "manual"
        };

        if (webSearchEnabled) {
          requestBody.tools = [tavilySearchTool];
          requestBody.tool_choice = "auto";
        }

        apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify(requestBody),
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

    // client is using gemini-1.5-flash
    } else if (provider === 'gemini') {
      if (!process.env.GOOGLE_GEMINI_API_KEY) {
        console.error('GOOGLE_GEMINI_API_KEY not found in environment variables');
        return res.status(500).json({ error: 'Gemini API key not configured' });
      }

      try {

        // web search not enabled yet

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
                temperature: 0.5,
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

    if (webSearchEnabled) {
      let toolCalled = false;
      let searchQuery = '';
      let searchResults = null;

      if (provider === 'openai' && data.choices?.[0]?.message?.tool_calls) {
        const toolCall = data.choices[0].message.tool_calls[0];
        if (toolCall.function.name === 'tavily_search') {
          searchQuery = JSON.parse(toolCall.function.arguments).query;
          toolCalled = true;
        }
      }

      // have to add logic for gemini calls once i can figure out how to plug in the web search tool

      if (toolCalled && searchQuery) {
        try {
          searchResults = await performWebSearch(searchQuery);
          
          // add search results to the conversation
          const toolMessage = {
            role: 'tool',
            tool_call_id: data.choices[0].message.tool_calls[0].id, 
            content: `Web search results for "${searchQuery}":\n\n${searchResults.answer}\n\nSources:\n${searchResults.results.map((r: any) => `- ${r.title}: ${r.url}`).join('\n')}`
          };
          
          if (provider === 'openai') {
            // pass search results to LLM call to have a conversational output
            const followUpBody = {
              model: 'gpt-3.5-turbo',
              messages: [
                ...messages.map((msg: Message) => ({
                  role: msg.role,
                  content: msg.content
                })),
                data.choices[0].message, 
                toolMessage 
              ],
              max_tokens: 1000,
              temperature: 0.5,
            };
            
            const followUpResponse = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
              },
              body: JSON.stringify(followUpBody),
            });
            
            const followUpData = await followUpResponse.json();
            return res.status(200).json(followUpData);
          }

        // have to add logic for gemini calls once i can figure out how to plug in the web search tool
          
        } catch (searchError) {
          console.error('Web search error:', searchError);
        }
      }
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}