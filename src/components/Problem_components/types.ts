import { ComponentType } from 'react';
import { Clock, AlertTriangle, Shield, User, X } from 'lucide-react';

export interface ProblemCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  delay?: number;
}

export const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Security Gaps",
    description: "Traditional systems can't prevent unauthorized access or track who's on campus.",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    delay: 0.1
  },
  {
    icon: Clock,
    title: "Outdated Systems",
    description: "Traditional ERPs focus on administration but neglect the most important aspect: child safety.",
    iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "Limited Visibility",
    description: "Parents have no real-time information about their child's school attendance.",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    delay: 0.3
  },
  {
    icon: User,
    title: "Manual Processes",
    description: "Time-consuming manual attendance taking is prone to errors and delays.",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    delay: 0.4
  }
];

export const ALERT_CARD = {
  title: "Where is my child?",
  description: "The painful reality of outdated school security systems",
  icon: X,
  iconColor: "text-red-500"
};
