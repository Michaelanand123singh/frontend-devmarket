export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface PricingPlan {
    id: number;
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
  }
  
  export interface Testimonial {
    id: number;
    text: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  }
  
  export interface FAQ {
    id: number;
    question: string;
    answer: string;
  }
  
  export interface NavItem {
    id: number;
    label: string;
    href: string;
  }
  
  export interface FooterLink {
    id: number;
    label: string;
    href: string;
  }
  
  export interface FooterSection {
    id: number;
    title: string;
    links: FooterLink[];
  }
  
  export interface SocialLink {
    id: number;
    platform: string;
    href: string;
    icon: string;
  }
  
  export interface FormData {
    name: string;
    email: string;
    message?: string;
  }