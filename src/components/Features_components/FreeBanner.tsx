import React from 'react';
import { motion } from 'framer-motion';

const FreeBanner: React.FC = () => {
  return (
    <motion.div 
      className="mt-16 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: 0.4,
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99] as const
        }
      }}
      viewport={{ once: true }}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-violet-500/20 dark:from-green-500/10 dark:to-violet-500/10 rounded-2xl blur-2xl opacity-70" />
        
        {/* Main banner */}
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                      border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden
                      shadow-lg shadow-green-500/5 dark:shadow-green-500/10">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-500/10 dark:bg-green-500/5 rounded-full" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-violet-500/10 dark:bg-violet-500/5 rounded-full" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-violet-500/10 
                          text-green-600 dark:text-green-300 text-sm font-medium mb-4 
                          border border-green-500/20 dark:border-white/10">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Limited Time Offer
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">100% FREE</h3>
            <p className="text-gray-600 dark:text-green-100 max-w-2xl mx-auto">
              Complete ERP system included with every security package. 
              <span className="text-green-600 dark:text-green-300 font-medium"> No hidden fees, no subscriptions.</span>
            </p>
            
            {/* <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg
                              hover:shadow-lg hover:shadow-green-500/20 dark:hover:shadow-green-500/10 transition-all duration-300
                              transform hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="px-6 py-2.5 bg-white text-gray-800 dark:bg-white/5 dark:text-white font-medium rounded-lg 
                              border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 
                              transition-all duration-300">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FreeBanner;
