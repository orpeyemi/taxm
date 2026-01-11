
import React from 'react';
import { Industry } from './types';

export const INDUSTRIES: Industry[] = [
  { id: '1', name: 'Real Estate' },
  { id: '2', name: 'Small Business', isActive: true },
  { id: '3', name: 'Healthcare' },
  { id: '4', name: 'Entertainment' },
  { id: '5', name: 'Legal Action' },
  { id: '6', name: 'Education' },
  { id: '7', name: 'Influencer' },
  { id: '8', name: 'E-Commerce' },
  { id: '9', name: 'Gym Owner' },
  { id: '10', name: 'Dentist' },
  { id: '11', name: 'Physicians' },
  { id: '12', name: 'Lawyers' },
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
