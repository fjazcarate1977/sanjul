<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { goToSocialMedia } from '$lib/helpers';
  import type { DropdownProps, SocialMediaProps } from '$lib/types';

  import Divider from '@atoms/Divider.svelte';

  export let navBarList: SocialMediaProps[];
  export let dropdownList: DropdownProps[];

  const date = new Date().getFullYear();
</script>

<footer class="relative bg-blueGray-200 pt-8 pb-6">
  <Divider position={'Top'} color="text-blueGray-200" />
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-center lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          {#each navBarList as { color, link, title }}
            <button
              class="bg-white text-{color} shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              on:click={() => goToSocialMedia(link)}
            >
              <i class="fab fa-{title}" />
            </button>
          {/each}
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span
              class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
            >
              {$_('commons.navigation')}
            </span>
            <ul class="list-unstyled">
              {#each dropdownList as { links }}
                {#each links as { link, i18nref }}
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href={link}
                    >
                      {$_(i18nref)}
                    </a>
                  </li>
                {/each}
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300" />
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          {$_('organisms.footer.copyright', { values: { date } })}
        </div>
      </div>
    </div>
  </div>
</footer>
