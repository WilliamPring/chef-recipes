<!-- components/Todos.svelte -->
<script>
    // export let todos = []
    
    let recipe = {
        name: '',
        description: '', 
        url: '',
        userid: 1
    }
  
  </script>
  
  <!-- Todos.svelte -->
  <div>
    <!-- NewTodo -->
    <form method="POST" action="?/create">
              <h2>
        <label for="todo-0" class="label__lg">
          Add New Recipe
        </label>
      </h2>
      <input bind:value={recipe.name} name="name" type="text" id="recipe-0" autocomplete="off" class="input input__lg" />
      <input bind:value={recipe.description} name="description" type="text" id="recipe-1" autocomplete="off" class="input input__lg" />
      <input bind:value={recipe.url} name="url" type="text" id="recipe-2" autocomplete="off" class="input input__lg" />

      <button type="submit" disabled="" class="btn btn__primary btn__lg">
        Add
      </button>
    </form>
    <hr />
  </div>