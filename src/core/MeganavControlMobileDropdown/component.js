import scrollLock from "scroll-lock";

import { queryId } from "../dom-query";

const DRAG_BUFFER = 5;

const MeganavControlMobileDropdown = ({ clearPanels }) => {
  const control = queryId("meganav-control-mobile-dropdown");
  const dropdown = queryId("meganav-mobile-dropdown");
  const menuIcon = queryId("meganav-control-mobile-dropdown-menu");
  const closeIcon = queryId("meganav-control-mobile-dropdown-close");
  const meganavSearchSuggestionsToggle = queryId("meganav-mobile-search-input");
  const meganavSearchSuggestions = queryId("meganav-mobile-search-suggestions");
  const meganavSearchSuggestionsOverflow = document.querySelector(
    "[data-id='meganav-mobile-search-suggestions'] ul"
  );
  const meganavSearchSuggestionsOverflowWidth = Array.from(
    meganavSearchSuggestionsOverflow.querySelectorAll("li")
  )
    .map((item) => item.getBoundingClientRect().width)
    .reduce((acc, val) => acc + val, 0);

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

  const slideLeft = (distance, dragThreshold, dragReset) => {
    const left = new DOMMatrix(
      window.getComputedStyle(meganavSearchSuggestionsOverflow).transform
    ).e;
    let calculatedDistance = Math.round(left + distance);

    if (calculatedDistance >= dragThreshold && dragReset) {
      calculatedDistance = 0;
    } else if (calculatedDistance >= dragThreshold) {
      return;
    }

    meganavSearchSuggestionsOverflow.style.transform = `translateX(${calculatedDistance}px)`;
  };

  const slideRight = (distance, dragThreshold, dragReset) => {
    const { width } = meganavSearchSuggestionsOverflow.getBoundingClientRect();
    const left = new DOMMatrix(
      window.getComputedStyle(meganavSearchSuggestionsOverflow).transform
    ).e;
    let calculatedDistance = Math.round(left + distance);

    if (
      Math.abs(left - width + distance + dragThreshold) >
        meganavSearchSuggestionsOverflowWidth &&
      dragReset
    ) {
      calculatedDistance = -(
        meganavSearchSuggestionsOverflowWidth -
        width +
        dragThreshold
      );
    } else if (
      Math.abs(left - width + distance + dragThreshold) >
      meganavSearchSuggestionsOverflowWidth
    ) {
      return;
    }

    meganavSearchSuggestionsOverflow.style.transform = `translateX(${calculatedDistance}px)`;
  };

  let touchStartX;

  const touchstartHandler = (e) => {
    touchStartX = e.touches[0]?.clientX;
  };

  const touchmoveHandler = (e) => {
    const distance = e.changedTouches[0]?.clientX - touchStartX;

    // Prevent sliding on clicks
    if (Math.abs(distance) < DRAG_BUFFER) return;

    distance > 0 ? slideLeft(distance, 24) : slideRight(distance, 96);
  };

  const touchendHandler = (e) => {
    const distance = e.changedTouches[0]?.clientX - touchStartX;

    // Prevent sliding on clicks
    if (Math.abs(distance) < DRAG_BUFFER) return;

    distance > 0
      ? slideLeft(distance, 24, true)
      : slideRight(distance, 48, true);
  };

  meganavSearchSuggestions.addEventListener("touchstart", touchstartHandler);
  meganavSearchSuggestions.addEventListener("touchmove", touchmoveHandler);
  meganavSearchSuggestions.addEventListener("touchend", touchendHandler);

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
      meganavSearchSuggestions.removeEventListener(
        "touchstart",
        touchstartHandler
      );
      meganavSearchSuggestions.removeEventListener(
        "touchmove",
        touchmoveHandler
      );
      meganavSearchSuggestions.removeEventListener("touchend", touchendHandler);
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
