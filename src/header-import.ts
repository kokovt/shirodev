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

fetch("./header.html").then(response => {
    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return response.text();
}).then(html => {
    const header: HTMLDivElement = document.createElement("div");
    header.innerHTML = html;
    document.body.insertBefore(header, document.body.firstChild);

    // Import toggle theme script
    const toggleThemeScript = document.createElement("script");
    toggleThemeScript.src = "./dist/toggle-theme.js";
    toggleThemeScript.type = "module";
    document.body.appendChild(toggleThemeScript);

    // Import gravatar script
    const gravatarScript = document.createElement("script");
    gravatarScript.src = "./dist/gravatar.js";
    gravatarScript.type = "module";
    document.body.appendChild(gravatarScript);

}).catch(error => {
    console.error("Error importing header:", error);
});