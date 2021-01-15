import { queryId, queryIdAll } from "../dom-query";

export default () => {
  const closeControls = Array.from(
    queryIdAll("meganav-control-mobile-panel-close")
  );
  const openControls = Array.from(
    queryIdAll("meganav-control-mobile-panel-open")
  );
  const dropdown = queryId("meganav-mobile-dropdown");

  const clickHandler = (btn, closeBtn, panel) => () => {
    btn.setAttribute("aria-expanded", true);
    closeBtn.setAttribute("aria-expanded", true);
    panel.classList.replace("invisible", "visible");
    dropdown.classList.add("ui-meganav-mobile-dropdown-expand");
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
        panel.classList.replace("visible", "invisible");
        btn.setAttribute("aria-expanded", false);
      },
    };
  });
};
