import type { Locale } from '../i18n/config';

export interface I18nString { es: string; en: string }

export interface EducationItem {
  title: I18nString;
  chip?: I18nString;
  date: I18nString;
  school: string;
  description: I18nString;
  skills: string[];
}

export function trEdu(s: I18nString, locale: Locale): string {
  return s[locale] ?? s.es;
}

export const education: EducationItem[] = [
  {
    title: { es: 'BSC INFORMATION TECHNOLOGY', en: 'BSC INFORMATION TECHNOLOGY' },
    chip: { es: 'INTERRUMPIDO', en: 'DISCONTINUED' },
    date: { es: 'SEP 2017 — JUN 2022', en: 'SEP 2017 — JUN 2022' },
    school: 'UNIVERSIDAD POLITÉCNICA DE MADRID · ESPAÑA',
    description: {
      es:
        'Desde joven he sido apasionado de la tecnología y los ordenadores. Horas explorando internet y videojuegos despertaron mi curiosidad por cómo funciona el software — algo que me llevó a estudiar Informática en la UPM. Durante la carrera trabajé en proyectos del Laboratorio de Hidráulica y Hidrología y del dpto. de Puertos, desarrollando herramientas para optimizar experimentos de laboratorio.',
      en:
        'From a young age I was passionate about technology and computers. Hours exploring the internet and video games sparked my curiosity about how software works — which led me to study Computer Science at UPM. During my studies I worked on projects for the Hydraulics & Hydrology Laboratory and the Ports department, developing tools to optimize laboratory experiments.',
    },
    skills: ['DOCKER', 'JAVA'],
  },
  {
    title: { es: 'BSC CIVIL ENGINEERING', en: 'BSC CIVIL ENGINEERING' },
    chip: { es: 'INTERRUMPIDO', en: 'DISCONTINUED' },
    date: { es: 'SEP 2015 — JUN 2017', en: 'SEP 2015 — JUN 2017' },
    school: 'UNIVERSIDAD POLITÉCNICA DE MADRID · ESPAÑA',
    description: {
      es:
        'Pasión temprana por construir y crear — horas con LEGO montando casas y puentes. Esa curiosidad me llevó a Ingeniería Civil en la UPM, donde adquirí una base sólida en matemáticas, física y principios de ingeniería.',
      en:
        'Early passion for building and creating — hours with LEGO assembling houses and bridges. That curiosity led me to Civil Engineering at UPM, where I built a solid foundation in math, physics and engineering principles.',
    },
    skills: ['PYTHON', 'MATLAB'],
  },
];

export interface Reference {
  text: I18nString;
  author: string;
  role: I18nString;
}

export const references: Reference[] = [
  {
    text: {
      es:
        'Martin es un profesional excepcional con un amplio conocimiento en tecnología, optimización de procesos y mejora continua. Gracias a su experiencia hemos podido digitalizar la fundación y agilizar procesos internos que antes eran mucho más complicados.',
      en:
        'Martin is an exceptional professional with extensive knowledge in technology, process optimization, and continuous improvement. Thanks to his expertise, we have been able to digitalize the foundation and streamline internal processes that were previously much more complicated.',
    },
    author: 'ALBERTO BORNSTEIN',
    role: { es: 'DIRECTOR · FUND. A. BETANCOURT', en: 'DIRECTOR · FUND. A. BETANCOURT' },
  },
];
