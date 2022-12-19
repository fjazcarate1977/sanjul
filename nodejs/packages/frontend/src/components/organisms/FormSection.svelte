<script lang="ts">
  import { _ } from 'svelte-i18n';

  import * as regex from '$lib/regex';
  import type { FormSectionProps, FormObjectProps } from '$lib/types';

  import Divider from '@atoms/Divider.svelte';

  export let formSection: FormSectionProps[];

  let formData: FormObjectProps = {};
  let firstTime = true;

  $: allFilled =
    formSection.length === Object.keys(formData).length &&
    (!Object.values(formData).find((data) => data.error) || firstTime);

  const handleInput = (e: Event, id: string): void => {
    const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
    const regexp = new RegExp(regex[id]);
    formData = { ...formData, [id]: { value, error: !regexp.test(value) } };
  };

  const sendForm = () => {
    firstTime = false;
  };
</script>

<section class="relative block py-24 bg-blueGray-800">
  <Divider position={'Top'} color="text-blueGray-800" />

  <div class="container mx-auto px-4 pb-20 mt-20">
    <div class="flex flex-wrap justify-center ">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
        >
          <div class="flex-auto p-5 lg:p-10">
            <h4 class="text-2xl font-semibold">Want to work with us?</h4>
            <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
              Complete this form and we will get back to you in 24 hours.
            </p>
            {#each formSection as { id, i18nref, type, isTextArea }, index}
              <div class:mt-8={index === 0} class="relative w-full mb-3 ">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for={id}
                >
                  {$_(i18nref)}
                  {#if formData[id]?.error && !firstTime}
                    <span>Error message</span>
                  {/if}
                </label>
                {#if !isTextArea}
                  <input
                    {id}
                    {type}
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder={$_(i18nref)}
                    on:input={(e) => handleInput(e, id)}
                  />
                {:else}
                  <textarea
                    {id}
                    rows="4"
                    cols="80"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Type a message..."
                    on:input={(e) => handleInput(e, id)}
                  />
                {/if}
              </div>
            {/each}
            <div class="text-center mt-6">
              <button
                class:disabled:opacity-25={!allFilled}
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                type="button"
                disabled={!allFilled}
                on:click={() => sendForm()}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
