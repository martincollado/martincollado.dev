import type { Locale } from './config';

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    about: string;
    skills: string;
    work: string;
    education: string;
    interests: string;
    contact: string;
    hireMe: string;
  };
  hero: {
    tag: string;
    h1: { line1: string; line2Before: string; line3: string };
    description: string; // may contain <strong> / <span class="hl">
    cta: { resume: string; work: string; contact: string };
    id: {
      id: string;
      age: string;
      loc: string;
      status: string;
      statusValue: string;
      locValue: string;
    };
    meta: {
      email: string;
      location: string;
      freelance: string;
      freelanceValue: string;
      years: string;
      yearsValue: string;
    };
  };
  skills: {
    sectionMeta: string;
    sectionTag: string;
    titleL1: string;
    titleL2: string;
  };
  work: {
    sectionMeta: string;
    sectionTag: string;
    titleL1: string;
    titleL2: string;
    titleL3: string;
    labels: { type: string; model: string };
  };
  education: {
    sectionMeta: string;
    sectionTag: string;
    titleL1: string;
    titleL2: string;
    reference: string;
  };
  interests: {
    sectionMeta: string;
    sectionTag: string;
    titleL1: string;
    titleL2: string;
    titleL3: string;
  };
  contact: {
    sectionMeta: string;
    sectionTag: string;
    titleL1: string;
    titleL2: string;
    titleL3: string;
    linkedin: string;
    github: string;
    instagram: string;
    resume: string;
    terminal: { availability: string; location: string };
  };
  footer: { built: string; version: string };
  lang: { selectorLabel: string };
}

const es: Dictionary = {
  meta: {
    title: 'Martin Collado / Senior SRE + Python',
    description:
      'Senior Site Reliability Engineer y Senior Python Developer. Infraestructura cloud escalable en Kubernetes, GCP y AWS.',
  },
  nav: {
    about: 'SOBRE MÍ',
    skills: 'STACK',
    work: 'EXPERIENCIA',
    education: 'FORMACIÓN',
    interests: 'PERSONAL',
    contact: 'CONTACTO',
    hireMe: 'CONTRÁTAME',
  },
  hero: {
    tag: 'SRE EN 2026 / FIABILIDAD Y CLOUD',
    h1: { line1: 'SISTEMAS', line2Before: '/ QUE NO TE', line3: 'DESPIERTAN.' },
    description:
      'Soy <strong>Martín Collado</strong>, <strong>Senior Site Reliability Engineer</strong> y <strong>Senior Python Developer</strong> con más de una década construyendo y optimizando sistemas de alto rendimiento en la nube. Mi especialidad: diseñar infraestructuras escalables en <span class="hl">Kubernetes</span>, <span class="hl">GCP</span> y <span class="hl">AWS</span> — con Argo CD, KEDA, Terraform e Istio como herramientas de cabecera. Me mantengo al día con LLMs y agentes autónomos, colaboro en proyectos open-source y llevo mi propio negocio de consultoría.',
    cta: {
      resume: 'DESCARGAR CV',
      work: 'VER EXPERIENCIA',
      contact: 'CONTACTAR',
    },
    id: {
      id: 'ID / 001',
      age: 'EDAD',
      loc: 'UBI',
      status: 'ESTADO',
      statusValue: 'DISPONIBLE',
      locValue: 'SANTANDER · ES',
    },
    meta: {
      email: 'EMAIL',
      location: 'UBICACIÓN',
      freelance: 'FREELANCE',
      freelanceValue: 'DISPONIBLE',
      years: 'AÑOS EN EL SECTOR',
      yearsValue: '10+ AÑOS',
    },
  },
  skills: {
    sectionMeta: '01 / STACK TÉCNICO',
    sectionTag: 'EXPERIENCIA / STACK Y HERRAMIENTAS',
    titleL1: 'LO QUE USO',
    titleL2: 'CADA DÍA.',
  },
  work: {
    sectionMeta: '02 / TRAYECTORIA PROFESIONAL',
    sectionTag: 'EXPERIENCIA LABORAL / ÚLTIMOS 10 AÑOS',
    titleL1: 'DÓNDE HE',
    titleL2: 'ROTO Y ARREGLADO',
    titleL3: 'COSAS.',
    labels: { type: 'TIPO', model: 'MODO' },
  },
  education: {
    sectionMeta: '03 / FORMACIÓN + REFERENCIAS',
    sectionTag: 'FORMACIÓN / REFERENCIAS',
    titleL1: 'DE DÓNDE',
    titleL2: 'VENGO.',
    reference: '// REFERENCIA_01',
  },
  interests: {
    sectionMeta: '04 / VIDA FUERA DEL TECLADO',
    sectionTag: 'PERSONAL / INTERESES',
    titleL1: 'CUANDO',
    titleL2: 'CIERRO EL',
    titleL3: 'TERMINAL.',
  },
  contact: {
    sectionMeta: '05 / CONTACTO',
    sectionTag: 'TRABAJO / COLABORACIÓN / CAFÉ',
    titleL1: '¿HABLAMOS',
    titleL2: 'DE UN',
    titleL3: 'PROYECTO?',
    linkedin: 'LINKEDIN / @MARTINCOLLADODEV',
    github: 'GITHUB / @MARTINCOLLADO',
    instagram: 'INSTAGRAM / @MCOLLADOPHOTOGRAPHY',
    resume: 'DESCARGAR CV / PDF',
    terminal: {
      availability: 'DISPONIBLE_OPORTUNIDADES=true',
      location: 'Santander, Cantabria, ES',
    },
  },
  footer: {
    built: '© 2026 MARTIN COLLADO · HECHO CON',
    version: 'v2026.04 · ÚLTIMO DEPLOY: HOY',
  },
  lang: { selectorLabel: 'IDIOMA' },
};

