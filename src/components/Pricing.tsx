import React from 'react';
import { Check, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Pricing: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      id="pricing"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, Fair Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pay only for what you use. No hidden fees, no long-term contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Schools Plan */}
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">For Schools</h3>
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">Pay-Per-Use</div>
                <p className="text-gray-600 dark:text-gray-300">Only pay when the system is used</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Facial recognition gate system</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Real-time parent notifications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Complete ERP system (FREE)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Smartphone compatible</span>
                </li>
              </ul>
              
              <button className="w-full py-3 px-6 bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-semibold rounded-lg transition-colors duration-200">
                Start Free Trial
              </button>
            </div>

            {/* Parents Plan */}
            <div className="relative p-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>Most Popular</span>
                </div>
              </div>
              
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold mb-2">For Parents</h3>
                <div className="text-4xl font-bold mb-2">FREE</div>
                <p className="text-green-100">Always free for peace of mind</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-200 flex-shrink-0" />
                  <span className="text-white">WhatsApp/SMS notifications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-200 flex-shrink-0" />
                  <span className="text-white">Real-time attendance alerts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-200 flex-shrink-0" />
                  <span className="text-white">Child safety verification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-200 flex-shrink-0" />
                  <span className="text-white">No setup required</span>
                </li>
              </ul>
              
              <button className="w-full py-3 px-6 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Join Free Today
              </button>
            </div>

            {/* Partners Plan */}
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">For Partners</h3>
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">Custom</div>
                <p className="text-gray-600 dark:text-gray-300">Tailored partnership models</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Revenue sharing opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Co-branded solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Technical integration support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Marketing collaboration</span>
                </li>
              </ul>
              
              <button className="w-full py-3 px-6 bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-semibold rounded-lg transition-colors duration-200">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
