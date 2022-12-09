/* eslint-disable */
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

import { storeLocale } from '../stores';

const defaultLocale = 'en';

register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

const initialLocale = browser ? window.navigator.language : defaultLocale;

storeLocale.set(initialLocale);

init({
  fallbackLocale: defaultLocale,
  initialLocale
});
