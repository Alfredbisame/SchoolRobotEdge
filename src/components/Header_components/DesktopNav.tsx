import { NavItem as NavItemType } from './types';
import NavItem from './NavItem';

interface DesktopNavProps {
  navItems: NavItemType[];
  activeSection: string;
  onItemClick: (id: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ 
  navItems, 
  activeSection, 
  onItemClick 
}) => (
  <nav className="hidden md:flex space-x-1">
    {navItems.map((item) => (
      <NavItem
        key={item.id}
        item={item}
        isActive={activeSection === item.id}
        onClick={onItemClick}
      />
    ))}
  </nav>
);

export default DesktopNav;
