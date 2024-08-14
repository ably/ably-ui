export default (spritesUrl) => {
  if (document.querySelector(".ably-sprites")) return;

  fetch(spritesUrl)
    .then((response) => response.text())
    .then((image) => {
      const container = document.createElement("div");
      container.className = "ably-sprites";
      container.style.opacity = 0;
      container.style.position = "absolute";
      container.style.width = "0";
      container.style.height = "0";
      container.innerHTML = image;
      document.body.appendChild(container);
    })
    .catch((err) => console.error(err));
};
