<script lang="ts">
  import type { MainSectionProps } from '$lib/types';

  import IdeasCard from '@molecules/IdeasCard.svelte';
  import IntroductionCard from '@molecules/IntroductionCard.svelte';

  export let mainSection: MainSectionProps;

  const { ideasCardList, introductionCard } = mainSection;
</script>

<section class="pb-20 bg-blueGray-200 -mt-24">
  <div class="container mx-auto px-4 pb-20">
    <IdeasCard {ideasCardList} />
    <IntroductionCard {introductionCard} />
  </div>
</section>
