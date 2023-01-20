<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { DataProps } from '$lib/types';

  import Header from '@atoms/Header.svelte';
  import CenterSection from '@organisms/CenterSection.svelte';
  import FormSection from '@organisms/FormSection.svelte';
  import MainSection from '@organisms/MainSection.svelte';

  import data from '@data/all.json';

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
    <FormSection {formSection} />
  </main>
</div>
