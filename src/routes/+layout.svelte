<script lang="ts">
  import { page } from "$app/stores"
</script>

<nav>
  <a href="/">Home</a>
  <a href="/recipes">MyRecipes</a>
  <a href="/settings">Settings</a>
</nav>
<div>
  <header>
    <div class="signedInStatus">
      <p class="nojs-show loaded">
        {#if $page.data.session}
          {#if $page.data.session.user?.image}
            <span
              style="background-image: url('{$page.data.session.user.image}')"
              class="avatar"
            />
          {/if}
          <span class="signedInText">
            <small>Signed in as</small><br />
            <strong
              >{$page.data.session.user?.email ??
                $page.data.session.user?.name}</strong
            >
          </span>
          <a href="/auth/signout" class="button" data-sveltekit-preload-data="off">Sign out</a>
        {:else}
          <span class="notSignedInText">You are not signed in</span>
          <a href="/auth/signin" class="buttonPrimary" data-sveltekit-preload-data="off">Sign in</a>
        {/if}
      </p>
    </div>
  </header>
  <slot />
</div>
