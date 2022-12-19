<script lang="ts">
  import { goToSocialMedia } from '$lib/helpers';
  import type { BrotherhoodCardProps } from '$lib/types';

  export let brotherhoodCard: BrotherhoodCardProps[];
</script>

<div class="container mx-auto px-4 pb-32 lg:pb-48 ">
  <div class="flex flex-wrap justify-center">
    {#each brotherhoodCard as { img, name, position, socialMedia }}
      <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div class="px-6">
          <img
            alt="..."
            src={img}
            class="shadow-lg rounded-full mx-auto max-w-120-px"
          />
          <div class="pt-6 text-center">
            <h5 class="text-xl font-bold">{name}</h5>
            <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
              {position}
            </p>
            <div class="mt-6">
              {#each socialMedia as { color, title, link }}
                <button
                  class="bg-{color} text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  on:click={() => goToSocialMedia(link)}
                >
                  <i class="fab fa-{title}" />
                </button>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
