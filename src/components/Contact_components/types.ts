import { ComponentType } from 'react';
import { Mail, Phone, MapPin, Users, MessageSquare } from 'lucide-react';

export interface ContactInfoCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  value: string;
  delay?: number;
}

export const CONTACT_METHODS = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@schoolrobot.com',
    delay: 0.1
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+233 55 123 4567',
    delay: 0.2
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Accra, Ghana',
    delay: 0.3
  }
];

export const PARTNERSHIP_OPPORTUNITIES = [
  'Banks & Financial Institutions',
  'Telecommunications Companies',
  'NGOs & Educational Organizations',
  'Technology Partners'
];

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const FORM_FIELDS = [
  {
    id: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Your full name',
    validation: { required: 'Name is required' },
    icon: Users
  },
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'your.email@gmail.com',
    validation: { 
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address'
      }
    },
    icon: Mail
  },
  {
    id: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'How can we help?',
    validation: { required: 'Subject is required' },
    icon: MessageSquare
  },
  {
    id: 'message',
    label: 'Your Message',
    type: 'textarea',
    placeholder: 'Tell us more about your inquiry...',
    validation: { 
      required: 'Message is required',
      minLength: { value: 10, message: 'Message must be at least 10 characters' }
    }
  }
];
