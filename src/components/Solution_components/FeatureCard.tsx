import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCardProps } from './types';

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  borderColor,
  bgColor,
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
      className={`p-5 rounded-xl border ${borderColor} ${bgColor} backdrop-blur-sm 
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-lg ${bgColor.replace('50', '100')} dark:bg-opacity-20`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
