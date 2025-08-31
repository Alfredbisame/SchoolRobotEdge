import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SOLUTION_FEATURES, PEACE_OF_MIND } from './Solution_components/types';
import FeatureCard from './Solution_components/FeatureCard';
import PeaceOfMind from './Solution_components/PeaceOfMind';

const Solution: React.FC = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 bg-green-500/30 rounded-full -top-48 -left-48 filter blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-violet-500/30 rounded-full -bottom-48 -right-48 filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/10 dark:to-black/20"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            The Game-Changing
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-500">
              Solution
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Introducing the "No-ClockIn Attendance Revolution" using advanced facial recognition
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Main Feature Card */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative p-8 overflow-hidden border rounded-2xl border-violet-500/20 bg-gradient-to-br from-violet-900/80 to-green-900/80 dark:from-gray-900/80 dark:to-violet-900/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-violet-500/5"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-violet-500/20 animate-pulse">
                  <div className="w-12 h-12 text-green-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7.5 12h9m-4.5 0v6m-3-9V9a3 3 0 013-3h4.5a3 3 0 013 3v.75M7.5 12h.008v.008H7.5V12zm9 0h.008v.008h-.008V12zm-9 6h.008v.008H7.5V18zm9 0h.008v.008h-.008V18z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-center text-white">
                  AI Recognition Gate
                </h3>
                <p className="text-center text-gray-200">
                  Students walk through naturally. Our advanced AI instantly recognizes them and sends real-time verification to parents.
                </p>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-green-500/30 via-violet-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating elements */}
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-green-500/20 to-violet-500/20"
                style={{
                  width: `${Math.random() * 60 + 40}px`,
                  height: `${Math.random() * 60 + 40}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: 'blur(20px)',
                  opacity: 0.6,
                  animation: `float ${Math.random() * 10 + 10}s infinite alternate`
                }}
              />
            ))}
          </motion.div>

          {/* Feature List */}
          <div className="space-y-4">
            {SOLUTION_FEATURES.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
            
            <PeaceOfMind {...PEACE_OF_MIND} />
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default Solution;