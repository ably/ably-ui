import { queryIdAll } from "../dom-query";

const MeganavControl = () => {
  const controls = Array.from(queryIdAll("meganav-control"));
  const panels = Array.from(queryIdAll("meganav-panel"));

  const hoverEnabled = () =>
    window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1040px)"
    ).matches;

  const controlsHaveFocus = () =>
    controls.some((control) => control === document.activeElement);

  const hover = (control, panel, open) => {
    if (hoverEnabled() && !controlsHaveFocus()) {
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

    if (ariaExpanded) {
      control.setAttribute("aria-expanded", true);
      panel.classList.replace("invisible", "visible");
    } else {
      control.setAttribute("aria-expanded", false);
      panel.classList.replace("visible", "invisible");
    }
  };

  return controls
    .map((control) => {
      const item = control.parentNode;
      const panel = document.querySelector(
        `#${control.getAttribute("aria-controls")}`
      );
      const click = clickHandler(control, panel);
      const mouseenter = mouseenterHandler(control, panel);
      const mouseleave = mouseleaveHandler(control, panel);

      item.addEventListener("mouseenter", mouseenter);
      item.addEventListener("mouseleave", mouseleave);
      control.addEventListener("click", click);

      return [
        {
          teardown: () => {
            item.removeEventListener("mouseenter", mouseenter);
            item.removeEventListener("mouseleave", mouseleave);
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
