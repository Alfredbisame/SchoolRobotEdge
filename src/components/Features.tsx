import React from 'react';
import { 
  Users, 
  CreditCard, 
  GraduationCap, 
  MessageCircle, 
  BookOpen, 
  Calculator,
  FileText,
  Calendar
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Features: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    { icon: Users, title: 'Student Records', description: 'Comprehensive student information management' },
    { icon: CreditCard, title: 'Payroll System', description: 'Automated staff payment processing' },
    { icon: Calculator, title: 'Fee Management', description: 'Track and manage school fees efficiently' },
    { icon: GraduationCap, title: 'Exam Management', description: 'Create and manage exams and results' },
    { icon: MessageCircle, title: 'Messaging System', description: 'Direct communication with parents' },
    { icon: BookOpen, title: 'Library Management', description: 'Track books and reading progress' },
    { icon: FileText, title: 'Report Generation', description: 'Automated reporting and analytics' },
    { icon: Calendar, title: 'Event Planning', description: 'Schedule and manage school events' }
  ];

  return (
    <section 
      id="features"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Beyond Security: 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-500 ml-3">
                Free ERP Add-On
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get a complete school management system absolutely free with your security package
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-violet-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-2">100% FREE</h3>
              <p className="text-green-50">Complete ERP system included with every security package</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;