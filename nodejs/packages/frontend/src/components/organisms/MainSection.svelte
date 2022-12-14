<script lang="ts">
  import type { MainSectionProps } from '$lib/types';

  import IntroductionCard from '@molecules/IntroductionCard.svelte';
  import MainIdeas from '@molecules/MainIdeas.svelte';

  export let mainSection: MainSectionProps;

  const { mainIdeasList, introduction } = mainSection;
</script>

<section class="pb-20 bg-blueGray-200 -mt-24">
  <div class="container mx-auto px-4 pb-20">
    <MainIdeas {mainIdeasList} />
    <IntroductionCard {introduction} />
  </div>
</section>
