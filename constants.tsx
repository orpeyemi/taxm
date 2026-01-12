
import { Industry } from './types';

export const INDUSTRIES: Industry[] = [
  { 
    id: '1', 
    name: 'Real Estate', 
    description: 'Strategic tax planning for property developers, managers, and high-yield investors.',
    icon: 'Building2'
  },
  { 
    id: '2', 
    name: 'Small Business', 
    description: 'Comprehensive financial health checks and tax preparation for local entrepreneurs.',
    icon: 'Store',
    isActive: true 
  },
  { 
    id: '3', 
    name: 'Healthcare', 
    description: 'Specialized accounting for private practices, clinics, and medical professionals.',
    icon: 'Stethoscope'
  },
  { 
    id: '4', 
    name: 'Entertainment', 
    description: 'Royalty tracking and multi-state tax compliance for artists and production houses.',
    icon: 'Film'
  },
  { 
    id: '5', 
    name: 'Legal Action', 
    description: 'Forensic accounting and settlement fund management for legal firms.',
    icon: 'Gavel'
  },
  { 
    id: '6', 
    name: 'Education', 
    description: 'Grant management and non-profit tax filing for private schools and tutors.',
    icon: 'GraduationCap'
  },
  { 
    id: '7', 
    name: 'Influencer', 
    description: 'Modern digital asset accounting for content creators and social media brands.',
    icon: 'Instagram'
  },
  { 
    id: '8', 
    name: 'E-Commerce', 
    description: 'Inventory-linked tax strategies and international sales tax compliance.',
    icon: 'ShoppingBag'
  },
  { 
    id: '9', 
    name: 'Gym Owner', 
    description: 'Subscription revenue management and equipment depreciation strategies.',
    icon: 'Dumbbell'
  },
  { 
    id: '10', 
    name: 'Dentist', 
    description: 'Practice valuation and tax-efficient equipment acquisition planning.',
    icon: 'Activity'
  },
  { 
    id: '11', 
    name: 'Physicians', 
    description: 'Individual wealth management and tax shielding for medical specialists.',
    icon: 'UserRound'
  },
  { 
    id: '12', 
    name: 'Lawyers', 
    description: 'Partner equity accounting and corporate structure optimization.',
    icon: 'Briefcase'
  },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Industries', href: '#', current: true },
  { name: 'Case Studies', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact Us', href: '#' },
];