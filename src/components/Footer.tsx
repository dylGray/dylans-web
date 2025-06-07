import { useEffect } from 'react';
import { Github, Linkedin, Mail, Heart, Smartphone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const overlay = document.getElementById('background-overlay');
      if (overlay) {
        const scrollY = window.scrollY;
        // Max opacity at 500px scroll
        const opacity = Math.min(scrollY / 500, 1) * 0.7;
        overlay.style.opacity = opacity.toString();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="background-darken" className="mt-24"></div>
      <div id="background-overlay"></div>
      <footer id="contact" className="w-full bottom-0 left-0 z-50 bg-transparent">
        <div className="mx-auto">
          <div className="glass-dark rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-md md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                I'm always interested in new opportunities and collaborations.{' '}
                Whether you have a project in mind or just want to chat about
                technology, feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
              <a
                href="mailto:dylan.gray@revenuepathgroup.com"
                className="glass-dark rounded-full px-6 py-3 text-white hover:scale-105 transition-all duration-200 hover:animate-glow inline-flex items-center space-x-3"
              >
                <Mail className="w-5 h-5" />
                <span>dylan.gray@revenuepathgroup.com</span>
              </a>

              <a
                href="tel:123-456-7890"
                className="glass-dark rounded-full px-6 py-3 text-white hover:scale-105 transition-all duration-200 hover:animate-glow inline-flex items-center space-x-3"
              >
                <Smartphone className="w-5 h-5" />
                <span>317-500-0233</span>
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
    </>
  );
};

export default Footer;
