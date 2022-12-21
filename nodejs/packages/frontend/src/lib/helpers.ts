import axios from 'axios';

import { goto } from '$app/navigation';

export const getNewLocale = (local: string) =>
  /^(?:en|EN)-.+/.test(local) ? 'es-ES' : 'en-US';

export const goToSocialMedia = async (socialLink: string) => {
  await goto(socialLink);
};

export const sendContactData = async <T>(contactData: T): Promise<boolean> => {
  try {
    await axios.post('http://localhost:8080/api/applicant', contactData);
    return true;
  } catch (error) {
    return false;
  }
};
