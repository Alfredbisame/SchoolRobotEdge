import React from 'react';
import { motion } from 'framer-motion';
import { ProblemCardProps } from './types';

const ProblemCard: React.FC<ProblemCardProps> = ({
  icon: Icon,
  title,
  description,
  iconBg,
  iconColor,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay,
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1]
        } 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-start p-6 space-x-4 bg-white dark:bg-gray-800/50 rounded-xl 
        border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className={`flex-shrink-0 p-3 ${iconBg} rounded-lg`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProblemCard;
