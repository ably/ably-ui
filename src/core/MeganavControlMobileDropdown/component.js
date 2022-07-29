import scrollLock from "scroll-lock";

import { queryId } from "../dom-query";

const MeganavControlMobileDropdown = ({ clearPanels }) => {
  const control = queryId("meganav-control-mobile-dropdown");
  const dropdown = queryId("meganav-mobile-dropdown");
  const menuIcon = queryId("meganav-control-mobile-dropdown-menu");
  const closeIcon = queryId("meganav-control-mobile-dropdown-close");
  const meganavSearchSuggestionsToggle = queryId("meganav-mobile-search-input");
  const meganavSearchSuggestions = queryId("meganav-mobile-search-suggestions");

  const clickHandler = () => {
    const ariaExpanded = control.getAttribute("aria-expanded");

    if (ariaExpanded === "false") {
      dropdown.classList.replace("invisible", "visible");
      control.setAttribute("aria-expanded", true);
      scrollLock.disablePageScroll();
    } else {
      dropdown.classList.replace("visible", "invisible");
      control.setAttribute("aria-expanded", false);
      scrollLock.enablePageScroll();
      clearPanels();
    }

    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  };

  const focusSuggestionsHandler = () => {
    meganavSearchSuggestions.classList.add("max-h-96");
  };
  const blurSuggestionsHandler = (event) => {
    if (
      event.relatedTarget === meganavSearchSuggestions.querySelectorAll("a")[0]
    ) {
      return;
    }
    meganavSearchSuggestions.classList.remove("max-h-96");
  };

  control.addEventListener("click", clickHandler);
  meganavSearchSuggestionsToggle.addEventListener(
    "focus",
    focusSuggestionsHandler
  );
  meganavSearchSuggestionsToggle.addEventListener(
    "blur",
    blurSuggestionsHandler
  );

  return {
    teardown: () => {
      control.removeEventListener("click", clickHandler);
      scrollLock.enablePageScroll();
      meganavSearchSuggestionsToggle.removeEventListener(
        "focus",
        focusSuggestionsHandler
      );
      meganavSearchSuggestionsToggle.removeEventListener(
        "blur",
        blurSuggestionsHandler
      );
    },
    clear: () => {
      dropdown.classList.replace("visible", "invisible");
      control.setAttribute("aria-expanded", false);
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      scrollLock.enablePageScroll();
      meganavSearchSuggestions.classList.remove("max-h-96");
    },
  };
};

export default MeganavControlMobileDropdown;
