import React from 'react';
import { Shield, Mail, Phone, Clock, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  openQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, openQuoteModal }) => {
  const handleNavClick = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-brand-border border-t border-brand-secondary/80 font-sans pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Upper Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
            >
              <div className="h-10 w-10 flex items-center justify-center bg-brand-accent text-brand-light-pure rounded-sm transition-transform duration-300 group-hover:scale-105">
                <Shield className="h-5 w-5 fill-current" />
              </div>
              <div>
                <span className="block text-lg font-serif font-semibold tracking-wider text-brand-light-pure leading-none">
                  ASTON
                </span>
                <span className="block text-[9px] font-mono tracking-[0.25em] text-brand-accent uppercase mt-0.5 leading-none">
                  ROOFING SYSTEMS
                </span>
              </div>
            </button>

            <p className="text-xs text-brand-border/70 leading-relaxed">
              Bespoke structural roofing systems engineered for residential and commercial estates. Fully bonded, licensed, and registered to complete high-end architectural systems backed by our lifetime workmanship guarantee.
            </p>

            {/* Certifications Badge Rows */}
            <div className="pt-2">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-accent mb-2.5 font-bold">
                Approved Manufacturers
              </span>
              <div className="flex flex-wrap gap-3 items-center opacity-60 hover:opacity-95 transition-opacity duration-300">
                <div className="border border-brand-border/20 px-2 py-1 text-[9px] font-mono rounded-sm bg-brand-secondary text-brand-light-pure">
                  GAF MASTER ELITE®
                </div>
                <div className="border border-brand-border/20 px-2 py-1 text-[9px] font-mono rounded-sm bg-brand-secondary text-brand-light-pure">
                  CERTAINTEED SELECT®
                </div>
                <div className="border border-brand-border/20 px-2 py-1 text-[9px] font-mono rounded-sm bg-brand-secondary text-brand-light-pure">
                  BBB A+ ACCREDITED
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-5 font-bold">
              Architectural Divisions
            </h4>
            <ul className="space-y-3 text-xs font-semibold">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-brand-accent transition-colors cursor-pointer">
                  Estate Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-brand-accent transition-colors cursor-pointer">
                  Materials & Services Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-brand-accent transition-colors cursor-pointer">
                  Before & After Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-brand-accent transition-colors cursor-pointer">
                  Team, Values & Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('service-areas')} className="hover:text-brand-accent transition-colors cursor-pointer">
                  SEO Locations Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog')} className="hover:text-brand-accent transition-colors cursor-pointer">
                  Intel & Shingle Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-brand-accent transition-colors cursor-pointer">
                  Inquire Directly
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Active Service Centers (SEO Coordinates) */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-5 font-bold">
              Locations Serviced
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button onClick={() => handleNavClick('service-areas')} className="hover:text-brand-accent transition-colors text-left block cursor-pointer">
                  <span className="font-semibold block text-brand-light-pure">Metropolitan Area Branch</span>
                  <span className="text-[10px] text-brand-border/60 font-mono">ZIP 60001 · Full Commercial Hub</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('service-areas')} className="hover:text-brand-accent transition-colors text-left block cursor-pointer">
                  <span className="font-semibold block text-brand-light-pure">Westmount Heights Branch</span>
                  <span className="text-[10px] text-brand-border/60 font-mono">ZIP 60201 · Slate Specialists</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('service-areas')} className="hover:text-brand-accent transition-colors text-left block cursor-pointer">
                  <span className="font-semibold block text-brand-light-pure">Forest Hill Valley Division</span>
                  <span className="text-[10px] text-brand-border/60 font-mono">ZIP 60301 · Leak Moisture Auditing</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('service-areas')} className="hover:text-brand-accent transition-colors text-left block cursor-pointer">
                  <span className="font-semibold block text-brand-light-pure">Summit Alpine Ridge Section</span>
                  <span className="text-[10px] text-brand-border/60 font-mono">ZIP 60510 · High Snow Rated Systems</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Coordinates */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-5 font-bold">
              Direct Coordinates
            </h4>
            <ul className="space-y-3.5 text-xs text-brand-border/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>
                  Aston Roofing Headquarters<br />
                  1200 High-Ridge Boulevard, Suite 400<br />
                  Metropolitan, MH 60001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-brand-accent flex-shrink-0" />
                <a href="tel:5551234567" className="hover:text-brand-accent transition-colors font-semibold">
                  (555) 123-4567 (Main Line)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-brand-accent flex-shrink-0" />
                <a href="mailto:forensics@astonroofing.com" className="hover:text-brand-accent transition-colors font-mono">
                  forensics@astonroofing.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4.5 w-4.5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>
                  Office Hours: Mon - Fri · 8:00 AM - 6:00 PM<br />
                  Emergency Services: 24/7/365
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Regulatory / License Area */}
        <div className="border-t border-brand-secondary/50 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-brand-border/50 gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} Aston Roofing Systems Inc. All rights reserved globally.</p>
            <p className="font-mono">
              Corporate Lic: State-Licensed #ROOF-2026-994A1 · bonded & fully insured · Class A General Roofing Contractor.
            </p>
          </div>
          <div className="flex gap-4 font-mono">
            <button onClick={() => handleNavClick('about')} className="hover:text-brand-light-pure transition-colors cursor-pointer">
              CERTIFICATIONS
            </button>
            <span>·</span>
            <button onClick={openQuoteModal} className="hover:text-brand-light-pure transition-colors cursor-pointer">
              PRIVACY REGISTER
            </button>
            <span>·</span>
            <button onClick={() => handleNavClick('contact')} className="hover:text-brand-light-pure transition-colors cursor-pointer">
              TERMS OF WORK
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
