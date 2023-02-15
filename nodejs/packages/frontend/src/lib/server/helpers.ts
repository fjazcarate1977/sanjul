import axios from 'axios';

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
