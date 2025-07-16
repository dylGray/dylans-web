import React, { useState } from 'react';
import { Menu, X, CloudRain } from 'lucide-react';

// The RainToggleButton component remains unchanged.
interface RainToggleProps {
  isRainOn: boolean;
  onToggle: () => void;
  className?: string;
}

const RainToggleButton: React.FC<RainToggleProps> = ({ isRainOn, onToggle, className = '' }) => (
  <button
    onClick={onToggle}
    className={`flex space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
      isRainOn 
        ? 'bg-blue-500/80 text-white hover:bg-blue-400/80' 
        : 'bg-white/10 text-white hover:bg-white/20'
    } backdrop-blur-sm border border-white/20 hover:border-white/40 ${className}`}
    title={isRainOn ? 'Stop Rain' : 'Start Rain'}
  >
    <CloudRain size={18} className={isRainOn ? 'animate-bounce' : ''} />
    <span className="font-medium text-sm">{isRainOn ? 'Stop Rain' : 'Start Rain'}</span>
  </button>
);

interface HeaderProps {
  showRain: boolean;
  setShowRain: () => void;
}

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
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
      <nav className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo or Left-side Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:underline transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center">
            {/* Desktop Rain Toggle: Visible on medium screens and up */}
            <div className="hidden md:block">
              <RainToggleButton isRainOn={showRain} onToggle={setShowRain} />
            </div>

            {/* Mobile Controls: Visible on screens smaller than medium */}
            <div className="flex items-center space-x-3 md:hidden">
              {/* Mobile Menu Button */}
              <button
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Mobile Rain Toggle */}
              <RainToggleButton isRainOn={showRain} onToggle={setShowRain} />
            </div>
          </div>
        </div>

        {/* Collapsible Mobile Menu (Links Only) */}
        {isMenuOpen && (
          <div className="md:hidden glass rounded-lg p-4 border border-white/10 mb-4">
            <div className="flex flex-col space-y-4">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-left py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;