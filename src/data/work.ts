import type { SkillTag } from './skills';
import type { Locale } from '../i18n/config';

export interface I18nString { es: string; en: string }

export interface WorkItem {
  num: string;
  title: I18nString;
  company: string;
  companyUrl: string;
  date: I18nString; // contains <br/>
  type: I18nString;
  model: I18nString;
  bullets: { es: string[]; en: string[] };
  stack: SkillTag[];
}

export function tr(s: I18nString, locale: Locale): string {
  return s[locale] ?? s.es;
}

export const work: WorkItem[] = [
  {
    num: '01',
    title: { es: 'CLOUD & DEVOPS ARCHITECT', en: 'CLOUD & DEVOPS ARCHITECT' },
    company: 'DEVOTEAM / GCLOUD PARTNER',
    companyUrl: 'https://devoteam.com',
    date: { es: 'ENE 2025<br/>— CURRENT', en: 'JAN 2025<br/>— CURRENT' },
    type: { es: 'FULL-TIME', en: 'FULL-TIME' },
    model: { es: 'REMOTE', en: 'REMOTE' },
    bullets: {
      es: [
        '<strong>Cloud Architect</strong> diseñando arquitecturas GCP-first para clientes enterprise.',
        'Diseño de <span class="hl">landing zones</span> y prácticas GitOps a escala multi-equipo.',
      ],
      en: [
        '<strong>Cloud Architect</strong> designing GCP-first architectures for enterprise clients.',
        'Design of <span class="hl">landing zones</span> and GitOps practices at multi-team scale.',
      ],
    },
    stack: [
      { label: 'KUBERNETES', variant: 'primary' },
      { label: 'PYTHON' },
      { label: 'TERRAFORM' },
      { label: 'GCP' },
    ],
  },
  {
    num: '02',
    title: { es: 'PRINCIPAL SITE RELIABILITY ENGINEER', en: 'PRINCIPAL SITE RELIABILITY ENGINEER' },
    company: 'ACCIONA / IT CONSTRUCTION',
    companyUrl: 'https://acciona.com/',
    date: { es: 'ABR 2022<br/>— DIC 2024', en: 'APR 2022<br/>— DEC 2024' },
    type: { es: 'FULL-TIME', en: 'FULL-TIME' },
    model: { es: 'REMOTE', en: 'REMOTE' },
    bullets: {
      es: [
        '<strong>Lideré el equipo de SRE</strong>, responsable del diseño, implementación y mantenimiento de infra y aplicaciones.',
        '<strong>Migré aplicaciones on-premise a GCP</strong> con Kubernetes y Terraform — <span class="hl">−30% de coste de infra</span>, mayor escalabilidad y fiabilidad.',
        '<strong>Diseñé arquitecturas complejas nuevas</strong> con microservicios y tecnologías serverless.',
        '<strong>Documenté y formé a developers</strong>, acelerando la adopción de nuevas features y promoviendo best practices.',
        '<strong>Implementé GitOps con ArgoCD</strong> — <span class="hl">−70% time-to-deploy</span> en nuevas features.',
        '<strong>Establecí Keycloak como IdP corporativo</strong> — <span class="hl">−90% en onboarding</span> de nuevas aplicaciones.',
      ],
      en: [
        '<strong>Led the SRE team</strong>, responsible for design, implementation and maintenance of infra and applications.',
        '<strong>Migrated on-premise applications to GCP</strong> with Kubernetes and Terraform — <span class="hl">−30% infra cost</span>, higher scalability and reliability.',
        '<strong>Designed new complex architectures</strong> with microservices and serverless technologies.',
        '<strong>Documented and trained developers</strong>, accelerating feature adoption and promoting best practices.',
        '<strong>Implemented GitOps with ArgoCD</strong> — <span class="hl">−70% time-to-deploy</span> on new features.',
        '<strong>Set up Keycloak as corporate IdP</strong> — <span class="hl">−90% onboarding</span> for new applications.',
      ],
    },
    stack: [
      { label: 'KUBERNETES', variant: 'primary' },
      { label: 'PYTHON', variant: 'primary' },
      { label: 'TERRAFORM', variant: 'solid' },
      { label: 'GCP', variant: 'solid' },
      { label: 'KEYCLOAK' },
      { label: 'ISTIO' },
      { label: 'ARGO CD' },
    ],
  },
  {
    num: '03',
    title: { es: 'CHIEF TECHNOLOGY OFFICER', en: 'CHIEF TECHNOLOGY OFFICER' },
    company: 'FUNDACIÓN A. BETANCOURT',
    companyUrl: 'https://fundacionabetancourt.org/',
    date: { es: 'JUN 2020<br/>— CURRENT', en: 'JUN 2020<br/>— CURRENT' },
    type: { es: 'CONSULTANT', en: 'CONSULTANT' },
    model: { es: 'REMOTE', en: 'REMOTE' },
    bullets: {
      es: [
        '<strong>Diseñé una infraestructura hybrid-cloud</strong> con Kubernetes y GCP para hostear todos los servicios de la fundación.',
        '<strong>Analicé y optimicé procesos internos</strong>, mejorando eficiencia organizativa.',
        '<strong>Lideré la transformación digital</strong> creando productos y servicios digitales nuevos.',
        '<strong>Digitalicé procesos manuales</strong> — <span class="hl">−50% tiempo de tareas</span> y mayor calidad de servicio.',
      ],
      en: [
        '<strong>Designed a hybrid-cloud infrastructure</strong> with Kubernetes and GCP to host all foundation services.',
        '<strong>Analyzed and optimized internal processes</strong>, improving organizational efficiency.',
        '<strong>Led digital transformation</strong> by creating new digital products and services.',
        '<strong>Digitalized manual processes</strong> — <span class="hl">−50% task time</span> and higher service quality.',
      ],
    },
    stack: [
      { label: 'KUBERNETES', variant: 'primary' },
      { label: 'PYTHON', variant: 'primary' },
      { label: 'FASTAPI', variant: 'solid' },
      { label: 'GCP' },
      { label: 'DOCKER' },
      { label: 'GRAFANA' },
    ],
  },
  {
    num: '04',
    title: { es: 'DEVOPS ENGINEER', en: 'DEVOPS ENGINEER' },
    company: 'ACCIONA / DIGITAL INNOVATION SEVILLE',
    companyUrl: 'https://acciona.com/',
    date: { es: 'FEB 2020<br/>— ABR 2022', en: 'FEB 2020<br/>— APR 2022' },
    type: { es: 'FULL-TIME', en: 'FULL-TIME' },
    model: { es: 'ON-SITE', en: 'ON-SITE' },
    bullets: {
      es: [
        '<strong>Migré servicios desde OVH e IONOS a AWS</strong>, basados en Docker — escalabilidad y fiabilidad mejoradas.',
        '<strong>Implementé la cultura DevOps</strong> moviendo al equipo de non-CI/CD a GitLab CI/CD — <span class="hl">−70% time-to-deploy</span>.',
        '<strong>Diseñé VPCs y VPNs</strong> para conectar la red on-premise con AWS.',
        '<strong>Modernicé deployments en obras de construcción</strong>, mejorando fiabilidad en entornos complejos.',
      ],
      en: [
        '<strong>Migrated services from OVH and IONOS to AWS</strong>, Docker-based — improved scalability and reliability.',
        '<strong>Introduced DevOps culture</strong>, moving the team from non-CI/CD to GitLab CI/CD — <span class="hl">−70% time-to-deploy</span>.',
        '<strong>Designed VPCs and VPNs</strong> to connect the on-premise network with AWS.',
        '<strong>Modernized deployments across construction sites</strong>, improving reliability in complex environments.',
      ],
    },
    stack: [
      { label: 'PYTHON', variant: 'solid' },
      { label: 'AWS', variant: 'solid' },
      { label: 'DOCKER' },
      { label: 'TERRAFORM' },
      { label: 'GITLAB' },
    ],
  },
  {
    num: '05',
    title: { es: 'RESEARCH & BACKEND DEVELOPER', en: 'RESEARCH & BACKEND DEVELOPER' },
    company: 'UNIVERSIDAD POLITÉCNICA DE MADRID',
    companyUrl: 'https://upm.es/',
    date: { es: 'SEP 2015<br/>— ENE 2020', en: 'SEP 2015<br/>— JAN 2020' },
    type: { es: 'PART-TIME', en: 'PART-TIME' },
    model: { es: 'ON-SITE', en: 'ON-SITE' },
    bullets: {
      es: [
        '<strong>Investigación y desarrollo de servicios backend</strong> para el dpto. de Hidráulica e Hidrología de la ETSI de Caminos, Canales y Puertos.',
        '<strong>Desarrollo de web apps y servicios backend</strong> para el dpto. de Puertos e Ingeniería Costera.',
        '<strong>Soluciones de modelos matemáticos</strong> procesados en los servicios backend.',
        '<strong>Diseño de infraestructura on-premise</strong> para todos los servicios del laboratorio.',
        '<strong>Introduje Docker y GitLab CI/CD</strong> al equipo — <span class="hl">−40% time-to-deploy</span>.',
      ],
      en: [
        '<strong>Research and backend service development</strong> for the Hydraulics & Hydrology department at ETSI Caminos, Canales y Puertos.',
        '<strong>Web apps and backend services</strong> for the Ports & Coastal Engineering department.',
        '<strong>Mathematical model solutions</strong> processed by the backend services.',
        '<strong>On-premise infrastructure design</strong> for all laboratory services.',
        '<strong>Introduced Docker and GitLab CI/CD</strong> to the team — <span class="hl">−40% time-to-deploy</span>.',
      ],
    },
    stack: [
      { label: 'PYTHON', variant: 'solid' },
      { label: 'DOCKER' },
      { label: 'GITLAB' },
    ],
  },
];
