import { motion } from 'framer-motion';
import { NavItem as NavItemType } from './types';

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
  onClick: (id: string) => void;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ 
  item, 
  isActive, 
  onClick, 
  className = '' 
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => onClick(item.id)}
    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-green-500' 
        : 'text-gray-700 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400'
    } ${className}`}
    aria-current={isActive ? 'page' : undefined}
  >
    {item.label}
    {isActive && (
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
        layoutId="activeIndicator"
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
      />
    )}
  </motion.button>
);

export default NavItem;
