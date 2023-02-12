<script lang="ts">
    import type { PageData } from './$types';
    import NewRecipe from '../../components/NewRecipe.svelte'

    export let data: PageData;
  </script>
  <aside>
    <NewRecipe/>

    <h2>User Data</h2>
    <ul>
      {#each data.post as post}
        <li>
            {post.email}
        </li>
      {/each}
    </ul>
  </aside>
