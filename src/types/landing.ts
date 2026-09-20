export type Locale = 'es' | 'en';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface LandingContent {
  locale: Locale;
  metadata: {
    title: string;
    description: string;
  };
  navigation: NavigationItem[];
  languageLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    actionLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: Service[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    actionLabel: string;
    email: string;
  };
  footer: string;
}
