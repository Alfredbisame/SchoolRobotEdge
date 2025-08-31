import { ComponentType } from 'react';
import { ShieldCheck, Users, School, Fingerprint } from 'lucide-react';

export interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

export interface HeroFeature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}

export const HERO_FEATURES: HeroFeature[] = [
  {
    icon: ShieldCheck,
    title: "Military-Grade Security",
    description: "End-to-end encryption and biometric verification for maximum child protection",
    delay: 0
  },
  {
    icon: Fingerprint,
    title: "Smart Attendance",
    description: "Real-time tracking with facial recognition and RFID technology",
    delay: 1
  },
  {
    icon: Users,
    title: "Parent Portal",
    description: "Instant notifications and live updates about your child's school activities",
    delay: 2
  },
  {
    icon: School,
    title: "School ERP",
    description: "Comprehensive school management system included at no extra cost",
    delay: 3
  }
];

export const GRADIENT_BG = "bg-gradient-to-br from-gray-950 via-violet-950 to-emerald-950";

export const GRID_BG = {
  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  backgroundSize: '60px 60px'
};
