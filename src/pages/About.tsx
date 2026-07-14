import React from 'react';
import { Award, ShieldCheck, CheckCircle, Users, Hammer, HeartHandshake, Eye, Briefcase, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface AboutProps {
  openQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ openQuoteModal }) => {
  
  const coreValues = [
    {
      id: 'v1',
      title: 'Architectural Rigor',
      icon: Hammer,
      desc: 'We do not rush. We inspect structural decking, evaluate ventilation balance ratios, and hand-solder joints to perfection.'
    },
    {
      id: 'v2',
      title: 'Direct Accountability',
      icon: HeartHandshake,
      desc: 'We never subcontract our leadership. Your project is managed by an in-house certified foreman from start to final inspection.'
    },
    {
      id: 'v3',
      title: 'Forensic Honesty',
      icon: Eye,
      desc: 'We capture high-definition photographs and thermal mapping. If a roof merely needs a simple step-flashing fix, we will never advocate a replacement.'
    }
  ];

  const executiveTeam = [
    {
      name: 'Robert Aston',
      role: 'Principal & Founder',
      desc: 'Over 25 years of custom residential carpentry and slate architectural roofing experience. Oversees technical training and project designs.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Marcus Vance',
      role: 'Director of Storm Diagnostics & Insurance Operations',
      desc: 'Certified HAAG inspector specializing in forensic storm damage reviews and itemized Xactimate drafting for insurance carrier alignment.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Elena Rostova',
      role: 'Lead Commercial Estimator & Flat Systems Architect',
      desc: 'Expert in low-slope systems including PVC, heavy TPO membranes, reflective silicone restoration systems, and structural water drainage.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  const credentials = [
    { title: 'GAF Master Elite®', desc: 'Held by fewer than 2% of elite North American roofing companies. Permits issuance of GAF Golden Pledge warranties.' },
    { title: 'CertainTeed Select ShingleMaster®', desc: 'Indicates master level installation competence, fully vetted financial security, and proper worker credentials.' },
    { title: 'HAAG Certified Forensic Inspectors', desc: 'Rigorous national storm evaluation training ensuring unassailable scientific damage mapping reports.' },
    { title: 'BBB A+ Accredited Member', desc: 'Vetted history of perfect client arbitration, ethical advertising, and corporate billing transparency.' }
  ];

  return (
    <div className="bg-brand-light font-sans pt-24 min-h-screen">
      
      {/* Editorial Header Section */}
      <section className="py-16 md:py-24 bg-brand-primary text-brand-light-pure border-b border-brand-secondary">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-bold block">
            ESTATE CRAFT LEADERSHIP
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight">
            Our Architectural Heritage
          </h1>
          <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
          <p className="text-sm md:text-base text-brand-border/70 max-w-xl mx-auto leading-relaxed">
            Aston Roofing was founded on a singular principal: to deliver elite-grade structural roofing systems with the precision of a high-end architectural studio.
          </p>
        </div>
      </section>

      {/* Narrative Section with Image */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block">OUR HISTORY</span>
          <h2 className="text-3xl md:text-4.5xl font-serif font-medium text-brand-primary tracking-tight">
            Designed for durability. Engineered for elegance.
          </h2>
          <p className="text-sm md:text-base text-brand-secondary leading-relaxed font-sans">
            We discovered that the roofing industry was dominated by discount contractors pushing rapid shingle lay-overs, loose safety rules, and unverified warranties. Homeowners were spending massive sums on structures that began curling within a decade.
          </p>
          <p className="text-sm md:text-base text-brand-secondary leading-relaxed font-sans">
            Aston Roofing was established to set a higher benchmark. We invest in extensive foreman certifications, on-site heavy gauge metal rolling rigs, and digital forensic sensors to ensure every layer of your roof system operates as a unified weather barrier.
          </p>
          <div className="border-l-2 border-brand-accent pl-4 py-1 italic text-sm text-brand-secondary">
            "We treat your estate not like a quick contract, but like a lifelong structural case-study. The final result must be immaculate."
          </div>
        </div>

        <div className="lg:col-span-6 relative aspect-video lg:aspect-square w-full overflow-hidden border border-brand-border rounded-sm bg-brand-primary shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1628744448840-55bdb2497bc4?auto=format&fit=crop&w=1200&q=80"
            alt="Aston Roofing Craftsmanship"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-brand-light-pure py-20 px-4 md:px-8 border-y border-brand-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block">GUIDING ALIGNMENT</span>
            <h2 className="text-2xl md:text-4xl font-serif font-medium text-brand-primary tracking-tight">Our Core Directives</h2>
            <div className="h-0.5 w-8 bg-brand-accent mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val) => {
              const IconComp = val.icon;
              return (
                <div key={val.id} className="border border-brand-border p-6 md:p-8 rounded-sm space-y-4 bg-brand-light">
                  <div className="p-3 bg-brand-accent text-brand-light-pure rounded-sm w-fit">
                    <IconComp className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-brand-primary">{val.title}</h4>
                  <p className="text-xs text-brand-secondary leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Roster */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block">DIRECTING FOREMEN</span>
          <h2 className="text-3xl md:text-4.5xl font-serif font-medium text-brand-primary tracking-tight">Our Executive Team</h2>
          <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {executiveTeam.map((member, idx) => (
            <div key={idx} className="border border-brand-border bg-brand-light-pure p-6 rounded-sm space-y-4 text-center hover:border-brand-accent/30 transition-all duration-300">
              <div className="h-28 w-28 mx-auto rounded-full overflow-hidden border border-brand-border bg-brand-light relative">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-serif font-bold text-brand-primary">{member.name}</h4>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold block">{member.role}</span>
              </div>
              <p className="text-xs text-brand-secondary leading-relaxed font-sans">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vetted Credentials Grid */}
      <section className="bg-brand-primary text-brand-light-pure py-20 px-4 md:px-8 border-t border-brand-secondary">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block">VETTED RATINGS</span>
            <h2 className="text-2xl md:text-4xl font-serif font-medium text-brand-light-pure tracking-tight">Industry Credentials</h2>
            <div className="h-0.5 w-8 bg-brand-accent mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred, idx) => (
              <div key={idx} className="border border-brand-secondary p-6 rounded-sm space-y-3 bg-brand-primary/50 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-8 w-8 flex items-center justify-center bg-brand-secondary rounded-sm text-brand-accent">
                    <Award className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-brand-light-pure tracking-wide font-mono uppercase">
                    {cred.title}
                  </h4>
                  <p className="text-xs text-brand-border/60 leading-relaxed font-sans">
                    {cred.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer callout banner */}
      <section className="bg-brand-light py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold block">SECURE YOUR ESTIMATE</span>
          <h2 className="text-2xl md:text-3.5xl font-serif font-medium text-brand-primary tracking-tight">
            Require certified structural diagnostics?
          </h2>
          <p className="text-xs md:text-sm text-brand-secondary max-w-xl mx-auto leading-relaxed">
            Let our HAAG-certified forensic team inspect your roofing system. Complete our premium inspection ticket process today.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="accent" onClick={openQuoteModal} className="font-semibold flex items-center gap-1.5 justify-center">
              Request Free Inspection <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="tel:5551234567"
              className="inline-flex items-center justify-center font-sans font-semibold text-xs border border-brand-border bg-brand-light-pure px-6 py-3 text-brand-primary rounded-sm hover:bg-brand-border/45 transition-all text-center uppercase tracking-wider"
            >
              Dial Office (555) 123-4567
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
