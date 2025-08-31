import React from 'react';
import { motion } from 'framer-motion';
import { ContactInfoCardProps } from './types';

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon: Icon,
  title,
  value,
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
      className="flex items-center p-4 space-x-4 transition-all duration-300 bg-gray-50 rounded-lg dark:bg-gray-900 hover:shadow-md hover:-translate-y-1 group"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-violet-500/20 group-hover:bg-violet-500/30 transition-colors duration-300">
        <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
        <p className="text-gray-600 dark:text-gray-300">{value}</p>
      </div>
    </motion.div>
  );
};

