import React from 'react';
import { ContactForm } from '../components/ui/ContactForm';
import { Phone, Mail, MapPin, Clock, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ContactProps {
  openQuoteModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ openQuoteModal }) => {
  return (
    <div className="bg-brand-light font-sans pt-24 min-h-screen">
      
      {/* Editorial Title Header */}
      <section className="py-16 md:py-24 bg-brand-primary text-brand-light-pure border-b border-brand-secondary">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-bold block">
            DIRECT CHANNEL CORRESPONDENCE
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight">
            Connect With Our Office
          </h1>
          <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
          <p className="text-sm md:text-base text-brand-border/70 max-w-xl mx-auto leading-relaxed">
            Inquire directly regarding architectural slate upgrades, flat-roof commercial estimates, or urgent post-storm forensic auditing.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Coordinates vs Form Canvas */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest font-bold">BRANCH DETAILS</span>
            <h2 className="text-2xl md:text-3.5xl font-serif font-medium text-brand-primary tracking-tight">HQ Coordinates</h2>
            <p className="text-xs text-brand-secondary leading-relaxed">
              We respond to all written digital inquiries in under 2 hours. Our central regional scheduling foreman manages dispatch priorities.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-accent-light text-brand-accent rounded-sm mt-0.5">
                <MapPin className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs uppercase font-mono tracking-wider text-brand-accent font-bold">Physical Office</span>
                <p className="text-sm text-brand-primary font-medium leading-relaxed">
                  Aston Roofing Headquarters<br />
                  1200 High-Ridge Boulevard, Suite 400<br />
                  Metropolitan, MH 60001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-accent-light text-brand-accent rounded-sm mt-0.5">
                <Phone className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs uppercase font-mono tracking-wider text-brand-accent font-bold">Operational Lines</span>
                <p className="text-sm text-brand-primary font-medium">
                  Main Line: <a href="tel:5551234567" className="hover:text-brand-accent transition-colors font-bold font-mono">(555) 123-4567</a><br />
                  Storm Emergency: <a href="tel:5551234567" className="hover:text-brand-accent transition-colors font-bold font-mono text-brand-error">(555) 123-4567</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-accent-light text-brand-accent rounded-sm mt-0.5">
                <Mail className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs uppercase font-mono tracking-wider text-brand-accent font-bold">Electronic Mail</span>
                <p className="text-sm text-brand-primary font-medium">
                  Forensic Inquiries: <a href="mailto:forensics@astonroofing.com" className="hover:text-brand-accent transition-colors font-mono text-xs">forensics@astonroofing.com</a><br />
                  Commercial Estimations: <a href="mailto:commercial@astonroofing.com" className="hover:text-brand-accent transition-colors font-mono text-xs">commercial@astonroofing.com</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-accent-light text-brand-accent rounded-sm mt-0.5">
                <Clock className="h-5 w-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs uppercase font-mono tracking-wider text-brand-accent font-bold">Operational Timetable</span>
                <p className="text-sm text-brand-primary font-medium leading-relaxed">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 3:00 PM<br />
                  Emergency Services: 24 Hours / 7 Days
                </p>
              </div>
            </div>
          </div>

          {/* Licenses details box */}
          <div className="border border-brand-border p-6 rounded-sm bg-brand-light-pure space-y-4">
            <div className="flex items-center gap-2 text-brand-accent">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider font-mono">Fully Licensed & Vetted</span>
            </div>
            <p className="text-xs text-brand-secondary leading-relaxed">
              We operate under Class A General Roofing credentials (Lic #ROOF-2026-994A1). Bonded and backed by $5,000,000 commercial liability policies.
            </p>
          </div>

        </div>

        {/* Right Column: Interactive Message Portal */}
        <div className="lg:col-span-7 flex justify-center">
          <ContactForm />
        </div>

      </section>

      {/* Frequently Answered Support FAQ section */}
      <section className="bg-brand-light-pure py-20 px-4 md:px-8 border-y border-brand-border">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block">DIRECT RESOLUTION</span>
            <h2 className="text-2xl md:text-4xl font-serif font-medium text-brand-primary tracking-tight">Need Immediate Scheduling?</h2>
            <div className="h-0.5 w-8 bg-brand-accent mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2.5">
              <h4 className="text-base font-serif font-semibold text-brand-primary flex items-center gap-2">
                <HelpCircle className="h-4.5 w-4.5 text-brand-accent flex-shrink-0" />
                How soon can a crew arrive for an active emergency leak?
              </h4>
              <p className="text-xs text-brand-secondary leading-relaxed font-sans pl-6">
                Our active storm and emergency leak response dispatch operates 24/7/365. For standard residential structures within our local bounds, we secure emergency weatherproofing tarps within 2 to 4 hours of your call.
              </p>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-base font-serif font-semibold text-brand-primary flex items-center gap-2">
                <HelpCircle className="h-4.5 w-4.5 text-brand-accent flex-shrink-0" />
                Is there any initial cost for forensic inspections?
              </h4>
              <p className="text-xs text-brand-secondary leading-relaxed font-sans pl-6">
                Absolutely none. We provide our extensive, high-definition 42-point attic, flashing, drone-mapping, and moisture inspections entirely free of charge to homeowners. We believe in earning your trust on the roof first.
              </p>
            </div>
          </div>

          <div className="p-6 bg-brand-light border border-brand-border rounded-sm flex flex-col md:flex-row justify-between items-center gap-6 pt-8 max-w-3xl mx-auto">
            <div className="space-y-1 text-center md:text-left">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">AUTOMATED DISPATCH</span>
              <h4 className="text-sm font-serif font-bold text-brand-primary">Already prepared to schedule?</h4>
              <p className="text-xs text-brand-secondary">Submit your booking details to secure an inspection ticket receipt.</p>
            </div>
            <Button
              variant="accent"
              onClick={openQuoteModal}
              className="w-full md:w-auto text-xs uppercase tracking-widest font-bold py-3 flex items-center justify-center gap-1.5"
            >
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
};
