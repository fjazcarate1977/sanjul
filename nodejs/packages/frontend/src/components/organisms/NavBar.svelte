<script lang="ts">
  import { locale, _ } from 'svelte-i18n';

  import { getNewLocale } from '$lib/helpers';
  import type { DropdownProps, SocialMediaProps } from '$lib/types';

  import Dropdown from '@molecules/Dropdown.svelte';

  let navBarOpen = false;

  export let dropdownList: DropdownProps[];
  export let navBarList: SocialMediaProps[];

  function setNavBarOpen(inside?: boolean) {
    navBarOpen = inside ? false : !navBarOpen;
  }

  let currentLocale;

  locale.subscribe((value) => {
    currentLocale = value;
  });

  const updateLocale = async () => {
    const newLocale = getNewLocale(currentLocale);
    await locale.set(newLocale);
  };

  $: otherLocale = getNewLocale(currentLocale);
</script>

<nav
  class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
>
  <div
    class="container px-4 mx-auto flex flex-wrap items-center justify-between"
  >
    <div
      class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
    >
      <a
        class="text-white font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase font-marketdeco text-3xl"
        href="/"
      >
        SanJul
      </a>
      <button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click={() => setNavBarOpen()}
      >
        <i class="text-white fas fa-bars" />
      </button>
    </div>
    <div
      class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none rounded shadow-lg {navBarOpen
        ? 'block'
        : 'hidden'}"
      id="example-navbar-warning"
    >
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li class="flex items-center">
          <Dropdown {dropdownList} hideNavBar={() => setNavBarOpen(true)} />
        </li>
        {#each navBarList as { link, title }}
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fab fa-{title} text-lg leading-lg"
              />
              <span class="lg:hidden inline-block ml-2">{title}</span>
            </a>
          </li>
        {/each}

        <li class="flex items-center">
          <button
            class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"
            on:click={updateLocale}
          >
            <i class="fas fa-language" />
            {$_(`organisms.navBar.locale.${otherLocale}`)}
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
