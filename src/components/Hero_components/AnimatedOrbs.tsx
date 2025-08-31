import { motion } from 'framer-motion';

const AnimatedOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/20 rounded-full mix-blend-soft-light filter blur-3xl"
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
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/20 rounded-full mix-blend-soft-light filter blur-3xl"
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
