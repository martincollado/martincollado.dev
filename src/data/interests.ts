import type { Locale } from '../i18n/config';

export interface I18nString { es: string; en: string }

export interface Interest {
  num: string;
  title: I18nString; // may contain <br/>
  tag: I18nString;
}

export function trInt(s: I18nString, locale: Locale): string {
  return s[locale] ?? s.es;
}

export const interests: Interest[] = [
  {
    num: '01',
    title: { es: 'SURF', en: 'SURF' },
    tag: { es: '// PLAYAS CANTÁBRICAS · WIP', en: '// CANTABRIAN BEACHES · WIP' },
  },
  {
    num: '02',
    title: { es: 'BODY<br/>BOARD', en: 'BODY<br/>BOARD' },
    tag: { es: '// AGUA FRÍA', en: '// COLD WATER' },
  },
  {
    num: '03',
    title: { es: 'BUCEO', en: 'SCUBA<br/>DIVING' },
    tag: { es: '// PADI OW + ADVANCED', en: '// PADI OW + ADVANCED' },
  },
  {
    num: '04',
    title: { es: 'FOTO<br/>GRAFÍA', en: 'PHOTO<br/>GRAPHY' },
    tag: { es: '// @MCOLLADOPHOTOGRAPHY', en: '// @MCOLLADOPHOTOGRAPHY' },
  },
  {
    num: '05',
    title: { es: 'DRONES', en: 'DRONES' },
    tag: { es: '// A1/A3 + STS-ES-01/02', en: '// A1/A3 + STS-ES-01/02' },
  },
  {
    num: '06',
    title: { es: 'IMPRESIÓN<br/>3D', en: '3D<br/>PRINT' },
    tag: { es: '// FUSION 360 · SKETCHUP', en: '// FUSION 360 · SKETCHUP' },
  },
  {
    num: '07',
    title: { es: 'ELECTRÓ<br/>NICA', en: 'ELECTRO<br/>NICS' },
    tag: { es: '// ARDUINO · RPI · ESP8266', en: '// ARDUINO · RPI · ESP8266' },
  },
  {
    num: '08',
    title: { es: 'OPEN<br/>SOURCE', en: 'OPEN<br/>SOURCE' },
    tag: { es: '// CONTRIBS & SIDEPROJECTS', en: '// CONTRIBS & SIDEPROJECTS' },
  },
];
