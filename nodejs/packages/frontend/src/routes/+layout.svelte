<script lang="ts">
  import '$lib/i18n';
  import '@styles/app.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';

  import { locale, waitLocale, isLoading } from 'svelte-i18n';

  import { browser } from '$app/environment';

  import type { DataProps } from '$lib/types';

  import Footer from '@organisms/Footer.svelte';
  import Navbar from '@organisms/NavBar.svelte';

  import data from '@data/all.json';

  export const load = async () => {
    if (browser) {
      await locale.set(window.navigator.language);
    }
    await waitLocale();
  };

  const {
    layout: { navBarList, dropdownList }
  } = data as DataProps;
</script>

{#if !$isLoading}
  <Navbar {navBarList} {dropdownList} />
  <slot />
  <Footer {navBarList} {dropdownList} />
{/if}

{#if false}
  <span
    class="bg-lightBlue-600 text-lightBlue-600 bg-pink-400 text-pink-400 bg-cyan-500 bg-rose-500 bg-teal-500 bg-docker text-docker bg-python text-python bg-node-js text-node-js bg-linux text-linux bg-react text-react bg-js text-js min-h-screen-75 min-h-screen-50"
  />
{/if}
