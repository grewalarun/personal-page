<script lang="ts">
  import viewport from '../../util/useViewportAction';
  import ThemeToggle from './theme-toggle.svelte';

  let scrolled = $state(false);

  function handleEnter() {
    scrolled = false;
  }

  function handleExit() {
    scrolled = true;
  }
</script>

<!-- sentinel: 1px invisible div at top of page -->
<!-- nav is position:fixed so it never leaves viewport itself -->
<div
  class="sentinel"
  use:viewport
  onenter-viewport={handleEnter}
  onexit-viewport={handleExit}
  aria-hidden="true"
></div>

<nav
  id="nav"
  class:scrolled
  aria-label="Main navigation"
>
  <!-- Logo -->
  <div>
    <a href="/" aria-label="Arun Kumar — go to homepage">
      <p aria-hidden="true">ak</p>
    </a>
  </div>

  <!-- Nav links -->
  <ul role="list" class="text-pink-600">
    <li><a href="/#skills">Skills</a></li>
    <li><a href="/#work">My Work</a></li>
    <li><a href="/#experience">Experience</a></li>
    <li><a href="/#contact">Contact</a></li>
    <li><ThemeToggle /></li>
  </ul>
</nav>

<style lang="scss">
  .sentinel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    pointer-events: none;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-l) var(--spacing-page-inset);
    letter-spacing: var(--letter-spacing-l);
    width: 100%;
    font-size: 0.8rem;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;

    &.scrolled {
      background-color: rgba(255,255,255,0.9);
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(7px);
      -webkit-backdrop-filter: blur(7px);
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;   /* center not baseline — ThemeToggle aligns better */
    gap: var(--spacing-xl);
  }

  a {
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    padding: var(--spacing-s) 0;
	font-family: type-writer;
    /* minimum touch target for accessibility */
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  li {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:after {
      display: block;
      content: '';
      width: 0;
      height: 1px;
      margin: var(--spacing-xs) auto;
    }

    &:hover {
      transform: scale(1.1);

      a {
        color: var(--color-secondary);
      }

      &:after {
        width: 100%;
        background-color: var(--color-secondary);
        transition: width 0.2s ease-in-out;
      }
    }
  }

  /* focus styles for keyboard navigation */
  a:focus-visible {
    outline: 2px solid var(--color-secondary);
    outline-offset: 4px;
    border-radius: 2px;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  p {
    font-size: 2.5rem;
    color: var(--color-primary);
    font-weight: normal;
    font-family: type-writer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--color-secondary);
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      display: none;
    }
  }
</style>