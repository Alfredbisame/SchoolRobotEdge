import { motion } from 'framer-motion';

const AnimatedOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-violet-500/20 mix-blend-soft-light filter blur-2xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-green-600/20 mix-blend-soft-light filter blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2
        }}
      />
    </div>
  );
};

export default AnimatedOrbs;
