import React from 'react';
import { motion } from 'framer-motion';
import { VideoFeature } from './types';

interface VideoFeatureCardProps {
  feature: VideoFeature;
  index?: number;
}

const VideoFeatureCard: React.FC<VideoFeatureCardProps> = ({ feature, index = 0 }) => {
  const { icon: Icon, title, description, gradient, iconColor } = feature;

  return (
    <motion.div 
      className="text-center p-6 bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-green-400/30 dark:hover:border-white/30 hover:bg-white/10 dark:hover:bg-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: 0.1 * index,
          duration: 0.5,
          ease: "easeOut"
        } 
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-200 text-sm">{description}</p>
    </motion.div>
  );
};

export default VideoFeatureCard;
