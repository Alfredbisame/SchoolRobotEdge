import { motion } from 'framer-motion';

const Logo = () => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="text-2xl font-bold text-blue-900 dark:text-white"
  >
    SchoolRobot<span className="text-green-500"> Edge</span>
  </motion.div>
);

export default Logo;
