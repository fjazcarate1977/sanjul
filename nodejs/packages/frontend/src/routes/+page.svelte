<script lang="ts">
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

<div>
  <main>
    <Header {header} />
    <MainSection {mainSection} />
    <CenterSection centerSection={centerPlusShared} />
    <FormSection {formSection} />
  </main>
</div>
