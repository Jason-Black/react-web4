import React from 'react';
import { motion } from 'framer-motion';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

// Animation variants for the h1 with a cool reveal effect
const h1Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reveal each letter one by one
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
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
      ease: 'easeOut',
      delay: 0.5,
    },
  },
};

const phraseVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 1.5, // Delay before this part starts
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
const Hero6 = () => {
  const title = "Websites Designed to Grow";

  return (
    <div>
      <div className='flex flex-col items-center mt-6 '>
        {/* First h1 with letter-by-letter animation */}
        <motion.h1
          className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center tracking-tight flex overflow-hidden'
          variants={h1Variants}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
      
        {/* Second h1 with a delay and the gradient applied to the entire phrase */}
        <motion.h1
          className='text-4xl sm:text-6xl md:text-7xl text-center tracking-wide flex overflow-hidden'
          variants={phraseVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className='text-transparent bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text'
          >
            you Vision.
          </motion.span>
        </motion.h1>
        
    {/* Paragraph Section */}
<motion.p
  className='mt-10 sm:text-lg text-md text-center text-neutral-100 max-w-4xl drop-shadow-lg shadow-white'
  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
  variants={pVariants}
  initial="hidden"
  animate="visible"
>
At Positron Sun, web design is just the start. Specializing in digital strategy, we offer expert services in web design, marketing, video production, and AI consulting—elevating your entire digital presence.</motion.p>

        
        {/* Button Section */}
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
            First Contact
          </motion.a>
        </motion.div>
      </div>

      {/* Video Section */}
      <div className='flex mt-10 justify-center'>
        <video autoPlay loop playsInline muted className='video-element rounded-lg w-1/2 border border-orange-700 shadow-teal-400 mx-2 my-4'>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop playsInline muted className='video-element rounded-lg w-1/2 border border-orange-700 shadow-teal-400 mx-2 my-4'>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero6;
