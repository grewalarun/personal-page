<script>
import Navbar from "$lib/components/nav-bar.svelte";
import HeroSection from "$lib/components/sections/hero-section.svelte";
import Skills from "$lib/components/sections/skills.svelte";
    import ContactSection from "$lib/components/sections/contact-section.svelte";
    import ProjectsSection from "$lib/components/sections/projects-section.svelte";
    import Experience from "$lib/components/sections/experience.svelte";
</script>

<Navbar/>
<HeroSection/>
<Skills/>
<ProjectsSection/>
<Experience/>
<ContactSection/>
<div class="copyright">© 2024 Arun Kumar. All rights reserved.</div>

<style>
    .copyright {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-block: 20px;
    }
</style>