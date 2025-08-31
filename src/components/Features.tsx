import React, { useRef } from 'react';
import { 
  Users, 
  CreditCard, 
  GraduationCap, 
  MessageCircle, 
  BookOpen, 
  Calculator,
  FileText,
  Calendar,
  Brain,
  Cpu,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { useInView } from 'framer-motion';
import FeatureCard from './Features_components/FeatureCard';
import FeaturesHeader from './Features_components/FeaturesHeader';
import FreeBanner from './Features_components/FreeBanner';

const Features: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = [
    { 
      icon: Users, 
      title: 'Student Records', 
      description: 'Comprehensive student information management with AI-powered analytics and insights' 
    },
    { 
      icon: CreditCard, 
      title: 'Payroll System', 
      description: 'Automated staff payment processing with tax calculations and reporting' 
    },
    { 
      icon: Calculator, 
      title: 'Fee Management', 
      description: 'Smart fee tracking, reminders, and automated payment processing' 
    },
    { 
      icon: GraduationCap, 
      title: 'Exam Management', 
      description: 'Create, schedule, and analyze exams with automated grading and performance tracking' 
    },
    { 
      icon: MessageCircle, 
      title: 'Messaging System', 
      description: 'Secure real-time communication between staff, students, and parents' 
    },
    { 
      icon: BookOpen, 
      title: 'Library Management', 
      description: 'Digital catalog, book tracking, and reading progress monitoring' 
    },
    { 
      icon: FileText, 
      title: 'Report Generation', 
      description: 'Automated reporting and analytics with exportable formats' 
    },
    { 
      icon: Calendar, 
      title: 'Event Planning', 
      description: 'Interactive calendar with automated reminders and attendance tracking' 
    },
    { 
      icon: Brain, 
      title: 'AI Insights', 
      description: 'Predictive analytics and personalized recommendations for students' 
    },
    { 
      icon: Cpu, 
      title: 'Automation', 
      description: 'Streamline administrative tasks with intelligent automation' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Security', 
      description: 'Enterprise-grade security with role-based access control' 
    },
    { 
      icon: Zap, 
      title: 'Performance', 
      description: 'Lightning-fast performance with cloud-based infrastructure' 
    }
  ];

  return (
    <section 
      ref={ref}
      id="features"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/5 dark:bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturesHeader inView={isInView} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              inView={isInView}
            />
          ))}
        </div>

        <FreeBanner />
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent dark:from-black/50 pointer-events-none" />
    </section>
  );
};

export default Features;