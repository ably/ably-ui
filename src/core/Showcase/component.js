import { queryId, queryIdAll } from "../dom-query";
import { remsToPixelValue } from "../css";

import "./component.css";

const SLIDE_SHOW_INTERVAL = 5000;

const updateLogoOpacity = (logos, currentIndex) => {
  const visible = ["filter-grayscale", "filter-none"];
  const opaque = [...visible].reverse();
  logos.forEach((logo, i) => {
    logo.classList.replace(...(i === currentIndex ? visible : opaque));
  });
};

const moveSlides = (slides, currentIndex) => {
  const pullClasses = [null, "-translate-x-full", "-translate-x-double-full"];
  slides.classList.remove(...pullClasses.filter((_, i) => i !== currentIndex));
  slides.classList.add(pullClasses[currentIndex]);
};

const moveIndexBar = (indexBar, currentIndex) => {
  const pushClasses = [null, "translate-x-full", "translate-x-double-full"];

  indexBar.classList.remove(
    ...pushClasses.filter((_, i) => i !== currentIndex)
  );
  indexBar.classList.add(pushClasses[currentIndex]);
};

const moveControlsContainer = (controlsContainer, currentIndex) => {
  const parentNode = controlsContainer.parentNode;

  if (currentIndex === 0) {
    parentNode.scrollLeft = 0;
  } else if (currentIndex === 1) {
    const width = parentNode.getBoundingClientRect().width;
    parentNode.scrollTo({
      left: (420 - width) / 2,
      behavior: "smooth",
    });
  } else if (currentIndex === 2) {
    const width = parentNode.getBoundingClientRect().width;
    parentNode.scrollTo({
      left: 420 - width,
      behavior: "smooth",
    });
  }
};

const mobileBreakpoint = () => {
  if (typeof window === "undefined") return false;

  const clientLogoWidth = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--ui-showcase-client-logo-min-width");

  // Margin for small breakpoint, but could be different in practice
  const ESTIMATED_MARGIN = 64;
  const NUMBER_OF_LOGOS = 3;
  const breakpointEstimate =
    remsToPixelValue(clientLogoWidth) * NUMBER_OF_LOGOS +
    ESTIMATED_MARGIN +
    "px";

  return !window.matchMedia(`(min-width: ${breakpointEstimate})`).matches;
};

export default (node, enableSlideshow) => {
  const container = node || queryId("showcase");
  const controls = Array.from(queryIdAll("showcase-control", container));
  const logos = controls.map((control) => control.querySelector("img"));
  const controlsContainer = queryId("showcase-controls", container);
  const indexBar = queryId("showcase-index-bar", container);
  const slides = queryId("showcase-slides", container);

  let currentIndex = 0;
  let mouseover = false;
  let updateSlideTimeoutId;

  const updateSlide = (index) => {
    moveSlides(slides, index);
    moveIndexBar(indexBar, index);
    updateLogoOpacity(logos, index);

    if (mobileBreakpoint()) {
      moveControlsContainer(controlsContainer, index);
    }
  };

  const scheduleSlideMove = () =>
    (updateSlideTimeoutId = setTimeout(() => {
      if (mouseover) return;
      if (mobileBreakpoint()) return;

      currentIndex += 1;

      if (controls.length < currentIndex + 1) {
        currentIndex = 0;
      }

      updateSlide(currentIndex);
      scheduleSlideMove();
    }, SLIDE_SHOW_INTERVAL));

  const logoClick = () => {
    const clickHandler = (index) => () => {
      currentIndex = index;
      updateSlide(currentIndex);
    };

    const handlers = controls.map((control, index) => {
      const handler = clickHandler(index);
      control.addEventListener("click", handler);
      return handler;
    });

    return () => {
      handlers.forEach((handler, i) =>
        controls[i].removeEventListener("click", handler)
      );
    };
  };

  const pointerOverContainer = () => {
    const handler = () => {
      mouseover = true;
      clearTimeout(updateSlideTimeoutId);
    };
    container.addEventListener("mouseover", handler);
    return () => container.removeEventListener("mouseover", handler);
  };

  const pointerLeftContainer = () => {
    const handler = () => {
      mouseover = false;
      scheduleSlideMove();
    };
    container.addEventListener("mouseleave", handler);
    return () => container.removeEventListener("mouseleave", handler);
  };

  const viewportResized = () => {
    const handler = () => {
      clearTimeout(updateSlideTimeoutId);
      scheduleSlideMove();
    };
    document.addEventListener("resize", handler);
    return () => document.removeEventListener("resize", handler);
  };

  const scrollOverContainer = () => {
    const handler = (event) => event.preventDefault();
    controlsContainer.parentNode.addEventListener("wheel", handler);
    return () =>
      controlsContainer.parentNode.removeEventListener("wheel", handler);
  };

  const logoClickTeardown = logoClick();
  const scrollOverContainerTeardown = scrollOverContainer();

  const slideshowInit = () => {
    if (enableSlideshow) {
      scheduleSlideMove();
      container.setAttribute("aria-live", "polite");

      const teardowns = [
        pointerOverContainer(),
        pointerLeftContainer(),
        viewportResized(),
      ];
      return () => teardowns.forEach((t) => t());
    } else {
      return () => {};
    }
  };

  const slideshowTeardown = slideshowInit();

  return function teardown() {
    // Restore initial position
    updateSlide(0);
    clearTimeout(updateSlideTimeoutId);

    logoClickTeardown();
    slideshowTeardown();
    scrollOverContainerTeardown();
  };
};
