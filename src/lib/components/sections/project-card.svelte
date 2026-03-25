<script lang="ts">
	let { project } = $props<{ project: { title: string; description: string; tags: string[]; link: string; } }>();
	import { ExternalLink } from 'lucide-svelte';
</script>

<div class="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-zinc-100">
	<div class="grow space-y-4">
		<h4 class="text-2xl font-bold text-zinc-900 group-hover:text-primary transition-colors">{project.title}</h4>
		<p class="text-zinc-600 leading-relaxed text-base">
			{project.description}
		</p>
		<div class="flex flex-wrap gap-3 pt-4">
			{#each project.tags as tag}
				<span class="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
					{tag}
				</span>
			{/each}
		</div>
	</div>
	
	<div class="pt-8 flex justify-end">
		<a href={project.link} target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-zinc-900 transition-colors">
			{#if project.link.includes('github.com')}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
			{:else}
				<ExternalLink size={24} />
			{/if}
		</a>
	</div>
</div>
