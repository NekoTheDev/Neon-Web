import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'cyan' | 'pink' | 'purple';
}

export interface Stat {
  label: string;
  value: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  color: 'cyan' | 'pink' | 'purple';
}

export interface TestCase {
  title: string;
  client: string;
  stats: string;
  image: string;
}