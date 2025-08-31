import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { HERO_FEATURES } from './types';

const FeaturesGrid = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.4 
          } 
        }
      }}
    >
      {HERO_FEATURES.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={feature.delay}
        />
      ))}
    </motion.div>
  );
};

export default FeaturesGrid;
