<!-- src/lib/components/Skills.svelte -->
<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { inview } from '$lib/actions/inview';
    import SectionHeader from '../section-header.svelte';
    import { isLabeledStatement } from 'typescript';

  let visible = $state(false);

  const skills = [
    {
      name: 'HTML',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26'
    },
    {
      name: 'CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB'
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#000000'
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    },
    {
      name: 'Wordpress',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
      color: '#339933'
    },
    {
      name: 'Svelte',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
      color: '#FF3E00'
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248'
    },
  ];
</script>

<section id="skills"
  class="flex flex-col justify-center bg-amber-50 dark:bg-blue-950 py-20"
  use:inview={(v) => { if (v) visible = true; }}
>
  {#if visible}
<div class="max-w-6xl mx-auto px-6 w-full">
    <!-- Title -->
<SectionHeader 
  label="My Stack" 
  heading="I'M GOOD AT THIS." 
/>

    <!-- Skills Grid -->
    <div class="max-w-6xl grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-5 mx-auto">
      {#each skills as skill, i}
        <div
          class="skill-card flex flex-col items-center gap-3 group"
          in:fly={{ y: 30, duration: 600, delay: 200 + i * 80 }}
        >
          <!-- logo box -->
          <div
            class="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center p-3 bg-white shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
            style="border: 2px solid {skill.color}20;"  
          >
            <img
              src={skill.logo}
              alt={skill.name}
              class="w-full h-full object-contain"
              style="filter: drop-shadow(0 2px 6px {skill.color}40);"
            />
          </div>

          <!-- name -->
          <p
            class="text-xs md:text-sm font-semibold group-hover:text-zinc-900 transition-colors duration-300 tracking-wide"
          >
            {skill.name}
          </p>
        </div>
      {/each}
    </div>
</div>
  {/if}
  
</section>