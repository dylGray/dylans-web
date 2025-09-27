import React from 'react';
import ChatInterface from '../assets/images/chat-interface.png';
// import { Link } from 'react-router-dom';
import { WrenchIcon } from 'lucide-react';

const ChatShowcase: React.FC = () => {
  return (
    <section id="chat">
      <div className="mx-auto text-center max-w-5xl pt-8 pb-12">
        <div className="mx-auto max-w-5xl rounded-3xl mt-2 md:mt-0 p-4 md:p-8 md:p-12">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white -mb-4 md:-mb-3 flex items-center justify-center gap-2">
              Under construction <WrenchIcon className="w-8 h-8 text-white/70" />
            </h2>

            <p className="text-sm sm:text-xl text-white/90 max-w-4xl mx-auto sm:leading-[1.5] mb-2">
              Toggle between frontier Large Language Models (LLM's). Actively adding tools and features to enhance your experience.
            </p>
          </div>

          <span className="inline-block w-16 h-1 mt-5 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full" />

          <div className="p-6 rounded-xl max-w-4xl mx-auto">
            <div className="text-center text-gray-400">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-300/10 p-2 rounded-xl inline-block">
                <img src={ChatInterface} alt="Chat Interface Preview" className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl border border-white/20" />
              </div>
            </div>
          </div>

        {/* <div>
          <Link
            to="/chat"
            className="glass-medium rounded-full px-6 py-3 text-white font-medium transition-all duration-200 inline-flex items-center space-x-2"
          >
            Start Chatting

          </Link>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default ChatShowcase;
