import Slider from "@ably/ui/core/Slider/component";

document.body.classList.add("bg-light-grey", "m-32");

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelectorAll('[data-id="slider"]');

  Slider({
    container: slider[0],
    mqEnableThreshold: () => true,
  });

  Slider({
    container: slider[1],
    // match sm breakpoint
    mqEnableThreshold: () => !window.matchMedia("(min-width: 48rem)").matches,
  });
});
