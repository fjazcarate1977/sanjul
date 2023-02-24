<script lang="ts">
  import { _ } from 'svelte-i18n';

  import contactBackground from '$lib/assets/contact/contact-background.png';
  import type { EmailFlowStatusTypes } from '$lib/types';

  import Divider from '@atoms/Divider.svelte';
  import Spinner from '@atoms/Spinner.svelte';

  export let background = false;
  export let showSpinner = false;
  export let flowStatus: EmailFlowStatusTypes;

  const backgroundImage = background ? contactBackground : '';
</script>

<section
  class="relative block py-24 bg-blueGray-800 bg-no-repeat bg-cover"
  style="background-image: url({backgroundImage})"
>
  <Divider position={'Top'} color="text-blueGray-800" />

  <div class="container mx-auto px-4 pb-20 mt-20">
    <div class="flex flex-wrap justify-center ">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
        >
          <div class="flex-auto p-5 lg:p-10">
            <h4 class="text-2xl font-semibold">
              {$_('organisms.formSection.contact')}
            </h4>
            <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
              {$_('organisms.formSection.contactDescription')}
            </p>
            <slot />
          </div>
          {#if showSpinner}
            <Spinner {flowStatus} />
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
