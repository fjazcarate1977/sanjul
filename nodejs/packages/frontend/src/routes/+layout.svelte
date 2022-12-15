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
