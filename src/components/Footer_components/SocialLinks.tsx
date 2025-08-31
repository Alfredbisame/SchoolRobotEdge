import { motion } from 'framer-motion';
import { SocialLink } from './types';

interface SocialLinksProps {
  socialLinks: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks, className = '' }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="p-2 bg-violet-800/40 hover:bg-violet-700/60 backdrop-blur-sm rounded-lg transition-all duration-300 hover:-translate-y-1"
          aria-label={social.ariaLabel}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
