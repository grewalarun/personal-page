<script lang="ts">
	import { projects } from '../data';
	import ProjectCard from './project-card.svelte';
	import { fade, fly } from 'svelte/transition';
	import { inview } from '$lib/actions/inview';
    import SectionHeader from '../section-header.svelte';
	let visible = $state(false);
</script>

<section id="work" class="py-20 px-6 dark:bg-black-600/20 bg-white-50" use:inview={(v) => { if (v) visible = true; }}>
	{#if visible}
	<div class="max-w-6xl w-full mx-auto min-h-200" in:fade={{ duration: 1000 }}>
<SectionHeader
  label="THINGS" 
  heading="I WORKED ON" 
/>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
			{#each projects as project, i}
				<div in:fly={{ y: 20, duration: 800, delay: 200 + i * 100 }}>
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
	{/if}
</section>
