import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface PartnerCardProps {
  partner: {
    icon: LucideIcon | React.ComponentType<{ className?: string }>;
    name: string;
    type: string;
    description: string;
    color: string;
  };
  index: number;
  isVisible: boolean;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ 
  partner, 
  index, 
  isVisible 
}) => {
  const { icon: Icon, name, type, description, color } = partner;
  
  return (
    <div
      key={name}
      className={`group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-3">
          {type}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};
