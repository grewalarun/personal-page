
<script lang="ts">
  let isDark = $state(false);

  // on mount, read saved preference or OS preference
  $effect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      isDark = true;
    } else if (saved === 'light') {
      isDark = false;
    } else {
      // fallback to OS preference
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    applyTheme(isDark);
  });

  function applyTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  function toggleTheme() {
    isDark = !isDark;
    applyTheme(isDark);
  }
</script>

<button
  onclick={toggleTheme}
  class="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
  style="background-color: var(--bg-surface); border: 1px solid var(--border);"
  aria-label="Toggle theme"
>
  {isDark ? '☀️' : '🌙'}
</button>