import { apiFetch } from "./api.js";

async function loadGallery() {
    const container = document.getElementById("gallery");
    const images = await apiFetch("/images/list");

    container.innerHTML = "";

    images.forEach(img => {
        const el = document.createElement("img");
        el.src = img.url;
        el.alt = img.key;
        el.classList.add("thumb");
        container.appendChild(el);
    });
}

loadGallery();
