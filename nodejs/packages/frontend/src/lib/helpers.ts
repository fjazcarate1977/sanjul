export const getNewLocale = (local: string) =>
  /^(?:en|EN)-.+/.test(local) ? 'es-ES' : 'en-US';
