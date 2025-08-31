import React from 'react';
import { motion } from 'framer-motion';

interface AlertCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

const AlertCard: React.FC<AlertCardProps> = ({
  title,
  description,
  icon: Icon,
  iconColor
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1]
        } 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative bg-white dark:bg-gray-800/80 rounded-2xl shadow-2xl p-8 
        border border-red-200/50 dark:border-red-900/50 backdrop-blur-sm
        overflow-hidden group"
    >
      {/* Animated pulse dot */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full 
        animate-ping opacity-75 group-hover:animate-none group-hover:scale-150 
        transition-transform duration-300" />
      
      {/* Main content */}
      <div className="relative z-10">
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6">
          <div className="relative">
            <div className={`absolute inset-0 ${iconColor.replace('text-', 'bg-')} opacity-20 
              rounded-full w-full h-full animate-pulse`} />
            <div className={`p-3 ${iconColor.replace('text-', 'bg-').replace('dark:bg-', 'dark:bg-opacity-20 ')} 
              rounded-full relative z-10`}>
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-red-500"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(30px)',
              opacity: 0.4,
              animation: `pulse ${Math.random() * 8 + 8}s infinite alternate`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AlertCard;
