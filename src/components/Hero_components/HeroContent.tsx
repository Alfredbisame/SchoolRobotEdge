import { motion } from 'framer-motion';

interface HeroContentProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

const HeroContent = ({ onGetStarted, onLearnMore }: HeroContentProps) => {
  return (
    <motion.div 
      className="text-center space-y-6 max-w-5xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.2 
          } 
        }
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1]
            } 
          }
        }}
      >
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-violet-500/10 border border-white/10 mb-6">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-violet-400">
            Now Serving Schools Nationwide
          </span>
        </div>
      </motion.div>

      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              ease: [0.4, 0.0, 0.2, 1]
            } 
          }
        }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Protecting Every Child
        </span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-violet-400">
          Powering Every School
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              delay: 0.1,
              ease: [0.4, 0.0, 0.2, 1]
            } 
          }
        }}
      >
        Ghana's most advanced child security & attendance system, preventing missing children cases while providing a comprehensive, free ERP solution for schools.
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              delay: 0.2,
              ease: [0.4, 0.0, 0.2, 1]
            } 
          }
        }}
      >
        <button 
          onClick={onGetStarted}
          className="group relative px-8 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-green-500/20 flex items-center gap-2"
        >
          <span>Get Started Free</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <button 
          onClick={onLearnMore}
          className="px-6 py-3.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group"
        >
          <span>Learn More</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
