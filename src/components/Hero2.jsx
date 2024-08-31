import React from 'react'
import { motion } from 'framer-motion';




// Define animation variants outside the Hero component
const h1Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const pVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 1,
    },
  },
};

// Hero component
const Hero2 = () => {
  return (
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
      
      <div className='flex justify-center my-10'>
        <motion.a
          href='#'
          className='hover:cursor-wait transform transition-transform focus:ring-2 focus:ring-red-500 duration-300 bg-gradient-to-r from-orange-500 to-sky-500 active:from-teal-500 active:to-blue-500 py-3 px-4 mx-3 rounded-md'
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          Start for Free
        </motion.a>
      </div>
    </div>
  );
};

export default Hero2;
