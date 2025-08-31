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
         type="button"
         onClick={scrollToTop}
         className="transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
         aria-label="Scroll to top"
         title="Scroll to top"
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
