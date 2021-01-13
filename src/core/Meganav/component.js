import "./component.css";

// Glossary:
// item - is the element which contains both the control and the panel - these are adjacent
// control - interactive element that controls showing and hiding of dropdown or panel
// panel - container for meganav content
// dropdown - container for top level items on mobile
// clear - return to initial state
// teardown - remove all event listeners (for example when removing nodes)

import { queryId, queryIdAll } from "../dom-query";

import MeganavItemControl from "../MeganavItemControl/component";

import MobileMenuControl from "../MobileMenuControl/component";
import MobilePanelOpenClick from "../PanelOpenControl/component";
import MobilePanelCloseClick from "../PanelCloseControl/component";

// Close menu when user clicks outside of viewport
const windowOnBlur = (closeAll) => {
  window.onblur = () => closeAll();
  return { teardown: () => (window.onblur = null) };
};

// Close menu when click/tap outside of nav
const documentClick = (closeAll) => {
  const meganav = queryId("meganav");

  const clickHandler = (e) => {
    if (meganav.contains(e.target)) return;
    closeAll();
  };

  document.addEventListener("click", clickHandler);

  return {
    teardown: () => document.removeEventListener("click", clickHandler),
  };
};

// Invert from transparent to white
const documentScroll = (themeName) => {
  if (themeName !== "transparentToWhite") return { teardown: () => {} };

  const meganav = queryId("meganav");
  const navItems = queryIdAll("meganav-link");
  const controlMobileDropdown = queryId("meganav-control-mobile-dropdown");
  const controls = queryIdAll("meganav-control");

  const invertTextCollection = [
    ...Array.from(controls),
    ...Array.from(navItems),
    controlMobileDropdown,
    queryId("meganav-logo"),
  ];

  const scrollHandler = () => {
    if (window.scrollY > 5) {
      meganav.classList.replace("bg-transparent", "bg-white");

      invertTextCollection.forEach((n) =>
        n.classList.replace("text-white", "text-cool-black")
      );
    } else {
      meganav.classList.replace("bg-white", "bg-transparent");

      invertTextCollection.forEach((n) =>
        n.classList.replace("text-cool-black", "text-white")
      );
    }
  };

  document.addEventListener("scroll", scrollHandler);

  return {
    teardown: () => document.removeEventListener("scroll", scrollHandler),
  };
};

export default function Meganav({ themeName } = { themeName: null }) {
  const controls = MeganavItemControl();
  const panelOpenControls = MobilePanelOpenClick();
  const panelCloseControls = MobilePanelCloseClick();

  const mobileDropdownControl = MobileMenuControl({
    clearPanels: () =>
      [...panelOpenControls, ...panelCloseControls].forEach((i) => i.clear()),
  });

  const closeAll = () =>
    [
      mobileDropdownControl,
      ...panelOpenControls,
      ...panelCloseControls,
      ...controls,
    ].forEach((i) => i.clear());

  const teardowns = [
    documentScroll(themeName),
    documentClick(closeAll),
    windowOnBlur(closeAll),
    mobileDropdownControl,
    ...controls,
    ...panelOpenControls,
    ...panelCloseControls,
  ].map((i) => i.teardown);

  return () => teardowns.forEach((teardown) => teardown());
}
