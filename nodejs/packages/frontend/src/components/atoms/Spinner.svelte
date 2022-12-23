<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { EmailFlowStatusTypes } from '$lib/types';

  export let flowStatus: EmailFlowStatusTypes;
</script>

<div
  class="p-5 lg:p-10 grid min-h-full min-w-full bg-blueGray-200 absolute place-content-center opacity-{flowStatus
    ? 0
    : 75}"
>
  <div class="flex items-center gap-2 text-gray-500">
    <div class="text-blueGray-600 text-center">
      {#if flowStatus === 'ResponseOK'}
        <i class="fa-solid fa-envelope-circle-check text-8xl" />
        <p>
          {$_('atoms.spinner.responseOK')}
        </p>
      {:else if flowStatus === 'ResponseKO'}
        <i class="fa-solid fa-face-sad-tear fa-bounce text-8xl" />
        <p>
          {$_('atoms.spinner.responseKO')}
        </p>
      {:else}
        <i class="fa-solid fa-tower-broadcast fa-beat text-8xl" />
      {/if}
    </div>
  </div>
</div>
