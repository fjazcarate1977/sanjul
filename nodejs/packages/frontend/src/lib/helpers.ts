import axios from 'axios';

import { goto } from '$app/navigation';

import type { LocalesTypes } from '$lib/types';

export const getNewLocale = (local: string): LocalesTypes =>
  /^(?:en|EN)-.+/.test(local) ? 'es-ES' : 'en-US';

export const goToSocialMedia = async (socialLink: string) => {
  await goto(socialLink);
};

export const sendContactData = async <T>(contactData: T): Promise<boolean> => {
  try {
    await axios.post(
      import.meta.env.VITE_PUBLIC_API_EMAIL_ENDPOINT as string,
      contactData
    );
    return true;
  } catch (error) {
    return false;
  }
};
