/**
 * Copyright (c) 2026 Shiro.
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 */

const gravatar_image : HTMLImageElement | null = document.getElementById("gravatar") as HTMLImageElement | null;


// Variables
const email: string = "shiro@shirodev.dev";
const email_hash: string = CryptoJS.SHA256(email).toString();

document.addEventListener("DOMContentLoaded", () => {
    if(gravatar_image) {
        gravatar_image.src = `https://www.gravatar.com/avatar/${email_hash}`;
    }
});