import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Star, ArrowRight, Hammer, ShieldAlert, ClipboardCheck, Building, Droplets, CloudLightning, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { StatCounter } from '../components/ui/StatCounter';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { Accordion } from '../components/ui/Accordion';
import { SERVICES, PROJECTS, TESTIMONIALS, FAQS, SERVICE_AREAS } from '../data/roofingData';

interface HomeProps {
  onNavigate: (page: string) => void;
  openQuoteModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, openQuoteModal }) => {
  
  // Icon selector mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'Hammer': return Hammer;
      case 'ShieldAlert': return ShieldAlert;
      case 'ClipboardCheck': return ClipboardCheck;
      case 'Building': return Building;
      case 'Droplets': return Droplets;
      case 'CloudLightning': return CloudLightning;
      default: return Hammer;
    }
  };

  const beforeAfterExamples = [
    {
      id: 'ex1',
      title: 'Aspen Slate Restoration',
      before: 'https://images.unsplash.com/photo-1516156008625-3a9d6067ffd5?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      desc: 'Degraded cedar split shakes replaced with DaVinci Multi-Width composite slate shingles and custom copper valleys.'
    },
    {
      id: 'ex2',
      title: 'Oakwood Shingle Upgrade',
      before: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      desc: 'Wind-ravaged shingles replaced with high-definition dimensional shingle systems matching the estate contours.'
    }
  ];

  return (
    <div className="bg-brand-light font-sans overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-primary text-brand-light-pure pt-24 pb-16 px-4">
        {/* Cinematic dark image background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
            alt="Aston Roofing Premium Shingles Design"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-brand-primary/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary border border-brand-border/10 rounded-sm text-xs font-mono tracking-widest text-brand-accent uppercase"
          >
            <ShieldCheck className="h-4 w-4 text-brand-accent" />
            Gold-Standard Lifetime Workmanship Warranty
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-none text-brand-light-pure"
          >
            Bespoke Roofing Systems <br />
            <span className="italic font-normal text-brand-accent">Built For Generations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-brand-border/80 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            At Aston Roofing, we don’t simply nail shingles. We design and install multi-layered, climate-specific structural roofing assets engineered to defend your estate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="accent"
              size="lg"
              onClick={openQuoteModal}
              className="w-full sm:w-auto font-semibold flex items-center gap-2"
            >
              Get a Free Inspection <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="tel:5551234567"
              className="w-full sm:w-auto inline-flex items-center justify-center font-sans font-semibold text-sm border border-brand-border/20 px-7 py-3.5 text-brand-light-pure rounded-sm hover:bg-brand-secondary transition-all"
            >
              Call (555) 123-4567
            </a>
          </motion.div>

          {/* Micro-Trust Signals Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 max-w-lg mx-auto border-t border-brand-border/10 pt-8 mt-12 text-center"
          >
            <div>
              <span className="block text-xl md:text-2xl font-serif font-semibold text-brand-light-pure">18+</span>
              <span className="block text-[10px] font-mono tracking-wider text-brand-border/50 uppercase mt-1">Years in Craft</span>
            </div>
            <div>
              <span className="block text-xl md:text-2xl font-serif font-semibold text-brand-light-pure">1,500+</span>
              <span className="block text-[10px] font-mono tracking-wider text-brand-border/50 uppercase mt-1">Estates Secured</span>
            </div>
            <div>
              <span className="block text-xl md:text-2xl font-serif font-semibold text-brand-light-pure">4.9★</span>
              <span className="block text-[10px] font-mono tracking-wider text-brand-border/50 uppercase mt-1">Google Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-brand-primary border-y border-brand-secondary py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-border/40 font-bold">
            Elite Corporate Accreditations
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-xs font-mono tracking-widest text-brand-border/60">
            <span className="flex items-center gap-2 border border-brand-border/10 px-3 py-1.5 rounded-sm bg-brand-secondary text-[11px]">
              <Award className="h-4 w-4 text-brand-accent" /> GAF MASTER ELITE®
            </span>
            <span className="flex items-center gap-2 border border-brand-border/10 px-3 py-1.5 rounded-sm bg-brand-secondary text-[11px]">
              <Award className="h-4 w-4 text-brand-accent" /> OWENS CORNING PREFERRED®
            </span>
            <span className="flex items-center gap-2 border border-brand-border/10 px-3 py-1.5 rounded-sm bg-brand-secondary text-[11px]">
              <Star className="h-4 w-4 text-brand-accent fill-current" /> BBB A+ ACCREDITED
            </span>
            <span className="flex items-center gap-2 border border-brand-border/10 px-3 py-1.5 rounded-sm bg-brand-secondary text-[11px]">
              <ShieldCheck className="h-4 w-4 text-brand-accent" /> LICENSED & BONDED
            </span>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block">
            Our Materials & Competence
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-brand-primary">
            Engineered Roofing Services
          </h2>
          <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
          <p className="text-sm md:text-base text-brand-secondary max-w-xl mx-auto leading-relaxed">
            From generational slate installations to highly localized emergency diagnostic repair, our services maintain absolute compliance with elite architectural specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const IconComp = getIcon(srv.icon);
            return (
              <div
                key={srv.id}
                className="group bg-brand-light-pure border border-brand-border rounded-sm overflow-hidden flex flex-col justify-between hover:border-brand-accent/50 transition-all duration-300"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-brand-primary">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-4 left-4 p-3 bg-brand-primary text-brand-light-pure rounded-sm">
                      <IconComp className="h-5 w-5 stroke-[1.5] text-brand-accent" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-3">
                    <h3 className="text-xl font-serif font-medium text-brand-primary">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-brand-secondary leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="p-6 md:px-8 md:pb-8 pt-0">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0 });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-brand-accent hover:text-brand-accent-hover transition-colors cursor-pointer"
                  >
                    View Details <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Why Aston Roofing / Differentiators */}
      <section className="bg-brand-primary text-brand-light-pure py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block">
              Architectural Standard
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight leading-tight text-brand-light-pure">
              Uncompromising Quality Control
            </h2>
            <p className="text-sm md:text-base text-brand-border/70 leading-relaxed">
              We operate similarly to a high-end architecture boutique. Aston Roofing avoids low-margin compromises and structural short-cuts. We treat each slope, valley, and flashing system like custom metal sculptures designed to endure.
            </p>
            <div className="pt-2">
              <Button
                variant="accent"
                onClick={openQuoteModal}
                className="font-semibold flex items-center gap-1.5"
              >
                Schedule forensic audit <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border border-brand-secondary p-6 md:p-8 space-y-3 rounded-sm bg-brand-primary/50">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-widest">01 / WARRANTY</span>
              <h4 className="text-lg font-serif font-medium text-brand-light-pure">Generational Coverage</h4>
              <p className="text-xs text-brand-border/70 leading-relaxed">
                Every residential replacement is backed by our signature Gold-Standard Lifetime Workmanship Warranty. No loopholes, no decay schedules.
              </p>
            </div>

            <div className="border border-brand-secondary p-6 md:p-8 space-y-3 rounded-sm bg-brand-primary/50">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-widest">02 / COMPLIANCE</span>
              <h4 className="text-lg font-serif font-medium text-brand-light-pure">100% Certified Crew</h4>
              <p className="text-xs text-brand-border/70 leading-relaxed">
                We are GAF Master Elite and CertainTeed ShingleMaster installers. This elite distinction is held by fewer than 2% of contractors in North America.
              </p>
            </div>

            <div className="border border-brand-secondary p-6 md:p-8 space-y-3 rounded-sm bg-brand-primary/50">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-widest">03 / AUDITS</span>
              <h4 className="text-lg font-serif font-medium text-brand-light-pure">Forensic Diagnostics</h4>
              <p className="text-xs text-brand-border/70 leading-relaxed">
                We utilize thermal imaging, drone mapping, and deep moisture checks before presenting a single cost figure. Zero vague estimates.
              </p>
            </div>

            <div className="border border-brand-secondary p-6 md:p-8 space-y-3 rounded-sm bg-brand-primary/50">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-widest">04 / SAFETY</span>
              <h4 className="text-lg font-serif font-medium text-brand-light-pure">Surgical Property Protection</h4>
              <p className="text-xs text-brand-border/70 leading-relaxed">
                We deploy landscape defense nets and scan your entire estate with magnetic debris sweeps twice daily. Your landscaping remains pristine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Timeline */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block">
            Operational Blueprint
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-brand-primary">
            Our Precision Installation Timeline
          </h2>
          <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
          <p className="text-sm md:text-base text-brand-secondary max-w-xl mx-auto leading-relaxed">
            A linear, high-accountability process engineered to protect your time and maintain absolute transparency from booking to warranty certification.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          <div className="space-y-4 relative">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-accent text-brand-light-pure text-sm font-mono font-bold">
                1
              </div>
              <span className="h-px bg-brand-border flex-1 hidden lg:block" />
            </div>
            <h4 className="text-lg font-serif font-semibold text-brand-primary">Forensic Inspection</h4>
            <p className="text-xs text-brand-secondary leading-relaxed">
              Our specialists conduct a comprehensive 42-point attic, flashing, and moisture audit using thermal sensors and aerial HD drone mapping.
            </p>
          </div>

          <div className="space-y-4 relative">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-accent text-brand-light-pure text-sm font-mono font-bold">
                2
              </div>
              <span className="h-px bg-brand-border flex-1 hidden lg:block" />
            </div>
            <h4 className="text-lg font-serif font-semibold text-brand-primary">Transparent Specification</h4>
            <p className="text-xs text-brand-secondary leading-relaxed">
              We present an itemized digital scope outlining shingles materials, copper details, and exact fixed cost boundaries. Zero surprise line items.
            </p>
          </div>

          <div className="space-y-4 relative">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-accent text-brand-light-pure text-sm font-mono font-bold">
                3
              </div>
              <span className="h-px bg-brand-border flex-1 hidden lg:block" />
            </div>
            <h4 className="text-lg font-serif font-semibold text-brand-primary">Surgical Execution</h4>
            <p className="text-xs text-brand-secondary leading-relaxed">
              Our Master Elite crew tears off, repairs deck rot, installs self-adhering ice barriers, lays down shingles, and fabricates copper flashing.
            </p>
          </div>

          <div className="space-y-4 relative">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-accent text-brand-light-pure text-sm font-mono font-bold">
                4
              </div>
            </div>
            <h4 className="text-lg font-serif font-semibold text-brand-primary">Warranty Certification</h4>
            <p className="text-xs text-brand-secondary leading-relaxed">
              A final 10-point checklist review is recorded. We clean your site to pristine levels and register your lifetime warranties with GAF and CertainTeed.
            </p>
          </div>

        </div>
      </section>

      {/* 6. Featured Projects Preview */}
      <section className="bg-brand-light-pure py-24 px-4 md:px-8 border-y border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block">
                CRAFTED ANTHOLOGY
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-brand-primary">
                Featured Portfolio Projects
              </h2>
            </div>
            <div>
              <Button
                variant="secondary"
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider whitespace-nowrap"
              >
                View Complete Gallery <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="group border border-brand-border bg-brand-light rounded-sm overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden relative bg-brand-primary">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-brand-primary/80 backdrop-blur-sm text-brand-accent border border-brand-accent/20 px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-sm font-bold">
                      {proj.category}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-3">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-brand-secondary flex items-center gap-2">
                      <span>{proj.location}</span>
                      <span>·</span>
                      <span>{proj.year}</span>
                    </div>
                    <h3 className="text-xl font-serif font-medium text-brand-primary">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-brand-secondary leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 md:px-8 md:pb-8 pt-0">
                  <button
                    onClick={() => {
                      onNavigate('projects');
                      window.scrollTo({ top: 0 });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:text-brand-accent-hover transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    View Case Study <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Interactive Before & After Slider */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block">
            PHYSICAL TRANSFORMATION
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-brand-primary">
            Before & After Gallery Slider
          </h2>
          <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
          <p className="text-sm md:text-base text-brand-secondary max-w-xl mx-auto leading-relaxed">
            Slide the divider left and right to inspect the precision details of our custom shingle and slate restoration projects.
          </p>
        </div>

        <BeforeAfterSlider items={beforeAfterExamples} />
      </section>

      {/* 8. Testimonials Section */}
      <section className="bg-brand-primary text-brand-light-pure py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block">
              ESTEEMED CORRESPONDENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-brand-light-pure">
              Client Appraisals
            </h2>
            <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
            <p className="text-sm md:text-base text-brand-border/70 max-w-xl mx-auto leading-relaxed">
              We correspond with business directors, custom developers, and homeowners who hold deep appreciation for elite workmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((test) => (
              <div
                key={test.id}
                className="border border-brand-secondary p-6 md:p-8 space-y-5 bg-brand-primary/40 rounded-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex gap-1 text-brand-accent">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-brand-border/95 italic leading-relaxed font-serif">
                    "{test.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3.5 pt-4 border-t border-brand-secondary/40">
                  {test.avatar && (
                    <img
                      src={test.avatar}
                      alt={test.name}
                      referrerPolicy="no-referrer"
                      className="h-9 w-9 rounded-full object-cover grayscale opacity-80"
                    />
                  )}
                  <div>
                    <h5 className="text-xs font-semibold text-brand-light-pure">{test.name}</h5>
                    <span className="text-[10px] text-brand-border/50 block">{test.location} · {test.projectType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Statistics Counter Section */}
      <section className="bg-brand-light border-b border-brand-border py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCounter value={18} suffix="+" label="Years of Excellence" />
          <StatCounter value={1500} suffix="+" label="Premium Roofs Secured" />
          <StatCounter value={99} suffix="%" label="Client Satisfaction" />
          <StatCounter value={2} suffix=" Hrs" label="Peak Storm Response" />
        </div>
      </section>

      {/* 10. Service Areas Preview */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block">
              REGIONAL OPERATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight leading-tight text-brand-primary">
              Where We Build
            </h2>
            <p className="text-sm md:text-base text-brand-secondary leading-relaxed">
              Aston Roofing operates across multiple premium regional sectors. We synchronize with local building inspectors, municipal zoning guidelines, and climate thresholds to secure optimal results.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-brand-accent-light rounded-sm text-brand-accent mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-brand-primary">Metropolitan Area Headquarters</span>
                  <span className="block text-xs text-brand-secondary">Central operations and main sheet metal facility.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-brand-accent-light rounded-sm text-brand-accent mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-brand-primary">Summit Alpine Mountain Division</span>
                  <span className="block text-xs text-brand-secondary">Specialized high-pitch snow load engineering teams.</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button
                variant="outline"
                onClick={() => onNavigate('service-areas')}
                className="flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider"
              >
                Browse Active Boroughs <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Elegant vector-esque visual card representation of active regions */}
            <div className="border border-brand-border bg-brand-light-pure p-6 md:p-8 rounded-sm shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-brand-border pb-4">
                <h4 className="text-sm font-semibold text-brand-primary uppercase tracking-wider font-mono">Central Branch Dispatch</h4>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-success animate-pulse" />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SERVICE_AREAS.map((sa) => (
                  <div
                    key={sa.id}
                    className="border border-brand-border p-4 rounded-sm bg-brand-light hover:border-brand-accent/30 transition-all text-center"
                  >
                    <span className="block text-xs font-bold text-brand-primary truncate">{sa.city}</span>
                    <span className="block text-[10px] text-brand-secondary font-mono mt-1">{sa.distance}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-brand-light border border-brand-border/60 rounded-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-accent" />
                  <span className="text-xs font-bold text-brand-primary">Storm Hotline: (555) 123-4567</span>
                </div>
                <span className="text-[10px] font-mono text-brand-accent font-semibold uppercase tracking-widest">Active Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ Accordion */}
      <section className="bg-brand-light-pure py-24 px-4 md:px-8 border-y border-brand-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block">
              RESOLVING INTEL
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-brand-primary">
              Frequently Asked Questions
            </h2>
            <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
            <p className="text-sm md:text-base text-brand-secondary max-w-xl mx-auto leading-relaxed">
              We resolve typical objections regarding costs, timeline boundaries, manufacturer warranty registrations, and storm repair claims.
            </p>
          </div>

          <Accordion items={FAQS} />
        </div>
      </section>

      {/* 12. Final CTA Banner */}
      <section className="bg-brand-primary text-brand-light-pure py-24 px-4 md:px-8 relative overflow-hidden text-center">
        {/* Subtle accent highlights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-bold block">
            SECURE YOUR ESTATE TODAY
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-brand-light-pure">
            Ready to secure your architectural masterpiece?
          </h2>
          <p className="text-sm md:text-base text-brand-border/70 max-w-xl mx-auto leading-relaxed">
            Schedule a high-definition 42-point forensic structural inspection with full physical and drone reporting. Let our certified team verify your roof integrity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="accent"
              size="lg"
              onClick={openQuoteModal}
              className="w-full sm:w-auto font-semibold flex items-center gap-1.5"
            >
              Request Free Inspection <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="tel:5551234567"
              className="w-full sm:w-auto inline-flex items-center justify-center font-sans font-semibold text-sm border border-brand-border/20 px-7 py-3.5 text-brand-light-pure rounded-sm hover:bg-brand-secondary transition-all"
            >
              Consult an Expert (555) 123-4567
            </a>
          </div>

          <div className="pt-6 text-[11px] font-mono text-brand-border/40">
            Emergency Storm Line: Open 24/7/365 · Certified Hail Auditing
          </div>
        </div>
      </section>

    </div>
  );
};
