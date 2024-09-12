import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import closeUpImage from '../assets/mtn7-Recovered-close.png';
import farAwayImage from '../assets/mtn7-Recovered-far.png';

export default function ParallaxSection() {
  // Motion values for mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const controls = useAnimation();

  // Create 3D rotation effect for text based on mouse movement
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

  // Update mouse position for 3D text effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Control the section to go full screen when in view
  const handleInView = (inView) => {
    if (inView) {
      controls.start({
        height: "100vh", // Fullscreen height when in view
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        height: "100vh", // Normal height
      });
    }
  };

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden"
      animate={controls}  // Control whether it takes over the height based on scroll
      initial={{ height: "100vh" }}  // Start as a normal section
      onViewportEnter={() => handleInView(true)}  // Fullscreen takeover on enter
      onViewportLeave={() => handleInView(false)}  // Revert when out of view
    >
      {/* Background Wrapper for the Parallax Effect */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Layer (Far Away Image) */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ y: "-100%", opacity: 0 }}  // Start from below the screen
          animate={{ y: "0%", opacity: 1 }}  // Animate up to its position
          transition={{ duration: 1.5, ease: "easeOut" }}  // Smooth transition for background
          style={{ zIndex: 1 }}
        >
          <img
            src={farAwayImage}
            alt="Far Away Mountain Scene"
            className="w-full h-full object-cover"  // Ensure the image covers the container
          />
        </motion.div>

        {/* Foreground Layer (Close-Up Image) */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ y: "120%", opacity: 0 }}  // Start lower than background to create parallax effect
          animate={{ y: "0%", opacity: 1 }}  // Animate up to its position
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}  // Foreground moves faster than background
          style={{ zIndex: 2 }}
        >
          <img
            src={closeUpImage}
            alt="Close-Up Mountain Scene"
            className="w-full h-full object-cover"  // Ensure the image covers the container
          />
        </motion.div>
      </div>

      {/* 3D Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: "50%" }}  // Start below with zero opacity
        animate={{ opacity: 1, y: "0%" }}  // Fade in and move up
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}  // Smooth text entry after images
        style={{
          rotateX: rotateX,  // Apply 3D effect based on mouse position
          rotateY: rotateY,
          zIndex: 3,  // Keep text in front of everything
        }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center"
            style={{
              textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
            }}
        >
          Discover the Mountains
        </h2>
      </motion.div>
    </motion.div>
  );
}
