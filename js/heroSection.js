<script>
function showDescription(card) {
  const topic = card.getAttribute("data-topic");
  const descBox = card.querySelector(".description-box");
  const title = descBox.querySelector(".desc-title");
  const textContainer = descBox.querySelector(".desc-text");

  // Close any open descriptions from other cards
  document.querySelectorAll(".description-box").forEach(box => {
    if (box !== descBox) {
      box.classList.remove("show");
      box.querySelector(".desc-text").innerHTML = "";
    }
  });

  // Toggle this card’s description
  if (descBox.classList.contains("show")) {
    descBox.classList.remove("show");
    return;
  }

  descBox.classList.add("show");
  title.textContent = topic.replace(/_/g, " "); // Clean name
  textContainer.innerHTML = "Loading...";

  // Fetch from Wikipedia
  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`)
    .then(res => res.json())
    .then(data => {
      textContainer.innerHTML = `<span class="blur-text">${data.extract}</span>`;
      setTimeout(() => {
        textContainer.querySelector(".blur-text").classList.add("revealed");
      }, 100);
    })
    .catch(err => {
      textContainer.textContent = "Could not load description.";
      console.error(err);
    });
}
</script>
