import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import Logo from './Header_components/Logo';
import ThemeToggle from './Header_components/ThemeToggle';
import MobileMenuButton from './Header_components/MobileMenuButton';
import MobileMenu from './Header_components/MobileMenu';
import DesktopNav from './Header_components/DesktopNav';

// Types and Constants
import { HeaderProps, NAV_ITEMS } from './Header_components/types';

const Header: React.FC<HeaderProps> = ({ 
  activeSection, 
  onNavItemClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    if (onNavItemClick) onNavItemClick(id);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
      } border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="flex items-center space-x-2">
            <DesktopNav 
              navItems={NAV_ITEMS} 
              activeSection={activeSection} 
              onItemClick={handleNavItemClick} 
            />
            
            <ThemeToggle />
            <MobileMenuButton 
              isOpen={isMenuOpen} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            />
          </div>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen} 
          navItems={NAV_ITEMS} 
          activeSection={activeSection} 
          onItemClick={handleNavItemClick} 
        />
      </div>
    </motion.header>
  );
};

export default React.memo(Header);