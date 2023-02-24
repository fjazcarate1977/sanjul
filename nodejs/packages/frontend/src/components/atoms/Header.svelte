<script lang="ts">
  import { _ } from 'svelte-i18n';

  import pageBackground from '$lib/assets/header/page-background.jpg';
  import philosophyBackground from '$lib/assets/header/philosophy-background.jpg';
  import profileBackground from '$lib/assets/header/profile-background.jpg';
  import type { HeaderProps } from '$lib/types';

  import Divider from '@atoms/Divider.svelte';

  export let header: HeaderProps;

  const { mainBackground, additionalInfo, height } = header;

  const getBackground = (background): unknown =>
    ({
      pageBackground,
      philosophyBackground,
      profileBackground
    }[background as string] || pageBackground);

  const backgroundSelected = getBackground(mainBackground);
</script>

<div
  class="relative pt-16 pb-32 flex content-center items-center justify-center {height
    ? `min-h-screen-${height}`
    : 'min-h-screen-75'}"
>
  <div
    class="absolute top-0 w-full h-full bg-center bg-cover"
    style="background-image: url({backgroundSelected})"
  >
    <span
      id="blackOverlay"
      class="w-full h-full absolute opacity-50 bg-black"
    />
  </div>
  {#if additionalInfo}
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">
              {$_('atoms.header.title')}
            </h1>
            <p class="mt-4 text-lg text-blueGray-200">
              {$_('atoms.header.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <Divider
    additionalClases="h-70-px"
    position={'Bottom'}
    color="text-blueGray-200"
  />
</div>
