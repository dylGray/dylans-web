import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Loader2, Network } from 'lucide-react';
import navIcon from '../assets/images/nav-icon.jpg';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const llmChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);  // tracking full chat history
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    }
  };

  // scroll to bottom when message array is updated, regardless of streaming
  useEffect(() => {
    if (isStreaming || !isStreaming) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // adding new user message to the chat history, and updating state
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setIsStreaming(false);

    let assistantContent = '';

    // using local Ollama api server, calling the Mistral-7b model
    const response = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral', 
        messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })),
      }),
    });

    if (!response.body) {
      setLoading(false);
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let done = false;
    let buffer = '';

    let receivedFirstToken = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;

      if (value) {
        // decode the stream (binary chunks) and handle line breaks
        buffer += decoder.decode(value, { stream: true });
        let lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.trim()) continue;

          try {
            const json = JSON.parse(line);
            if (json.message && json.message.content) {
              assistantContent += json.message.content;

              // hide loading indicator as soon as the first token is received
              if (!receivedFirstToken) {
                setLoading(false);
                setIsStreaming(true);
                receivedFirstToken = true;
              }

              setMessages((prev) => {
                // if last message is from assistant, keep updating as response is streamed
                // else, start new assistant message
                if (prev.length && prev[prev.length - 1].role === 'assistant') {
                  return [
                    ...prev.slice(0, -1),
                    { role: 'assistant', content: assistantContent },
                  ];
                } else {
                  return [...prev, { role: 'assistant', content: assistantContent }];
                }
              });
            }
          } catch (err) {
            console.error('Error parsing JSON:', err);
          }
        }
      }
    }
    // If no tokens were received, still hide loading
    if (!receivedFirstToken) setLoading(false);
  };

  // initial state
  if (messages.length === 0) {
    return (
      <>
        <style>
          {`
            #nav-links {
              display: none !important;
            }
          `}
        </style>
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-light bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Dylan.IO
            </h1>
            <p>This chat tool is ran locally; conversations never leave your device.</p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-2">
              <span>Running Mistral-7b</span>
              <Network className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <div className="w-full max-w-2xl">
            <form onSubmit={handleSend} className="relative">
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0"></div>
                <div className="relative flex items-center">
                  <input
                    className="flex-1 px-6 py-4 bg-transparent text-white/90 placeholder-gray-500 focus:outline-none text-lg border-none shadow-none"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Get to know Dylan, or ask about anything..."
                    disabled={loading}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend(e);
                      }
                    }}
                  />
                  <button
                    type="submit"
                    className="mr-3 p-0 bg-transparent border-none shadow-none flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading || !input.trim()}
                    style={{ background: 'none' }}
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send
                        className={`w-5 h-5 transition-colors duration-200 mr-2 ${input.trim() ? 'text-white' : 'text-gray-400'}`}
                      />
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  // chat mode
  return (
    <>
      <style>
        {`
          #nav-links {
            display: none !important;
          }
        `}
      </style>
      <div className="min-h-screen flex flex-col max-w-4xl mx-auto px-4 py-8">
        <div
          ref={messagesContainerRef}
          style={{ paddingTop: '100px', height: '70vh' }}
          className="flex-1 overflow-y-auto mb-6"
        >
          <div className="flex flex-col gap-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-xl border border-white/20 shadow-lg ${
                  msg.role === 'user' 
                }`}>
                  {msg.role === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <img
                      src={navIcon}
                      alt="web logo"
                      className="w-8 h-8 rounded-full object-cover border-2 border-blue-400 shadow"
                    />
                  )}
                </div>
                <div className={`max-w-[75%] backdrop-blur-xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-yellow-400/10 border border-blue-200/30 rounded-2xl px-6 py-4 shadow-lg`}>
                  <div className="whitespace-pre-wrap text-white/90 leading-relaxed">
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-4">
                <div className="">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="sticky bottom-0">
          <form onSubmit={handleSend} className="relative">
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0"></div>
              <div className="relative flex items-center">
                <input
                  className="flex-1 px-6 py-4 bg-transparent text-white/90 placeholder-gray-500 focus:outline-none border-none shadow-none"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Get to know Dylan, or ask about anything..."
                  disabled={loading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(e);
                    }
                  }}
                />
                <button
                  type="submit"
                  className="mr-3 p-0 bg-transparent border-none shadow-none flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading || !input.trim()}
                  style={{ background: 'none' }}
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send
                      className={`w-5 h-5 transition-colors duration-200 mr-2 ${input.trim() ? 'text-white' : 'text-gray-400'}`}
                    />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default llmChat;