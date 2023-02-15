<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { enhance, applyAction } from '$app/forms';

  import * as regex from '$lib/regex';
  import type { DataProps, EmailFlowStatusTypes } from '$lib/types';

  import Input from '@atoms/Input.svelte';
  import FormSection from '@organisms/FormSection.svelte';

  import dataForm from '@data/all.json';

  let showSpinner = false;
  let flowStatus: EmailFlowStatusTypes;
  let showFormFields = true;
  let withErrors = [];

  const {
    page: { formSection }
  } = dataForm as DataProps;
</script>

<svelte:head>
  <title
    >{$_('commons.name')} - {$_('commons.dropdownList.others.contact')}</title
  >
</svelte:head>

<div>
  <main>
    <FormSection {showSpinner} {flowStatus} background>
      <form
        method="POST"
        action="?/sendInfo"
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
