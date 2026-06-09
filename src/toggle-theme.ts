const themeToggle = document.getElementById("theme-toggle") as HTMLInputElement | null;

// initialize
const saved = localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', saved);
if (themeToggle) themeToggle.checked = saved === 'light';

// handler
themeToggle?.addEventListener('change', () => {
  const newTheme = themeToggle.checked ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  console.log('Theme changed to ' + newTheme);
});
