import type { LandingContent } from '../../types/landing';

export const landingEn: LandingContent = {
  locale: 'en',
  metadata: {
    title: 'SYHTECH | Software and technical services',
    description: 'Software solutions and technical services designed to keep your business moving.',
  },
  navigation: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ],
  languageLabel: 'Español',
  hero: {
    eyebrow: 'SYHTECH',
    title: 'Technology that moves your business forward.',
    description: 'We build purpose-driven software and provide hands-on technical support for growing operations.',
    actionLabel: 'Start a conversation',
  },
  services: {
    eyebrow: 'Services',
    title: 'Software and hardware expertise, grounded in real work.',
    items: [
      { title: 'Software delivery', description: 'Custom digital products and systems built around practical business outcomes.' },
      { title: 'Technical services', description: 'Diagnosis, maintenance and support for the technology your team relies on.' },
    ],
  },
  about: {
    eyebrow: 'About SYHTECH',
    title: 'A technical partner for what comes next.',
    description: 'We bring together software delivery and hardware expertise to solve operational challenges with clarity.',
  },
  process: {
    eyebrow: 'Our approach',
    title: 'From a real need to a dependable solution.',
    steps: ['Understand the challenge', 'Shape the right solution', 'Build, support and improve'],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about your next challenge.',
    description: 'Tell us where you need support and we will explore the right way forward together.',
    actionLabel: 'Email SYHTECH',
    email: 'hello@syhtech.com',
  },
  footer: 'SYHTECH. Software delivery and technical services.',
};
