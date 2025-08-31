import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FeatureCardProps } from './types';

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5, 
            delay: delay * 0.1,
            ease: [0.4, 0.0, 0.2, 1]
          } 
        }
      }}
      className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <Icon className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
