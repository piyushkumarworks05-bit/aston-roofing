import React, { useState } from 'react';
import { SERVICES } from '../data/roofingData';
import { Hammer, ShieldAlert, ClipboardCheck, Building, Droplets, CloudLightning, Check, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ServicesProps {
  openQuoteModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ openQuoteModal }) => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const getIcon = (name: string, className: string = 'h-5 w-5') => {
    switch (name) {
      case 'Hammer': return <Hammer className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'ClipboardCheck': return <ClipboardCheck className={className} />;
      case 'Building': return <Building className={className} />;
      case 'Droplets': return <Droplets className={className} />;
      case 'CloudLightning': return <CloudLightning className={className} />;
      default: return <Hammer className={className} />;
    }
  };

  const activeService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <div className="bg-brand-light font-sans pt-24 min-h-screen">
      
      {/* Editorial Header */}
      <section className="py-16 md:py-24 bg-brand-primary text-brand-light-pure border-b border-brand-secondary">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-bold block">
            ESTATE CLASSIFICATIONS
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight">
            Our Architectural Services
          </h1>
          <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
          <p className="text-sm md:text-base text-brand-border/70 max-w-xl mx-auto leading-relaxed">
            Aston Roofing designs and installs premium weatherproofing barriers utilizing gold-standard shingle, slate, copper, and TPO membranes. Fully certified to issue lifetime manufacturers guarantees.
          </p>
        </div>
      </section>

      {/* Interactive Tabs and Detailed Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Floating Sidebar Index Selector */}
        <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-28 h-fit">
          <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-secondary font-bold mb-4 px-2">
            Select Service System
          </span>
          <div className="flex flex-col gap-1">
            {SERVICES.map((srv) => (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`w-full flex items-center gap-3.5 p-4 text-left border rounded-sm transition-all duration-300 group cursor-pointer ${
                  activeTab === srv.id
                    ? 'border-brand-accent bg-brand-light-pure text-brand-accent shadow-sm'
                    : 'border-transparent text-brand-secondary hover:text-brand-primary hover:bg-brand-border/10'
                }`}
              >
                <div className={`p-2 rounded-sm transition-colors ${
                  activeTab === srv.id ? 'bg-brand-accent text-brand-light-pure' : 'bg-brand-border/40 text-brand-secondary group-hover:text-brand-primary'
                }`}>
                  {getIcon(srv.icon, 'h-4 w-4 stroke-[1.5]')}
                </div>
                <span className="text-sm font-semibold tracking-wide">
                  {srv.title}
                </span>
              </button>
            ))}
          </div>

          <div className="border border-brand-border p-6 rounded-sm bg-brand-light-pure mt-8 space-y-4">
            <div className="flex items-center gap-2 text-brand-accent">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider font-mono">Guaranteed Safety</span>
            </div>
            <p className="text-xs text-brand-secondary leading-relaxed">
              All listed services are executed by in-house Aston Roofing master specialists. Fully insured up to $5M for physical, water, and structural liabilities.
            </p>
            <a
              href="tel:5551234567"
              className="block text-xs font-mono font-bold text-brand-primary hover:text-brand-accent transition-colors pt-2 border-t border-brand-border"
            >
              Emergency Storm Hotline: (555) 123-4567
            </a>
          </div>
        </div>

        {/* Dynamic Detail Card Canvas */}
        <div className="lg:col-span-8 bg-brand-light-pure border border-brand-border p-6 md:p-12 rounded-sm shadow-sm space-y-8">
          
          {/* Main Visual Header */}
          <div className="relative aspect-video w-full overflow-hidden border border-brand-border rounded-sm bg-brand-primary">
            <img
              src={activeService.image}
              alt={activeService.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-4 text-brand-light-pure">
              <div className="p-3 bg-brand-accent text-brand-light-pure rounded-sm">
                {getIcon(activeService.icon, 'h-6 w-6 stroke-[1.5]')}
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">ACTIVE CONFIGURATION</span>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-none mt-1">{activeService.title}</h2>
              </div>
            </div>
          </div>

          {/* Deep Narrative Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-brand-primary">Structural Integrity Specifications</h3>
            <p className="text-sm md:text-base text-brand-secondary leading-relaxed font-sans">
              {activeService.longDesc}
            </p>
          </div>

          {/* Engineering Specifications (Bullet Points) */}
          <div className="space-y-4 pt-4 border-t border-brand-border">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">Standard Spec Benchmarks</h4>
            <ul className="space-y-3.5">
              {activeService.bulletPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-brand-accent-light text-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-brand-primary font-medium font-sans leading-tight">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Call to Action Frame */}
          <div className="p-6 md:p-8 bg-brand-light border border-brand-border rounded-sm flex flex-col md:flex-row justify-between items-center gap-6 pt-8 mt-8">
            <div className="space-y-1 text-center md:text-left">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">INSPECTION PORTAL</span>
              <h4 className="text-sm font-serif font-bold text-brand-primary">Request an inspection for this service?</h4>
              <p className="text-xs text-brand-secondary">We deliver 42-point forensic reports within 24 hours of dispatch.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="accent"
                onClick={openQuoteModal}
                className="text-xs uppercase tracking-wider font-semibold py-3 flex items-center justify-center gap-1.5"
              >
                Book Inspection <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center font-sans font-semibold text-xs border border-brand-border bg-brand-light-pure px-4 py-3 text-brand-primary rounded-sm hover:bg-brand-border/40 transition-all text-center uppercase tracking-wider"
              >
                Dial Office
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* Trust Quote CTA before footer */}
      <section className="bg-brand-primary text-brand-light-pure py-16 text-center border-t border-brand-secondary">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block">UNBIASED GUIDANCE</span>
          <p className="text-base md:text-lg italic font-serif text-brand-border/90">
            "We never propose a full roof replacement if a precise flash repair or ridge restoration is structurally optimal. Integrity remains our primary asset."
          </p>
          <div className="text-xs uppercase tracking-widest font-bold text-brand-accent font-mono mt-2">— ROBERT ASTON, FOUNDER</div>
        </div>
      </section>

    </div>
  );
};
