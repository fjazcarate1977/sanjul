<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { BrotherhoodCardProps } from '$lib/types';

  import SocialMedia from '@atoms/SocialMedia.svelte';

  export let profileInfo: BrotherhoodCardProps;

  const { name, img, socialMedia, i18nref, years } = profileInfo;
</script>

<div class="flex flex-wrap justify-center">
  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
    <div class="relative">
      <img
        alt={name}
        src={img}
        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
      />
    </div>
  </div>
  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
    <div class="py-6 px-3 mt-32 sm:mt-0">
      <SocialMedia {socialMedia} />
    </div>
  </div>
  <div class="w-full lg:w-4/12 px-4 lg:order-1">
    <div class="flex justify-center py-4 lg:pt-4 pt-8">
      <div class="mr-4 p-3 text-center">
        <span
          class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
        >
          {`+${years}`}
        </span>
        <span class="text-sm text-blueGray-400">{$_('commons.brotherhood.years')}</span>
      </div>
    </div>
  </div>
</div>
<div class="text-center mt-12">
  <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
    {name}
  </h3>
  <div
    class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
  >
    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
    {$_(`${i18nref}.location`)}
  </div>
  <div class="mb-2 text-blueGray-600 mt-10">
    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
    {$_(`${i18nref}.position`)}
  </div>
</div>
