import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import closeUpImage from '../assets/mtn7-Recovered-close.png';
import farAwayImage from '../assets/mtn7-Recovered2.png';

export default function SecondaryHero() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on a mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile devices
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Motion values for mouse x and y positions (only for non-mobile devices)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // These values are only calculated if `isMobile` is false
  const closeUpX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const farAwayX = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

  // Conditionally enable mouse movement listeners only for non-mobile devices
  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile, mouseX, mouseY]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Close-Up Mountain Scene */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ y: '60%', opacity: 0 }}  // Start lower for close-up effect
        whileInView={{ y: '0%', opacity: 1 }}  // Animate into position
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}  // Slight delay for layering effect
        viewport={{ once: true, amount: 0.1 }}  // Trigger when 10% is in view
        style={{
          zIndex: 2,
          x: isMobile ? 0 : closeUpX,  // Disable parallax effect on mobile
          scale: 1.05,
        }}
      >
        <img
          src={closeUpImage}
          alt="Close-Up Mountain Scene"
          className="w-full h-full object-cover"
        />
      </motion.div> 
      
      {/* Far Away Mountain Scene */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ y: '80%', opacity: 0 }}  // Start below the screen
        whileInView={{ y: '0%', opacity: 1 }}  // Animate into position
        transition={{ duration: 1.0, ease: 'easeOut', delay: 0.5 }}  // Smooth easing
        viewport={{ once: true, amount: 0.1 }}  // Trigger when 10% is in view
        style={{
          zIndex: 1,
          x: isMobile ? 0 : farAwayX,  // Disable parallax effect on mobile
          scale: 1.08,
        }}
      >
        <img
          src={farAwayImage}
          alt="Far Away Mountain Scene"
          className="w-full h-full object-cover"
        />
      </motion.div>

     

      {/* 3D Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: '50%' }}  // Start below the screen
        whileInView={{ opacity: 1, y: '0%' }}  // Animate up with fade-in
        transition={{
          duration: 0.7, ease: 'easeOut', delay: 0.5,
          staggerChildren: 0.2  // Stagger the children for smoother text reveal
        }}
        viewport={{ once: true, amount: 0.1 }}  // Trigger when 10% is in view
        style={{
          rotateX: isMobile ? 0 : rotateX,  // Disable 3D rotation effect on mobile
          rotateY: isMobile ? 0 : rotateY,  // Disable 3D rotation effect on mobile
          zIndex: 3,
        }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center"
          style={{
            textShadow:
              '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)',
          }}
        >
          Discover the Mountains
        </motion.h2>
      </motion.div>
    </div>
  );
}
