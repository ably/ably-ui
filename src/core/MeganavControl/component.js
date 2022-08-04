import { queryId, queryIdAll } from "../dom-query";

const MeganavControl = () => {
  const controls = Array.from(queryIdAll("meganav-control"));
  const panels = Array.from(queryIdAll("meganav-panel"));
  const mdBreakpoint = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--bp-md");

  const hoverEnabled = () =>
    window.matchMedia(
      `(hover: hover) and (pointer: fine) and (min-width: ${mdBreakpoint})`
    ).matches;

  const isSearchControl = (node) => node.dataset.control === "search";

  const isSearchPanelOpen = () => {
    const searchPanel = document.querySelector(
      '[data-id="meganav-panel"]#panel-search'
    );
    if (!searchPanel) return;
    return !searchPanel.classList.contains("invisible");
  };

  const controlsHaveFocus = () =>
    controls.some((control) => control === document.activeElement);

  const hover = (control, panel, open) => {
    if (hoverEnabled() && !controlsHaveFocus() && !isSearchPanelOpen()) {
      const classes = ["invisible", "visible"];
      panel.classList.replace(...(open ? classes : classes.reverse()));
      control.setAttribute("aria-expanded", open);
    }
  };

  const mouseenterHandler = (control, panel) => () =>
    hover(control, panel, true);

  const mouseleaveHandler = (control, panel) => () =>
    hover(control, panel, false);

  const clickHandler = (control, panel) => () => {
    controls.forEach(
      (node) => node !== control && node.setAttribute("aria-expanded", false)
    );

    panels.forEach(
      (node) => node !== panel && node.classList.replace("visible", "invisible")
    );

    const ariaExpanded = control.getAttribute("aria-expanded");

    if (ariaExpanded === "true") {
      control.setAttribute("aria-expanded", false);
      panel.classList.replace("visible", "invisible");
    } else {
      control.setAttribute("aria-expanded", true);
      panel.classList.replace("invisible", "visible");
    }

    if (isSearchControl(control)) {
      const searchInput = queryId("meganav-search-input", panel);
      if (!searchInput) return;
      searchInput.focus();
    } else {
      control.focus();
    }
  };

  return controls
    .map((control) => {
      const item = control.parentNode;
      const panel = document.querySelector(
        `#${control.getAttribute("aria-controls")}`
      );
      const click = clickHandler(control, panel);
      control.addEventListener("click", click);
      let mouseenter, mouseleave;

      if (!isSearchControl(control)) {
        mouseenter = mouseenterHandler(control, panel);
        mouseleave = mouseleaveHandler(control, panel);

        item.addEventListener("mouseenter", mouseenter);
        item.addEventListener("mouseleave", mouseleave);
      }

      return [
        {
          teardown: () => {
            if (mouseenter && mouseleave) {
              item.removeEventListener("mouseenter", mouseenter);
              item.removeEventListener("mouseleave", mouseleave);
            }

            control.removeEventListener("click", click);
          },
          clear: () => {
            control.setAttribute("aria-expanded", false);
            panel.classList.replace("visible", "invisible");
          },
        },
      ];
    })
    .flat();
};

export default MeganavControl;
