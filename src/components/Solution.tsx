import React from 'react';
import { Scan, Smartphone, Zap, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Solution: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden bg-white dark:bg-gray-800"
    >
      {/* Neon Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-64 h-64 bg-green-500 rounded-full top-1/2 left-1/4 filter blur-3xl animate-pulse"></div>
        <div className="absolute w-64 h-64 delay-75 rounded-full bottom-1/4 right-1/4 bg-violet-500 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              The Game-Changing
              <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-500">
                Solution
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Introducing the "No-ClockIn Attendance Revolution" using advanced facial recognition
            </p>
          </div>

          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative p-8 border shadow-2xl bg-gradient-to-br from-violet-900 to-green-900 dark:from-gray-900 dark:to-violet-900 rounded-2xl border-violet-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-violet-500/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-violet-500/20 animate-pulse">
                    <Scan className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-center text-white">
                    AI Recognition Gate
                  </h3>
                  <p className="text-center text-gray-200">
                    Students walk through naturally. Our advanced AI instantly recognizes them and sends real-time verification to parents.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center p-4 space-x-4 border border-green-200 rounded-lg bg-green-50 dark:bg-green-900/20 dark:border-green-500/30">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-600 dark:text-green-400" />
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  No cards, no badges, no hassle
                </span>
              </div>
              
              <div className="flex items-center p-4 space-x-4 border border-blue-200 rounded-lg bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500/30">
                <Smartphone className="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Instant WhatsApp/SMS alerts to parents
                </span>
              </div>
              
              <div className="flex items-center p-4 space-x-4 border border-purple-200 rounded-lg bg-purple-50 dark:bg-purple-900/20 dark:border-purple-500/30">
                <Zap className="flex-shrink-0 w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Real-time tracking and verification
                </span>
              </div>

              <div className="p-6 mt-8 text-white shadow-lg bg-gradient-to-r from-green-500 to-violet-500 rounded-xl">
                <h4 className="mb-2 text-lg font-bold">Peace of Mind Guarantee</h4>
                <p className="text-green-50">
                  Know exactly when your child arrives and leaves school, automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;