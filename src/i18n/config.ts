export type Locale = 'es' | 'en';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

export interface LocalePath {
  locale: Locale;
  path: string;
}

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  if (seg === 'en') return 'en';
  return 'es';
}

export function getLocalizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\//, '');
  if (locale === defaultLocale) return '/' + clean;
  return `/${locale}/${clean}`.replace(/\/+$/, '/') === `/${locale}/` && !clean
    ? `/${locale}/`
    : `/${locale}/${clean}`;
}

export function switchLocalePath(currentUrl: URL, target: Locale): string {
  const current = getLocaleFromUrl(currentUrl);
  let path = currentUrl.pathname;
  if (current !== defaultLocale) {
    path = path.replace(new RegExp(`^/${current}`), '') || '/';
  }
  if (target === defaultLocale) return path;
  return `/${target}${path === '/' ? '/' : path}`.replace(/\/$/, '/');
}
