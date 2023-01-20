<script lang="ts">
  import { locale, _ } from 'svelte-i18n';
  import SvelteMarkdown from 'svelte-markdown';

  import type { DataProps, BrotherhoodCardProps } from '$lib/types';

  import Header from '@atoms/Header.svelte';
  import ProfileIntro from '@molecules/ProfileIntro.svelte';

  import dataJson from '@data/all.json';

  import type { PageData } from './$types';

  export let data: PageData;

  let currentLocale: string;

  const { profileMarkdown, profileInfo } = data as {
    profileInfo: BrotherhoodCardProps;
    profileMarkdown: string;
  };

  const {
    profile: { header }
  } = dataJson as DataProps;

  locale.subscribe((value) => {
    currentLocale = value;
  });

  $: source = profileMarkdown[currentLocale.replace('-', '')] as string;

  const { name } = profileInfo;
</script>

<svelte:head>
  <title>{$_('commons.name')} - {name}</title>
</svelte:head>

<div>
  <main>
    <Header {header} />
    <section class="relative py-16 bg-blueGray-200">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <ProfileIntro {profileInfo} />
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
