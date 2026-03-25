<script lang="ts">
	import { Send } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import { inview } from '$lib/actions/inview';
	let visible = $state(false);
</script>

<section id="contact" class="py-20 px-6 md:px-24 mx-auto border-t border-zinc-200 relative bg-zinc-50 min-h-160" use:inview={(v) => { if (v) visible = true; }}>
	<!-- CSS Grid Pattern Background -->
	<div class="absolute inset-0 pointer-events-none opacity-20" style="background-size: 40px 40px; background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);"></div>
	
	{#if visible}
	<div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16" in:fade={{ duration: 1000 }}>
		<div class="space-y-6">
			<h3 class="text-sm font-bold tracking-widest text-zinc-500 uppercase" in:fly={{ y: 20, duration: 800, delay: 100 }}>Contact Me</h3>
			<p class="text-xl md:text-2xl text-zinc-700 font-medium leading-relaxed max-w-md" in:fly={{ y: 20, duration: 800, delay: 200 }}>
				Don't hesitate to reach out with any questions or ideas. I'm here to listen, offer insights, and have enriching discussions. Your message could spark something wonderful—let's start a dialogue!
			</p>
		</div>

		<form class="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-zinc-100 space-y-8 flex flex-col" onsubmit={(e) => e.preventDefault()} in:fly={{ y: 20, duration: 800, delay: 300 }}>
			<div class="relative">
				<input type="text" id="name" placeholder="Name" class="w-full border-b-2 border-zinc-200 py-3 text-lg focus:border-primary transition-colors bg-transparent outline-none text-zinc-900 placeholder-zinc-400" />
			</div>
			<div class="relative">
				<input type="email" id="email" placeholder="Email" class="w-full border-b-2 border-zinc-200 py-3 text-lg focus:border-primary transition-colors bg-transparent outline-none text-zinc-900 placeholder-zinc-400" />
			</div>
			<div class="relative grow">
				<textarea id="message" placeholder="Message" rows="4" class="w-full border-b-2 border-zinc-200 py-3 text-lg focus:border-primary transition-colors bg-transparent outline-none text-zinc-900 placeholder-zinc-400 resize-none"></textarea>
			</div>
			<div class="pt-4">
				<button type="submit" class="bg-zinc-800 hover:bg-black text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-3">
					Send <Send size={18} />
				</button>
			</div>
		</form>
	</div>
	{/if}
</section>
