export default (spritesUrl) => {
  fetch(spritesUrl)
    .then((response) => response.text())
    .then((image) => {
      const container = document.createElement("div");
      container.style.display = "none";
      container.innerHTML = image;
      document.body.appendChild(container);
    })
    .catch((err) => console.error(err));
};
