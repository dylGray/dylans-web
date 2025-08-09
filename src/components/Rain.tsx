import React, { useMemo, useState, useEffect } from 'react';

interface RainDropProps {
  numberOfDrops?: number;
}

// declares a functional component that must match the properties of RainDropProps
const RainDrops: React.FC<RainDropProps> = ({ numberOfDrops }) => {
  const [dropCount, setDropCount] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDropCount(4);
      } else {
        setDropCount(8);
      }
    };
    handleResize(); // set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // DEBUGGING
  useEffect(() => {
    console.log(`[RainDrops] Rendering with dropCount: ${numberOfDrops ?? dropCount}`);
  }, [numberOfDrops, dropCount]);

  const rain = useMemo(() => {
    const newRain = [];
    for (let i = 0; i < (numberOfDrops ?? dropCount); i++) {
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
  }, [numberOfDrops, dropCount]);

  return (
    <div className='rain-drops'>
      {rain}
    </div>
  );
};

export default RainDrops;