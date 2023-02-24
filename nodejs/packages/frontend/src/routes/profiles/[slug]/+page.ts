import { error } from '@sveltejs/kit';

import francisco from '$lib/assets/profiles/fran.jpg';
import type { BrotherhoodCardProps } from '$lib/types';

import data from '@data/all.json';

import type { PageLoad } from './$types';

const {
  shared: { brotherhoodCard }
} = data as {
  shared: { brotherhoodCard: BrotherhoodCardProps[] };
};

export const load: PageLoad = async ({ params }) => {
  let profileMarkdown;
  let profileImage;

  const { slug: currentSlug } = params as { slug: string };

  switch (currentSlug) {
    case 'francisco':
      profileMarkdown = await import(`../../../data/profiles/francisco/index`);
      profileImage = francisco;
      break;
    default:
      throw error(404, 'Markdown not found');
  }

  const profileInfo = brotherhoodCard.find(
    ({ slug }) => slug === currentSlug
  ) as unknown;

  if (profileInfo) {
    return {
      profileMarkdown: profileMarkdown.default,
      profileInfo,
      profileImage
    };
  } else {
    throw error(404, 'Profile not found');
  }
};
