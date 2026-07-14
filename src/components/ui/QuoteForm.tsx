import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle, Hammer, ShieldAlert, ClipboardCheck, Building, Droplets, User, Phone, Mail, MapPin, Calendar, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface QuoteFormProps {
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceNeeded: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const services = [
    { id: 'Replacement', label: 'Roof Replacement', icon: Hammer, desc: 'Complete structural tear-off & shingle install' },
    { id: 'Repair', label: 'Precision Repair', icon: ShieldAlert, desc: 'Targeted moisture tracing & leak remedies' },
    { id: 'Inspection', label: 'Forensic Inspection', icon: ClipboardCheck, desc: '42-point checklist with full drone mapping' },
    { id: 'Commercial', label: 'Commercial Roofing', icon: Building, desc: 'Low-slope TPO systems & membrane coatings' },
    { id: 'Gutters', label: 'Gutters & Flashing', icon: Droplets, desc: 'Seamless copper & custom extruded guards' }
  ];

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.serviceNeeded) {
        newErrors.serviceNeeded = 'Please select a service option to proceed.';
      }
    } else if (currentStep === 2) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required.';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please provide a valid email address.';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required.';
      } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number (e.g. (555) 123-4567).';
      }
    } else if (currentStep === 3) {
      if (!formData.address.trim()) newErrors.address = 'Property address is required.';
      if (!formData.preferredTime) newErrors.preferredTime = 'Please select a preferred contact time.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSelectService = (id: string) => {
    setFormData((prev) => ({ ...prev, serviceNeeded: id }));
    setErrors((prev) => ({ ...prev, serviceNeeded: '' }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Generate a unique inspection ticket number
      const generatedTicket = `AST-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }
  };

  const progressPercent = (step / 3) * 100;

  return (
    <div className="w-full bg-brand-light-pure border border-brand-border p-6 md:p-10 rounded-sm shadow-sm max-w-2xl mx-auto font-sans">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <div key="form-container">
            {/* Form Header */}
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent">
                Step {step} of 3
              </span>
              <h3 className="text-2xl font-serif font-medium text-brand-primary mt-1">
                {step === 1 && 'Select Your Project System'}
                {step === 2 && 'Primary Contact Credentials'}
                {step === 3 && 'Property Details & Scheduling'}
              </h3>
              <p className="text-xs text-brand-secondary mt-1">
                {step === 1 && 'Select the category that best matches your structural project requirements.'}
                {step === 2 && 'Provide your credentials so our estimators can correspond directly.'}
                {step === 3 && 'Give details regarding the site location and your convenient availability.'}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-brand-border h-1 mt-6 rounded-full overflow-hidden">
                <motion.div
                  className="bg-brand-accent h-full"
                  initial={{ width: '33.3%' }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Error Banner */}
            {Object.keys(errors).length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-brand-error/20 flex items-start gap-3 rounded-sm">
                <AlertCircle className="h-5 w-5 text-brand-error flex-shrink-0 mt-0.5" />
                <div className="text-xs text-brand-error font-medium">
                  {Object.values(errors).map((err, i) => (
                    <p key={i}>{err}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Steps Rendering */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-3">
                  {services.map((srv) => {
                    const IconComp = srv.icon;
                    const isSelected = formData.serviceNeeded === srv.id;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => handleSelectService(srv.id)}
                        className={`w-full flex items-center text-left p-4 border rounded-sm transition-all duration-300 group cursor-pointer ${
                          isSelected
                            ? 'border-brand-accent bg-brand-accent-light/50'
                            : 'border-brand-border hover:border-brand-accent/50 bg-transparent'
                        }`}
                      >
                        <div className={`p-3 rounded-sm mr-4 transition-colors ${
                          isSelected ? 'bg-brand-accent text-brand-light-pure' : 'bg-brand-light text-brand-secondary group-hover:text-brand-accent'
                        }`}>
                          <IconComp className="h-5 w-5 stroke-[1.5]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-brand-primary">{srv.label}</h4>
                          <p className="text-xs text-brand-secondary mt-0.5">{srv.desc}</p>
                        </div>
                        <div className={`h-4 w-4 rounded-full border flex items-center justify-center transition-all ${
                          isSelected ? 'border-brand-accent bg-brand-accent' : 'border-brand-border'
                        }`}>
                          {isSelected && <div className="h-2 w-2 rounded-full bg-brand-light-pure" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-brand-accent" /> Full Legal Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Harrison Sterling"
                      className="w-full px-4 py-3 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-brand-accent" /> Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="harrison@sterlingcorp.com"
                        className="w-full px-4 py-3 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-brand-accent" /> Telephone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-brand-accent" /> Property Site Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="e.g. 1420 Westmount Heights Dr, Section 4"
                      className="w-full px-4 py-3 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-brand-accent" /> Preferred Contact Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-brand-light-pure transition-colors cursor-pointer"
                    >
                      <option value="">-- Select Convenient Availability --</option>
                      <option value="Morning">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="Afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                      <option value="Evening">Evening (5:00 PM - 7:00 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5 text-brand-accent" /> Project Notes & Context (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Please add any specific context, roof age, active leak history, etc."
                      className="w-full px-4 py-3 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handlePrev}
                    className="flex items-center gap-1.5"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </Button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <Button
                    type="button"
                    variant="accent"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 ml-auto"
                  >
                    Next Step <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="accent"
                    className="flex items-center gap-1.5 ml-auto font-semibold"
                  >
                    Request Inspection <CheckCircle className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <motion.div
            key="success-container"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-8 font-sans"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-success text-brand-light-pure mb-6">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-serif font-semibold text-brand-primary mb-2">
              Inspection Ticket Booked
            </h3>
            <p className="text-sm text-brand-secondary max-w-md mx-auto mb-8">
              Thank you, <span className="font-semibold text-brand-primary">{formData.name}</span>. Your premium roofing assessment ticket has been successfully registered. Our forensic team will reach out shortly.
            </p>

            {/* Ticket Receipt Box */}
            <div className="bg-brand-light border border-brand-border p-6 text-left space-y-3 max-w-md mx-auto rounded-sm mb-8 font-mono text-xs">
              <div className="flex justify-between border-b border-brand-border pb-2 mb-2 font-semibold">
                <span className="text-brand-accent">FORENSIC TICKET:</span>
                <span className="text-brand-primary">{ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-secondary">System Selected:</span>
                <span className="text-brand-primary font-semibold">{formData.serviceNeeded} Service</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-secondary">Site Location:</span>
                <span className="text-brand-primary truncate max-w-[200px]" title={formData.address}>{formData.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-secondary">Contact Phone:</span>
                <span className="text-brand-primary">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-secondary">Target Availability:</span>
                <span className="text-brand-primary font-semibold">{formData.preferredTime}</span>
              </div>
              <div className="flex justify-between border-t border-brand-border pt-2 mt-2">
                <span className="text-brand-secondary">Estimated Response:</span>
                <span className="text-brand-success font-semibold flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> Under 2 Hours
                </span>
              </div>
            </div>

            <Button
              variant="secondary"
              onClick={() => {
                setStep(1);
                setFormData({
                  serviceNeeded: '',
                  name: '',
                  email: '',
                  phone: '',
                  address: '',
                  preferredTime: '',
                  message: ''
                });
                setSubmitted(false);
              }}
              className="text-xs font-mono uppercase tracking-widest text-brand-secondary hover:text-brand-accent"
            >
              Submit Another Request
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
