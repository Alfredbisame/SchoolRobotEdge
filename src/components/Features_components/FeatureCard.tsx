import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  inView: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  index,
  inView 
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    })
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="relative p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 
                 hover:border-green-400/50 dark:hover:border-green-400/30 
                 hover:shadow-lg hover:shadow-green-500/10 dark:hover:shadow-green-500/5
                 transition-all duration-300 group overflow-hidden"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-violet-600 rounded-2xl opacity-0 
                     group-hover:opacity-10 dark:group-hover:opacity-30 blur-sm transition duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-green-500 to-violet-600 
                      shadow-lg shadow-green-500/20 dark:shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-7 w-7 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500/10 dark:bg-green-500/5 rounded-full 
                    group-hover:scale-150 transition-transform duration-500" />
    </motion.div>
  );
};

export default FeatureCard;
