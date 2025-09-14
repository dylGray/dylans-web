import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Loader2, X, Info, Globe } from 'lucide-react';
import navIcon from '../assets/images/nav-icon.jpg';
import gptLogo from '../assets/images/gpt-logo.png';
import geminiLogo from '../assets/images/gemini-icon.png';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface TypingMessage {
  messageIndex: number;
  fullContent: string;
  currentContent: string; 
  isTyping: boolean;
}

const llmChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'gpt-3.5-turbo' | 'gemini-1.5-flash'>('gpt-3.5-turbo');
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isModelInfoOpen, setIsModelInfoOpen] = useState(false);
  const [typingMessage, setTypingMessage] = useState<TypingMessage | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [webSearchEnabled, setWebSearchEnabled] = useState(false);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    }
  };

  // const handleRestartChat = () => {
  //   setMessages([]);
  //   setInput('');
  //   setTypingMessage(null);
  //   if (typingIntervalRef.current) {
  //     clearInterval(typingIntervalRef.current);
  //   }
  // };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModelInfoOpen(false);
    };
    if (isModelInfoOpen) {
      document.addEventListener('keydown', onKey);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [isModelInfoOpen]);

  useEffect(() => {
    if (typingMessage && typingMessage.isTyping) {
      const typeSpeed = 20; 
      
      typingIntervalRef.current = setInterval(() => {
        setTypingMessage(prev => {
          if (!prev) return null;
          
          const nextLength = prev.currentContent.length + 1;
          
          if (nextLength >= prev.fullContent.length) {
            setMessages(prevMessages => {
              const updatedMessages = [...prevMessages];
              updatedMessages[prev.messageIndex] = {
                role: 'assistant',
                content: prev.fullContent
              };
              return updatedMessages;
            });
            
            if (typingIntervalRef.current) {
              clearInterval(typingIntervalRef.current);
            }
            
            return { ...prev, isTyping: false, currentContent: prev.fullContent };
          }
          
          return {
            ...prev,
            currentContent: prev.fullContent.substring(0, nextLength)
          };
        });
      }, typeSpeed);
    }

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [typingMessage?.isTyping]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingMessage?.currentContent]);

  const startTypingEffect = (content: string, messageIndex: number) => {
    setTypingMessage({
      messageIndex,
      fullContent: content,
      currentContent: '',
      isTyping: true
    });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    setTypingMessage(null);

    // adding new user message to the chat history, and updating state
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

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
          webSearchEnabled,
        }),
      });

      const data = await response.json();

      let assistantContent = '';

      if (provider === 'openai') {
          assistantContent = data.choices?.[0]?.message?.content || 'No response from OpenAI.';
      
      } else if (provider === 'gemini') {
          assistantContent = data.candidates?.[0]?.content?.parts?.[0]?.text
            || data.candidates?.[0]?.content?.text
            || 'No response from Gemini.';
    
      } else {
        assistantContent = 'Unknown provider response.';
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
      const messageIndex = messages.length + 1; // +1 because we just added user message
      startTypingEffect(assistantContent, messageIndex);

    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error: Unable to fetch response.' }]);
    } finally {
      setLoading(false);
    }
  };

   const getModelInfo = () => {
    if (selectedModel === 'gpt-3.5-turbo') {
      return {
        name: 'GPT-3.5 Turbo',
        provider: 'OpenAI',
        description: 'A fast, efficient language model optimized for chat applications.',
        features: [
          'Conversational AI with natural language understanding',
          'Context window of 4,096 tokens',
          'Fine-tuned for instruction following'
        ],
        strengths: [
          'Quick response times',
          'Cost-effective for high-volume usage',
          'Reliable performance across various tasks',
        ],
        useCases: [
          'Customer support chatbots',
          'Content generation',
          'Code assistance',
          'General Q&A applications',
          'General automation'
        ]
      };
    } else {
      return {
        name: 'Gemini 1.5 Flash',
        provider: 'Google',
        description: 'Google\'s fast and versatile AI model designed for diverse tasks.',
        features: [
          'Large context window up to 1 million tokens',
          'Fast inference speed',
          'Advanced reasoning capabilities',
        ],
        strengths: [
          'Exceptional context understanding',
          'Strong performance on complex reasoning',
          'Excellent for long-form content'
        ],
        useCases: [
          'Document analysis and summarization',
          'Creative writing and content creation',
          'Complex problem solving',
          'Research assistance',
          'General automation'
        ]
      };
    }
  };

  const modelInfo = getModelInfo();

  const ModelInfo = () => {
    if (!isModelInfoOpen) return null;
    const logo = selectedModel === 'gpt-3.5-turbo' ? gptLogo : geminiLogo;
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        aria-labelledby="model-info-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsModelInfoOpen(false)}
        />

        <div className="relative z-10 max-w-4xl w-[92%] md:w-[640px] rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl backdrop-blur-xl text-white">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src={logo} alt={modelInfo.name} className="w-8 h-8 rounded" />
              <div>
                <h3 id="model-info-title" className="text-lg font-semibold">{modelInfo.name}</h3>
                <p className="text-xs text-gray-300">Provider: {modelInfo.provider}</p>
              </div>
            </div>
            <button
              onClick={() => setIsModelInfoOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Close model info"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 py-5 space-y-5">
            <p className="text-sm text-gray-200">{modelInfo.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                <ul className="list-disc pl-5 text-left space-y-1 text-xs text-gray-200">
                  {modelInfo.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <h4 className="text-sm font-semibold mb-2">Strengths</h4>
                <ul className="list-disc pl-5 text-left space-y-1 text-xs text-gray-200">
                  {modelInfo.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 p-4 bg-white/5">
              <h4 className="text-sm font-semibold mb-2">Great For</h4>
              <div className="flex flex-wrap gap-2">
                {modelInfo.useCases.map((u, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full border border-white/20 bg-white/10"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 pb-5 flex justify-end">
            <button
              onClick={() => setIsModelInfoOpen(false)}
              className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  // helper function to get message content (handles typing effect)
  const getMessageContent = (msg: Message, idx: number) => {
    if (typingMessage && typingMessage.messageIndex === idx && msg.role === 'assistant') {
      return typingMessage.currentContent + (typingMessage.isTyping ? '|' : '');
    }
    return msg.content;
  };

  // initial state
  if (messages.length === 0) {
    return (
      <>
        <style>
            {`
            #nav-links, #menu-button {
              display: none !important;
            }

            #home-image {
              display: flex !important;
              min-width: fit-content !important;
              flex-shrink: 0 !important;
            }

            #home-image img {
              width: 36px !important;
              height: 36px !important;
              flex-shrink: 0 !important;
            }

            @media (max-width: 768px) {
              button[title*="Rain"] {
              display: none !important;
              }
            }

            .typing-cursor {
              animation: blink 1s infinite;
            }

            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            `}
        </style>

        <ModelInfo />

        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            {selectedModel === 'gpt-3.5-turbo' && (
            <div className="hidden md:flex items-center gap-2 text-xs text-white-800 bg-blue-900/30 rounded-lg px-3 py-2 md:-mt-36">
              <Globe className="w-4 h-4" />
              <span>
              <strong>New:</strong> Enable the <span className="font-semibold">Web Search</span> tool (globe icon) to get real-time data and up-to-date information directly in your chat. Available only with GPT-3.5 Turbo.
              </span>
            </div>
            )}
            <h2
            className={`text-xl md:text-3xl mb-8 text-center px-1${selectedModel === 'gpt-3.5-turbo' ? ' md:pt-28' : ''}`}
            >
            Chat with popular LLM's
            </h2>
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
            <div className="flex flex-col items-center justify-center gap-2 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm">Currently using: {selectedModel}</span>
                <span className="flex items-center gap-1">
                  {selectedModel === 'gpt-3.5-turbo' && (
                    <img src={gptLogo} alt="GPT-3.5 Turbo" className="w-6 h-6" />
                  )}
                  {selectedModel === 'gemini-1.5-flash' && (
                    <img src={geminiLogo} alt="Gemini-1.5 Flash" className="w-6 h-6" />
                  )}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsModelInfoOpen(true)}
                className="flex items-center gap-1 text-xs hover:text-white transition-colors"
                aria-haspopup="dialog"
                aria-expanded={isModelInfoOpen}
              >
                <Info className="w-4 h-4 text-blue-300" aria-hidden="true" />
                About this model
              </button>
            </div>
          </div>
          <div className="w-full max-w-2xl">
            <form onSubmit={handleSend} className="relative">
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0"></div>
                <div className="relative flex items-center">
                  <span className="absolute left-4 flex items-center h-full">
                    {selectedModel === 'gpt-3.5-turbo' && (
                      <img src={gptLogo} alt="GPT-3.5 Turbo" className="w-6 h-6 object-contain" />
                    )}
                    {selectedModel === 'gemini-1.5-flash' && (
                      <img src={geminiLogo} alt="Gemini-1.5 Flash" className="w-6 h-6 object-contain" />
                    )}
                  </span>
                  <input
                    className="flex-1 pl-14 pr-6 py-4 bg-transparent text-white/90 placeholder-gray-500 focus:outline-none text-lg border-none shadow-none"
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

                  {selectedModel === 'gpt-3.5-turbo' && (
                    <button
                      type="button"
                      className={`p-2 bg-transparent border-none shadow-none flex items-center justify-center transition-colors duration-200 ${
                        webSearchEnabled ? 'text-blue-400 hover:text-blue-300' : 'text-gray-400 hover:text-white'
                      } ${loading && webSearchEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      title={webSearchEnabled ? "Disable Web Search" : "Enable Web Search"}
                      aria-label={webSearchEnabled ? "Disable Web Search" : "Enable Web Search"}
                      onClick={() => setWebSearchEnabled(!webSearchEnabled)}
                      disabled={loading && webSearchEnabled}
                      tabIndex={-1}
                    >
                      <Globe className="w-5 h-5" />
                    </button>
                  )}

                  <button
                    type="submit"
                    className="mr-3 p-0 bg-transparent border-none shadow-none flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading || !input.trim()}
                    style={{ background: 'none' }}
                  >
                  <Send
                    className={`w-5 h-5 transition-colors duration-200 mr-2 ${input.trim() ? 'text-white' : 'text-gray-400'}`}
                  />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  // chatting state
  return (
    <>
      <style>
        {`
          #nav-links, #menu-button {
            display: none !important;
          }

          #home-image {
            display: flex !important;
            min-width: fit-content !important;
            flex-shrink: 0 !important;
          }

          #home-image img {
            width: 32px !important;
            height: 32px !important;
            flex-shrink: 0 !important;
          }

          @media (max-width: 768px) {
            button[title*="Rain"] {
              display: none !important;
            }
          }

          .typing-cursor {
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
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
                <div className={`max-w-[75%] backdrop-blur-xl border border-blue-200/30 rounded-2xl px-6 py-4 shadow-lg`}>
                  <div className="whitespace-pre-wrap text-white/90 leading-relaxed">
                    {getMessageContent(msg, idx)}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-4">
                <div className="">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {webSearchEnabled ? (
                      <span>Searching the web...</span>
                    ) : (
                      <span>Thinking...</span>
                    )}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="sticky bottom-0">
          {/* Web Search Toggle */}
          <form onSubmit={handleSend} className="relative">
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0"></div>
              <div className="relative flex items-center">
                <span className="absolute left-4 flex items-center h-full">
                  {selectedModel === 'gpt-3.5-turbo' && (
                    <img src={gptLogo} alt="GPT-3.5 Turbo" className="w-6 h-6 object-contain" />
                  )}
                  {selectedModel === 'gemini-1.5-flash' && (
                    <img src={geminiLogo} alt="Gemini-1.5 Flash" className="w-6 h-6 object-contain" />
                  )}
                </span>
                <input
                  className="flex-1 pl-14 pr-6 py-4 bg-transparent text-white/90 placeholder-gray-500 focus:outline-none border-none shadow-none"
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
                {selectedModel === 'gpt-3.5-turbo' && (
                  <button
                    type="button"
                    className={`p-2 bg-transparent border-none shadow-none flex items-center justify-center transition-colors duration-200 ${
                      webSearchEnabled ? 'text-blue-400 hover:text-blue-300' : 'text-gray-400 hover:text-white'
                    } ${loading && webSearchEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title={webSearchEnabled ? "Disable Web Search" : "Enable Web Search"}
                    aria-label={webSearchEnabled ? "Disable Web Search" : "Enable Web Search"}
                    onClick={() => setWebSearchEnabled(!webSearchEnabled)}
                    disabled={loading && webSearchEnabled}
                    tabIndex={-1}
                  >
                    <Globe className="w-5 h-5" />
                  </button>
                )}

                <button
                  type="submit"
                  className="mr-3 p-2 bg-transparent border-none shadow-none flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading || !input.trim()}
                  style={{ background: 'none' }}
                  aria-label="Send"
                >
                <Send
                  className={`w-5 h-5 transition-colors duration-200 ${input.trim() ? 'text-white' : 'text-gray-400'}`}
                />
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