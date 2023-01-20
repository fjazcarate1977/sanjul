<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { DataProps } from '$lib/types';

  import FormSection from '@organisms/FormSection.svelte';

  import data from '@data/all.json';

  const {
    page: { formSection }
  } = data as DataProps;
</script>

<svelte:head>
  <title
    >{$_('commons.name')} - {$_('commons.dropdownList.others.contact')}</title
  >
</svelte:head>

<div>
  <main>
    <FormSection {formSection} background />
  </main>
</div>
