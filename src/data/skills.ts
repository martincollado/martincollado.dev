import type { Locale } from '../i18n/config';

export interface SkillTag {
  label: string;
  variant?: 'primary' | 'solid' | 'default';
}

export interface SkillGroup {
  subtitle: { es: string; en: string };
  tags: SkillTag[];
}

export interface SkillCategory {
  num: string;
  title: string;
  groups: SkillGroup[];
}

export const skills: SkillCategory[] = [
  {
    num: '01',
    title: 'TECHNOLOGIES',
    groups: [
      {
        subtitle: {
          es: '// CORE STACK · BACKEND & INFRA',
          en: '// CORE STACK · BACKEND & INFRA',
        },
        tags: [
          { label: 'KUBERNETES', variant: 'primary' },
          { label: 'PYTHON', variant: 'primary' },
          { label: 'DOCKER', variant: 'primary' },
          { label: 'TERRAFORM', variant: 'solid' },
          { label: 'FASTAPI', variant: 'solid' },
          { label: 'ARGO CD', variant: 'solid' },
          { label: 'GRAFANA' },
          { label: 'PROMETHEUS' },
          { label: 'PLAYWRIGHT' },
          { label: 'POSTGRESQL' },
          { label: 'MYSQL' },
          { label: 'NATS' },
          { label: 'KEYCLOAK' },
          { label: 'ISTIO' },
          { label: 'TRAEFIK' },
          { label: 'SHADCN/UI' },
          { label: 'K6' },
          { label: 'RUST' },
          { label: 'ASTRO' },
        ],
      },
    ],
  },
  {
    num: '02',
    title: 'PLATFORMS',
    groups: [
      {
        subtitle: {
          es: '// CLOUD & DEPLOY TARGETS',
          en: '// CLOUD & DEPLOY TARGETS',
        },
        tags: [
          { label: 'GOOGLE CLOUD', variant: 'primary' },
          { label: 'AWS', variant: 'primary' },
          { label: 'VERCEL', variant: 'solid' },
          { label: 'MICROSOFT AZURE' },
        ],
      },
      {
        subtitle: { es: '// CI/CD & TOOLS', en: '// CI/CD & TOOLS' },
        tags: [
          { label: 'GITHUB ACTIONS', variant: 'primary' },
          { label: 'AZURE DEVOPS', variant: 'solid' },
          { label: 'GITLAB' },
          { label: 'SENTRY' },
          { label: 'DATADOG' },
          { label: 'SONARQUBE' },
        ],
      },
    ],
  },
  {
    num: '03',
    title: 'OFF-STACK',
    groups: [
      {
        subtitle: {
          es: '// LENGUAJES & CREATIVE TOOLS',
          en: '// LANGUAGES & CREATIVE TOOLS',
        },
        tags: [
          { label: 'ESPAÑOL / NATIVO', variant: 'solid' },
          { label: 'ENGLISH / PRO', variant: 'solid' },
        ],
      },
      {
        subtitle: {
          es: '// DISEÑO 3D + FOTO/VIDEO',
          en: '// 3D DESIGN + PHOTO/VIDEO',
        },
        tags: [
          { label: 'SKETCHUP' },
          { label: 'AUTOCAD' },
          { label: 'FUSION 360' },
          { label: 'DAVINCI RESOLVE' },
        ],
      },
    ],
  },
];

export function getSubtitle(g: SkillGroup, locale: Locale): string {
  return g.subtitle[locale] ?? g.subtitle.es;
}
