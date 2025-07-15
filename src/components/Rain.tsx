import React, { useMemo } from 'react';

interface RainDropProps {
  numberOfDrops?: number;
}

// declares a functional component that must match the properties of RainDropProps
const RainDrops: React.FC<RainDropProps> = ({ numberOfDrops = 15 }) => {
  const rain = useMemo(() => {
    const newRain = [];

    for (let i = 0; i < numberOfDrops; i++) {
      const left = Math.random() * 100;       
      const duration = Math.random() * 0.5 + 0.5; 
      const delay = Math.random() * 5;          
      const height = Math.random() * 30 + 20; 

      newRain.push(
        <div 
          key={i}
          className='shape'
          style={{
            left: `${left}vw`,
            height: `${height}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
        }}
      />
    );
  }
  return newRain;
}, [numberOfDrops]);

  return (
    <div className='rain-drops'>
      {rain}
    </div>
  )
}

export default RainDrops;