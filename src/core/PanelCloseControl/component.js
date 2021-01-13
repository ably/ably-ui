import { queryId, queryIdAll } from "../dom-query";

const MobilePanelCloseClick = () => {
  const closeControls = Array.from(
    queryIdAll("meganav-control-mobile-panel-close")
  );
  const openControls = Array.from(
    queryIdAll("meganav-control-mobile-panel-open")
  );
  const dropdown = queryId("meganav-mobile-dropdown");

  const clickHandler = (btn, openBtn, panel) => () => {
    btn.setAttribute("aria-expanded", false);
    openBtn.setAttribute("aria-expanded", false);
    panel.classList.replace("visible", "invisible");
    dropdown.classList.remove("ui-meganav-mobile-dropdown-expand");
  };

  return closeControls.map((btn) => {
    const openBtn = openControls.find(
      (open) =>
        open.getAttribute("aria-controls") === btn.getAttribute("aria-controls")
    );
    const panel = document.querySelector(
      `#${btn.getAttribute("aria-controls")}`
    );
    const handler = clickHandler(btn, openBtn, panel);

    btn.addEventListener("click", handler);

    return {
      teardown: () => btn.removeEventListener("click", handler),
      clear: () => btn.setAttribute("aria-expanded", false),
    };
  });
};

export default MobilePanelCloseClick;
