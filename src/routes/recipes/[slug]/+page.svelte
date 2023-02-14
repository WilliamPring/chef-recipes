<script lang="ts">
import { page } from '$app/stores';
console.log("inv recipe page", page)
</script>
<h1>{$page.params.slug}</h1>