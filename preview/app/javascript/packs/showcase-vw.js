import Showcase from "@ably/ui/core/Showcase/component";

document.body.classList.add("bg-light-grey", "m-32");

document.addEventListener("DOMContentLoaded", () => {
  const showcases = document.querySelectorAll('[data-id="showcase"]');

  Showcase(showcases[0], false);
  Showcase(showcases[1], true);
  Showcase(showcases[2], false);
  Showcase(showcases[3], true);
});
