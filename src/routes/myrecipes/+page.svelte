<script lang="ts">
    import type { PageData } from './$types';
  
    export let data: PageData;
    console.log(data)
  </script>
  
  <aside>
    <h2>User Data</h2>
    <ul>
      {#each data.post as post}
        <li>
            {post.email}
        </li>
      {/each}
    </ul>
  </aside>
