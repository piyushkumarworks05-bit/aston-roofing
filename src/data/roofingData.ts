import { Service, Project, BlogPost, Testimonial, ServiceArea, FAQ } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'roof-replacement',
    title: 'Architectural Roof Replacement',
    slug: 'roof-replacement',
    icon: 'Hammer',
    shortDesc: 'Complete, structurally engineered roof replacement using GAF, CertainTeed, and premium DaVinci Slate materials.',
    longDesc: 'A roof replacement is a critical investment in your estate. At Aston Roofing, we do not simply nail down shingles; we design and install a multi-layered, climate-specific roofing system engineered to protect your home for decades. From deck inspection and reinforcement to high-performance underlayment, custom valleys, and architectural shingles, our master elite installers execute every detail with extreme precision.',
    bulletPoints: [
      'Gold-Standard Lifetime Workmanship Warranty',
      'Class 4 Impact Rated shingles for significant insurance discounts',
      'Integrated cross-ventilation system design to regulate attic temperatures',
      'Pristine magnetic cleaning process ensuring zero nails or debris are left behind',
      'Certified Master Elite installation of GAF and CertainTeed products'
    ],
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bc4?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Premium Architectural Roof Replacement | Aston Roofing',
    metaDesc: 'Engineered residential roof replacement using GAF and CertainTeed materials. Hand-crafted systems backed by our Lifetime Workmanship Warranty.'
  },
  {
    id: 'roof-repair',
    title: 'Precision Repairs & Restoration',
    slug: 'roof-repair',
    icon: 'ShieldAlert',
    shortDesc: 'Targeted restoration of localized leaks, pipe boot cracks, ridge vent failures, and loose architectural shingles.',
    longDesc: 'A small roof leak can rapidly turn into a structural crisis. Our precision repair division utilizes thermal imaging technology to trace moisture back to its exact point of ingress. We focus on durable, permanent resolutions rather than superficial patches. Whether fixing dried-out plumbing boots, weathered valley flashing, or high-wind shingle blow-offs, we match your existing materials seamlessly.',
    bulletPoints: [
      'Same-day thermal imaging diagnostics and roof moisture mapping',
      'Color-matched architectural shingle blending to maintain visual harmony',
      'Heavy-duty copper or baked-enamel step flashing restorations',
      'Ridge vent and soffit ventilation optimization to prevent rot',
      'All repairs backed by a dedicated 5-Year Leak-Free Guarantee'
    ],
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Emergency Roof Repair & Precision Maintenance | Aston Roofing',
    metaDesc: 'Durable, seamless roof repair and leak detection. Backed by custom diagnostics and a 5-Year Leak-Free Guarantee. Fast response times.'
  },
  {
    id: 'inspections',
    title: 'Structural Forensic Inspections',
    slug: 'inspections',
    icon: 'ClipboardCheck',
    shortDesc: 'Comprehensive, high-definition structural and aesthetic inspections with full physical and drone reporting.',
    longDesc: 'Our structural inspections represent the gold standard in asset evaluation. We examine your roofing system across a strict 42-point checklist, covering deck integrity, ventilation ratios, chimney flashings, valley seals, and attic humidity. Using drone photography and physical inspection, we deliver an in-depth, high-definition digital report complete with clear documentation of current lifespans.',
    bulletPoints: [
      'Drone-assisted aerial photography mapping of high-pitch slopes',
      'Detailed photographic documentation of all vulnerable flashings and joints',
      'Attic insulation and structural intake/exhaust balance review',
      'Comprehensive digital report with estimated residual lifespan (RUL) metrics',
      '100% honest assessments — we never recommend a replacement when a repair suffices'
    ],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    metaTitle: '42-Point Structural Roof Inspections | Aston Roofing',
    metaDesc: 'Honest, high-definition roofing inspections. Drone mapping, structural integrity checks, and detailed lifespan analysis reports.'
  },
  {
    id: 'commercial-roofing',
    title: 'Commercial Low-Slope Systems',
    slug: 'commercial-roofing',
    icon: 'Building',
    shortDesc: 'High-performance flat and low-slope roofing systems including TPO, PVC, and premium cool roof coatings.',
    longDesc: 'Commercial assets require roofing solutions engineered for long-term ROI and structural performance. We specialize in low-slope roofing systems, particularly high-durability thermoplastic polyolefin (TPO) and poly-vinyl chloride (PVC) membranes. Our commercial division manages complex drainage configurations, mechanical equipment flashing, and energy-efficient cool-roof coatings that dramatically slash cooling costs.',
    bulletPoints: [
      'Thick 60-mil Firestone UltraPly TPO for optimal tear and puncture resistance',
      'Premium reflective cool roof coatings to reduce HVAC strain by up to 15%',
      'Custom tapered insulation plans to eliminate standing/ponding water',
      'Minimum disruption scheduling — projects executed to keep your business fully open',
      'Fully licensed commercial installers with comprehensive multi-million general liability'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Premium Commercial Roofing & TPO Systems | Aston Roofing',
    metaDesc: 'Commercial low-slope and flat roofing experts. High-grade TPO, PVC, and silicone coatings for premium institutional and commercial buildings.'
  },
  {
    id: 'storm-damage',
    title: 'Storm Damage & Insurance Claims',
    slug: 'storm-damage',
    icon: 'CloudLightning',
    shortDesc: 'Certified storm assessment, emergency tarping, and direct insurance documentation with professional adjuster alignment.',
    longDesc: 'When hail or high winds impact your roof, time is of the essence. Our storm response team provides rapid emergency shrink-wrapping and tarping services to prevent secondary water ingress. As certified insurance specialists, we draft comprehensive itemized reports utilizing industry-standard Xactimate software, ensuring your insurance adjuster receives precise, unassailable physical evidence for your claim.',
    bulletPoints: [
      'Immediate emergency tarping and structural weatherproofing within 4 hours',
      'Comprehensive physical hail impact map and wind damage assessment reports',
      'Direct adjuster consultation with Xactimate estimates for rapid approvals',
      'Certified HAAG residential and commercial roofing inspectors on staff',
      'Full recovery coordination — we manage the process from first storm to final shingle'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Emergency Storm Damage Repair & Insurance Claims | Aston Roofing',
    metaDesc: 'Fast emergency tarping and comprehensive hail/wind damage assessments. Certified HAAG team utilizing Xactimate for smooth insurance claims.'
  },
  {
    id: 'gutters',
    title: 'Premium Gutters & Architectural Flashing',
    slug: 'gutters',
    icon: 'Droplets',
    shortDesc: 'Seamless heavy-gauge aluminum and hand-crafted copper gutter systems designed to complement luxury facades.',
    longDesc: 'A flawless roof requires an equally exceptional water management system. We design and craft seamless K-style, half-round, and custom box gutters extruded on-site from heavy-gauge aluminum or architectural-grade copper. Engineered with precision slope calculations, our water management systems prevent soil erosion, foundation shifting, and exterior stucco staining while accentuating your home’s architectural lines.',
    bulletPoints: [
      'Seamless 6-inch architectural gutters custom extruded on-site',
      'Hand-crafted custom copper flashing, copper valleys, and designer downspouts',
      'High-capacity hidden hangers fastened with stainless steel structural screws',
      'Micro-mesh premium gutter guards ensuring a lifetime clog-free guarantee',
      'Perfect slope optimization preventing standing water and mosquito breeding'
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    metaTitle: 'Seamless Gutters & Custom Copper Flashing | Aston Roofing',
    metaDesc: 'Architectural-grade seamless copper and heavy-gauge aluminum gutters. Custom on-site fabrication and lifetime clog-free gutter guards.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'aspen-ridge',
    title: 'The Aspen Ridge Residence',
    category: 'Residential',
    location: 'Aspen Ridge Heights',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'A luxurious estate requiring an architectural roof replacement that respects the historic mountain-modern design. We replaced degraded cedar shakes with premium Class 4 DaVinci Multi-Width Slate, complemented by solid hand-soldered copper valleys, chimney crickets, and a seamless copper gutter system.',
    highlights: [
      'Installed DaVinci Custom Slate in European Blend',
      'Custom solid-copper step flashing and hand-soldered chimney saddles',
      'Class 4 Impact rating securing a 28% annual homeowner insurance discount',
      'Engineered smart ridge-ventilation maximizing thermal boundary performance'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1516156008625-3a9d6067ffd5?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'oakwood-estates',
    title: 'The Oakwood Estates Upgrade',
    category: 'Residential',
    location: 'Oakwood Ridge Manor',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'A heavy-weather upgrade for a contemporary multi-level residence. The original builder-grade shingles suffered from significant granule depletion and hail fracturing. We stripped the deck, replaced rotted sections, and installed heavy-weight CertainTeed Landmark Pro dimensional shingles for deep shadow lines and premium durability.',
    highlights: [
      'CertainTeed Landmark Pro shingles in Max Def Weathered Wood',
      'Grace Ice & Water Shield installed at all critical valleys, eaves, and penetrations',
      'Seamless heavy-gauge custom black aluminum k-style gutters',
      '50-Year CertainTeed SureStart material warranty fully registered'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'mercedes-plaza',
    title: 'Mercedes Plaza Headquarters',
    category: 'Commercial',
    location: 'Downtown Corporate Park',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'A high-stakes commercial roofing project covering 45,000 square feet of flat roofing. The old built-up tar-and-gravel roof had reached terminal saturation. We performed core testing, laid down tapered Polyisocyanurate insulation to optimize drainage, and adhered a durable 60-mil Firestone UltraPly TPO system.',
    highlights: [
      '45,000 sq ft seamless TPO installation with fully-adhered seams',
      'Tapered Polyiso board design adding custom 1/4" per foot drainage slope',
      'Engineered metal copings custom-fabricated in our sheet metal shop',
      'Reflective Cool Roof technology reducing commercial HVAC peak energy demand'
    ]
  },
  {
    id: 'vista-point',
    title: 'The Vista Point Modern Canopy',
    category: 'Specialty',
    location: 'Vista Point Overlook',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'An architectural statement house featuring a modern metal roof. We fabricated and installed a standing-seam 24-gauge steel roof with concealed fasteners. The panels were roll-formed on-site for custom continuous lengths from ridge to eave, eliminating horizontal laps and ensuring absolute leak prevention.',
    highlights: [
      '24-Gauge standing-seam steel panels with matte graphite Kynar 500 coating',
      'Concealed mechanical expansion clips supporting temperature expansion/contraction',
      'Integrated heavy-duty heavy-snow structural snow guards',
      'Hand-crafted fascia transitions and modern linear intake vents'
    ]
  },
  {
    id: 'alpine-summit-lodge',
    title: 'The Summit Alpine Retreat',
    category: 'Residential',
    location: 'Summit Valley Alpine',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'This grand mountain estate required an impact-rated shingles solution that fits its high-alpine environment. We deployed Class 4 Owens Corning TruDefinition Duration Storm shingles with patented SureNail strip technology to resist high-altitude mountain winds of up to 130 MPH.',
    highlights: [
      'Owens Corning Duration Storm shingles in premium Onyx Black',
      'Class 4 Impact rating providing heavy protection against winter frost and ice damming',
      'High-temp self-adhering ice barrier membrane on 100% of valleys and eaves',
      'Custom premium snow valleys designed to cleanly slide high snow loads'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'slate-vs-asphalt',
    title: "The Homeowner's Guide to Architectural Slate vs. Asphalt Shingles",
    slug: 'slate-vs-asphalt',
    category: 'Educational',
    date: 'June 18, 2026',
    author: {
      name: 'Robert Aston',
      role: 'Principal & Director',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    excerpt: 'Selecting a new roofing material is a long-term architectural decision. We break down the structural lifespans, performance thresholds, and financial return profiles of slate vs. modern composite and asphalt.',
    content: `When it comes to selecting a new roofing material for your estate, the choices can be overwhelming. Today, we are contrasting the ultimate gold standard of roofing—natural or composite slate—with modern high-performance architectural asphalt shingles.

### 1. Structural Lifespans & Durability
A standard builder-grade shingle roof lasts roughly 15 to 20 years before heat cycling and UV radiation cause advanced curling and granule depletion. 

By contrast, modern **architectural asphalt shingles** (such as *CertainTeed Landmark Pro* or *GAF Timberline HDZ*) utilize highly refined asphalt compounds and dense fiberglass mats to push reliable service lifespans to **30 to 40 years**. 

If you step up to **DaVinci Composite Slate** or **Natural Quarry Slate**, your investment is measured in generations. Natural slate routinely lasts **75 to 100+ years**, resisting rot, moss, algae, and absolute water absorption.

### 2. Physical Weight and Structural Reinforcement
Natural slate is exceptionally heavy, weighing anywhere from 800 to 1,500 pounds per square (100 sq ft). Before choosing natural slate, a structural engineering assessment is mandatory to ensure your rafters can support the dead load.

Composite slate (such as *DaVinci Custom Slate*) offers a brilliant alternative. Modeled from genuine slate tiles, composite slates capture the raw cleft texture, organic color variation, and heavy shadow lines of natural stone, yet weigh less than architectural asphalt. No structural rafter reinforcement is required.

### 3. Financial Return on Investment (ROI)
While slate has a higher initial capital outlay, its lifetime amortization is unmatched. A roof that never needs replacement represents a substantial compounding return on asset value. Furthermore, premium Class 4 impact-rated slate shingles dramatically lower homeowner insurance premiums in storm-prone regions, saving thousands annually.

Whether you choose premium architectural asphalt for its balance of high durability and attractive cost, or opt for the generational beauty of custom slate, Aston Roofing ensures a structurally engineered installation backed by our gold-standard workmanship warranties.`,
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bc4?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read'
  },
  {
    id: 'understanding-hail-damage',
    title: 'Understanding Hail Damage: When to Repair vs. Fully Replace',
    slug: 'understanding-hail-damage',
    category: 'Storm Recovery',
    date: 'May 24, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Senior Project Adjuster',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    excerpt: 'Hail impacts often hide in plain sight. Learn how to identify micro-fractures, asphalt bruising, and shingle de-bonding before water penetrates your attic.',
    content: `Spring and summer storms regularly unleash devastating hail across the country. For homeowners, understanding what constitutes structural hail damage is critical to protecting your asset and navigating insurance claims successfully.

### 1. The Myth of "If It Isn't Leaking, It Isn't Damaged"
One of the most dangerous assumptions is that a roof is fine because there is no active attic leak. Hail damage is a progressive structural failure. 

When a hailstone strikes an asphalt shingle, it creates a "bruise." The impact instantly fractures the fiberglass mat beneath and knocks away the colored ceramic granules. Over the next 12 to 24 months, sunlight, rain, and thermal cycles will degrade the exposed asphalt binder, causing a slow, systemic moisture leak.

### 2. Identifying Hail Damage: The Key Indicators
*   **Granule Accumulation:** Check your gutter troughs and downspouts. Excessive quantities of fine sandy granules are a primary indicator that shingles have suffered severe impact.
*   **Asphalt Bruising:** Soft spots or circular dark depressions in the shingle where granules have been pushed deep into the asphalt mat.
*   **Metal Flashing Dents:** Inspect soft metal attic vents, aluminum valleys, and copper flashing. Clean, round dimples confirm that large-caliber hail struck the roof.

### 3. Navigating Insurance Claims: The Timeline
Most insurance policies have a strict 1-year statute of limitations for filing storm damage claims. Delaying a professional forensic inspection could disqualify you from getting your entire roof covered under your property insurance policy.

At Aston Roofing, our certified HAAG inspectors provide exhaustive physical impact mapping. We document your system thoroughly and negotiate directly with your adjuster to ensure your home is restored to pristine condition with minimum financial stress.`,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read'
  },
  {
    id: 'commercial-roof-roi',
    title: 'Commercial Roofing: Maximizing ROI with Cool Roof Coatings and TPO',
    slug: 'commercial-roof-roi',
    category: 'Commercial',
    date: 'April 05, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Lead Commercial Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    excerpt: 'How commercial real estate developers are leveraging modern TPO membranes and reflective coatings to lower energy costs and extend asset life cycles.',
    content: `Commercial roof systems are high-performance assets. When managing a commercial property, the roofing choice has a direct, massive impact on net operating income (NOI) and building efficiency. 

### 1. The Power of TPO (Thermoplastic Polyolefin)
TPO has become the dominant choice for modern commercial and industrial flat roofs. It consists of a single-ply, highly flexible membrane with heat-welded seams. When welded together, these seams form a monolithic water barrier that is physically stronger than the membrane itself, completely eliminating the seam failures common in traditional EPDM rubber or built-up asphalt roofs.

Our commercial division utilizes thick **60-mil Firestone UltraPly TPO**, which offers exceptional puncture resistance and easily tolerates thermal expansion without cracking.

### 2. Reaping the Cool Roof Benefit
Standard dark commercial roofs absorb up to 90% of solar radiation, heating up to 170°F on a hot summer day. This radiant energy transfers directly into the building, forcing commercial HVAC systems to work at peak capacity.

White TPO membranes act as a "Cool Roof," reflecting over 80% of solar energy back into the atmosphere. Commercial properties that switch from dark built-up roofing to white TPO membranes consistently experience:
*   A **10% to 15% reduction** in summer cooling energy consumption
*   Lower peak demand charges from utility companies
*   Extended service lifespans for rooftop HVAC compressors due to lower ambient intake temperatures

### 3. Retrofitting with Silicone Coatings
If your existing commercial roof is structurally sound but approaching the end of its design life, you may not need a costly full tear-off. A high-solids silicone cool roof coating can restore 100% waterproofing integrity and reflectiveness. It is applied directly as a liquid, forming a seamless, joint-free rubber shell that is fully warranted for up to 20 years.

Aston Roofing’s commercial division provides thorough core analysis to verify if your asset is an ideal candidate for coating, maximizing your capital budget and protecting your enterprise.`,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Harrison Sterling',
    location: 'Westmount Estates',
    rating: 5,
    date: 'May 2026',
    projectType: 'Premium DaVinci Slate Installation',
    quote: 'Aston Roofing operates at a level of professionalism that is rare in the construction industry. Their proposal was highly detailed, and the crews worked with remarkable speed and surgical cleanliness. Our new slate roof is an architectural masterpiece.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=125&h=125&q=80'
  },
  {
    id: 't2',
    name: 'Dr. Evelyn Sinclair',
    location: 'Forest Hill Valley',
    rating: 5,
    date: 'April 2026',
    projectType: 'CertainTeed Shingle Upgrade',
    quote: 'After severe hail damaged our roof, Aston was the only firm that conducted a proper thermal imaging inspection. They documented all fracture bruises and met directly with our insurance adjuster. Our entire replacement was approved and installed flawlessly.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=125&h=125&q=80'
  },
  {
    id: 't3',
    name: 'Julian Vance',
    location: 'Vance Office Park',
    rating: 5,
    date: 'March 2026',
    projectType: '45,000 Sq Ft Commercial TPO System',
    quote: 'We contracted Aston Roofing to replace our office park roof. The logistics were complex with hundreds of employees on-site. Their safety protocols, tapered insulation design, and White TPO installation were exemplary. Our cooling bills have already decreased by 12%.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=125&h=125&q=80'
  },
  {
    id: 't4',
    name: 'Audrey Chen',
    location: 'Oakridge Terrace',
    rating: 5,
    date: 'June 2026',
    projectType: 'Precision Gutter & Copper Flashing Installation',
    quote: 'The copper gutters and custom flashing work done by Aston Roofing are absolutely stunning. They treat gutters like fine metal sculpture. Their attention to gutter slope optimization and fascia styling has resolved our foundation runoff completely.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=125&h=125&q=80'
  },
  {
    id: 't5',
    name: 'General Contractor Thomas K.',
    location: 'Metropolitan Custom Homes',
    rating: 5,
    date: 'February 2026',
    projectType: 'Standing-Seam Metal Roof Canopy',
    quote: 'As a luxury home builder, I demand absolute perfection from my subcontractors. Aston is the only roofing company I trust with architectural standing-seam and complex copper work. Their panels are roll-formed beautifully and aligned perfectly. Absolute elite craftsmanship.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=125&h=125&q=80'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'sa1',
    city: 'Metropolitan Area',
    state: 'State HQ',
    postalCodePattern: '60001 - 60199',
    description: 'Our primary headquarters service area. Providing high-end residential architectural shingle replacements, copper water management systems, and premium commercial TPO roof contracting.',
    primaryServices: ['Slate & Shingle Replacement', 'Custom Copper Gutters', 'Commercial Flat Roofing'],
    distance: 'Within 15 miles of HQ'
  },
  {
    id: 'sa2',
    city: 'Westmount Heights',
    state: 'State HQ',
    postalCodePattern: '60201 - 60250',
    description: 'Serving the prestigious luxury residential developments of Westmount Heights. Specialized in DaVinci Custom Slate systems, storm forensic damage reviews, and standing-seam copper accent roofs.',
    primaryServices: ['DaVinci Premium Slate', 'Storm Damage Remediation', 'Standing-Seam Metal'],
    distance: 'Within 25 miles of HQ'
  },
  {
    id: 'sa3',
    city: 'Forest Hill Valley',
    state: 'State HQ',
    postalCodePattern: '60301 - 60380',
    description: 'Providing comprehensive shingle upgrades, timberline configurations, and immediate emergency leak diagnostic services in the heavily wooded residential sectors of Forest Hill Valley.',
    primaryServices: ['Precision Leak Diagnostics', 'CertainTeed Roof Upgrades', 'Tree Damage Restoration'],
    distance: 'Within 30 miles of HQ'
  },
  {
    id: 'sa4',
    city: 'Downtown Business District',
    state: 'State HQ',
    postalCodePattern: '60010 - 60050',
    description: 'Exclusive commercial flat roof solutions and reflective silicone retrofits for high-rise offices, retail strips, and institutional real estate assets downtown.',
    primaryServices: ['Low-Slope PVC/TPO', 'Silicone Roof Coatings', 'Commercial Maintenance Logs'],
    distance: 'Within 10 miles of HQ'
  },
  {
    id: 'sa5',
    city: 'Oakwood Estates Sector',
    state: 'State HQ',
    postalCodePattern: '60401 - 60460',
    description: 'Focused on modern residential architectural roof systems, wind damage shingle replacements, and premium copper fascia styling for family estates.',
    primaryServices: ['GAF Architectural Shingles', 'Seamless Gutter Guards', 'Wind Damage Recovery'],
    distance: 'Within 35 miles of HQ'
  },
  {
    id: 'sa6',
    city: 'Summit Ridge Ridge',
    state: 'State HQ',
    postalCodePattern: '60510 - 60599',
    description: 'Our specialized high-alpine residential roofing division. Deploying high-load snow valleys, thick high-impact Class 4 shingles, and cold-roof ventilation systems built to withstand sub-zero freeze cycles.',
    primaryServices: ['Class 4 Impact Shingles', 'High-Snow Valley Systems', 'Attic Airflow Re-engineering'],
    distance: 'Within 50 miles of HQ'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq1',
    question: 'How long does a typical premium residential roof replacement take?',
    answer: 'For a standard 2,500 to 4,000 square foot home, our architectural roof replacement takes exactly 1 to 2 working days. We utilize specialized, high-capacity crews and advanced protective gear to ensure swift, flawless execution. Complex estates requiring premium DaVinci Slate or hand-crafted natural slate may take 3 to 5 days. We always deploy full tarps to protect your landscaping and clean with advanced magnetic sweepers.',
    category: 'Process & Timeline'
  },
  {
    id: 'faq2',
    question: 'What is the exact warranty coverage on an Aston Roofing system?',
    answer: 'We provide two separate tiers of ultimate protection: first, our Gold-Standard Lifetime Workmanship Warranty, which covers 100% of our installation labor, flashings, valleys, and structural connections for as long as you own the home. Second, as Certified GAF Master Elite and CertainTeed Select ShingleMaster installers, we register your roof for their premium material warranties, providing up to a 50-Year non-prorated SureStart replacement coverage.',
    category: 'Warranty & Insurance'
  },
  {
    id: 'faq3',
    question: 'How do Class 4 Impact-Rated shingles lower my home insurance premiums?',
    answer: 'Class 4 shingles represent the highest level of wind and impact resistance in the roofing industry, having undergone rigorous laboratory testing where they withstand repeated impacts of 2-inch steel balls dropped from 20 feet. Because they are virtually immune to standard hail damage, most property insurance companies in the USA, Canada, and Australia offer a permanent discount of 15% to 30% off your annual homeowner premium.',
    category: 'Cost & Financing'
  },
  {
    id: 'faq4',
    question: 'Can you help guide us through an insurance claim after a major hail storm?',
    answer: 'Absolutely. We specialize in insurance recovery and storm diagnostics. Our HAAG certified estimators do not offer vague guesses; we conduct a rigorous forensic inspection, map hail strikes with detailed thermal/photo evidence, and compile an itemized replacement plan using Xactimate—the exact software used by insurance adjusters. We meet with your insurance adjuster on your roof to ensure all damaged sections are fully approved.',
    category: 'Warranty & Insurance'
  },
  {
    id: 'faq5',
    question: 'What are the main differences between natural quarry slate and DaVinci composite slate?',
    answer: 'Natural quarry slate is a gorgeous, generational stone roof that can last over 100 years, but it is extremely heavy (requiring structural rafter reinforcement) and highly fragile to step on. DaVinci Composite Slate is crafted from state-of-the-art virgin polymers and recycled materials. It captures the raw texture and chiseled edges of authentic slate, carries a Class 4 impact rating (making it incredibly impact-resistant), weighs far less (no reinforcement needed), and is backed by a 50-year warranty.',
    category: 'Materials'
  },
  {
    id: 'faq6',
    question: 'Do you offer financing options for premium roofing systems?',
    answer: 'Yes, we understand a high-end roof is a significant financial asset. We provide flexible financing solutions through elite lending partners. Our plans include 0% interest for 12 months, or low-interest fixed APR options extending up to 10 years, allowing you to select a premium roofing system with comfortable, predictable monthly payments. The pre-approval process takes under five minutes during your consultation.',
    category: 'Cost & Financing'
  }
];