const en: Dictionary = {
  meta: {
    title: 'Martin Collado / Senior SRE + Python',
    description:
      'Senior Site Reliability Engineer and Senior Python Developer. Scalable cloud infrastructure on Kubernetes, GCP and AWS.',
  },
  nav: {
    about: 'ABOUT',
    skills: 'SKILLS',
    work: 'WORK',
    education: 'EDUCATION',
    interests: 'OFF-DUTY',
    contact: 'CONTACT',
    hireMe: 'HIRE ME',
  },
  hero: {
    tag: 'SRE IN 2026 / SITE RELIABILITY & CLOUD',
    h1: {
      line1: 'SYSTEMS',
      line2Before: "/ THAT DON'T",
      line3: 'WAKE YOU UP.',
    },
    description:
      'I\'m <strong>Martín Collado</strong>, <strong>Senior Site Reliability Engineer</strong> and <strong>Senior Python Developer</strong> with over a decade building and optimizing high-performance systems in the cloud. My focus: designing scalable infrastructure on <span class="hl">Kubernetes</span>, <span class="hl">GCP</span> and <span class="hl">AWS</span> — with Argo CD, KEDA, Terraform and Istio as everyday tools. I stay on top of LLMs and autonomous agents, contribute to open-source and run my own consulting business.',
    cta: {
      resume: 'DOWNLOAD CV',
      work: 'SEE EXPERIENCE',
      contact: 'GET IN TOUCH',
    },
    id: {
      id: 'ID / 001',
      age: 'AGE',
      loc: 'LOC',
      status: 'STATUS',
      statusValue: 'OPEN TO WORK',
      locValue: 'SANTANDER · ES',
    },
    meta: {
      email: 'EMAIL',
      location: 'LOCATION',
      freelance: 'FREELANCE',
      freelanceValue: 'AVAILABLE',
      years: 'YEARS IN THE FIELD',
      yearsValue: '10+ YEARS',
    },
  },
  skills: {
    sectionMeta: '01 / TECH STACK',
    sectionTag: 'EXPERTISE / SKILLS & TOOLING',
    titleL1: 'WHAT I USE',
    titleL2: 'EVERY DAY.',
  },
  work: {
    sectionMeta: '02 / PROFESSIONAL TRACK',
    sectionTag: 'WORK EXPERIENCE / LAST 10 YEARS',
    titleL1: 'WHERE I',
    titleL2: 'BROKE AND FIXED',
    titleL3: 'THINGS.',
    labels: { type: 'TYPE', model: 'MODE' },
  },
  education: {
    sectionMeta: '03 / EDUCATION + REFERENCES',
    sectionTag: 'EDUCATION / REFERENCES',
    titleL1: 'WHERE I',
    titleL2: 'COME FROM.',
    reference: '// REFERENCE_01',
  },
  interests: {
    sectionMeta: '04 / LIFE AWAY FROM THE KEYBOARD',
    sectionTag: 'OFF-DUTY / INTERESTS',
    titleL1: 'WHEN I',
    titleL2: 'CLOSE THE',
    titleL3: 'TERMINAL.',
  },
  contact: {
    sectionMeta: '05 / CONTACT',
    sectionTag: 'HIRE / COLLAB / COFFEE',
    titleL1: "LET'S TALK",
    titleL2: 'ABOUT A',
    titleL3: 'PROJECT?',
    linkedin: 'LINKEDIN / @MARTINCOLLADODEV',
    github: 'GITHUB / @MARTINCOLLADO',
    instagram: 'INSTAGRAM / @MCOLLADOPHOTOGRAPHY',
    resume: 'DOWNLOAD RESUME / PDF',
    terminal: {
      availability: 'OPEN_TO_OPPORTUNITIES=true',
      location: 'Santander, Cantabria, ES',
    },
  },
  footer: {
    built: '© 2026 MARTIN COLLADO · BUILT WITH',
    version: 'v2026.04 · LAST DEPLOY: TODAY',
  },
  lang: { selectorLabel: 'LANG' },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}
