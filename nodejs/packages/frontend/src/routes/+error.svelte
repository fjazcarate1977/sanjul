<script>
  import { _ } from 'svelte-i18n';

  import { page } from '$app/stores';

  import error from '$lib/assets/error/error.jpg';

  const errorMessage = `${$page.status}: ${$page.error.message}`;
</script>

<svelte:head>
  <title>{$_('commons.name')} - {errorMessage}</title>
</svelte:head>

<div>
  <main>
    <div
      class="flex pt-16 items-center justify-center min-h-screen bg-blueGray-800 text-blueGray-200 "
    >
      <section class="text-center mx-6">
        <img
          alt={errorMessage}
          class="m-auto w-3/4 lg:w-2/3 rounded-lg shadow-xl"
          src={error}
          style="transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);"
        />
        <h3 class="text-3xl mt-10 font-semibold font-heartwarming">
          {$_('pages.error')}
        </h3>

        <h4 class="text-2xl mt-4">{errorMessage}</h4>
      </section>
    </div>
  </main>
</div>
