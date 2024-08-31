import React from 'react';
import { motion } from 'framer-motion';


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

// Hero component
const Hero3 = () => {
  return (
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
      
      <div className='flex justify-center my-10'>
        <a
          href='#'
          className='hover:cursor-wait transform transition-transform focus:ring-2 focus:ring-red-500 duration-300 bg-gradient-to-r from-orange-500 to-sky-500 py-3 px-4 mx-3 rounded-md'
        >
          Start for Free
        </a>
      </div>
    </motion.div>
  );
};

export default Hero3;
