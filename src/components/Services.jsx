import React, { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Computer, Lightbulb, Cog, ChevronDown, X } from 'lucide-react'

const icons = {
  computer: Computer,
  lightbulb: Lightbulb,
  cog: Cog,
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const services = [
    {
      title: 'Web Design & Animation',
      icon: 'computer',
      description: 'We create stunning, responsive websites with cutting-edge animation and visual storytelling to make your brand stand out.',
      details: 'Our web design and animation services combine creativity with technology to deliver immersive digital experiences. We focus on creating visually stunning websites that not only look great but also engage users with seamless animations and intuitive interfaces. Let your brand\'s story come to life through our cutting-edge design and technology.',
    },
    {
      title: 'Digital Consultation',
      icon: 'lightbulb',
      description: 'From video production and editing to software solutions, we work with you to find the right technology and creative strategies to grow your business.',
      details: 'Positron Sun\'s digital consultation service helps you navigate the complexities of technology, video production, web design, and automation. We collaborate with business owners to implement creative, efficient, and effective digital solutions to grow your business. Our expertise spans across various digital domains, ensuring a holistic approach to your digital presence.',
    },
    {
      title: 'Automation & API Integration',
      icon: 'cog',
      description: 'Streamline your business operations through smart automation, API integrations, and workflows.',
      details: 'We streamline your business operations with smart automations and API integrations, connecting your tools and platforms to work together seamlessly. This saves you time and allows you to focus on what matters most. Our automation solutions are tailored to your specific needs, optimizing your workflows and increasing overall efficiency.',
    },
  ]

  return (
    <section className="py-20 overflow-hidden bg-gray-900 text-white" ref={containerRef}>
      <div className="relative z-10 max-w-7xl mx-auto pt-20 px-6">
        <AnimatedTitle scrollYProgress={scrollYProgress} />
        <AnimatedDescription scrollYProgress={scrollYProgress} />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-12"
        >
          {services.map((service, index) => (
            <ServiceBlock
              key={index}
              service={service}
              index={index}
              onClick={() => setSelectedService(service)}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
        <AnimatedCTA scrollYProgress={scrollYProgress} />
      </div>
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function AnimatedTitle({ scrollYProgress }) {
  // Adjust these values to change when the animation starts and ends
  const animationStart = 0.1 // Animation starts when 10% of the section is in view
  const animationEnd = 0.3   // Animation ends when 30% of the section is in view
  const animationOutStart = 0.7 // Animation out starts when 70% of the section has been scrolled past
  const animationOutEnd = 0.9   // Animation out ends when 90% of the section has been scrolled past

  const y = useTransform(
    scrollYProgress,
    [animationStart, animationEnd, animationOutStart, animationOutEnd],
    [-50, 0, 0, 50]
  )
  const opacity = useTransform(
    scrollYProgress,
    [animationStart, animationEnd, animationOutStart, animationOutEnd],
    [0, 1, 1, 0]
  )

  return (
    <motion.h2
      style={{ y, opacity }}
      className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500"
    >
      Our Services
    </motion.h2>
  )
}

function AnimatedDescription({ scrollYProgress }) {
  // Adjust these values to change when the animation starts and ends
  const animationStart = 0.15 // Animation starts when 15% of the section is in view
  const animationEnd = 0.35   // Animation ends when 35% of the section is in view
  const animationOutStart = 0.65 // Animation out starts when 65% of the section has been scrolled past
  const animationOutEnd = 0.85   // Animation out ends when 85% of the section has been scrolled past

  const y = useTransform(
    scrollYProgress,
    [animationStart, animationEnd, animationOutStart, animationOutEnd],
    [20, 0, 0, -20]
  )
  const opacity = useTransform(
    scrollYProgress,
    [animationStart, animationEnd, animationOutStart, animationOutEnd],
    [0, 1, 1, 0]
  )

  return (
    <motion.p
      style={{ y, opacity }}
      className="text-xl text-center text-gray-300 mb-12"
    >
      Discover how Positron Sun can elevate your business
    </motion.p>
  )
}

function ServiceBlock({ service, index, onClick, scrollYProgress }) {
  const Icon = icons[service.icon]
  
  // Adjust these values to change when the animation starts and ends
  const animationStart = 0.2 + index * 0.05 // Stagger the start of each block's animation
  const animationEnd = 0.4 + index * 0.05   // Stagger the end of each block's animation
  const animationOutStart = 0.6 - index * 0.05 // Stagger the start of each block's out animation
  const animationOutEnd = 0.8 - index * 0.05   // Stagger the end of each block's out animation

  const y = useTransform(
    scrollYProgress,
    [animationStart, animationEnd, animationOutStart, animationOutEnd],
    [50, 0, 0, -50]
  )
  const opacity = useTransform(
    scrollYProgress,
    [animationStart, animationEnd, animationOutStart, animationOutEnd],
    [0, 1, 1, 0]
  )

  return (
    <motion.div
      style={{ y, opacity }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl border border-gray-700"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 from-10% to-sky-500 to-60% rounded-full mb-4 mx-auto">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-white">{service.title}</h3>
      <p className="text-gray-300 mb-4 text-center">{service.description}</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-blue-400 font-semibold flex items-center justify-center w-full"
      >
        Learn More
        <ChevronDown className="ml-1 w-4 h-4" />
      </motion.button>
    </motion.div>
  )
}

function AnimatedCTA({ scrollYProgress }) {
  // Adjust these values to change when the animation starts and ends
  const animationStart = 0.25 // Animation starts when 25% of the section is in view
  const animationEnd = 0.45   // Animation ends when 45% of the section is in view
  const animationOutStart = 0.55 // Animation out starts when 55% of the section has been scrolled past
  const animationOutEnd = 0.75   // Animation out ends when 75% of the section has been scrolled past

  const y = useTransform(
    scrollYProgress,
    [animationStart, animationEnd, animationOutStart, animationOutEnd],
    [20, 0, 0, -20]
  )
  const opacity = useTransform(
    scrollYProgress,
    [animationStart, animationEnd, animationOutStart, animationOutEnd],
    [0, 1, 1, 0]
  )

  return (
    <motion.div
      style={{ y, opacity }}
      className="text-center mt-16"
    >
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition duration-300 shadow-lg"
      >
        Get Started
      </motion.a>
    </motion.div>
  )
}

function ServiceModal({ service, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 15 }}
        className="bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <motion.h3
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              >
                {service.title}
              </motion.h3>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-gray-400 hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 mb-6"
            >
              {service.details}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition duration-300 shadow-lg inline-block"
                onClick={onClose}
              >
                Get Started
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}