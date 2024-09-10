import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Computer, Lightbulb, Cog, ChevronDown } from 'lucide-react';
import ResponsiveModal from './ResponsiveModal';

const icons = {
  computer: Computer,
  lightbulb: Lightbulb,
  cog: Cog,
};

export default function Services2() {
  const [selectedService, setSelectedService] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const services = [
    {
      title: 'Web Design & Animation',
      icon: 'computer',
      description: 'We create stunning, responsive websites with cutting-edge animation and visual storytelling to make your brand stand out.',
    },
    {
      title: 'Digital Consultation',
      icon: 'lightbulb',
      description: 'From video production and editing to software solutions, we work with you to find the right technology...',
    },
    {
      title: 'Automation & API Integration',
      icon: 'cog',
      description: 'Streamline your business operations through smart automation, API integrations, and workflows.',
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden"
      ref={containerRef}
      style={{
        background: 'linear-gradient(to right, aa, yellow)', // Pink and yellow static gradient
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-2 px-6">
        <AnimatedTitle scrollYProgress={scrollYProgress} />
        <AnimatedDescription scrollYProgress={scrollYProgress} />
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-4">
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
    </section>
  );
}
function AnimatedTitle({ scrollYProgress }) {
  const animationStart = 0.1;
  const animationEnd = 0.3;
  const y = useTransform(scrollYProgress, [animationStart, animationEnd], [-50, 0]);
  const opacity = useTransform(scrollYProgress, [animationStart, animationEnd], [0, 1]);

  return (
    <motion.h2
      style={{ y, opacity }}
      className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-sky-500"
    >
      Our Services
    </motion.h2>
  );
}

function AnimatedDescription({ scrollYProgress }) {
  const animationStart = 0.15;
  const animationEnd = 0.35;
  const y = useTransform(scrollYProgress, [animationStart, animationEnd], [20, 0]);
  const opacity = useTransform(scrollYProgress, [animationStart, animationEnd], [0, 1]);

  return (
    <motion.p style={{ y, opacity }} className="text-xl text-center text-gray-300 mb-12">
      Discover how Positron Sun can elevate your business
    </motion.p>
  );
}

function ServiceBlock({ service, index, onClick, scrollYProgress }) {
  const Icon = icons[service.icon];
  const animationStart = 0.2 + index * 0.05;
  const animationEnd = 0.4 + index * 0.05;
  const y = useTransform(scrollYProgress, [animationStart, animationEnd], [50, 0]);
  const opacity = useTransform(scrollYProgress, [animationStart, animationEnd], [0, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl border border-gray-700"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-sky-500 rounded-full mb-4 mx-auto">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-white">{service.title}</h3>
      <p className="text-gray-300 mb-4 text-center">{service.description}</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="text-blue-400 font-semibold flex items-center justify-center w-full"
      >
        Learn More
        <ChevronDown className="ml-1 w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}

function AnimatedCTA({ scrollYProgress }) {
  const animationStart = 0.25;
  const animationEnd = 0.45;
  const y = useTransform(scrollYProgress, [animationStart, animationEnd], [20, 0]);
  const opacity = useTransform(scrollYProgress, [animationStart, animationEnd], [0, 1]);

  return (
    <motion.div className="flex items-center justify-center w-full text-center mt-16">
      <ResponsiveModal />
    </motion.div>
  );
}
