import React from 'react';
import { useForm, SubmitHandler, FieldError } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FormData, FORM_FIELDS } from './types';


interface ContactFormProps {
  onSubmit: SubmitHandler<FormData>;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  onResetSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isSubmitting,
  isSubmitSuccessful,
  onResetSuccess = () => {}
}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const handleFormSubmit = async (data: FormData) => {
    try {
      await onSubmit(data);
      // Reset form after successful submission
      reset();
    } catch (error) {
      // Handle any submission errors here if needed
      console.error('Form submission error:', error);
    }
  };

  const handleReset = () => {
    reset();
    onResetSuccess();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full"
    >
      <div className="relative p-8 overflow-hidden border shadow-2xl bg-white/10 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl border-white/10">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-64 h-64 rounded-full bg-violet-500/10 -top-32 -left-32 filter blur-3xl animate-pulse"></div>
          <div className="absolute w-64 h-64 delay-1000 rounded-full bg-indigo-500/10 -bottom-32 -right-32 filter blur-3xl animate-pulse"></div>
        </div>
        
        {isSubmitSuccessful ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center border bg-gradient-to-br from-green-500/5 to-emerald-500/10 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm rounded-xl border-green-500/20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/30">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-300">We'll get back to you within 24 hours.</p>
            <motion.button
              onClick={handleReset}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 mt-6 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a message</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">We'll respond as soon as possible</p>
            </div>
            
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {FORM_FIELDS.slice(0, 2).map((field) => {
                  const error = errors[field.id as keyof FormData] as FieldError | undefined;
                  return (
                    <div key={field.id} className="relative">
                      <input
                        type={field.type}
                        id={field.id}
                        className={`w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 border ${
                          error 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-200/70 dark:border-gray-700/50 hover:border-violet-400/50 focus:ring-violet-500/50'
                        } rounded-xl focus:ring-2 focus:border-transparent backdrop-blur-sm`}
                        placeholder={field.placeholder}
                        {...register(field.id as keyof FormData, field.validation)}
                      />
                      {error && (
                        <p className="absolute mt-1 text-sm text-red-500">
                          {error.message}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {FORM_FIELDS.slice(2).map((field) => {
                const error = errors[field.id as keyof FormData] as FieldError | undefined;
                return (
                  <div key={field.id} className="relative">
                    {field.type === 'textarea' ? (
                      <>
                        <textarea
                          id={field.id}
                          rows={4}
                          className={`w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 border ${
                            error 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-gray-200/70 dark:border-gray-700/50 hover:border-violet-400/50 focus:ring-violet-500/50'
                          } rounded-xl focus:ring-2 focus:border-transparent backdrop-blur-sm resize-none`}
                          placeholder={field.placeholder}
                          {...register(field.id as keyof FormData, field.validation)}
                        />
                        {error && (
                          <p className="absolute mt-1 text-sm text-red-500">
                            {error.message}
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <input
                          type={field.type}
                          id={field.id}
                          className={`w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 border ${
                            error 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-gray-200/70 dark:border-gray-700/50 hover:border-violet-400/50 focus:ring-violet-500/50'
                          } rounded-xl focus:ring-2 focus:border-transparent backdrop-blur-sm`}
                          placeholder={field.placeholder}
                          {...register(field.id as keyof FormData, field.validation)}
                        />
                        {error && (
                          <p className="absolute mt-1 text-sm text-red-500">
                            {error.message}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
              
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="pt-2"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative flex items-center justify-center w-full px-6 py-4 space-x-2 overflow-hidden text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 mr-2 -ml-1 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 w-0 transition-all duration-300 bg-white/20 group-hover:w-full"></span>
                </button>
              </motion.div>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
};
