import React from 'react';
import ChatInterface from '../assets/images/chat-interface.png';
import { Link } from 'react-router-dom';

const PageHighlight: React.FC = () => {
  return (
      <div className="mx-auto text-center max-w-5xl pt-8">
        <div className="mx-auto max-w-5xl rounded-3xl p-8 md:p-12">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white -mb-3">
              Tinkering with LLM's
            </h2>

            <p className="text-sm sm:text-lg text-white/90 max-w-4xl mx-auto sm:leading-relaxed mb-2">
              Toggle between frontier Large Language Models (LLM's). Currently, you can switch between GPT-3.5 Turbo and Gemini 1.5 Flash to see how different models respond to your prompts.
            </p>
          </div>

          <span className="inline-block w-16 h-1 my-5 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full" />

          <div>
            <Link
              to="/chat"
              className="glass-medium rounded-full px-6 py-3 text-white font-medium transition-all duration-200 inline-flex items-center space-x-2"
            >
              Start Chatting

            </Link>
          </div>

          <div className="mt-2 p-6 rounded-xl max-w-5xl mx-auto">
            <div className="text-center text-gray-400">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-300/10 p-4 rounded-xl inline-block">
                <img src={ChatInterface} alt="Chat Interface Preview" className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl border border-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default PageHighlight;
