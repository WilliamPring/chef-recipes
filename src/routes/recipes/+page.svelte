<script lang="ts">
    import { page } from "$app/stores"
    import type { PageData } from './$types';
    import NewRecipe from '../../components/NewRecipe.svelte'
    export let data: PageData;
    console.log(data)
  </script>

{#if $page.data.session}
  <aside>
    <NewRecipe/>
    <span class="signedInText">
      <small>Signed in as</small><br /> 
    </span>
    <h2>User Data</h2>
    <ul>
      <!-- {#each data.post.users as post}
        <li>
            {post.email}
        </li>
      {/each} -->
    </ul>
  </aside>
{/if}

  