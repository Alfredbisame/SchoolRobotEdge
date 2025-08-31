import React from 'react';

interface PartnershipHeaderProps {
  sectionInView: boolean;
}

export const PartnershipHeader: React.FC<PartnershipHeaderProps> = ({ sectionInView }) => (
  <div className="text-center mb-16">
    <h2 className={`text-4xl font-bold mb-4 transition-all duration-700 delay-100 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-black dark:text-white`}>
      Trusted by Leading
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-500 ml-3">
        Organizations
      </span>
    </h2>
    <div 
      className={`w-20 h-1 bg-gradient-to-r from-green-500 to-violet-500 mx-auto transition-all duration-700 delay-200 ${
        sectionInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
      }`}
    ></div>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-8">
      Partnering with Ghana's most respected institutions to protect every child
    </p>
  </div>
);
