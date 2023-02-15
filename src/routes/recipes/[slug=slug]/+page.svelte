<script lang="ts">
import { page } from '$app/stores';
import type { PageData } from './$types';
console.log("inv recipe page....", page)

export let data: PageData;
console.log("data", data)

</script>



{#if $page.data.session}
  <aside>
    <h1>{$page.params.slug}</h1>
  </aside>
{/if}
