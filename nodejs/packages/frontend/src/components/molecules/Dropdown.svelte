<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { createPopperActions } from 'svelte-popperjs';

  import type { DropdownProps } from '$lib/types';

  let dropdownPopoverShow = false;

  export let dropdownList: DropdownProps[];
  export let hideNavBar: () => void;

  const [popperRef, popperContent] = createPopperActions({
    placement: 'bottom-start',
    strategy: 'fixed'
  });

  const setDropdownPopoverShow = () => {
    dropdownPopoverShow = !dropdownPopoverShow;
  };

  const hideDropdown = () => {
    dropdownPopoverShow = false;
    hideNavBar();
  };

  function clickOutside(node: Node) {
    const handleClick = (event: Event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent('click_outside', node));
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<div use:clickOutside on:click_outside={hideDropdown}>
  <a
    class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    href="#pablo"
    use:popperRef
    on:click={() => setDropdownPopoverShow()}
  >
    {$_('commons.navigation')}
  </a>
  {#if dropdownPopoverShow}
    <div
      use:popperContent
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
    >
      {#each dropdownList as { i18nref, links }, index}
        {#if i18nref}
          <span
            class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          >
            {$_(i18nref)}
          </span>
        {/if}
        {#each links as { link, i18nref }}
          <a
            href={link}
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            on:click={() => hideDropdown()}
          >
            {$_(i18nref)}
          </a>
        {/each}
        {#if index < dropdownList.length - 1}
          <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        {/if}
      {/each}
    </div>
  {/if}
</div>
