import React from 'react';
import { motion } from 'framer-motion';

export interface PeaceOfMindProps {
  title: string;
  description: string;
  gradient: string;
}

const PeaceOfMind: React.FC<PeaceOfMindProps> = ({ title, description, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: 0.5,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        } 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`p-6 rounded-xl shadow-lg bg-gradient-to-r ${gradient} 
        transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: { 
            delay: 0.7,
            duration: 0.5
          } 
        }}
        className="relative z-10"
      >
        <h4 className="mb-3 text-xl font-bold text-white">{title}</h4>
        <p className="text-green-50/90">{description}</p>
      </motion.div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-20">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: `${Math.random() * 100 + 100}px`,
              height: `${Math.random() * 100 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              opacity: 0.5,
              animation: `pulse ${Math.random() * 10 + 10}s infinite alternate`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PeaceOfMind;
