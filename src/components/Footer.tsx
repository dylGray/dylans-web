import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <a
              href="mailto:hello@dylan.dev"
              className="glass-dark rounded-full px-6 py-3 text-white hover:scale-105 transition-all duration-200 hover:animate-glow inline-flex items-center space-x-3"
            >
              <Mail className="w-5 h-5" />
              <span>hello@dylan.dev</span>
            </a>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark rounded-full p-3 hover:scale-110 transition-transform duration-200 hover:animate-glow"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark rounded-full p-3 hover:scale-110 transition-transform duration-200 hover:animate-glow"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-200"
              >
                Dylan
              </button>
              
              <p className="text-white/60 text-sm flex items-center space-x-1">
                <span>© {currentYear} Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>by Dylan</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;