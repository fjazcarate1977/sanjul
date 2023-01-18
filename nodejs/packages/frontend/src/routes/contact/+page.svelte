<script lang="ts">
  import type { DataProps } from '$lib/types';

  import FormSection from '@organisms/FormSection.svelte';

  import data from '@data/all.json';

  const {
    page: { formSection }
  } = data as DataProps;
</script>

<div>
  <main>
    <FormSection {formSection} background />
  </main>
</div>
