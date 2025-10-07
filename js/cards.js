// src/cards.js
import { pandalHopping } from "./pandalHopping.js";

export function renderCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  pandalHopping.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      img.className = "card-img";
      card.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "card-img-placeholder";
      placeholder.textContent = "No Image";
      card.appendChild(placeholder);
    }

    const title = document.createElement("h3");
    title.textContent = item.title;
    card.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = item.description;
    card.appendChild(desc);

    container.appendChild(card);
  });
}
