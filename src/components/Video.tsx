import React, { useState } from 'react';
import { Play, Pause, Scan, Smartphone, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(154); // 2:34 in seconds
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate video progress
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            clearInterval(interval);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-violet-900 via-purple-900 to-green-900 dark:from-gray-900 dark:via-violet-900 dark:to-green-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500 rounded-full filter blur-3xl animate-pulse delay-75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Watch the Future of School Security
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Experience our AI-powered facial recognition system in action
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                {/* Simulated Video Content */}
                {isPlaying && (
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 to-green-900/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 border-4 border-green-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                        <Scan className="h-16 w-16 text-green-400 animate-spin" />
                      </div>
                      <p className="text-white text-lg font-semibold">Scanning Face...</p>
                      <p className="text-green-400 text-sm mt-2">Recognition Complete ✓</p>
                    </div>
                  </div>
                )}
                
                {/* Video Placeholder */}
                <div className={`text-center transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                  <button
                    onClick={handlePlayPause}
                    className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500/20 to-violet-500/20 hover:from-green-500/30 hover:to-violet-500/30 rounded-full backdrop-blur-sm transition-all duration-500 transform hover:scale-110 mb-6 mx-auto border border-white/20 shadow-2xl"
                  >
                    <Play className="h-10 w-10 text-white ml-2" />
                  </button>
                  <p className="text-white text-xl font-semibold mb-2">
                    Click to Play Demo
                  </p>
                  <p className="text-white/70 text-base">
                    AI Facial Recognition System
                  </p>
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between text-white text-sm">
                  <span>SchoolRobot Edge Demo</span>
                  <span>{formatTime(isPlaying ? currentTime : duration)}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-violet-500 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Video Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Scan className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Instant Recognition</h3>
                <p className="text-gray-200 text-sm">AI detection and verification in under 1 second</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Parent Notification</h3>
                <p className="text-gray-200 text-sm">Automatic alerts sent via WhatsApp/SMS</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Zero Setup</h3>
                <p className="text-gray-200 text-sm">Deploy instantly with existing smartphones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;