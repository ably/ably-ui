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

const translateX = (el, currentIndex, direction = 1) => {
  const percent = currentIndex * 100 * direction;
  el.style.transform = `translateX(${percent}%)`;
};

const moveControlsContainer = (controlsContainer, currentIndex) => {
  const { parentNode, children } = controlsContainer;
  const parentCenter = parentNode.clientWidth / 2;
  const countChildren = children.length;
  const widthChildren = Array.from(children)
    .map((el) => el.clientWidth)
    .reduce((a, c) => a + c);

  const width = widthChildren / countChildren;
  const firstOrLast = !currentIndex || !(countChildren - currentIndex - 1);
  const offsetLeft = !firstOrLast ? parentCenter - (width / 2) : 0;
  const left = currentIndex * width - (offsetLeft >> 0);

  parentNode.scrollTo({ left, behavior: "smooth" });
};

const propertyValue = (string) => {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(string);
};

const mobileBreakpoint = (pixelWidth) => {
  if (typeof window === "undefined") return false;

  // Margin for small breakpoint, but could be different in practice
  const estimatedMargin = 64;
  const breakpointEstimate = `${pixelWidth + estimatedMargin}px`;

  return !window.matchMedia(`(min-width: ${breakpointEstimate})`).matches;
};

export default (node, enableSlideshow) => {
  const container = node || queryId("showcase");
  const controls = Array.from(queryIdAll("showcase-control", container));
  const logos = controls.map((control) => control.querySelector("img"));
  const controlsContainer = queryId("showcase-controls", container);
  const indexBar = queryId("showcase-index-bar", container);
  const slides = queryId("showcase-slides", container);
  const slideCount = slides.children.length;

  const logoWidth = propertyValue("--ui-showcase-client-logo-min-width");
  const pixelWidth = remsToPixelValue(logoWidth) * slideCount;

  // dynamically adjust container width
  [".ui-showcase-logo-wrapper", ".ui-showcase-index-bar"].forEach((s) => {
    const el = container.querySelector(s);
    const minWidth = `${pixelWidth}px`;
    el.style.minWidth = minWidth;
  });

  let currentIndex = 0;
  let mouseover = false;
  let updateSlideTimeoutId;

  const updateSlide = (index) => {
    translateX(slides, index, -1);
    translateX(indexBar, index, 1);
    updateLogoOpacity(logos, index);

    if (mobileBreakpoint(pixelWidth)) {
      moveControlsContainer(controlsContainer, index);
    }
  };

  const scheduleSlideMove = () =>
    (updateSlideTimeoutId = setTimeout(() => {
      if (mouseover) return;
      if (mobileBreakpoint(pixelWidth)) return;

      currentIndex = (currentIndex + 1) % controls.length;

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
