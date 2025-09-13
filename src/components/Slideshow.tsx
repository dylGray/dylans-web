import React, { useState, useEffect } from 'react';
import typescriptIcon from '../assets/images/typescript-icon.png';
import reactIcon from '../assets/images/react-icon.png';
import tailwindIcon from '../assets/images/tailwind-icon.png';
import gitIcon from '../assets/images/git-icon.png';
import githubIcon from '../assets/images/github-icon.png';
import chatgptIcon from '../assets/images/chatgpt-icon.png';
import claudeIcon from '../assets/images/claude-icon.png';
import geminiIcon from '../assets/images/gemini-icon.png';
import graphApiIcon from '../assets/images/graphapi-icon.png';
import googleApiIcon from '../assets/images/googleapi-icon.png';
import twilioApiIcon from '../assets/images/twilio-logo.png';

interface TechTool {
  id: number;
  name: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const techTools: TechTool[] = [
  {
    id: 1,
    name: 'Programming Languages',
    category: 'UI/UX Development',
    icon: (
      <div className="flex items-center justify-center gap-2">
        <img src={typescriptIcon} alt="TypeScript" className="w-12 h-12 object-contain" />
        <img src={reactIcon} alt="React" className="w-12 h-12 object-contain" />
        <img src={tailwindIcon} alt="Tailwind CSS" className="w-12 h-12 object-contain" />
      </div>
    ),
    description: "TypeScript, React, and Tailwind CSS are my go-to tools for building modern, scalable web applications.",
    color: 'text-blue-600'
  },
  {
    id: 2,
    name: 'Version Control',
    category: 'Collaboration',
    icon: (
      <div className="flex items-center justify-center gap-2">
        <img src={gitIcon} alt="Git" className="w-12 h-12 object-contain" />
        <img src={githubIcon} alt="GitHub" className="w-12 h-12 object-contain" />
      </div>
    ),
    description: "Heavily rely on Git and GitHub for version control and collaboration on projects.",
    color: 'text-orange-600'
  },
  {
    id: 3,
    name: 'Generative AI',
    category: 'Productivity & Innovation',
    icon: (
      <div className="flex items-center justify-center gap-2">
        <img src={chatgptIcon} alt="ChatGPT" className="w-12 h-12 object-contain" />
        <img src={geminiIcon} alt="Gemini" className="w-12 h-12 object-contain" />
        <img src={claudeIcon} alt="Claude" className="w-12 h-12 object-contain" />
      </div>
    ),
    description: "I leverage LLM's like ChatGPT, Gemini, and Claude to boost productivity and build innovative solutions.",
    color: 'text-purple-600'
  },
{
    id: 4,
    name: 'API Integration',
    category: 'Enterprise Solutions',
    icon: (
      <div className="flex items-center justify-center gap-2">
        <img src={graphApiIcon} alt="GraphAPI" className="w-12 h-12 object-contain" />
        <img src={googleApiIcon} alt="GoogleAPI" className="w-12 h-12 object-contain" />
        <img src={twilioApiIcon} alt="TwilioAPI" className="w-12 h-12 object-contain" />
      </div>
    ),
    description: "Integrate and work with various APIs to enhance functionality and streamline workflows.",
    color: 'text-purple-600'
  },
];

export const TechSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % techTools.length);
        setIsAnimating(false);
      }, 350);  // animation duration
    }, 3750);   // slide duration

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 400); 
  };

  const currentTool = techTools[currentSlide];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-80 flex items-center justify-center">
        <div className="text-center px-8">
          <div 
            className={`inline-flex items-center justify-center mb-8 transition-all duration-500 transform ${
              isAnimating 
                ? 'opacity-0 scale-75 rotate-12' 
                : 'opacity-100 scale-100 rotate-0'
            }`}
          >
            <div className={`${currentTool.color} transition-colors duration-300`}>
              {currentTool.icon}
            </div>
          </div>
          
          <div 
            className={`transition-all duration-500 transform ${
              isAnimating 
                ? 'opacity-0 translate-y-4' 
                : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: isAnimating ? '0ms' : '100ms' }}
          >
            <h2 className="text-xl font-bold mb-1 text-white">
              {currentTool.name}
            </h2>
          </div>
          
          <div 
            className={`transition-all duration-500 transform ${
              isAnimating 
                ? 'opacity-0 translate-y-4' 
                : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: isAnimating ? '0ms' : '200ms' }}
          >
            <p className="text-md md:text-lg font-medium mb-4 text-white/90">
              {currentTool.category}
            </p>
          </div>
          
          <div 
            className={`transition-all duration-500 transform ${
              isAnimating 
                ? 'opacity-0 translate-y-4' 
                : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: isAnimating ? '0ms' : '300ms' }}
          >
            <p className="text-xs md:text-base max-w-md mx-auto leading-relaxed text-white/80">
              {currentTool.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-8">    
        <div className="flex space-x-2">
          {techTools.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gray-800 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSlideshow;