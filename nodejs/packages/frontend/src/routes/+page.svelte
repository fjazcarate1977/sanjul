<script lang="ts">
  import { locale, _ } from 'svelte-i18n';

  import { enhance, applyAction } from '$app/forms';

  import * as regex from '$lib/regex';
  import type { DataProps, EmailFlowStatusTypes } from '$lib/types';

  import Header from '@atoms/Header.svelte';
  import Input from '@atoms/Input.svelte';
  import CenterSection from '@organisms/CenterSection.svelte';
  import FormSection from '@organisms/FormSection.svelte';
  import MainSection from '@organisms/MainSection.svelte';

  import data from '@data/all.json';

  let showSpinner = false;
  let flowStatus: EmailFlowStatusTypes;
  let showFormFields = true;
  let withErrors = [];

  const {
    page: { header, mainSection, centerSection, formSection },
    shared: { brotherhoodCard }
  } = data as DataProps;

  const centerPlusShared = { ...centerSection, brotherhoodCard };
</script>

<svelte:head>
  <title>{$_('commons.name')} - {$_('atoms.header.title')}</title>
</svelte:head>

<div>
  <main>
    <Header {header} />
    <MainSection {mainSection} />
    <CenterSection centerSection={centerPlusShared} />
    <FormSection {showSpinner} {flowStatus}>
      <form
        method="POST"
        action="/contact?/sendInfo"
        use:enhance={({ data, cancel }) => {
          /* eslint-disable */
          const formSectionReady = formSection.map(({ id }) => {
            const value = data.get(id);
            const regexp = new RegExp(regex[id]);
            const error = !regexp.test(value);
            return { id, value, error };
          });

          withErrors = formSectionReady.filter(({ error }) => error);

          if (withErrors?.length > 0) {
            cancel();
          } else showSpinner = true;

          return async ({ result }) => {
            showFormFields = false;
            if (result.type === 'success') {
              flowStatus = 'ResponseOK';
            } else if (result.type === 'failure') {
              flowStatus = 'ResponseKO';
            } else if (result.type === 'error') {
              await applyAction(result);
            }
          };
          /* eslint-enable */
        }}
      >
        {#if showFormFields}
          {#each formSection as formElement, index}
            {@const idForm = `${formElement.id}`}
            <Input
              {formElement}
              marginTop={index === 0}
              showError={withErrors.find(({ id }) => id === idForm)}
            />
            <input type="hidden" name="locale" value={$locale} />
          {/each}
          <div class="text-center mt-6">
            <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
              >{$_('organisms.formSection.sendMessage')}</button
            >
          </div>
        {/if}
      </form>
    </FormSection>
  </main>
</div>
