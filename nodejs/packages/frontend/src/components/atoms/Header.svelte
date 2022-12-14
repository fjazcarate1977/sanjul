<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Divider from '@atoms/Divider.svelte';

  export let mainBackground: string;
</script>

<div
  class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
>
  <div
    class="absolute top-0 w-full h-full bg-center bg-cover"
    style="background-image: url({mainBackground})"
  >
    <span
      id="blackOverlay"
      class="w-full h-full absolute opacity-25 bg-black"
    />
  </div>
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

  <Divider />
</div>
