/**
 * shirodev.dev - my personal website
 * Copyright (c) 2026 Shiro.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
