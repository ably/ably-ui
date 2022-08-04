import { queryId } from "../dom-query";

const DRAG_BUFFER = 5;

const getTranslateX = (node) =>
  new DOMMatrix(window.getComputedStyle(node).transform).e;

const updateTranslateX = (node, value) =>
  (node.style.transform = `translateX(${value}px)`);

const dragLeftBoundary = (translateX, threshold) => translateX >= threshold;

const dragRightBoundary = (translateX, itemsWidth, windowWidth, threshold) =>
  Math.abs(translateX - windowWidth + threshold) > itemsWidth;

const getDistance = (e, touchStartX) =>
  e.changedTouches[0]?.clientX - touchStartX;

const withinBuffer = (distance) => Math.abs(distance) < DRAG_BUFFER;

const MeganavSearchSuggestions = () => {
  const suggestionsToggle = queryId("meganav-mobile-search-input");
  const suggestions = queryId("meganav-mobile-search-suggestions");
  const list = suggestions.querySelector("ul");
  const listItems = list.querySelectorAll("li");

  const itemsTotalWidth = Array.from(listItems)
    .map((item) => item.getBoundingClientRect().width)
    .reduce((acc, val) => acc + val, 0);

  const dragLeft = (distance, threshold) => {
    const currentTranslateX = getTranslateX(list);
    const translateX = Math.round(currentTranslateX + distance);
    if (dragLeftBoundary(translateX, threshold)) return;
    updateTranslateX(list, translateX);
  };

  const dragLeftEnd = (distance, threshold) => {
    const currentTranslateX = getTranslateX(list);
    let translateX = Math.round(currentTranslateX + distance);

    if (dragLeftBoundary(translateX, threshold)) {
      translateX = 0;
    }

    updateTranslateX(list, translateX);
  };

  const dragRight = (distance, threshold) => {
    const listWidth = list.getBoundingClientRect().width;
    const currentTranslateX = getTranslateX(list);
    const translateX = Math.round(currentTranslateX + distance);

    if (dragRightBoundary(translateX, itemsTotalWidth, listWidth, threshold)) {
      return;
    }

    updateTranslateX(list, translateX);
  };

  const dragRightEnd = (distance, threshold) => {
    const listWidth = list.getBoundingClientRect().width;
    const currentTranslateX = getTranslateX(list);
    let translateX = Math.round(currentTranslateX + distance);

    if (dragRightBoundary(translateX, itemsTotalWidth, listWidth, threshold)) {
      translateX = -(itemsTotalWidth - listWidth + threshold);
    }

    updateTranslateX(list, translateX);
  };

  let touchStartX;

  const touchstartHandler = (e) => {
    touchStartX = e.touches[0]?.clientX;
  };

  const touchmoveHandler = (e) => {
    const distance = getDistance(e, touchStartX);
    if (withinBuffer(distance)) return;
    distance > 0 ? dragLeft(distance, 24) : dragRight(distance, 96);
  };

  const touchendHandler = (e) => {
    const distance = getDistance(e, touchStartX);
    if (withinBuffer(distance)) return;
    distance > 0 ? dragLeftEnd(distance, 24) : dragRightEnd(distance, 48);
  };

  const focusSuggestionsHandler = () => {
    suggestions.classList.add("max-h-96");
  };

  const blurSuggestionsHandler = (e) => {
    if (e.relatedTarget === suggestions.querySelectorAll("a")[0]) {
      return;
    }
    suggestions.classList.remove("max-h-96");
  };

  suggestionsToggle.addEventListener("focus", focusSuggestionsHandler);
  suggestionsToggle.addEventListener("blur", blurSuggestionsHandler);
  suggestions.addEventListener("touchstart", touchstartHandler);
  suggestions.addEventListener("touchmove", touchmoveHandler);
  suggestions.addEventListener("touchend", touchendHandler);

  return {
    teardown: () => {
      suggestionsToggle.removeEventListener("focus", focusSuggestionsHandler);
      suggestionsToggle.removeEventListener("blur", blurSuggestionsHandler);
      suggestions.removeEventListener("touchstart", touchstartHandler);
      suggestions.removeEventListener("touchmove", touchmoveHandler);
      suggestions.removeEventListener("touchend", touchendHandler);
    },
    clear: () => {
      suggestions.classList.remove("max-h-96");
      list.style.transform = `translateX(0px)`;
    },
  };
};

export default MeganavSearchSuggestions;
