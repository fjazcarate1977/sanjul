/* eslint-disable */
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'en-US';

register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

const initialLocale = browser ? window.navigator.language : defaultLocale;

init({
  fallbackLocale: defaultLocale,
  initialLocale
});
