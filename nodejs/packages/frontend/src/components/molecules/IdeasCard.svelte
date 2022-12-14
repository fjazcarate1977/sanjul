<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { IdeasCardListProps } from '$lib/types';

  export let ideasCardList: IdeasCardListProps[];

  const ideasLength = ideasCardList.length - 1;
</script>

<div class="flex flex-wrap">
  {#each ideasCardList as { icon, color, i18nref }, index}
    <div
      class:lg:pt-12={index === 0}
      class:pt-6={index === ideasLength || index === 0}
      class="w-full md:w-4/12 px-4 text-center"
    >
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
      >
        <div class="px-4 py-5 flex-auto">
          <div
            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-{color}"
          >
            <i class="fas fa-{icon}" />
          </div>
          <h6 class="font-heartwarming text-xl font-semibold">
            {$_(i18nref.title)}
          </h6>
          <p class="mt-2 mb-4 text-blueGray-500">
            {$_(i18nref.description)}
          </p>
        </div>
      </div>
    </div>
  {/each}
  {#if !ideasCardList}
    <span class="bg-cyan-500 bg-rose-500 bg-teal-500" />
  {/if}
</div>
