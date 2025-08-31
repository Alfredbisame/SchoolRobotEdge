import { motion } from 'framer-motion';
import { FooterSectionProps } from './types';

const Section: React.FC<FooterSectionProps> = ({
  title,
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></span>
      </h4>
      {children}
    </motion.div>
  );
};

export default Section;
