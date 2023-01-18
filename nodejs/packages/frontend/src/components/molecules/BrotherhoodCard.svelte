<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { BrotherhoodCardProps } from '$lib/types';

  import SocialMedia from '@atoms/SocialMedia.svelte';

  export let brotherhoodCard: BrotherhoodCardProps[];
</script>

<div class="container mx-auto px-4 pb-32 lg:pb-48 ">
  <div class="flex flex-wrap justify-center">
    {#each brotherhoodCard as { img, name, i18nref, socialMedia, slug }}
      <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div class="px-6">
          <a href={`/profiles/${slug}`}>
            <img
              alt={name}
              src={img}
              class="shadow-lg rounded-full mx-auto max-w-120-px"
            />
          </a>
          <div class="pt-6 text-center">
            <h5 class="text-xl font-bold">{name}</h5>
            <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
              {$_(`${i18nref}.position`)}
            </p>
            <div class="mt-6">
              <SocialMedia {socialMedia} />
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
