import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Loader2, BrainCircuit, Sparkles } from 'lucide-react';
import navIcon from '../assets/images/nav-icon.jpg';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const llmChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);  // tracking full chat history
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'gpt-3.5-turbo' | 'gemini-1.5-flash'>('gpt-3.5-turbo');
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

    // call Vercel serverless API route with correct provider
    let provider: 'openai' | 'gemini' = selectedModel === 'gpt-3.5-turbo' ? 'openai' : 'gemini';
    let model = selectedModel;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          provider,
          model,
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();
      let assistantContent = '';

      if (provider === 'openai') {
        assistantContent = data.choices?.[0]?.message?.content || 'No response.';
      } else if (provider === 'gemini') {
        assistantContent = data.candidates?.[0]?.content?.parts?.[0]?.text
          || data.candidates?.[0]?.content?.text
          || 'No response.';
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error: Unable to fetch response.' }]);
    } finally {
      setLoading(false);
    }
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-2">
                <button
                  onClick={() => setSelectedModel('gpt-3.5-turbo')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedModel === 'gpt-3.5-turbo'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  GPT-3.5 Turbo
                </button>
                <button
                  onClick={() => setSelectedModel('gemini-1.5-flash')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedModel === 'gemini-1.5-flash'
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Gemini-1.5 Flash
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
              <span className="text-xs md:text-sm">Currently using: {selectedModel}</span>
              <span className="flex items-center gap-1">
                {selectedModel === 'gpt-3.5-turbo' && (
                  <BrainCircuit className="w-5 h-5 text-blue-400" />
                )}
                {selectedModel === 'gemini-1.5-flash' && (
                  <Sparkles className="w-5 h-5 text-purple-400" />
                )}
              </span>
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
                    placeholder="Ask anything..."
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
                  placeholder="Ask anything..."
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