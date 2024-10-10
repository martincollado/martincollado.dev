import 'dotenv/config';

import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import { join } from 'node:path';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from '@playform/compress';
import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';
import metaTags from 'astro-meta-tags';
// import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: getSiteUrl(),

  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['es', 'en'],
  // },
  output: 'static',
  // adapter: node({
  //   mode: 'standalone',
  // }),
  adapter: vercel({
    imageService: true,
  }),
  security: {
    checkOrigin: false,
  },

  env: {
    schema: {
      PUBLIC_UMAMI_WEBSITE_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_POSTHOG_API_HOST: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
      PUBLIC_POSTHOG_API_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_SENTRY_DSN: envField.string({ context: 'client', access: 'public', optional: true, url: true }),
      PRIVATE_SENTRY_AUTH_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },

  integrations: [
    metaTags(),
    mdx(),
    icon(),
    tailwind(),
    sitemap({ filter: (url) => new URL(url).pathname === '/' }),
    {
      name: 'remove-asset-sites',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          await Promise.all([removeIfExists(join(dir.pathname, 'og')), removeIfExists(join(dir.pathname, 'pdf'))]);
        },
      },
    },
    compress({
      CSS: false,
      HTML: {
        'html-minifier-terser': {
          minifyCSS: false,
        },
      },
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

async function removeIfExists(path: string) {
  if (existsSync(path)) {
    await rm(path, { recursive: true });
  }
}

function getSiteUrl() {
  if (process.env.ASTRO_SITE) {
    return process.env.ASTRO_SITE;
  }
  if (process.env.NETLIFY) {
    return process.env.URL;
  }
  if (process.env.RENDER) {
    return process.env.RENDER_EXTERNAL_URL;
  }
  if (process.env.CF_PAGES) {
    return process.env.CF_PAGES_URL;
  }

  if (process.env.CI && process.env.CI_CHECKS !== 'true') {
    console.error('Site URL not not found. Please set the ASTRO_SITE environment variable.');
    process.exit(1);
  }

  return 'http://localhost:4321';
}
