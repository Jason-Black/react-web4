import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../constants';
import logo from '../assets/logo.png';

// Animation variants for the Navbar elements
const logoVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
      duration: 0.8,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
      duration: 0.6,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const mobileNavItemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

function Navbar3() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <motion.div
      className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
          },
        },
      }}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center flex-shrink-0"
            variants={logoVariants}
          >
            <img className='h-10 w-10 mr-2' src={logo} alt='logo' />
            <span className='text-xl tracking-tight'>VirtualR</span>
          </motion.div>

          <motion.ul
            className='hidden lg:flex ml-14 space-x-12'
            variants={navItemVariants}
          >
            {navItems.map((item, index) => (
              <motion.li key={index} variants={navItemVariants}>
                <a href={item.href}>{item.label}</a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <motion.a
              href='#'
              className='py-2 px-3 border rounded-md'
              variants={buttonVariants}
              whileHover="hover"
            >
              Sign In
            </motion.a>
            <motion.a
              href='#'
              className='bg-gradient-to-r from-orange-500 to-teal-400 py-2 px-3 rounded-md'
              variants={buttonVariants}
              whileHover="hover"
            >
              Create an Account
            </motion.a>
          </div>

          <motion.div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </motion.div>
        </div>

        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <motion.ul variants={mobileNavItemVariants}>
                {navItems.map((item, index) => (
                  <motion.li key={index} className='py-4' variants={mobileNavItemVariants}>
                    <a href={item.href}>{item.label}</a>
                  </motion.li>
                ))}
              </motion.ul>
              <div className='flex space-x-6'>
                <motion.a
                  href='#'
                  className='py-2 px-3 border rounded-md'
                  variants={mobileNavItemVariants}
                  whileHover="hover"
                >
                  Sign In
                </motion.a>
                <motion.a
                  href='#'
                  className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-teal-400'
                  variants={mobileNavItemVariants}
                  whileHover="hover"
                >
                  Create an Account
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Navbar3;
