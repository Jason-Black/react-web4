import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { features } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const iconHover = {
  scale: 1.2,
  rotate: 10,
  transition: { type: "spring", stiffness: 200 },
};

const FeatureSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const element = document.querySelector("#feature-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <motion.div
      id="feature-section"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Heading Section */}
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          What We Offer
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Empower Your Project with{" "}
          <motion.span
            className="bg-gradient-to-r from-orange-500 to-sky-800 text-transparent bg-clip-text"
            initial={{ backgroundPosition: "100% 0" }}
            animate={{ backgroundPosition: "0% 0" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Innovative Features
          </motion.span>
        </h2>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={itemVariants}
          >
            <div className="flex">
              {/* Icon with hover effect */}
              <motion.div
                className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full"
                whileHover={iconHover}
              >
                {feature.icon}
              </motion.div>
              {/* Feature Content */}
              <div>
                <h5 className="mt-1 mb-6 text-xl font-bold">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeatureSection;
