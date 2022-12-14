<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { IntroductionCardProps } from '$lib/types';

  export let introductionCard: IntroductionCardProps;

  const { image, keys } = introductionCard;
</script>

<div class="flex flex-wrap items-center mt-32">
  <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
    <div class="md:pr-12">
      <div
        class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
      >
        <i class="fas fa-rocket text-xl" />
      </div>
      <h3 class="text-3xl font-semibold">{$_('introduction.title')}</h3>
      <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
        {$_('introduction.description')}
      </p>
      <ul class="list-none mt-6">
        {#each keys as { i18nref, icon }}
          <li class="py-2">
            <div class="flex items-center">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                >
                  <i class="fas fa-{icon}" />
                </span>
              </div>
              <div>
                <h4 class="text-blueGray-500">
                  {$_(i18nref)}
                </h4>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
    <img
      alt="..."
      class="max-w-full rounded-lg shadow-xl"
      style="
        transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg)
          rotate(2deg);
      "
      src={image}
    />
  </div>
</div>
