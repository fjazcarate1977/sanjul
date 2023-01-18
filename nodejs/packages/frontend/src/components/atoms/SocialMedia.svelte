<script lang="ts">
  import { goToSocialMedia } from '$lib/helpers';
  import type { SocialMediaProps } from '$lib/types';

  export let socialMedia: SocialMediaProps[];
</script>

{#each socialMedia as { color, title, link }}
  <button
    class="bg-{color} text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
    type="button"
    on:click={() => goToSocialMedia(link)}
  >
    <i class="fab fa-{title}" />
  </button>
{/each}
