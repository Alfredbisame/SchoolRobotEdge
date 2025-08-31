import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-violet-300" />, text: 'info@schoolrobot.tech' },
    { icon: <Phone className="w-5 h-5 text-violet-300" />, text: '+233 24 123 4567' },
    { icon: <MapPin className="w-5 h-5 text-violet-300" />, text: 'Accra, Ghana' },
  ];

  return (
    <footer className="relative pt-20 pb-12 overflow-hidden text-white bg-gradient-to-br from-violet-900 via-violet-800 to-purple-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-64 h-64 bg-white rounded-full top-1/4 -right-20"></div>
        <div className="absolute bottom-0 bg-white rounded-full w-96 h-96 -left-40"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <Shield className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200">
                SchoolRobot<span className="text-emerald-300">Edge</span>
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="leading-relaxed text-violet-100"
            >
              Transforming education through AI-powered child protection and school management solutions. Ghana's most advanced educational security platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex pt-2 space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="p-2 transition-all duration-300 rounded-lg bg-violet-800/40 hover:bg-violet-700/60 backdrop-blur-sm hover:-translate-y-1"
                  aria-label={social.href.replace('https://', '')}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="relative inline-block mb-6 text-lg font-semibold text-white">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center transition-colors duration-200 text-violet-100 hover:text-white group"
                  >
                    <span className="w-1 h-1 mr-2 transition-opacity duration-200 rounded-full opacity-0 bg-emerald-400 group-hover:opacity-100"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></span>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-0.5">{item.icon}</span>
                  <span className="text-violet-100">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Subscribe to our Newsletter
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></span>
            </h4>
            <p className="text-violet-100 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg bg-violet-800/30 border border-violet-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 text-white placeholder-violet-300/70"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-800 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} SchoolRobot Edge. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-2 md:mt-0">
            <span className="text-sm text-gray-400">Made with</span>
            <span className="text-sm text-red-400">&hearts;</span>
            <span className="text-sm text-gray-400">for Ghana's children</span>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t border-violet-700/30 mt-12 pt-8 text-center"
      >
        <p className="text-violet-200/80">
          &copy; {currentYear} SchoolRobot Edge. All rights reserved. Made with 
          <span className="mx-1 text-red-400">&hearts;</span> in Ghana
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-violet-300 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
          <span className="text-violet-500">&bull;</span>
          <a href="#" className="text-violet-300 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
          <span className="text-violet-500">&bull;</span>
          <a href="#" className="text-violet-300 hover:text-white transition-colors duration-200 text-sm">Cookie Policy</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;