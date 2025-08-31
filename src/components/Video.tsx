import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './Video_components/VideoPlayer';
import VideoFeatureCard from './Video_components/VideoFeatureCard';
import { VIDEO_FEATURES, staggerContainer } from './Video_components/types';

const Video: React.FC = () => {

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See It In
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-500">
              Action
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience how SchoolRobot Edge transforms school security and parent communication in real-time.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <VideoPlayer
            videoSrc="/vid.mp4"
            posterSrc="/images/video-poster.jpg"
            title="SchoolRobot Edge Demo"
            className="mb-12"
          />

          {/* Video Features */}
          <motion.div 
            className="mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VIDEO_FEATURES.map((feature, index) => (
                <VideoFeatureCard 
                  key={index}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Video;