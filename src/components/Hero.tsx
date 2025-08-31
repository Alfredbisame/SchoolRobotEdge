import React, { useCallback } from 'react';
import { GRID_BG } from './Hero_components/types';
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
      className="relative py-14 md:py-20 flex items-center justify-center overflow-hidden min-h-[70vh]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://www.agsprotect.com/hubfs/unnamed-1.png" 
          alt="Security background" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-800/80 to-violet-600/60 backdrop-blur-sm" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={GRID_BG} />
      </div>

      <AnimatedOrbs />

      <div className="relative z-10 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
