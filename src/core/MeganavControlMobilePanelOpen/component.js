import { queryId, queryIdAll } from "../dom-query";
import { remsToPixelValue } from "../css";

export default () => {
  const closeControls = Array.from(
    queryIdAll("meganav-control-mobile-panel-close")
  );
  const openControls = Array.from(
    queryIdAll("meganav-control-mobile-panel-open")
  );
  const dropdown = queryId("meganav-mobile-dropdown");

  // Height is defined in rem's so to get the pixel value we need to find the fontSize on root
  const meganavHeight = remsToPixelValue(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--ui-meganav-height"
    )
  );

  const clickHandler = (btn, closeBtn, panel) => () => {
    btn.setAttribute("aria-expanded", true);
    closeBtn.setAttribute("aria-expanded", true);
    panel.classList.replace("hidden", "block");

    // On devices where we don't have enough space for the panel, set it's height to
    // the height of the viewport (minus the meganav height) - this will trigger a scroll.
    // Otherwise just set it to the panel height. This handles the case where the ratio of vertical
    // space to horizontal is especially high (think tablets, but not only).
    panel.style.height = `${
      window.innerHeight - meganavHeight > panel.offsetHeight
        ? panel.offsetHeight
        : window.innerHeight - meganavHeight
    }px`;
  };

  return openControls.map((btn) => {
    const closeBtn = closeControls.find(
      (node) =>
        node.getAttribute("aria-controls") === btn.getAttribute("aria-controls")
    );
    const panel = document.querySelector(
      `#${btn.getAttribute("aria-controls")}`
    );
    const handler = clickHandler(btn, closeBtn, panel);

    btn.addEventListener("click", handler);

    return {
      teardown: () => btn.removeEventListener("click", handler),
      clear: () => {
        panel.classList.replace("block", "hidden");
        dropdown.classList.remove("ui-meganav-mobile-dropdown-expand");
        btn.setAttribute("aria-expanded", false);
        panel.style.height = null;
      },
    };
  });
};
