import throttle from "lodash.throttle";

import { queryId, queryIdAll } from "../dom-query";

const mdBreakpoint = () => window.matchMedia("(min-width: 48rem)").matches;
const DRAG_BUFFER = 20;

const init = (slidesContainer) => {
  const transformContainer = queryId("slider-strip", slidesContainer);
  const slides = Array.from(queryIdAll("slider-slide", slidesContainer));
  const slideLeftChevron = queryId("slider-previous", slidesContainer);
  const slideRightChevron = queryId("slider-next", slidesContainer);
  const slideMarkers = Array.from(queryIdAll("slider-marker", slidesContainer));
  const sliderControls = queryId("slider-controls", slidesContainer);

  sliderControls.classList.replace("hidden", "flex");
  const slidesLength = slides.length;

  const slidesWidth = slidesContainer.getBoundingClientRect().width;
  const { width: slideWidth, left: slideLeftDistance } =
    slides[0].getBoundingClientRect();
  const { left: slideLeftDistanceSecond } = slides[1].getBoundingClientRect();
  const slideGap = slideLeftDistanceSecond - slideLeftDistance - slideWidth;
  const adjustment = (slidesWidth - slideWidth) / 2;

  let currentIndex = 0;
  let touchStartX = 0;

  const calculateTransform = (index) =>
    index * -slideWidth + adjustment + index * -slideGap;

  const updateSlide = (index) =>
    (transformContainer.style.transform = `translateX(${calculateTransform(
      index
    )}px)`);

  const updateMarkers = (index) => {
    slideMarkers.forEach((marker) =>
      marker.classList.remove("text-active-orange")
    );
    slideMarkers[index].classList.remove("text-cool-black");
    slideMarkers[index].classList.add("text-active-orange");
  };

  const slideLeft = () => {
    currentIndex = currentIndex - 1 <= 0 ? 0 : currentIndex - 1;
    updateSlide(currentIndex);
    updateMarkers(currentIndex);
  };

  const slideRight = () => {
    currentIndex =
      currentIndex + 1 >= slidesLength ? currentIndex : currentIndex + 1;
    updateSlide(currentIndex);
    updateMarkers(currentIndex);
  };

  updateSlide(0);
  updateMarkers(0);

  slideLeftChevron.addEventListener("click", slideLeft);

  transformContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0]?.clientX;
  });

  transformContainer.addEventListener("touchend", (e) => {
    const distance = e.changedTouches[0]?.clientX - touchStartX;

    // Prevent sliding on clicks
    if (Math.abs(distance) < DRAG_BUFFER) return;

    const direction = distance > 0 ? slideLeft : slideRight;
    direction();
  });

  slideRightChevron.addEventListener("click", slideRight);

  return () => {
    transformContainer.style.transform = null;
    sliderControls.classList.replace("flex", "hidden");
  };
};

const Slider = ({ container, mqEnableThreshold }) => {
  if (!container) return;

  const breakpointCheck = mqEnableThreshold || (() => !mdBreakpoint());

  let unmount = () => {};
  if (breakpointCheck()) unmount = init(container);

  window.addEventListener(
    "resize",
    throttle(() => {
      if (breakpointCheck()) {
        unmount = init(container);
      } else {
        unmount();
      }
    }, 100)
  );
};

export default Slider;
