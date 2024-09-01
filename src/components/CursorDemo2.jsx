import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cursorStyles = [
  { name: 'Default', class: 'cursor-default' },
  { name: 'Pointer', class: 'cursor-pointer' },
  { name: 'Wait', class: 'cursor-wait' },
  { name: 'Text', class: 'cursor-text' },
  { name: 'Move', class: 'cursor-move' },
  { name: 'Help', class: 'cursor-help' },
  { name: 'Not Allowed', class: 'cursor-not-allowed' },
  { name: 'Crosshair', class: 'cursor-crosshair' },
  { name: 'Zoom In', class: 'cursor-zoom-in' },
  { name: 'Zoom Out', class: 'cursor-zoom-out' },
  { name: 'Grab', class: 'cursor-grab' },
  { name: 'Grabbing', class: 'cursor-grabbing' },
];

const CursorDemo2 = () => {
  const [colors, setColors] = useState(() => {
    return cursorStyles.map(() => `hsl(${Math.random() * 360}, 70%, 50%)`);
  });
  const [shouldBounce, setShouldBounce] = useState(Array(cursorStyles.length).fill(false));

  useEffect(() => {
    const intervals = cursorStyles.map((_, index) => {
      const randomInterval = Math.floor(Math.random() * 5000) + 2000; // Random interval between 2s and 7s

      return setInterval(() => {
        setColors(colors =>
          colors.map((color, i) =>
            i === index ? `hsl(${Math.random() * 360}, 70%, 50%)` : color
          )
        );

        setShouldBounce(bounce => bounce.map((val, i) => (i === index ? true : val)));
      }, randomInterval);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  useEffect(() => {
    const bounceTimeouts = shouldBounce.map((bounce, index) =>
      bounce ? setTimeout(() => setShouldBounce(prev => prev.map((val, i) => (i === index ? false : val))), 500) : null
    );

    return () => {
      bounceTimeouts.forEach(timeout => timeout && clearTimeout(timeout));
    };
  }, [shouldBounce]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cursorStyles.map((style, index) => (
        <motion.div
          key={index}
          className={`flex items-center justify-center h-32 rounded-lg shadow-lg text-white text-lg font-semibold ${style.class}`}
          style={{ backgroundColor: colors[index] }}
          animate={shouldBounce[index] ? { scale: [1, 1.1, 1] } : {}}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {style.name}
        </motion.div>
      ))}
    </div>
  );
};

export default CursorDemo2;
