<script lang="ts">
  import type { DataProps } from '$lib/types';

  import MainHeader from '@atoms/Header.svelte';
  import CenterSection from '@organisms/CenterSection.svelte';
  import FormSection from '@organisms/FormSection.svelte';
  import MainSection from '@organisms/MainSection.svelte';

  import data from '@data/all.json';

  const {
    page: { mainBackground, mainSection, centerSection }
  } = data as DataProps;
</script>

<div>
  <main>
    <MainHeader {mainBackground} />
    <MainSection {mainSection} />
    <CenterSection {centerSection} />
    <FormSection />
  </main>
</div>
