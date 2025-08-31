import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_METHODS, PARTNERSHIP_OPPORTUNITIES, type FormData } from './Contact_components/types';
import { ContactInfoCard } from './Contact_components/ContactInfoCard';
import { PartnershipOpportunities } from './Contact_components/PartnershipOpportunities';
import { ContactForm } from './Contact_components/ContactForm';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setIsSubmitSuccessful(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitSuccessful(false);
      }, 5000);
      
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 bg-green-500/20 rounded-full -top-48 -left-48 filter blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-violet-500/20 rounded-full -bottom-48 -right-48 filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent via-transparent to-white/10 dark:to-black/20"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Get in
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-violet-500">
              Touch
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
          Partner with us to create a safer future for Ghana's children. We're here to help you get started.
          </p>
        </motion.div>

        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <PartnershipOpportunities opportunities={PARTNERSHIP_OPPORTUNITIES} />
            <ContactForm 
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
              isSubmitSuccessful={isSubmitSuccessful}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_METHODS.map((method, index) => (
              <ContactInfoCard key={index} {...method} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Contact;