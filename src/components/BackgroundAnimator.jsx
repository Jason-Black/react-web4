import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundAnimator() {
  const { scrollYProgress } = useScroll();

  // Create color transformations based on scroll progress
  const color1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.7, 0.9, 1],
    ['#000000', '#020024', '#ff6a95', '#ffaf7b', '#ff6a95', '#020024']
  );

  const color2 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 0.9, 1],
    ['#000033', '#090979', '#d76d77', '#ffaf7b', '#d76d77', '#090979']
  );

  const color3 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.7, 0.9, 1],
    ['#000033', '#3a1c71', '#ffaf7b', '#ff6a95', '#ffaf7b', '#3a1c71']
  );

  const [background, setBackground] = useState('linear-gradient(to right, #000000, #000033, #000033)');

  // Update the background gradient dynamically based on the scroll progress
  useEffect(() => {
    const unsubscribe1 = color1.onChange((value1) => {
      const unsubscribe2 = color2.onChange((value2) => {
        const unsubscribe3 = color3.onChange((value3) => {
          setBackground(`linear-gradient(to right, ${value1}, ${value2}, ${value3})`);
        });
        return () => unsubscribe3();
      });
      return () => unsubscribe2();
    });
    return () => unsubscribe1();
  }, [color1, color2, color3]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: background, // Set the dynamic background gradient
        transition: 'background 0.2s ease', // Smooth transition between color changes
      }}
    />
  );
}
