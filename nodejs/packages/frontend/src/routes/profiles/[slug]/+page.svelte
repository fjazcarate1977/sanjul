<script lang="ts">
  import { marked } from 'marked';

  import Profiles from '@data/profiles';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>

<article class="prose">{@html marked.parse(Profiles.francisco)}</article>

<!-- <script lang="ts">
  import { marked } from 'marked';

  import { page } from '$app/stores';

  import Profiles from '@data/profiles';




</script>

<article class="prose">
  {@html marked.parse(Profiles[$page.params.devId])}
</article>
 -->
