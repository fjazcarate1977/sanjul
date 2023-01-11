<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';

  import type { DataProps } from '$lib/types';

  import Header from '@atoms/Header.svelte';

  import data from '@data/all.json';
  import source from '@data/philosophy';

  const {
    philosophy: { header }
  } = data as DataProps;
</script>

<div>
  <main>
    <Header {header} />
    <section class="relative py-16 bg-blueGray-200">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <div class="text-center mt-12">
              <h3
                class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
              >
                Our philosophy
              </h3>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <div class="mb-4 text-lg leading-relaxed text-blueGray-700">
                    <SvelteMarkdown {source} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
