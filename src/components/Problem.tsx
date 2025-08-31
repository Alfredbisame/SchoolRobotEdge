import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PROBLEMS, ALERT_CARD } from './Problem_components/types';
import ProblemCard from './Problem_components/ProblemCard';
import AlertCard from './Problem_components/AlertCard';

const Problem: React.FC = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute rounded-full w-96 h-96 bg-red-500/20 -top-48 -left-48 filter blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full w-96 h-96 bg-yellow-500/20 -bottom-48 -right-48 filter blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/10 dark:to-black/20"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            The
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-green-500">
              Problem We Solve
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Current school security systems are failing to protect what matters most
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {PROBLEMS.map((problem, index) => (
              <ProblemCard key={index} {...problem} />
            ))}
          </div>

          <div className="relative">
            <AlertCard 
              title={ALERT_CARD.title}
              description={ALERT_CARD.description}
              icon={ALERT_CARD.icon}
              iconColor={ALERT_CARD.iconColor}
            />
            
            {/* Additional context */}
            <motion.div 
              className="p-6 mt-8 border bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                } 
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                The Pain is Real
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Every day, parents experience the anxiety of not knowing if their child arrived safely at school.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>No real-time updates</span>
              </div>
              <div className="flex items-center mt-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span>Outdated tracking methods</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Problem;