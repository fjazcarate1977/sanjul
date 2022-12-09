<script lang="ts">
  import '$lib/i18n';
  import '@styles/app.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';

  import { locale, waitLocale, isLoading } from 'svelte-i18n';

  import { browser } from '$app/environment';

  import type { DataProps } from '$lib/types';

  import data from '@data/all.json';
  import FooterNav from '@organisms/FooterNav.svelte';
  import Navbar from '@organisms/Navbar.svelte';

  export const load = async () => {
    if (browser) {
      await locale.set(window.navigator.language);
    }
    await waitLocale();
  };

  const { navbarList, dropdownList } = data as DataProps;
</script>

{#if !$isLoading}
  <Navbar {navbarList} {dropdownList} />
  <slot />
  <FooterNav {navbarList} {dropdownList} />
{/if}
