import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import compress from '@playform/compress';
import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField, fontProviders } from 'astro/config';
import metaTags from 'astro-meta-tags';

export default defineConfig({
  site: getSiteUrl(),
  output: 'static',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
    fallback: { en: 'es' },
  },

  adapter: vercel({ imageService: true }),

  security: {
    checkOrigin: false,
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Archivo Black',
      cssVariable: '--font-display',
      weights: ['400'],
    },
    {
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-ui',
      weights: ['400', '500', '600', '700', '800', '900'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: ['400', '500', '700'],
    },
  ],

  env: {
    schema: {
      PUBLIC_UMAMI_WEBSITE_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_POSTHOG_API_HOST: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
      PUBLIC_POSTHOG_API_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_SENTRY_DSN: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
      PRIVATE_SENTRY_AUTH_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    metaTags(),
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-US' } },
    }),
    compress({
      CSS: false,
      HTML: { 'html-minifier-terser': { minifyCSS: false } },
    }),
    sentry({
      dsn: 'https://2c07c8ad4b9f9e4a047752e0e54b2bae@o1188720.ingest.us.sentry.io/4506597307056128',
      sourceMapsUploadOptions: {
        project: 'martincollado-dev',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    spotlightjs(),
  ],
});

function getSiteUrl() {
  if (process.env.ASTRO_SITE) return process.env.ASTRO_SITE;
  if (process.env.NETLIFY) return process.env.URL;
  if (process.env.RENDER) return process.env.RENDER_EXTERNAL_URL;
  if (process.env.CF_PAGES) return process.env.CF_PAGES_URL;
  if (process.env.CI && process.env.CI_CHECKS !== 'true') {
    console.error('Site URL not found. Set ASTRO_SITE env var.');
    process.exit(1);
  }
  return 'http://localhost:4321';
}
