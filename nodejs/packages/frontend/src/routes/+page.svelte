<script lang="ts">
  import type { DataProps } from '$lib/types';

  import Header from '@atoms/Header.svelte';
  import CenterSection from '@organisms/CenterSection.svelte';
  import FormSection from '@organisms/FormSection.svelte';
  import MainSection from '@organisms/MainSection.svelte';

  import data from '@data/all.json';

  const {
    page: { header, mainSection, centerSection, formSection }
  } = data as DataProps;
</script>

<div>
  <main>
    <Header {header} />
    <MainSection {mainSection} />
    <CenterSection {centerSection} />
    <FormSection {formSection} />
  </main>
</div>
