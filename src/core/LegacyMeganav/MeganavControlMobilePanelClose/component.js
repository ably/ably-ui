import { queryIdAll } from "../../dom-query";

export default () => {
  const closeControls = Array.from(
    queryIdAll("meganav-control-mobile-panel-close"),
  );
  const openControls = Array.from(
    queryIdAll("meganav-control-mobile-panel-open"),
  );

  const clickHandler = (btn, openBtn, panel) => () => {
    btn.setAttribute("aria-expanded", false);
    openBtn.setAttribute("aria-expanded", false);
    panel.classList.replace("block", "hidden");
    panel.style.height = null;
  };

  return closeControls.map((btn) => {
    const openBtn = openControls.find(
      (open) =>
        open.getAttribute("aria-controls") ===
        btn.getAttribute("aria-controls"),
    );
    const panel = document.querySelector(
      `#${btn.getAttribute("aria-controls")}`,
    );
    const handler = clickHandler(btn, openBtn, panel);

    btn.addEventListener("click", handler);

    return {
      teardown: () => btn.removeEventListener("click", handler),
      clear: () => btn.setAttribute("aria-expanded", false),
    };
  });
};
