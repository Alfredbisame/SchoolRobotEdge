import { ComponentType } from 'react';
import { Clock, Shield, Users, Smartphone } from 'lucide-react';

export interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  borderColor: string;
  bgColor: string;
  iconColor: string;
  delay?: number;
}

export const SOLUTION_FEATURES = [
  {
    icon: Clock,
    title: "No Cards, No Badges",
    description: "Seamless entry without physical IDs or badges",
    borderColor: "border-green-200 dark:border-green-500/30",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    delay: 0.1
  },
  {
    icon: Smartphone,
    title: "Instant Parent Alerts",
    description: "Real-time WhatsApp/SMS notifications to parents",
    borderColor: "border-blue-200 dark:border-blue-500/30",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Advanced facial recognition for secure access",
    borderColor: "border-purple-200 dark:border-purple-500/30",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    delay: 0.3
  },
  {
    icon: Users,
    title: "Real-time Tracking",
    description: "Monitor student movement in real-time",
    borderColor: "border-amber-200 dark:border-amber-500/30",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    delay: 0.4
  }
];

export const PEACE_OF_MIND = {
  title: "Peace of Mind Guarantee",
  description: "Know exactly when your child arrives and leaves school, automatically.",
  gradient: "from-green-500 to-violet-500"
};
