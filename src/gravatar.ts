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
const header = document.getElementById("site-name");

let gravatar_image_loaded = false;

let ignore_repeat_block = false;
let chance = 1/21;
let ignored_times = 0;
let max_ignored_times = 2000;
// Variables
const email: string = "shiro@shirodev.dev";
const email_hash: string = CryptoJS.SHA256(email).toString();
if (gravatar_image) {
    gravatar_image.crossOrigin = 'anonymous';
    gravatar_image.src = `https://www.gravatar.com/avatar/${email_hash}`;

    if (Math.random() < chance) {
        ignore_repeat_block = true;

    }
    gravatar_image.onload = function () {
        if (gravatar_image_loaded && ignore_repeat_block == false) return;
        if (ignored_times >= max_ignored_times) return;
        removeColorFromImage(gravatar_image, [255, 255, 255], 13);

        gravatar_image_loaded = true;
        
        if (header && ignored_times % 100 == 0 && ignored_times > 0) {
            header.textContent = shuffle(header.textContent!.split('')).join('');
        }
        ignored_times++;
    }
}

function removeColorFromImage(image: HTMLImageElement, targetRGB: [number, number, number], tolerance: number = 0) {

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return new Error('Failed to get context!');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    ctx.drawImage(image, 0, 0);

    let imageData: ImageData | null = null;

    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const data = imageData!.data;

    const [targetR, targetG, targetB] = targetRGB;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (!r || !g || !b || !a) break;

        const matchR = Math.abs(r - targetR) <= tolerance;
        const matchG = Math.abs(g - targetG) <= tolerance;
        const matchB = Math.abs(b - targetB) <= tolerance;

        if (matchR && matchG && matchB) {
            data[i + 3] = 0;
        }
    }

    ctx.putImageData(imageData, 0, 0);

    image.src = canvas.toDataURL('image/png');
}

function shuffle(array: any[]) {
    // Create a copy to keep the function pure and avoid mutating the original array
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements using array destructuring
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

