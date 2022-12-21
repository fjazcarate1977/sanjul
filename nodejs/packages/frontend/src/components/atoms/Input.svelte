<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { FormSectionProps } from '$lib/types';

  export let formElement: FormSectionProps;
  export let marginTop: boolean;
  export let showError: boolean;
  export let handleInput: (e: Event, id: string) => void;

  const { id, i18nref, tag, type } = formElement;
</script>

<div class:mt-8={marginTop} class="relative w-full mb-3 ">
  <label
    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    for={id}
  >
    {$_(i18nref)}
    {#if showError}
      <span>Error message</span>
    {/if}
  </label>

  <svelte:element
    this={tag}
    {id}
    {type}
    rows={type ? null : 4}
    cols={type ? null : 80}
    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    placeholder={$_(i18nref)}
    on:input={(e) => handleInput(e, id)}
  />
</div>
