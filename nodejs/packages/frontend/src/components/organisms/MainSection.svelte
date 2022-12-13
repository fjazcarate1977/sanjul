<script lang="ts">
  import type { DataProps } from '$lib/types';

  import data from '@data/all.json';
  import IntroductionCard from '@molecules/IntroductionCard.svelte';
  import MainIdeas from '@molecules/MainIdeas.svelte';

  const { mainIdeasList, introduction } = data as DataProps;
</script>

<section class="pb-20 bg-blueGray-200 -mt-24">
  <div class="container mx-auto px-4 pb-20">
    <MainIdeas {mainIdeasList} />
    <IntroductionCard {introduction} />
  </div>
</section>
