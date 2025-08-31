import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building2, Banknote, Smartphone, Heart, Globe, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Partnership: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const partners = [
    {
      icon: Building2,
      name: 'Ghana Education Service',
      type: 'Government Partner',
      description: 'Official partnership for nationwide school security implementation',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Banknote,
      name: 'Ghana Commercial Bank',
      type: 'Financial Partner',
      description: 'Secure payment processing and financial infrastructure support',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      name: 'MTN Ghana',
      type: 'Technology Partner',
      description: 'SMS and mobile connectivity for real-time parent notifications',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      name: 'UNICEF Ghana',
      type: 'NGO Partner',
      description: 'Child protection advocacy and safety protocol development',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Globe,
      name: 'Ghana Tech Hub',
      type: 'Innovation Partner',
      description: 'AI development and facial recognition technology advancement',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      name: 'Parent Teacher Association',
      type: 'Community Partner',
      description: 'Community engagement and feedback for continuous improvement',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(partners.length / 3)) % Math.ceil(partners.length / 3));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full filter blur-3xl animate-pulse delay-75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Leading
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-500 ml-3">
                Organizations
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Partnering with Ghana's most respected institutions to protect every child
            </p>
          </div>

          {/* Partnership Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                      {partners.slice(slideIndex * 3, slideIndex * 3 + 3).map((partner, index) => (
                        <div
                          key={partner.name}
                          className={`group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${
                            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                          }`}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        >
                          <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <partner.icon className="h-8 w-8 text-white" />
                          </div>
                          
                          <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {partner.name}
                            </h3>
                            <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-3">
                              {partner.type}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                              {partner.description}
                            </p>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200 dark:border-gray-700"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200 dark:border-gray-700"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-green-500 to-violet-500 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Partnership Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">15+</div>
              <p className="text-gray-600 dark:text-gray-300">Strategic Partners</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
              <p className="text-gray-600 dark:text-gray-300">Schools Protected</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">50K+</div>
              <p className="text-gray-600 dark:text-gray-300">Children Safe</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;