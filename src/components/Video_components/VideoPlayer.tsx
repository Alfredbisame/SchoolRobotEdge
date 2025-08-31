import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoControls from './VideoControls';
import { 
  VIDEO_CONTAINER_STYLES, 
  VIDEO_OVERLAY_STYLES, 
  VIDEO_PLAY_BUTTON_STYLES,
  fadeInUp
} from './types';

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  onTimeUpdate?: (time: number) => void;
  onLoadedData?: () => void;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  posterSrc,
  title,
  onTimeUpdate,
  onLoadedData,
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Format time in MM:SS format
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Handle time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      onTimeUpdate?.(videoRef.current.currentTime);
    }
  };

  // Handle seeking
  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Handle video end
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Handle loaded metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
      onLoadedData?.();
    }
  };

  // Effect for keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      switch (e.key.toLowerCase()) {
        case ' ':
        case 'k':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'm':
          e.preventDefault();
          toggleMute();
          break;
        case 'f':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'arrowleft':
          e.preventDefault();
          if (videoRef.current) {
            const newTime = Math.max(0, currentTime - 5);
            handleSeek(newTime);
          }
          break;
        case 'arrowright':
          e.preventDefault();
          if (videoRef.current) {
            const newTime = Math.min(duration, currentTime + 5);
            handleSeek(newTime);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentTime, duration]);

  // Show/hide controls on mouse move
  useEffect(() => {
    if (!isHovered) return;
    
    const timer = setTimeout(() => {
      // Controls visibility is now managed by CSS hover state
    }, 3000);

    return () => clearTimeout(timer);
  }, [isHovered, currentTime]);

  return (
    <motion.div
      ref={containerRef}
      className={`${VIDEO_CONTAINER_STYLES} ${className} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={() => {}}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        className="w-full h-full object-cover"
        onClick={togglePlayPause}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onLoadedMetadata={handleLoadedMetadata}
        onLoadedData={onLoadedData}
        preload="metadata"
        playsInline
        aria-label={title}
      />

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      )}

      {/* Overlay */}
      <div className={VIDEO_OVERLAY_STYLES}></div>

      {/* Play Button */}
      {!isPlaying && (
        <button
          className={VIDEO_PLAY_BUTTON_STYLES}
          onClick={togglePlayPause}
          aria-label="Play video"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
        </button>
      )}

      {/* Video Controls */}
      <VideoControls
        isPlaying={isPlaying}
        isMuted={isMuted}
        isFullscreen={isFullscreen}
        currentTime={currentTime}
        duration={duration}
        onPlayPause={togglePlayPause}
        onMuteToggle={toggleMute}
        onFullscreenToggle={toggleFullscreen}
        onTimeUpdate={handleSeek}
        formatTime={formatTime}
      />
    </motion.div>
  );
};

export default VideoPlayer;
