<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { TechnologiesCardProps } from '$lib/types';

  export let technologiesCard: TechnologiesCardProps[];
</script>

<div class="container mx-auto overflow-hidden pb-20">
  <div class="flex flex-wrap items-center">
    <div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
      <div class="justify-center flex flex-wrap relative">
        {#each technologiesCard as { position, technologies }}
          <div
            class:lg:mt-16={position === 'right'}
            class="my-4 w-full lg:w-6/12 px-4"
          >
            {#each technologies as { technology, link, title }, index}
              <a href={link} target="_blank" rel="noreferrer">
                <div
                  class:mt-8={index > 0}
                  class="bg-{technology} shadow-lg rounded-lg text-center p-8"
                >
                  <div
                    class="shadow-md rounded-full max-w-full w-16 h-16 mx-auto p-2 bg-white flex justify-center items-center"
                  >
                    <i
                      class="text-2xl fa-brands fa-{technology} text-{technology}"
                    />
                  </div>

                  <p
                    class="font-heartwarming text-lg text-white mt-4 font-semibold"
                  >
                    {title}
                  </p>
                </div>
              </a>
            {/each}
          </div>
        {/each}
        {#if !technologiesCard}
          <span
            class="text-docker bg-docker text-python bg-python text-node-js bg-node-js text-linux bg-linux text-react bg-react text-js bg-js"
          />
        {/if}
      </div>
    </div>

    <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
      <div
        class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-500"
      >
        <i class="fas fa-cloud-bolt text-xl" />
      </div>
      <h3 class="text-3xl font-semibold ">
        {$_('molecules.technologiesCard.title')}
      </h3>
      <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
        {$_('molecules.technologiesCard.description')}
      </p>
    </div>
  </div>
</div>
