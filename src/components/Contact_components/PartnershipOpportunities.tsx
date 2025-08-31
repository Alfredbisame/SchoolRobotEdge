import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Handshake, Sparkles, Target, Users, Globe2 } from 'lucide-react';

interface PartnershipOpportunitiesProps {
  opportunities: string[];
}

const iconMap = {
  'Banks': <Building2 className="w-5 h-5" />,
  'Telecommunications': <Globe2 className="w-5 h-5" />,
  'NGOs': <Handshake className="w-5 h-5" />,
  'Technology': <Sparkles className="w-5 h-5" />,
  'default': <Target className="w-5 h-5" />
};

export const PartnershipOpportunities: React.FC<PartnershipOpportunitiesProps> = ({
  opportunities
}) => {
  const getIcon = (opportunity: string) => {
    const key = Object.keys(iconMap).find(k => opportunity.toLowerCase().includes(k.toLowerCase())) as keyof typeof iconMap;
    return iconMap[key] || iconMap.default;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        } 
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative p-5 overflow-hidden border shadow-2xl rounded-2xl bg-gradient-to-br from-indigo-900/80 to-violet-900/80 backdrop-blur-lg border-white/10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-48 h-48 rounded-full bg-violet-600/10 -top-24 -left-24 filter blur-3xl animate-pulse"></div>
        <div className="absolute w-48 h-48 delay-1000 rounded-full bg-indigo-600/10 -bottom-24 -right-24 filter blur-3xl animate-pulse"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center mb-4 space-x-2"
      >
        <div className="p-1.5 rounded-lg bg-gradient-to-br from-violet-500/20 to-indigo-500/20 backdrop-blur-sm">
          <Users className="w-5 h-5 text-violet-300" />
        </div>
        <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-indigo-200">
          Partnership Opportunities
        </h4>
      </motion.div>
      
      <ul className="space-y-3">
        {opportunities.map((opportunity, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                delay: 0.2 + (index * 0.1),
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              } 
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group"
          >
            <div className="flex items-start p-3 transition-all duration-300 border rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border-white/5 hover:border-violet-500/30">
              <div className="flex-shrink-0 p-1.5 mr-3 transition-colors duration-300 rounded-md text-violet-300 bg-violet-500/10 group-hover:bg-violet-500/20">
                {getIcon(opportunity)}
              </div>
              <div>
                <h5 className="font-medium text-white">{opportunity}</h5>
                <p className="mt-1 text-sm text-violet-200/80">
                  {opportunity.includes('Banks') ? 'Financial solutions and payment integrations' :
                   opportunity.includes('Telecommunications') ? 'Connectivity and infrastructure support' :
                   opportunity.includes('NGOs') ? 'Social impact and educational initiatives' :
                   opportunity.includes('Technology') ? 'Innovative tech collaborations' :
                   'Exciting partnership opportunities'}
                </p>
              </div>
              <motion.div 
                className="ml-auto transition-opacity duration-300 opacity-0 text-violet-400 group-hover:opacity-100"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.div>
            </div>
          </motion.li>
        ))}
      </ul>
      
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-violet-200/80">Interested in partnering with us?</p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center px-5 py-2 mt-2 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-indigo-900"
        >
          <span>Get in Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

