<script lang="ts">
	
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style lang="scss" global>
	@use "../sass/main";
	:global(:root) {
		letter-spacing: var(--letter-spacing-l);
		scroll-behavior: smooth;
	}
	:global(body) {
		overflow: auto;
	}

	:global(*) {
		@font-face {
			font-family: "type-writer";
			src: url("/fonts/Courier-Prime-Bold.ttf") format("truetype");
			font-weight: normal;
			font-style: normal;
		}

		@font-face {
			font-family: "Roboto-Thin";
			src: url("/fonts/Roboto-Thin.ttf") format("truetype");
		}

		@font-face {
			font-family: "Roboto-Light";
			src: url("/fonts/Roboto-Light.ttf") format("truetype");
	
		}

		@font-face {
			font-family: "Roboto-Normal";
			src: url("/fonts/Roboto-Regular.ttf") format("truetype");
		
		}

		@font-face {
			font-family: "Roboto-Bold";
			src: url("/fonts/Roboto-Bold.ttf") format("truetype");
	
		}

		//font-family: "Roboto-Normal";
	}
	:global(.grecaptcha-badge) {
		visibility: hidden;
	}
</style>
