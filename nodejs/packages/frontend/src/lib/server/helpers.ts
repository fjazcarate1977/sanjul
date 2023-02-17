import axios from 'axios';

import secretKeys from './secrets.json';

const { API_EMAIL_ENDPOINT } = secretKeys as { API_EMAIL_ENDPOINT: string };

const endPoint =
  (import.meta.env.VITE_PUBLIC_API_EMAIL_ENDPOINT as string) ||
  API_EMAIL_ENDPOINT;

export const sendContactData = async <T>(contactData: T): Promise<boolean> => {
  try {
    await axios.post(endPoint, contactData);
    return true;
  } catch (error) {
    return false;
  }
};
