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

const gravatar_image: HTMLImageElement | null = document.getElementById("gravatar") as HTMLImageElement | null;


function loadGravatar() {
    // Variables
    const email_hash: string = "74415bb8520c7e3c7bb4d23608f5d784ad2a4b1f9bb56c8a050eda14da5f6cb0"
    if (gravatar_image) {
        gravatar_image.crossOrigin = 'anonymous';
        gravatar_image.src = `https://www.gravatar.com/avatar/${email_hash}`;
    }
}

loadGravatar();