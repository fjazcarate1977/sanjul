import axios from 'axios';

import { goto } from '$app/navigation';

const variables = {
  basePath: import.meta.env.VITE_PUBLIC_API_BASE as string
};

export const getNewLocale = (local: string) =>
  /^(?:en|EN)-.+/.test(local) ? 'es-ES' : 'en-US';

export const goToSocialMedia = async (socialLink: string) => {
  await goto(socialLink);
};

export const sendContactData = async <T>(contactData: T): Promise<boolean> => {
  try {
    await axios.post(variables.basePath, contactData);
    return true;
  } catch (error) {
    return false;
  }
};
