import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Send, AlertCircle, Mail, User, Info, MessageSquare } from 'lucide-react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Please provide a message description.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-brand-light-pure border border-brand-border p-6 md:p-8 rounded-sm shadow-sm max-w-xl font-sans">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Form Header */}
          <div>
            <h4 className="text-xl font-serif font-medium text-brand-primary">Direct Inquiry Portal</h4>
            <p className="text-xs text-brand-secondary mt-1">
              Please transmit your structural or general inquiries below. We respond to all written items within 2 hours.
            </p>
          </div>

          {/* Validation Banner */}
          {Object.keys(errors).length > 0 && (
            <div className="p-3 bg-red-50 border border-brand-error/20 flex items-start gap-2.5 rounded-sm">
              <AlertCircle className="h-4.5 w-4.5 text-brand-error flex-shrink-0 mt-0.5" />
              <div className="text-xs text-brand-error font-medium">
                Please complete all required fields accurately.
              </div>
            </div>
          )}

          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-1.5 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-brand-accent" /> Full Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Harrison Sterling"
              className="w-full px-4 py-2.5 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors"
            />
            {errors.name && <span className="text-xs text-brand-error mt-1 block">{errors.name}</span>}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-1.5 flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-brand-accent" /> Email Address
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="harrison@sterlingcorp.com"
              className="w-full px-4 py-2.5 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors"
            />
            {errors.email && <span className="text-xs text-brand-error mt-1 block">{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-1.5 flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5 text-brand-accent" /> Inquiry Subject
            </label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="e.g. Historic Estate Appraisal Request"
              className="w-full px-4 py-2.5 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors"
            />
            {errors.subject && <span className="text-xs text-brand-error mt-1 block">{errors.subject}</span>}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-brand-accent" /> Deep Inquiry Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Please elaborate on your questions or project particulars."
              className="w-full px-4 py-2.5 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors resize-none"
            />
            {errors.message && <span className="text-xs text-brand-error mt-1 block">{errors.message}</span>}
          </div>

          <Button
            type="submit"
            variant="accent"
            className="w-full flex items-center justify-center gap-2 mt-2 font-semibold"
          >
            Transmit Inquiry <Send className="h-4 w-4" />
          </Button>
        </form>
      ) : (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-6 font-sans"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-success text-brand-light-pure mb-4">
            <CheckCircle className="h-6 w-6" />
          </div>
          <h4 className="text-xl font-serif font-semibold text-brand-primary mb-1">Inquiry Transmitted Successfully</h4>
          <p className="text-xs text-brand-secondary max-w-sm mx-auto mb-6">
            Thank you, {formData.name}. Your message regarding "{formData.subject}" has been successfully securely processed.
          </p>
          <Button
            variant="secondary"
            onClick={() => {
              setFormData({ name: '', email: '', subject: '', message: '' });
              setSubmitted(false);
            }}
            className="text-xs font-semibold px-4 py-2"
          >
            Send Another Message
          </Button>
        </motion.div>
      )}
    </div>
  );
};
