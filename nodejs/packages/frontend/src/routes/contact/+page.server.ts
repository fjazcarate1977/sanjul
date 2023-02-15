import { fail } from '@sveltejs/kit';
import { locale, _ } from 'svelte-i18n';

import { sendContactData } from '$lib/server/helpers';

import type { Actions } from './$types';

let currentLocale;

locale.subscribe((value) => {
  currentLocale = value;
});

/** @type {import('./$types').Actions} */
export const actions = {
  sendInfo: async ({ request }) => {
    const data = await request.formData();

    const sendFeedback = await sendContactData({
      fname: data.get('fname'),
      email: data.get('email'),
      message: data.get('message'),
      locale: currentLocale
    });

    if (sendFeedback) {
      return { success: true };
    }

    return fail(500, { success: false });
  }
} satisfies Actions;
