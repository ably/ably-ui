import throttle from "lodash.throttle";

import "./component.css";

// Glossary:
// item - is the element which contains both the control and the panel - these are adjacent
// control - interactive element that controls showing and hiding of dropdown or panel
// panel - container for meganav content
// dropdown - container for top level items on mobile
// clear - return to initial state
// teardown - remove all event listeners (for example when removing nodes)

import { queryId, queryIdAll } from "../dom-query";

import MeganavControl from "../MeganavControl/component";

import MeganavControlMobileDropdown from "../MeganavControlMobileDropdown/component";
import MobilePanelOpenClick from "../MeganavControlMobilePanelOpen/component";
import MobilePanelCloseClick from "../MeganavControlMobilePanelClose/component";
import MeganavSearchAutocomplete from "../MeganavSearchAutocomplete/component";

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
  const controlMobileDropdownMenu = queryId(
    "meganav-control-mobile-dropdown-menu"
  );
  const controlMobileDropdownClose = queryId(
    "meganav-control-mobile-dropdown-close"
  );
  const controls = queryIdAll("meganav-control");
  const signUpBtn = queryId("meganav-sign-up-btn");

  const invertTextCollection = [
    ...Array.from(controls),
    ...Array.from(navItems),
    queryId("meganav-logo"),
  ];

  const invertMobleDropdownColor = (invert) => {
    const whiteToBlack = ["ui-icon-white", "ui-icon-cool-black"];
    const blackToWhite = [...whiteToBlack].reverse();

    if (invert) {
      controlMobileDropdownMenu?.classList.replace(...whiteToBlack);
      controlMobileDropdownClose?.classList.replace(...whiteToBlack);
    } else {
      controlMobileDropdownMenu?.classList.replace(...blackToWhite);
      controlMobileDropdownClose?.classList.replace(...blackToWhite);
    }
  };

  const inverSignupBtnColors = (invert) => {
    if (invert) {
      signUpBtn?.classList.replace("bg-white", "bg-cool-black");
      signUpBtn?.classList.replace("text-cool-black", "text-white");
    } else {
      signUpBtn?.classList.replace("bg-cool-black", "bg-white");
      signUpBtn?.classList.replace("text-white", "text-cool-black");
    }
  };

  const scrollHandler = throttle(() => {
    if (window.scrollY > 5) {
      meganav.classList.replace("bg-transparent", "bg-white");
      inverSignupBtnColors(true);
      invertMobleDropdownColor(true);

      invertTextCollection.forEach((n) =>
        n.classList.replace("text-white", "text-cool-black")
      );
    } else {
      meganav.classList.replace("bg-white", "bg-transparent");
      inverSignupBtnColors(false);
      invertMobleDropdownColor(false);

      invertTextCollection.forEach((n) =>
        n.classList.replace("text-cool-black", "text-white")
      );
    }
  }, 150);

  document.addEventListener("scroll", scrollHandler);

  return {
    teardown: () => document.removeEventListener("scroll", scrollHandler),
  };
};

export default function Meganav({ themeName } = { themeName: null }) {
  const controls = MeganavControl();
  const panelOpenControls = MobilePanelOpenClick();
  const panelCloseControls = MobilePanelCloseClick();
  const search = MeganavSearchAutocomplete();

  const mobileDropdownControl = MeganavControlMobileDropdown({
    clearPanels: () =>
      [...panelOpenControls, ...panelCloseControls].forEach((i) => i.clear()),
  });

  const closeAll = () =>
    [
      mobileDropdownControl,
      ...panelOpenControls,
      ...panelCloseControls,
      ...controls,
      ...search,
    ].forEach((i) => i.clear());

  const teardowns = [
    documentScroll(themeName),
    documentClick(closeAll),
    windowOnBlur(closeAll),
    mobileDropdownControl,
    ...controls,
    ...panelOpenControls,
    ...panelCloseControls,
    ...search,
  ].map((i) => i.teardown);

  return () => teardowns.forEach((teardown) => teardown());
}
