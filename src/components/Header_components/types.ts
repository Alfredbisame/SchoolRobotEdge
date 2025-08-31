import { ReactNode } from 'react';

export type NavItem = {
  id: string;
  label: string;
  icon?: ReactNode;
};

export interface HeaderProps {
  activeSection: string;
  onNavItemClick?: (id: string) => void;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];
