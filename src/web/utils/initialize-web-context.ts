import type { AstroGlobal } from 'astro';
import type { Locale } from 'date-fns';
import type { i18n } from 'i18next';
import i18next from 'i18next';

import type { IconStore, Theme } from '@/types/context';
import type { AsyncEntry } from '@/types/entries';

export interface WebContextData extends Omit<WebContext, 'type' | 'iconStore' | 'i18n'> {
  translations: AsyncEntry<'translations'>;
}

export interface WebContext {
  type: 'web';

  /** Initialized instance of i18next. */
  i18n: i18n;

  /** Locale imported from date-fns/locale. */
  locale: Locale;

  /** [Format](https://date-fns.org/docs/format) of all dates across the resume. */
  dateFormat: string;

  /** Store used for server icon caching. */
  iconStore: IconStore;

  /** Configuration of the resume ThemeSwitcher. */
  theme: Theme;

  /** Details of the PDF resume linked on the website. */
  pdf?: {
    path: string;
    label: string;
    filename: string;
  };
}

/** Initializes global context for a web resume. */
export async function initializeWebContext(astro: AstroGlobal, data: WebContextData) {
  // Verifica que data.translations exista y tenga la propiedad 'data'
  const translationsData = (await data.translations)?.data;
  if (!translationsData) {
    throw new Error('Translations data is not available');
  }

  // Inicializa i18next
  await i18next.init({
    lng: data.locale.code,
    resources: { [data.locale.code]: { translation: translationsData } },
  });

  // Crea el contexto web
  const context: WebContext = {
    ...data,
    type: 'web',
    i18n: i18next,
    iconStore: new Map<string, string | Promise<string>>(),
  };

  // Asigna el contexto global a astro.locals
  astro.locals.globalContext = context;
}
