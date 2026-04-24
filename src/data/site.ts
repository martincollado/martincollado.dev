import type { Locale } from '../i18n/config';

export interface NavLink {
  idx: string;
  key: 'about' | 'skills' | 'work' | 'education' | 'interests' | 'contact';
  href: string;
}

export const navLinks: NavLink[] = [
  { idx: '00', key: 'about', href: '#about' },
  { idx: '01', key: 'skills', href: '#skills' },
  { idx: '02', key: 'work', href: '#work' },
  { idx: '03', key: 'education', href: '#education' },
  { idx: '04', key: 'interests', href: '#interests' },
  { idx: '05', key: 'contact', href: '#contact' },
];

export const site = {
  name: 'Martin Collado',
  email: 'info@martincollado.dev',
  location: 'Santander, Cantabria · ES',
  age: 36,
  resumeUrlByLocale: {
    es: '/cv.html',
    en: '/cv.html',
  } satisfies Record<Locale, string>,
  socials: {
    linkedinByLocale: {
      es: 'https://www.linkedin.com/in/martincolladodev/?locale=es_ES',
      en: 'https://www.linkedin.com/in/martincolladodev/?locale=en_US',
    } satisfies Record<Locale, string>,
    github: 'https://github.com/martincollado',
    instagram: 'https://www.instagram.com/mcolladophotography/',
  },
};
