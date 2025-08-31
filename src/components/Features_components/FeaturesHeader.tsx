import React from 'react';
import { motion } from 'framer-motion';

interface FeaturesHeaderProps {
  inView: boolean;
}

const FeaturesHeader: React.FC<FeaturesHeaderProps> = ({ inView }) => {
  const container: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.6, -0.05, 0.01, 0.99] as const 
      }
    }
  };

  return (
    <motion.div 
      className="text-center mb-16"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h2 
        variants={item}
        className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6"
      >
        Beyond Security: 
        <span className="relative">
          <span className="relative z-10 bg-gradient-to-r from-green-500 to-violet-600 dark:from-green-400 dark:to-violet-500 bg-clip-text text-transparent">
            {' '}Free ERP Add-On
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-2 bg-green-500/30 dark:bg-green-500/20 rounded-full -z-0" />
        </span>
      </motion.h2>
      
      <motion.p 
        variants={item}
        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
      >
        Get a complete school management system absolutely free with your security package
      </motion.p>
      
      <motion.div 
        variants={item}
        className="mt-8 relative inline-block"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-violet-500/30 dark:from-green-500/20 dark:to-violet-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
        <div className="relative px-6 py-2 bg-gradient-to-r from-green-500/10 to-violet-500/10 dark:from-green-500/5 dark:to-violet-500/5 text-green-600 dark:text-green-400 text-sm font-medium rounded-lg border border-green-500/20 dark:border-green-500/30">
          Powered by AI Technology
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeaturesHeader;
