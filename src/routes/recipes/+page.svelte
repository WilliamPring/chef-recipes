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
    <h2>Recipe</h2>

    <table>
      <tr>
        <td>Image</td>
        <td>Name</td>
        <td>Description</td>
        <td>Link</td>
      </tr>
      {#each data.userRecipe as recipe}
      <tr>
        <td></td>
        <td>{recipe.name}</td>
        <td>{recipe.description}</td>
        <td>{recipe.id}</td>
      </tr>
      {/each}
    </table>
 
  </aside>
{/if}

  