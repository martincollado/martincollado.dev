import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: 'https://2c07c8ad4b9f9e4a047752e0e54b2bae@o1188720.ingest.us.sentry.io/4506597307056128',
  tracesSampleRate: 0.1,
});
