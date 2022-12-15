<script lang="ts">
  import type { CenterSectionProps } from '$lib/types';

  import Divider from '@atoms/Divider.svelte';
  import BrotherhoodCard from '@molecules/BrotherhoodCard.svelte';
  import TechnologiesCard from '@molecules/TechnologiesCard.svelte';

  export let centerSection: CenterSectionProps;

  const { technologiesCard, brotherhoodCard } = centerSection;
</script>

<section class="relative">
  <Divider additionalClases="-mt-20 h-20" position={'Top'} color="text-white" />
  <TechnologiesCard {technologiesCard} />
  <BrotherhoodCard {brotherhoodCard} />
</section>
