import React, { useState } from 'react';
import { Menu, X, } from 'lucide-react';
import navIcon from '../assets/images/nav-icon.jpg';
import { Link } from 'react-router-dom';

interface AnimatedCloudProps {
  showRain: boolean;
  className?: string;
}

interface RainToggleProps {
  isRainOn: boolean;
  onToggle: () => void;
  className?: string;
}

interface HeaderProps {
  showRain: boolean;
  setShowRain: () => void;
}

const AnimatedCloud: React.FC<AnimatedCloudProps> = ({ showRain, className = '' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="relative animate-float">
        <div className="w-8 h-4 bg-white/90 rounded-full relative shadow-lg">
          <div className="absolute -top-1 left-1 w-5 h-5 bg-white/90 rounded-full"></div>
          <div className="absolute -top-0.5 right-2 w-4 h-4 bg-white/90 rounded-full"></div>
          <div className="absolute -top-0.5 left-3 w-3 h-3 bg-white/90 rounded-full"></div>
          <div className="absolute -top-0.5 left-3 w-3 h-3 bg-white/90 rounded-full"></div>
        </div>
      </div>
      
      {showRain && (
        <div className="absolute top-full left-0 w-full h-12 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-3 bg-blue-300/70 rounded-full animate-rain-drop"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

const RainToggleButton: React.FC<RainToggleProps> = ({ isRainOn, onToggle, className = '' }) => (
  <button
    onClick={onToggle}
    className={`flex items-center space-x-2 px-2 py-2.5 rounded-lg transition-all duration-200 relative overflow-hidden glass text-white hover:glass-dark backdrop-blur-sm border border-white/20 hover:border-white/40 ${className}`}
    title={isRainOn ? 'Stop Rain' : 'Start Rain'}
  >
    <AnimatedCloud showRain={isRainOn} />
    <span className="font-medium text-xs">{isRainOn ? 'Stop Rain' : 'Start Rain'}</span>
  </button>
);

const Header: React.FC<HeaderProps> = ({ showRain, setShowRain }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <style>
        {`
        @keyframes rainDrop {
          0% {
            transform: translateY(-5px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(45px);
            opacity: 0;
          }
        }
        
        .animate-rain-drop {
          animation: rainDrop 1.2s linear infinite;
        }
        
        .animate-float {
          animation: cloudFloat 3s ease-in-out infinite;
        }
        
        @media (max-width: 768px) {
          button[title*="Rain"] {
          display: none !important;
          }
        }
      `}
      </style>

      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
        <nav className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div id="home-image" className="hidden md:flex items-center space-x-8">
              <Link  to="/" className="flex items-center group mr-2" aria-label="Home">
              <img src={navIcon} alt="Home" className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover flex-shrink-0" />
              </Link>
              {['About', 'Projects', 'Contact'].map((item) => (
                  <button
                    id="nav-links"
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white hover:underline transition-colors duration-200 font-medium"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="hidden md:block">
              <RainToggleButton isRainOn={showRain} onToggle={setShowRain} />
            </div>

            <div className="flex items-center justify-between w-full md:hidden">
              <button
                id="menu-button"
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <RainToggleButton isRainOn={showRain} onToggle={setShowRain} />
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden glass rounded-lg p-4 border border-white/10 mb-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="flex items-center group mr-2" aria-label="Home"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img src={navIcon} alt="Home" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                </Link>
                {['About', 'Projects', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(item.toLowerCase());
                        setIsMenuOpen(false);
                      }}
                      className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-left"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;