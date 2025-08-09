import React, { useState, useEffect } from 'react';
import typescriptIcon from '../assets/images/typescript-icon.png';
import reactIcon from '../assets/images/react-icon.png';
import tailwindIcon from '../assets/images/tailwind-icon.png';
import nextjsIcon from '../assets/images/nextjs-icon.webp';
import gitIcon from '../assets/images/git-icon.png';
import aiIcon from '../assets/images/ai-icon.png';

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
    name: 'TypeScript',
    category: 'Programming Language',
    icon: <img src={typescriptIcon} alt="TypeScript" className="w-16 h-16 object-contain" />,
    description: "This app is built with TypeScript, and it's a great mix for frontend and backend development.",
    color: 'text-blue-600'
  },
  {
    id: 2,
    name: 'React',
    category: 'Frontend Framework',
    icon: <img src={reactIcon} alt="React" className="w-16 h-16 object-contain" />,
    description: 'JavaScript library for building user interfaces in a component-based architecture.',
    color: 'text-cyan-600'
  },
 {
    id: 3,
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    icon: <img src={tailwindIcon} alt="Tailwind CSS" className="w-16 h-16 object-contain" />,
    description: 'Utility-first CSS framework for rapidly building custom designs without leaving your HTML.',
    color: 'text-teal-600'
  },
  {
    id: 4,
    name: 'Next.js',
    category: 'Full-Stack Framework',
    icon: <img src={nextjsIcon} alt="Next.js" className="w-16 h-16 object-contain" />,
    description: 'React framework for building fast, server-rendered applications with static site generation and API routes.',
    color: 'text-gray-800'
  },
  {
    id: 5,
    name: 'Git',
    category: 'Version Control',
    icon: <img src={gitIcon} alt="Git" className="w-16 h-16 object-contain" />,
    description: 'Distributed version control system for tracking changes and collaborating on code.',
    color: 'text-orange-600'
  },
{
    id: 6,
    name: 'Generative AI',
    category: 'Productivity & Innovation',
    icon: <img src={aiIcon} alt="Generative AI" style={{ width: '135px', height: '135px', marginBottom: '-30px' }} className="object-contain" />,
    description: 'Building and leveraging AI models for various usecases and applications.',
    color: 'text-orange-600'
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
      }, 100);  // animation duration
    }, 4000);   // change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 100);
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
            <h2 className="text-2xl font-bold mb-2 text-white">
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
            <p className="text-lg font-medium mb-4 text-white/90">
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
            <p className="text-sm max-w-md mx-auto leading-relaxed text-white/80">
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