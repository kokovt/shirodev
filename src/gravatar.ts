const gravatar_image : HTMLImageElement | null = document.getElementById("gravatar") as HTMLImageElement | null;


// Variables
const email: string = "shiro@shirodev.dev";
const email_hash: string = CryptoJS.SHA256(email).toString();

document.addEventListener("DOMContentLoaded", () => {
    if(gravatar_image) {
        gravatar_image.src = `https://www.gravatar.com/avatar/${email_hash}`;
    }
});