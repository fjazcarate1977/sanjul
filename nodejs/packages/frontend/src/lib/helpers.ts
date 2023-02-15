import { goto } from '$app/navigation';

import type { LocalesTypes } from '$lib/types';

export const getNewLocale = (local: string): LocalesTypes =>
  /^(?:en|EN)-.+/.test(local) ? 'es-ES' : 'en-US';

export const goToSocialMedia = async (socialLink: string) => {
  await goto(socialLink);
};
