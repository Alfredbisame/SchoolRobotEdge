import { ReactNode } from 'react';

export interface SocialLink {
  name: string;
  icon: ReactNode;
  href: string;
  ariaLabel: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface ContactInfo {
  icon: ReactNode;
  text: string;
}

export interface FooterSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export interface FooterBottomLink {
  text: string;
  href: string;
}
