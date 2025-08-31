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
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onClick(item.id)}
    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg border-2 ${
      isActive 
        ? 'border-green-500 text-green-500 hover:bg-green-500/5 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400/5' 
        : 'border-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/50'
    } ${className}`}
    aria-current={isActive ? 'page' : undefined}
  >
    {item.label}
  </motion.button>
);

export default NavItem;
