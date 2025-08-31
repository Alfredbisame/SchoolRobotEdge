import { ComponentType } from 'react';
import { Scan, Smartphone, Zap } from 'lucide-react';

export interface VideoFeature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
}

export const VIDEO_FEATURES: VideoFeature[] = [
  {
    icon: Scan,
    title: "Instant Recognition",
    description: "AI detection and verification in under 1 second",
    gradient: "from-green-500/20 to-violet-500/20",
    iconColor: "text-green-400"
  },
  {
    icon: Smartphone,
    title: "Parent Notification",
    description: "Automatic alerts sent via WhatsApp/SMS",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400"
  },
  {
    icon: Zap,
    title: "Zero Setup",
    description: "Deploy instantly with existing smartphones",
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-purple-400"
  }
];

export const VIDEO_CONTAINER_STYLES = "relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 shadow-2xl h-[300px] md:h-[400px]";
export const VIDEO_OVERLAY_STYLES = "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none";
export const VIDEO_PLAY_BUTTON_STYLES = "absolute inset-0 flex items-center justify-center group";
export const VIDEO_CONTROLS_STYLES = "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent";
export const VIDEO_PROGRESS_BAR_STYLES = "w-full bg-white/20 rounded-full h-1.5 mt-2";
export const VIDEO_FEATURES_GRID_STYLES = "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12";
export const VIDEO_FEATURE_CARD_STYLES = "group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
} as const;

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
