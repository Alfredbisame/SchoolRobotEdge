import React from 'react';
import { Shield, Heart, Globe, Target } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every feature is designed with child safety as the primary concern'
    },
    {
      icon: Heart,
      title: 'Parental Peace',
      description: 'We understand the anxiety parents feel and aim to eliminate it'
    },
    {
      icon: Globe,
      title: 'National Impact',
      description: 'Building a nationwide safety net for all Ghanaian children'
    },
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Our goal is to end missing children cases in Ghana forever'
    }
  ];

  return (
    <section 
      id="about"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Schools Love It &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-500 ml-3">
                Parents Trust It
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built by parents, for parents. Trusted by schools across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Schools Love It */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Schools Love It
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Quick 5-minute setup process</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Works with any smartphone</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Bank-grade security protocols</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Pay-per-use pricing model</span>
                </div>
              </div>
            </div>

            {/* Parents Trust It */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Parents Trust It
              </h3>
              
              <div className="relative bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-8 text-white">
                <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">📱</div>
                    <h4 className="text-xl font-semibold mb-2">Real-time Verification</h4>
                    <p className="text-green-100">
                      Get instant alerts on your phone when your child arrives or leaves school
                    </p>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-center font-medium">
                      "No more anxious calls to school. I know my child is safe." - Sarah M.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-violet-500 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* National Impact */}
          <div className="mt-20 text-center p-12 bg-gradient-to-r from-violet-900 to-green-900 dark:from-gray-900 dark:to-violet-900 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-violet-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">National Impact</h3>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Together, we're building a nationwide safety net to end missing children cases in Ghana forever.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                  <p className="text-gray-200">Schools Protected</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-400 mb-2">50,000+</div>
                  <p className="text-gray-200">Children Safe</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                  <p className="text-gray-200">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;