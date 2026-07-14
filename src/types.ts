export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string; // Lucide icon name
  shortDesc: string;
  longDesc: string;
  bulletPoints: string[];
  image: string;
  metaTitle: string;
  metaDesc: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Specialty';
  location: string;
  year: string;
  image: string; // General project display
  description: string;
  highlights: string[];
  beforeImage?: string;
  afterImage?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  content: string; // Markdown or simple paragraphs
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  projectType: string;
  quote: string;
  avatar?: string;
}

export interface ServiceArea {
  id: string;
  city: string;
  state: string;
  postalCodePattern: string;
  description: string;
  primaryServices: string[];
  distance: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'Cost & Financing' | 'Process & Timeline' | 'Materials' | 'Warranty & Insurance';
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceNeeded: string;
  preferredTime: string;
  message?: string;
  createdAt: string;
}
