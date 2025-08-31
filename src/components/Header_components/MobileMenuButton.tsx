import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    aria-expanded={isOpen}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    {isOpen ? (
      <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
    ) : (
      <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
    )}
  </motion.button>
);

export default MobileMenuButton;
