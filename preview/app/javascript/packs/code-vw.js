import Code from "@ably/ui/core/Code/component";

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll("[data-id=code]");
  Array.from(blocks).forEach(Code);

  document.body.classList.add("bg-light-grey", "m-32");
});
