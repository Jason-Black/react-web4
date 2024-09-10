import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import sunImage from './assets/sunback.png'; // Import the image
import Navbar from './components/Navbar';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Hero6 from './components/Hero6';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Navbar4 from './components/Navbar4';
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import { Workflow } from 'lucide-react';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CursorDemo from './components/CursorDemo';
import CursorDemo2 from './components/CursorDemo2';
import Navbar5 from './components/Navbar5';
import { motion } from 'framer-motion'; // Import motion for animations
import Projects from './components/Projects';
import FlowTest from './components/FlowTest';
import ResponsiveModal from './components/ResponsiveModal';
import Hero7 from './components/Hero7';
import Services from './components/Services';
import Footer2 from './components/Footer2';
import Services2 from './components/Services2';

// Animation for the background image
const backgroundImageVariants = {
  hidden: { opacity: 0, y: -100 }, // Start hidden and further down
  visible: {
    opacity: 1,
    y: 0, // Move upwards to the final position
    transition: {
      duration: 1.3, // Adjust duration to balance the effect
      ease: [0.68, -0.55, 0.27, 1.55], // Custom backOut curve with stronger overshoot
      delay: 1.4, // Delay before starting the animation
    },
  },
};

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Navbar2 /> */}
      {/* <Navbar3 /> */}
      {/* <Navbar4 /> */}
      <Navbar5 />

    {/* Background image with absolute positioning */}
    <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${sunImage})`,
          filter: 'brightness(50%)', // Apply a darker tint
        }}
        initial="hidden"
        animate="visible"
        variants={backgroundImageVariants}
      />

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto pt-20 px-6">
        {/* <Hero6 /> */}
        <Hero7 /> 
         {/* <Services /> */}
         <Services2 />
        <Projects />
        <FeatureSection />
       
  
      
        <Workflow />
        <Pricing />
        <CursorDemo />
        <Testimonials />
        <CursorDemo2 />
        <Footer2 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
