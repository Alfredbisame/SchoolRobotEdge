import React from 'react';
import { Shield, Users, School } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-800 to-green-800 dark:from-gray-900 dark:via-violet-900 dark:to-green-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-150"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Protecting Every Child.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-violet-400">
              Powering Every School.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Ghana's first child security & attendance system that prevents missing children cases, 
            while providing a free ERP for schools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Get Started Free
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Shield className="h-12 w-12 text-green-400" />
              <h3 className="text-xl font-semibold text-white">100% Secure</h3>
              <p className="text-gray-200 text-center">Bank-grade security for child protection</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Users className="h-12 w-12 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Real-time Alerts</h3>
              <p className="text-gray-200 text-center">Instant notifications to parents</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <School className="h-12 w-12 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Free ERP</h3>
              <p className="text-gray-200 text-center">Complete school management system</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
