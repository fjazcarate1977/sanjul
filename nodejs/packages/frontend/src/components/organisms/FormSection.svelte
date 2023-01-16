<script lang="ts">
  import { locale, _ } from 'svelte-i18n';

  import { sendContactData } from '$lib/helpers';
  import * as regex from '$lib/regex';
  import type {
    FormSectionProps,
    FormObjectProps,
    EmailFlowStatusTypes,
    LocalesTypes,
    SendContactDataProps
  } from '$lib/types';

  import Divider from '@atoms/Divider.svelte';
  import Input from '@atoms/Input.svelte';
  import Spinner from '@atoms/Spinner.svelte';

  export let formSection: FormSectionProps[];
  export let backgrpund = false;

  const backgrpundImage = backgrpund ? '/img/contact-background.avif' : '';

  let formData: FormObjectProps = {};
  let firstTime = true;
  let showSpinner = false;
  let flowStatus: EmailFlowStatusTypes;

  let currentLocale;

  locale.subscribe((value) => {
    currentLocale = value;
  });

  const checkErrors = () => !Object.values(formData).find((data) => data.error);

  $: allFilled =
    formSection.length === Object.keys(formData).length &&
    (checkErrors() || firstTime);

  const handleInput = (e: Event, id: string): void => {
    const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
    const regexp = new RegExp(regex[id]);
    formData = { ...formData, [id]: { value, error: !regexp.test(value) } };
  };

  const sendForm = async () => {
    firstTime = firstTime ? false : firstTime;
    if (checkErrors()) {
      showSpinner = true;
      const sendFeedback = await sendContactData<SendContactDataProps>({
        fname: formData.fname.value,
        email: formData.email.value,
        message: formData.message.value,
        locale: currentLocale as LocalesTypes
      });
      flowStatus = sendFeedback ? 'ResponseOK' : 'ResponseKO';
    }
  };
</script>

<section
  class="relative block py-24 bg-blueGray-800 bg-no-repeat bg-cover"
  style="background-image: url({backgrpundImage})"
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
            {#each formSection as formElement, index}
              {@const id = `${formElement.id}`}
              <Input
                {formElement}
                marginTop={index === 0}
                showError={formData[id]?.error && !firstTime}
                handleInput={(e) => handleInput(e, id)}
              />
            {/each}
            <div class="text-center mt-6">
              <button
                class:disabled:opacity-25={!allFilled}
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                type="button"
                disabled={!allFilled}
                on:click={() => sendForm()}
              >
                {$_('organisms.formSection.sendMessage')}
              </button>
            </div>
          </div>
          {#if showSpinner}
            <Spinner {flowStatus} />
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
