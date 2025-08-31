import React from 'react';
import { useInView } from 'react-intersection-observer';
import { PartnershipHeader } from './Partnership_components/PartnershipHeader';
import { PartnersCarousel } from './Partnership_components/PartnersCarousel';
import { StatsSection } from './Partnership_components/StatsSection';
import { Building2, Banknote, Smartphone, Heart, Globe, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const Partnership: React.FC = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const partners: Array<{
    icon: LucideIcon;
    name: string;
    type: string;
    description: string;
    color: string;
  }> = [
    {
      icon: Building2,
      name: 'Ghana Education Service',
      type: 'Government Partner',
      description: 'Official partnership for nationwide school security implementation',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Banknote,
      name: 'Ministry of Education',
      type: 'Government Partner',
      description: 'Collaborating on education technology and security initiatives',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      name: 'TechHub Africa',
      type: 'Technology Partner',
      description: 'Innovative solutions for school security and communication',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      name: 'ChildSafe Ghana',
      type: 'NGO Partner',
      description: 'Dedicated to child safety and protection in educational settings',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Globe,
      name: 'EduGlobal',
      type: 'International Partner',
      description: 'Global education technology solutions for safer schools',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Users,
      name: 'Parent-Teacher Association',
      type: 'Community Partner',
      description: 'Bridging the gap between schools and families for student safety',
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full filter blur-3xl animate-pulse delay-75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4">
          <PartnershipHeader sectionInView={sectionInView} />
          
          {/* Partnership Carousel */}
          <PartnersCarousel 
            partners={partners} 
            isVisible={sectionInView} 
          />

          {/* Stats Section */}
          <div ref={statsRef}>
            <StatsSection isVisible={statsInView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;