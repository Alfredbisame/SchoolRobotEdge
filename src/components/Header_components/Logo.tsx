import { motion } from 'framer-motion';

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center"
    >
      <button 
        onClick={scrollToTop}
        className="transition-opacity focus:outline-none hover:opacity-90"
        aria-label="Go to home"
      >
        <img 
          src="/logo.png" 
          alt="SchoolRobot Edge Logo" 
          className="object-contain w-auto h-32 cursor-pointer"
        />
      </button>
    </motion.div>
  );
};

export default Logo;
