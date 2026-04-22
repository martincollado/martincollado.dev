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
    es: '/generated/pdf/index.es.pdf',
    en: '/generated/pdf/index.en.pdf',
  } satisfies Record<Locale, string>,
  socials: {
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    instagram: 'https://www.instagram.com/mcolladophotography/',
  },
};
