import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectItem = ({ img, title }) => {
  // Animation controller
  const controls = useAnimation();

  // Detect when the component is in view
  const { ref, inView, entry } = useInView({
    threshold: 0.3, // Trigger when 30% of the element is in view
    triggerOnce: false, // Keep checking when scrolling
  });

  // Handle animation based on scroll direction
  React.useEffect(() => {
    if (inView) {
      controls.start("visible"); // Play when the element comes into view
    } else if (entry && entry.boundingClientRect.top > 0) {
      controls.start("hidden"); // Reverse when scrolling back up
    }
  }, [inView, entry, controls]);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 100 }, // Hidden state (off-screen)
    visible: {
      opacity: 1,
      y: 0, // Visible state (on-screen)
      transition: {
        duration: 0.6, // Smooth transition
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref} // Attach the ref to the element to observe its visibility
      initial="hidden" // Initial state
      animate={controls} // Animation control based on visibility
      variants={variants} // Apply the animation variants
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
    >
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10 ease-in duration-300"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React Js</p>
        <a href="/">
        
        <p className="text-center p-3 rounded-lg border-2 border-white text-white font-bold cursor-pointer text-lg transition duration-300 ease-in-out transform hover:bg-white hover:text-gray-700 hover:scale-105 active:scale-95 active:text-white active:bg-black focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-70">
      More Info
    </p>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
