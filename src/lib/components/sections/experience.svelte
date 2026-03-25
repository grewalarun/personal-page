<script lang="ts">
  import { fly } from 'svelte/transition';
  import { inview } from '$lib/actions/inview';
  import SectionHeader from '../section-header.svelte';

  let visible = $state(false);

  const experiences = [
    {
      period: '2024 - Present',
      company: 'Nagarro Software Pvt. Ltd.',
      role: 'Senior Frontend Developer',
      description:
        'Leading frontend development using modern frameworks to build scalable and high-performance web applications. Collaborating with cross-functional teams to design intuitive UI systems, optimize performance, and maintain code quality. Actively contributing to architectural decisions, reusable component libraries, and improving overall user experience across enterprise-grade projects.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'HTML', 'CSS'],
    },
    {
      period: '2022 - 2024',
      company: 'UZIO Technologies',
      role: 'Senior UI Developer',
      description:
        'Developed and maintained SaaS-based dental and insurance portals for both admin and customer interfaces. Focused on creating responsive, user-friendly dashboards and workflows. Worked closely with product and design teams to implement scalable UI components and enhance usability using modern frontend technologies.',
      tags: ['React', 'JavaScript', 'Material UI', 'HTML', 'CSS', 'Adobe XD'],
    },
    {
      period: '2019 - 2022',
      company: 'Open Access Technology India Pvt. Ltd.',
      role: 'UI Developer',
      description:
        'Worked as a UI developer and designer on smart grid software solutions, building interactive and data-driven interfaces. Contributed to both design and development, ensuring seamless user experiences. Created visually consistent layouts and collaborated with backend teams to integrate complex systems effectively.',
      tags: ['Ext JS', 'React', 'HTML', 'CSS', 'Adobe XD', 'Illustrator', 'InDesign'],
    },
    {
      period: '2017 - 2019',
      company: '42Works Pvt. Ltd.',
      role: 'Web Developer',
      description:
        'Developed and customized WordPress websites for law firms and healthcare providers. Focused on delivering responsive, SEO-friendly websites with clean UI and optimized performance. Handled theme customization, plugin integration, and client-specific requirements to deliver high-quality web solutions.',
      tags: ['WordPress', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    },
  ];
</script>

<section
  id="experience"
  class="py-20 dark:bg-purple-950/20 bg-white min-h-200"
  use:inview={(v) => { if (v) visible = true; }}
>
  {#if visible}
<div class=" max-w-6xl px-6 w-full mx-auto">
    <!-- Header -->
<SectionHeader
  label="CAREER" 
  heading="EXPERIENCE" 
/>

    <div class="timeline">
      {#each experiences as exp, i}
        <div
          class="timeline-item"
          in:fly={{ y: 30, duration: 700, delay: 150 * i }}
        >
          <div class="divider" aria-hidden="true"></div>

          <div class="timeline-row">
            <time class="period" datetime={exp.period}>{exp.period}</time>

            <div class="content">
              <h3 class="company">{exp.company}</h3>
              <p class="role text-pink-600 dark:text-pink-500">{exp.role}</p>
              <p class="description">{exp.description}</p>

              <div class="tags">
                {#each exp.tags as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
      <div class="divider" aria-hidden="true"></div>
    </div>
  </div>
  {/if}
</section>

<style>



  /* Timeline */
  .timeline {
    display: flex;
    flex-direction: column;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #2a2a2a;
  }

  .timeline-item {
    display: flex;
    flex-direction: column;
  }

  .timeline-row {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 2rem;
    padding: 2.5rem 0;
  }

  /* Period */
  .period {
    font-size: 0.85rem;
    color: #6b7280;
    font-family: monospace;
    padding-top: 0.25rem;
    white-space: nowrap;
  }

  /* Content */
  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .company {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .role {
    font-size: 0.95rem;
    font-weight: 500;
  }

  .description {
    font-size: 0.9rem;
    line-height: 1.7;
    max-width: 660px;
    margin-top: 0.5rem;
  }

  /* Tags */
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tag {
    font-size: 0.75rem;
    font-family: monospace;
    padding: 0.3rem 0.75rem;
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      border-color: #a3e635;
      color: #a3e635;
  }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .timeline-row {
      grid-template-columns: 1fr;
      gap: 0.5rem;
      padding: 2rem 0;
    }

    .period {
      color: #a3e635;
    }
  }
</style>