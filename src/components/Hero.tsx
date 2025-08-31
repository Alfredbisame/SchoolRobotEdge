import React, { useCallback } from 'react';
import { GRADIENT_BG, GRID_BG } from './Hero_components/types';
import AnimatedOrbs from './Hero_components/AnimatedOrbs';
import HeroContent from './Hero_components/HeroContent';
import FeaturesGrid from './Hero_components/FeaturesGrid';

const Hero: React.FC = () => {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section 
      id="home" 
      className={`relative py-24 md:py-32 flex items-center justify-center overflow-hidden ${GRADIENT_BG}`}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={GRID_BG} />
      </div>

      <AnimatedOrbs />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <HeroContent 
          onGetStarted={() => scrollTo('features')}
          onLearnMore={() => scrollTo('about')}
        />
        <FeaturesGrid />
      </div>
    </section>
  );
};

export default React.memo(Hero);
