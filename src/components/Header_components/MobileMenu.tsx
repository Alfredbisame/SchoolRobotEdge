import { AnimatePresence, motion } from 'framer-motion';
import { NavItem as NavItemType } from './types';
import NavItem from './NavItem';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItemType[];
  activeSection: string;
  onItemClick: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  navItems, 
  activeSection, 
  onItemClick 
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden"
      >
        <nav className="flex flex-col space-y-3 py-4 border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={onItemClick}
              className="px-4 py-3 text-base"
            />
          ))}
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;
