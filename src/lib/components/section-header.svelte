<script lang="ts">
  import { fly } from 'svelte/transition';

  const { label = '', heading = '', delay = 100 } = $props<{
    label?: string;
    heading?: string;
    delay?: number;
  }>();
</script>

<div in:fly={{ y: 30, duration: 800, delay }}>
  <p class="label md:text-xl tracking-widest text-pink-600 uppercase mb-2">
    {label}
  </p>
  <h2 class="text-xl heading md:text-3xl font-bold tracking-tighter mb-16">
    {heading}
  </h2>
</div>

<style>
.label {font-family: 'type-writer', monospace;}
</style>