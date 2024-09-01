import React from 'react';
import { motion } from 'framer-motion';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

// Define animation variants outside the Hero component
const h1Variants = {
  hidden: { opacity: 0, y: -100, rotate: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: 'easeOut', // Standard easing function
    },
  },
};

const pVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut', // Standard easing function
      delay: 0.5,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 1,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: { scale: 0.95 },
};

// Hero component
const Hero5 = () => {
  return (
    <div>
      <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <motion.h1
          className='text-4xl sm:text-6xl md:text-7xl text-center tracking-wide'
          variants={h1Variants}
          initial="hidden"
          animate="visible"
        >
          VirtualR build tools
          <span className='bg-gradient-to-r from-orange-500 to-sky-500 text-transparent bg-clip-text'>{" "}for developers </span>
        </motion.h1>
        
        <motion.p
          className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'
          variants={pVariants}
          initial="hidden"
          animate="visible"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam totam repellat facilis minus distinctio debitis. At, deleniti nemo, fugit expedita aspernatur quidem qui corrupti, amet minima quod possimus eius?
        </motion.p>
        
        <motion.div className='flex justify-center my-10'>
          <motion.a
            href='#'
            className='bg-gradient-to-r from-orange-500 to-sky-500 py-3 px-4 mx-3 rounded-md'
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            Start for Free
          </motion.a>
        </motion.div>
      </div>

      {/* Video Section */}
      <div className='flex mt-10 justify-center'>
        <video autoPlay loop playsInline muted className='rounded-lg w-1/2 border border-orange-700 shadow-teal-400 mx-2 my-4'>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop playsInline muted className='rounded-lg w-1/2 border border-orange-700 shadow-teal-400 mx-2 my-4'>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero5;
