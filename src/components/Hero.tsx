import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import dylAndMagsImg from '../assets/images/dyl-and-mags.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-2 pt-14 sm:pt-20">
      <div className="text-center max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16 animate-float">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-gradient">Dylan</span>
          </h1>
          <img
            src={dylAndMagsImg}
            alt="Dylan and Mags"
            className="mx-auto mb-6 w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-full border-4 border-white/20 shadow-lg"
          />
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-4 md:mb-8 leading-relaxed">
            Developer & Problem Solver
          </p>
          
          <p className="text-sm sm:text-lg text-white/90 mb-2 md:mb-1 max-w-2xl mx-auto leading-relaxed">
            I craft digital solutions that blend innovative technology with thoughtful design. 
          </p>

          <p className="text-sm sm:text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm passionate about Artifical Intelligence and the human experience.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 md:mb-12">
            <a
              href="https://github.com/dylGray"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-dark rounded-full p-3 hover:scale-110 transition-transform duration-200 hover:animate-glow"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-gray-255107217/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-dark rounded-full p-3 hover:scale-110 transition-transform duration-200 hover:animate-glow"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:hello@dylan.gray@revenuepathgroup.com"
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
            <span>More About Me</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;