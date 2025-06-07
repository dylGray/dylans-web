import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16 animate-float">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-gradient">Dylan</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Full-Stack Developer & Creative Problem Solver
          </p>
          
          <p className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that blend innovative technology with thoughtful design. 
            Passionate about building solutions that make a difference.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
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
            <a
              href="mailto:hello@dylan.dev"
              className="glass-dark rounded-full p-3 hover:scale-110 transition-transform duration-200 hover:animate-glow"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="glass-dark rounded-full px-8 py-4 text-white font-medium hover:scale-105 transition-all duration-200 hover:animate-glow inline-flex items-center space-x-2"
          >
            <span>Discover My Story</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;