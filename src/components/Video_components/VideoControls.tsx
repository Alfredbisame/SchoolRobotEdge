import React from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { VIDEO_CONTROLS_STYLES, VIDEO_PROGRESS_BAR_STYLES } from './types';

interface VideoControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  isFullscreen: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onMuteToggle: () => void;
  onFullscreenToggle: () => void;
  onTimeUpdate: (time: number) => void;
  formatTime: (time: number) => string;
}

const VideoControls: React.FC<VideoControlsProps> = ({
  isPlaying,
  isMuted,
  isFullscreen,
  currentTime,
  duration,
  onPlayPause,
  onMuteToggle,
  onFullscreenToggle,
  onTimeUpdate,
  formatTime
}) => {
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTimeUpdate(Number(e.target.value));
  };

  return (
    <div className={VIDEO_CONTROLS_STYLES}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onPlayPause}
            className="text-white hover:text-green-400 transition-colors p-2"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
          
          <button 
            onClick={onMuteToggle}
            className="text-white hover:text-green-400 transition-colors p-2"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          
          <div className="text-sm text-gray-300 font-medium">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        
        <button 
          onClick={onFullscreenToggle}
          className="text-white hover:text-green-400 transition-colors p-2"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
        </button>
      </div>
      
      <div className="mt-2">
        <div className={VIDEO_PROGRESS_BAR_STYLES}>
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleTimeChange}
            className="w-full h-full appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:opacity-0 [&:hover::-webkit-slider-thumb]:opacity-100"
          />
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-violet-500 rounded-full transition-all duration-300 pointer-events-none"
            style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoControls;
