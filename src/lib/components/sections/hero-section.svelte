<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { inview } from '$lib/actions/inview';
  import image from '../../assets/arun.webp';

  let visible = $state(false);
</script>

<section
  id="hero"
  aria-label="Hero section"
  class="flex flex-col justify-center px-6 max-w-6xl mx-auto md:pt-20"
  use:inview={(v) => { if (v) visible = true; }}
>
  {#if visible}
    <div
      class="flex flex-col md:flex-row items-center justify-between gap-12"
      in:fade={{ duration: 1000 }}
    >

      <!-- LEFT: text content -->
      <div class="space-y-6 flex-1 py-20">

        <p
          class="text-xl md:text-2xl"
          in:fly={{ y: 20, duration: 800, delay: 100 }}
        >
          <span class="text-4xl font-bold">
            Hi!
            <span
              class="inline-block animate-bounce"
              role="img"
              aria-label="waving hand"
            >✌🏼</span>
          </span>
          <br />my name is
        </p>

        <!-- h1 is the most important tag on the page, must be descriptive -->
        <h1
          class="text-6xl md:text-8xl name font-bold tracking-tighter"
          in:fly={{ y: 20, duration: 800, delay: 200 }}
        >
          Arun Kumar
        </h1>

        <p
          class="text-3xl md:text-3xl text-pink-600 font-light tracking-tight"
          aria-label="Tagline: I turn coffee into code"
          in:fly={{ y: 20, duration: 800, delay: 300 }}
        >
          I turn coffee into code.
        </p>

        <p
          class="text-lg md:text-xl max-w-2xl leading-relaxed py-4"
          in:fly={{ y: 20, duration: 800, delay: 400 }}
        >
          I'm a Fullstack Software Engineer from India
          <span role="img" aria-label="Indian flag">🇮🇳</span>
          with a passion for design systems and frontend development.
        </p>

        <div in:fly={{ y: 20, duration: 800, delay: 500 }}>
          <a
            href="#contact"
            class="inline-block px-8 py-4 border bg-lime-600 dark:bg-lime-300 text-lime-100 dark:text-lime-950 font-bold hover:bg-lime-700 hover:text-white transition-colors duration-300 rounded-lg"
            aria-label="Contact Arun Kumar"
          >
            GET IN TOUCH
          </a>
        </div>

      </div>

      <!-- RIGHT: profile image -->
      <div
        class="shrink-0 flex justify-center"
        in:fly={{ x: 40, duration: 800, delay: 300 }}
      >
        <div class="relative w-64 min-h-80 md:w-100 md:min-h-120">
          <enhanced:img
            src={image}
            alt="Arun Kumar — Fullstack Software Engineer"
            class="w-full h-full object-cover object-top"
            sizes="(min-width: 768px) 400px, 256px"
            fetchpriority="high"
          />
        </div>
      </div>

    </div>
  {/if}
</section>

<style>
  .name {
    font-family: 'type-writer', monospace;
  }
</style>