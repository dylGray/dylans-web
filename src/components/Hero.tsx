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
    <section id="home" className="min-h-screen flex items-center justify-center px-2 pt-14 sm:pt-20 mb-4">
      <div className="text-center max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 lg:p-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm Dylan
          </h1>
          <img
            src={dylAndMagsImg}
            alt="Dylan and Mags"
            className="mx-auto mb-6 w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-full border-4 border-white/20 shadow-lg"
          />
          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-4 leading-relaxed">
            Developer & Problem Solver
          </p>
          <p className="text-xs sm:text-lg text-white/90 mb-3 md:mb-6 max-w-2xl mx-auto leading-relaxed">
            I craft digital solutions that blend innovative technology with thoughtful design. 
            I'm passionate about Artifical Intelligence and the human experience.
          </p>
          <span className="inline-block mb-3 md:mb-6 w-16 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 rounded-full" />
          <div className="flex justify-center space-x-6 mb-8 md:mb-12">
            <a
              href="https://github.com/dylGray"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-dark rounded-full p-3 group"
            >
              <Github className="w-6 h-6 text-white transition-transform duration-200 group-hover:-rotate-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-gray-255107217/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-dark rounded-full p-3 group"
            >
              <Linkedin className="w-6 h-6 text-white transition-transform duration-200 group-hover:rotate-12" />
            </a>
            <button
              type="button"
              className="glass-dark rounded-full p-3 group"
              onClick={() => {
                const footer = document.getElementById('contact');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Scroll to contact/footer"
            >
              <Mail className="w-6 h-6 text-white transition-transform duration-200 group-hover:-rotate-12" />
            </button>
          </div>
          
          <div className="-mt-2">
            <button
              onClick={scrollToAbout}
              className="text-white font-medium inline-flex items-center space-x-2"
            >
              <span className="text-xs md:text-base">More About Me</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;