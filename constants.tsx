import { 
  Cpu, Shield, Cloud, Activity, Code, Crosshair, 
  Terminal, Zap, Globe, Lock 
} from 'lucide-react';
import { Service, Stat, TeamMember, PricingPlan, TestCase } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'AI Systems Core',
    description: 'Neural network architectures designed to automate decision-making processes with 99.9% accuracy.',
    icon: Cpu,
    color: 'cyan'
  },
  {
    id: '2',
    title: 'Cybersecurity Firewall',
    description: 'Impenetrable holographic defense layers protecting your data assets from netrunners and rogue AI.',
    icon: Shield,
    color: 'pink'
  },
  {
    id: '3',
    title: 'Neural Cloud Computing',
    description: 'Decentralized server structures running on quantum-entangled nodes for zero-latency operations.',
    icon: Cloud,
    color: 'purple'
  },
  {
    id: '4',
    title: 'Data Pulse Analytics',
    description: 'Real-time visualization of big data streams using predictive algorithms.',
    icon: Activity,
    color: 'cyan'
  },
  {
    id: '5',
    title: 'Quantum Software Dev',
    description: 'Next-gen software engineering utilizing superposition states for complex problem solving.',
    icon: Code,
    color: 'pink'
  },
  {
    id: '6',
    title: 'IT Combat Support',
    description: 'Rapid response tactical IT teams deployed to resolve critical system failures.',
    icon: Crosshair,
    color: 'purple'
  }
];

export const STATS: Stat[] = [
  { label: 'Systems Secured', value: '9,420' },
  { label: 'Threats Neutralized', value: '1.2M+' },
  { label: 'Uptime', value: '99.99%' },
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Kael "Viper" Theron', role: 'Lead Architect', image: 'https://picsum.photos/400/400?grayscale' },
  { id: '2', name: 'Lyra Sato', role: 'NetSec Specialist', image: 'https://picsum.photos/401/401?grayscale' },
  { id: '3', name: 'Jaxon Vor', role: 'AI Handler', image: 'https://picsum.photos/402/402?grayscale' },
];

export const PRICING: PricingPlan[] = [
  {
    name: 'Starter.exe',
    price: '¥ 5,000',
    features: ['Basic Firewall', 'Cloud Storage (1TB)', 'Email Support', 'Weekly Audits'],
    color: 'cyan'
  },
  {
    name: 'Pro.cyber',
    price: '¥ 12,000',
    features: ['AI Threat Detection', 'Quantum Encryption', '24/7 Holo-Support', 'Daily Backups', 'Neural Interface'],
    isPopular: true,
    color: 'pink'
  },
  {
    name: 'Enterprise.neon',
    price: '¥ 45,000',
    features: ['Dedicated Netrunner Team', 'Custom AI Models', 'Zero-Day Protection', 'Global Node Access', 'Unlimited Bandwidth'],
    color: 'purple'
  }
];

export const CASES: TestCase[] = [
  { title: 'Project: Blackout', client: 'Arasaka Corp', stats: '+400% Efficiency', image: 'https://picsum.photos/600/400?blur=2' },
  { title: 'Neon Grid Expansion', client: 'Night City Gov', stats: 'Zero Latency', image: 'https://picsum.photos/600/401?blur=2' },
];