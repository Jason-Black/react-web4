import React from 'react';
import { motion } from 'framer-motion';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

// Advanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the entrance of child elements
      delayChildren: 0.5,
    },
  },
};

const h1Variants = {
  hidden: { opacity: 0, y: -50, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
    },
  },
};

const pVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 120,
      delay: 5.2, // Staggered delay for the button
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
  tap: { scale: 0.95 },
};

// Hero component
const Hero4 = () => {
  return (
    <div>
      <motion.div
        className='flex flex-col items-center mt-6 lg:mt-20'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className='text-4xl sm:text-6xl md:text-7xl text-center tracking-wide'
          variants={h1Variants}
        >
          VirtualR build tools
          <span className='bg-gradient-to-r from-orange-500 to-sky-500 text-transparent bg-clip-text'>
            {" "}for developers
          </span>
        </motion.h1>
        
        <motion.p
          className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'
          variants={pVariants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam totam repellat facilis minus distinctio debitis. At, deleniti nemo, fugit expedita aspernatur quidem qui corrupti, amet minima quod possimus eius?
        </motion.p>
        
        <motion.div className='flex justify-center my-10'>
          <motion.a
            href='#'
            className='bg-gradient-to-r from-orange-500 to-sky-500 py-3 px-4 mx-3 rounded-md'
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Start for Free
          </motion.a>
        </motion.div>
      
      </motion.div>
      
      <div className='flex mt-10 justify-center'>
        <video autoPlay loop playsInline muted className='rounded-lg w-1/2 border border-orange-700 shadow-teal-400 mx-2 my-4'>
          <source src={video1} type="video/mp4" />
          {/* Fallback text is usually placed inside the <video> tag, not <source> */}
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop playsInline muted className='rounded-lg w-1/2 border border-orange-700 shadow-teal-400 mx-2 my-4'>
          <source src={video2} type="video/mp4" />
          {/* Fallback text is usually placed inside the <video> tag, not <source> */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero4;
