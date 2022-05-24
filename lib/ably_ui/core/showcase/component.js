(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AblyUi"] = factory();
	else
		root["AblyUi"] = root["AblyUi"] || {}, root["AblyUi"]["Core"] = root["AblyUi"]["Core"] || {}, root["AblyUi"]["Core"]["Showcase"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/css.js":
/*!*************************!*\
  !*** ./src/core/css.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "remsToPixelValue": () => (/* binding */ remsToPixelValue)
/* harmony export */ });
var remsToPixelValue = function remsToPixelValue(remString) {
  return parseFloat(remString) * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

/***/ }),

/***/ "./src/core/dom-query.js":
/*!*******************************!*\
  !*** ./src/core/dom-query.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryId": () => (/* binding */ queryId),
/* harmony export */   "queryIdAll": () => (/* binding */ queryIdAll)
/* harmony export */ });
var queryId = function queryId(val) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return root.querySelector("[data-id=".concat(val, "]"));
};
var queryIdAll = function queryIdAll(val) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return root.querySelectorAll("[data-id=".concat(val, "]"));
};

/***/ }),

/***/ "./src/core/Showcase/component.css":
/*!*****************************************!*\
  !*** ./src/core/Showcase/component.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/core/Showcase/component.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-query */ "./src/core/dom-query.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css */ "./src/core/css.js");
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component.css */ "./src/core/Showcase/component.css");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var SLIDE_SHOW_INTERVAL = 5000;

var updateLogoOpacity = function updateLogoOpacity(logos, currentIndex) {
  var visible = ["filter-grayscale", "filter-none"];
  var opaque = [].concat(visible).reverse();
  logos.forEach(function (logo, i) {
    var _logo$classList;

    (_logo$classList = logo.classList).replace.apply(_logo$classList, _toConsumableArray(i === currentIndex ? visible : opaque));
  });
};

var translateX = function translateX(el, currentIndex) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var percent = currentIndex * 100 * direction;
  el.style.transform = "translateX(".concat(percent, "%)");
};

var moveControlsContainer = function moveControlsContainer(controlsContainer, currentIndex) {
  var parentNode = controlsContainer.parentNode,
      children = controlsContainer.children;
  var parentCenter = parentNode.clientWidth / 2;
  var countChildren = children.length;
  var widthChildren = Array.from(children).map(function (el) {
    return el.clientWidth;
  }).reduce(function (a, c) {
    return a + c;
  });
  var width = widthChildren / countChildren;
  var firstOrLast = !currentIndex || !(countChildren - currentIndex - 1);
  var offsetLeft = !firstOrLast ? parentCenter - width / 2 : 0;
  var left = currentIndex * width - (offsetLeft >> 0);
  parentNode.scrollTo({
    left: left,
    behavior: "smooth"
  });
};

var propertyValue = function propertyValue(string) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(string);
};

var mobileBreakpoint = function mobileBreakpoint(pixelWidth) {
  if (typeof window === "undefined") return false; // Margin for small breakpoint, but could be different in practice

  var estimatedMargin = 64;
  var breakpointEstimate = "".concat(pixelWidth + estimatedMargin, "px");
  return !window.matchMedia("(min-width: ".concat(breakpointEstimate, ")")).matches;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (node, enableSlideshow) {
  var container = node || (0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryId)("showcase");
  var controls = Array.from((0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryIdAll)("showcase-control", container));
  var logos = controls.map(function (control) {
    return control.querySelector("img");
  });
  var controlsContainer = (0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryId)("showcase-controls", container);
  var indexBar = (0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryId)("showcase-index-bar", container);
  var slides = (0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryId)("showcase-slides", container);
  var slideCount = slides.children.length;
  var logoWidth = propertyValue("--ui-showcase-client-logo-min-width");
  var pixelWidth = (0,_css__WEBPACK_IMPORTED_MODULE_1__.remsToPixelValue)(logoWidth) * slideCount; // dynamically adjust container width

  [".ui-showcase-logo-wrapper", ".ui-showcase-index-bar"].forEach(function (s) {
    var el = container.querySelector(s);
    var minWidth = "".concat(pixelWidth, "px");
    el.style.minWidth = minWidth;
  });
  var currentIndex = 0;
  var mouseover = false;
  var updateSlideTimeoutId;

  var updateSlide = function updateSlide(index) {
    translateX(slides, index, -1);
    translateX(indexBar, index, 1);
    updateLogoOpacity(logos, index);

    if (mobileBreakpoint(pixelWidth)) {
      moveControlsContainer(controlsContainer, index);
    }
  };

  var scheduleSlideMove = function scheduleSlideMove() {
    return updateSlideTimeoutId = setTimeout(function () {
      if (mouseover) return;
      if (mobileBreakpoint(pixelWidth)) return;
      currentIndex = (currentIndex + 1) % controls.length;
      updateSlide(currentIndex);
      scheduleSlideMove();
    }, SLIDE_SHOW_INTERVAL);
  };

  var logoClick = function logoClick() {
    var clickHandler = function clickHandler(index) {
      return function () {
        currentIndex = index;
        updateSlide(currentIndex);
      };
    };

    var handlers = controls.map(function (control, index) {
      var handler = clickHandler(index);
      control.addEventListener("click", handler);
      return handler;
    });
    return function () {
      handlers.forEach(function (handler, i) {
        return controls[i].removeEventListener("click", handler);
      });
    };
  };

  var pointerOverContainer = function pointerOverContainer() {
    var handler = function handler() {
      mouseover = true;
      clearTimeout(updateSlideTimeoutId);
    };

    container.addEventListener("mouseover", handler);
    return function () {
      return container.removeEventListener("mouseover", handler);
    };
  };

  var pointerLeftContainer = function pointerLeftContainer() {
    var handler = function handler() {
      mouseover = false;
      scheduleSlideMove();
    };

    container.addEventListener("mouseleave", handler);
    return function () {
      return container.removeEventListener("mouseleave", handler);
    };
  };

  var viewportResized = function viewportResized() {
    var handler = function handler() {
      clearTimeout(updateSlideTimeoutId);
      scheduleSlideMove();
    };

    document.addEventListener("resize", handler);
    return function () {
      return document.removeEventListener("resize", handler);
    };
  };

  var scrollOverContainer = function scrollOverContainer() {
    var handler = function handler(event) {
      return event.preventDefault();
    };

    controlsContainer.parentNode.addEventListener("wheel", handler);
    return function () {
      return controlsContainer.parentNode.removeEventListener("wheel", handler);
    };
  };

  var logoClickTeardown = logoClick();
  var scrollOverContainerTeardown = scrollOverContainer();

  var slideshowInit = function slideshowInit() {
    if (enableSlideshow) {
      scheduleSlideMove();
      container.setAttribute("aria-live", "polite");
      var teardowns = [pointerOverContainer(), pointerLeftContainer(), viewportResized()];
      return function () {
        return teardowns.forEach(function (t) {
          return t();
        });
      };
    } else {
      return function () {};
    }
  };

  var slideshowTeardown = slideshowInit();
  return function teardown() {
    // Restore initial position
    updateSlide(0);
    clearTimeout(updateSlideTimeoutId);
    logoClickTeardown();
    slideshowTeardown();
    scrollOverContainerTeardown();
  };
});
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL2Nzcy5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9zcmMvY29yZS9kb20tcXVlcnkuanMiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdLy4vc3JjL2NvcmUvU2hvd2Nhc2UvY29tcG9uZW50LmNzcz8xNjljIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL1Nob3djYXNlL2NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJyZW1zVG9QaXhlbFZhbHVlIiwicmVtU3RyaW5nIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImZvbnRTaXplIiwicXVlcnlJZCIsInZhbCIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlJZEFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJTTElERV9TSE9XX0lOVEVSVkFMIiwidXBkYXRlTG9nb09wYWNpdHkiLCJsb2dvcyIsImN1cnJlbnRJbmRleCIsInZpc2libGUiLCJvcGFxdWUiLCJyZXZlcnNlIiwiZm9yRWFjaCIsImxvZ28iLCJpIiwiY2xhc3NMaXN0IiwicmVwbGFjZSIsInRyYW5zbGF0ZVgiLCJlbCIsImRpcmVjdGlvbiIsInBlcmNlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm1vdmVDb250cm9sc0NvbnRhaW5lciIsImNvbnRyb2xzQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsImNoaWxkcmVuIiwicGFyZW50Q2VudGVyIiwiY2xpZW50V2lkdGgiLCJjb3VudENoaWxkcmVuIiwibGVuZ3RoIiwid2lkdGhDaGlsZHJlbiIsIkFycmF5IiwiZnJvbSIsIm1hcCIsInJlZHVjZSIsImEiLCJjIiwid2lkdGgiLCJmaXJzdE9yTGFzdCIsIm9mZnNldExlZnQiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInByb3BlcnR5VmFsdWUiLCJzdHJpbmciLCJ3aW5kb3ciLCJnZXRQcm9wZXJ0eVZhbHVlIiwibW9iaWxlQnJlYWtwb2ludCIsInBpeGVsV2lkdGgiLCJlc3RpbWF0ZWRNYXJnaW4iLCJicmVha3BvaW50RXN0aW1hdGUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIm5vZGUiLCJlbmFibGVTbGlkZXNob3ciLCJjb250YWluZXIiLCJjb250cm9scyIsImNvbnRyb2wiLCJpbmRleEJhciIsInNsaWRlcyIsInNsaWRlQ291bnQiLCJsb2dvV2lkdGgiLCJzIiwibWluV2lkdGgiLCJtb3VzZW92ZXIiLCJ1cGRhdGVTbGlkZVRpbWVvdXRJZCIsInVwZGF0ZVNsaWRlIiwiaW5kZXgiLCJzY2hlZHVsZVNsaWRlTW92ZSIsInNldFRpbWVvdXQiLCJsb2dvQ2xpY2siLCJjbGlja0hhbmRsZXIiLCJoYW5kbGVycyIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBvaW50ZXJPdmVyQ29udGFpbmVyIiwiY2xlYXJUaW1lb3V0IiwicG9pbnRlckxlZnRDb250YWluZXIiLCJ2aWV3cG9ydFJlc2l6ZWQiLCJzY3JvbGxPdmVyQ29udGFpbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ29DbGlja1RlYXJkb3duIiwic2Nyb2xsT3ZlckNvbnRhaW5lclRlYXJkb3duIiwic2xpZGVzaG93SW5pdCIsInNldEF0dHJpYnV0ZSIsInRlYXJkb3ducyIsInQiLCJzbGlkZXNob3dUZWFyZG93biIsInRlYXJkb3duIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVEQUF1RDtBQUM5RixDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7QUNWTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFNBQUQ7QUFBQSxTQUM5QkMsVUFBVSxDQUFDRCxTQUFELENBQVYsR0FDQUMsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDQyxlQUFWLENBQWhCLENBQTJDQyxRQUE1QyxDQUZvQjtBQUFBLENBQXpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxNQUFNQyxJQUFOLHVFQUFhTCxRQUFiO0FBQUEsU0FDckJLLElBQUksQ0FBQ0MsYUFBTCxvQkFBK0JGLEdBQS9CLE9BRHFCO0FBQUEsQ0FBaEI7QUFHQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDSCxHQUFEO0FBQUEsTUFBTUMsSUFBTix1RUFBYUwsUUFBYjtBQUFBLFNBQ3hCSyxJQUFJLENBQUNHLGdCQUFMLG9CQUFrQ0osR0FBbEMsT0FEd0I7QUFBQSxDQUFuQixDOzs7Ozs7Ozs7OztBQ0hQOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwr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RDtBQUFBLGlCQUFPQSxDQUFDLEVBQVI7QUFBQSxTQUFsQixDQUFOO0FBQUEsT0FBUDtBQUNELEtBVkQsTUFVTztBQUNMLGFBQU8sWUFBTSxDQUFFLENBQWY7QUFDRDtBQUNGLEdBZEQ7O0FBZ0JBLE1BQU1DLGlCQUFpQixHQUFHSixhQUFhLEVBQXZDO0FBRUEsU0FBTyxTQUFTSyxRQUFULEdBQW9CO0FBQ3pCO0FBQ0F4QixlQUFXLENBQUMsQ0FBRCxDQUFYO0FBQ0FXLGdCQUFZLENBQUNaLG9CQUFELENBQVo7QUFFQWtCLHFCQUFpQjtBQUNqQk0scUJBQWlCO0FBQ2pCTCwrQkFBMkI7QUFDNUIsR0FSRDtBQVNELENBL0hELEUiLCJmaWxlIjoiY29yZS9TaG93Y2FzZS9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBYmx5VWlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWJseVVpXCJdID0gcm9vdFtcIkFibHlVaVwiXSB8fCB7fSwgcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl0gPSByb290W1wiQWJseVVpXCJdW1wiQ29yZVwiXSB8fCB7fSwgcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl1bXCJTaG93Y2FzZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCByZW1zVG9QaXhlbFZhbHVlID0gKHJlbVN0cmluZykgPT5cbiAgcGFyc2VGbG9hdChyZW1TdHJpbmcpICpcbiAgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpO1xuIiwiZXhwb3J0IGNvbnN0IHF1ZXJ5SWQgPSAodmFsLCByb290ID0gZG9jdW1lbnQpID0+XG4gIHJvb3QucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHt2YWx9XWApO1xuXG5leHBvcnQgY29uc3QgcXVlcnlJZEFsbCA9ICh2YWwsIHJvb3QgPSBkb2N1bWVudCkgPT5cbiAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZD0ke3ZhbH1dYCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHF1ZXJ5SWQsIHF1ZXJ5SWRBbGwgfSBmcm9tIFwiLi4vZG9tLXF1ZXJ5XCI7XG5pbXBvcnQgeyByZW1zVG9QaXhlbFZhbHVlIH0gZnJvbSBcIi4uL2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2NvbXBvbmVudC5jc3NcIjtcblxuY29uc3QgU0xJREVfU0hPV19JTlRFUlZBTCA9IDUwMDA7XG5cbmNvbnN0IHVwZGF0ZUxvZ29PcGFjaXR5ID0gKGxvZ29zLCBjdXJyZW50SW5kZXgpID0+IHtcbiAgY29uc3QgdmlzaWJsZSA9IFtcImZpbHRlci1ncmF5c2NhbGVcIiwgXCJmaWx0ZXItbm9uZVwiXTtcbiAgY29uc3Qgb3BhcXVlID0gWy4uLnZpc2libGVdLnJldmVyc2UoKTtcbiAgbG9nb3MuZm9yRWFjaCgobG9nbywgaSkgPT4ge1xuICAgIGxvZ28uY2xhc3NMaXN0LnJlcGxhY2UoLi4uKGkgPT09IGN1cnJlbnRJbmRleCA/IHZpc2libGUgOiBvcGFxdWUpKTtcbiAgfSk7XG59O1xuXG5jb25zdCB0cmFuc2xhdGVYID0gKGVsLCBjdXJyZW50SW5kZXgsIGRpcmVjdGlvbiA9IDEpID0+IHtcbiAgY29uc3QgcGVyY2VudCA9IGN1cnJlbnRJbmRleCAqIDEwMCAqIGRpcmVjdGlvbjtcbiAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtwZXJjZW50fSUpYDtcbn07XG5cbmNvbnN0IG1vdmVDb250cm9sc0NvbnRhaW5lciA9IChjb250cm9sc0NvbnRhaW5lciwgY3VycmVudEluZGV4KSA9PiB7XG4gIGNvbnN0IHsgcGFyZW50Tm9kZSwgY2hpbGRyZW4gfSA9IGNvbnRyb2xzQ29udGFpbmVyO1xuICBjb25zdCBwYXJlbnRDZW50ZXIgPSBwYXJlbnROb2RlLmNsaWVudFdpZHRoIC8gMjtcbiAgY29uc3QgY291bnRDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgY29uc3Qgd2lkdGhDaGlsZHJlbiA9IEFycmF5LmZyb20oY2hpbGRyZW4pXG4gICAgLm1hcCgoZWwpID0+IGVsLmNsaWVudFdpZHRoKVxuICAgIC5yZWR1Y2UoKGEsIGMpID0+IGEgKyBjKTtcblxuICBjb25zdCB3aWR0aCA9IHdpZHRoQ2hpbGRyZW4gLyBjb3VudENoaWxkcmVuO1xuICBjb25zdCBmaXJzdE9yTGFzdCA9ICFjdXJyZW50SW5kZXggfHwgIShjb3VudENoaWxkcmVuIC0gY3VycmVudEluZGV4IC0gMSk7XG4gIGNvbnN0IG9mZnNldExlZnQgPSAhZmlyc3RPckxhc3QgPyBwYXJlbnRDZW50ZXIgLSB3aWR0aCAvIDIgOiAwO1xuICBjb25zdCBsZWZ0ID0gY3VycmVudEluZGV4ICogd2lkdGggLSAob2Zmc2V0TGVmdCA+PiAwKTtcblxuICBwYXJlbnROb2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG59O1xuXG5jb25zdCBwcm9wZXJ0eVZhbHVlID0gKHN0cmluZykgPT4ge1xuICByZXR1cm4gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKHN0cmluZyk7XG59O1xuXG5jb25zdCBtb2JpbGVCcmVha3BvaW50ID0gKHBpeGVsV2lkdGgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcblxuICAvLyBNYXJnaW4gZm9yIHNtYWxsIGJyZWFrcG9pbnQsIGJ1dCBjb3VsZCBiZSBkaWZmZXJlbnQgaW4gcHJhY3RpY2VcbiAgY29uc3QgZXN0aW1hdGVkTWFyZ2luID0gNjQ7XG4gIGNvbnN0IGJyZWFrcG9pbnRFc3RpbWF0ZSA9IGAke3BpeGVsV2lkdGggKyBlc3RpbWF0ZWRNYXJnaW59cHhgO1xuXG4gIHJldHVybiAhd2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludEVzdGltYXRlfSlgKS5tYXRjaGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKG5vZGUsIGVuYWJsZVNsaWRlc2hvdykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBub2RlIHx8IHF1ZXJ5SWQoXCJzaG93Y2FzZVwiKTtcbiAgY29uc3QgY29udHJvbHMgPSBBcnJheS5mcm9tKHF1ZXJ5SWRBbGwoXCJzaG93Y2FzZS1jb250cm9sXCIsIGNvbnRhaW5lcikpO1xuICBjb25zdCBsb2dvcyA9IGNvbnRyb2xzLm1hcCgoY29udHJvbCkgPT4gY29udHJvbC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpKTtcbiAgY29uc3QgY29udHJvbHNDb250YWluZXIgPSBxdWVyeUlkKFwic2hvd2Nhc2UtY29udHJvbHNcIiwgY29udGFpbmVyKTtcbiAgY29uc3QgaW5kZXhCYXIgPSBxdWVyeUlkKFwic2hvd2Nhc2UtaW5kZXgtYmFyXCIsIGNvbnRhaW5lcik7XG4gIGNvbnN0IHNsaWRlcyA9IHF1ZXJ5SWQoXCJzaG93Y2FzZS1zbGlkZXNcIiwgY29udGFpbmVyKTtcbiAgY29uc3Qgc2xpZGVDb3VudCA9IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgY29uc3QgbG9nb1dpZHRoID0gcHJvcGVydHlWYWx1ZShcIi0tdWktc2hvd2Nhc2UtY2xpZW50LWxvZ28tbWluLXdpZHRoXCIpO1xuICBjb25zdCBwaXhlbFdpZHRoID0gcmVtc1RvUGl4ZWxWYWx1ZShsb2dvV2lkdGgpICogc2xpZGVDb3VudDtcblxuICAvLyBkeW5hbWljYWxseSBhZGp1c3QgY29udGFpbmVyIHdpZHRoXG4gIFtcIi51aS1zaG93Y2FzZS1sb2dvLXdyYXBwZXJcIiwgXCIudWktc2hvd2Nhc2UtaW5kZXgtYmFyXCJdLmZvckVhY2goKHMpID0+IHtcbiAgICBjb25zdCBlbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHMpO1xuICAgIGNvbnN0IG1pbldpZHRoID0gYCR7cGl4ZWxXaWR0aH1weGA7XG4gICAgZWwuc3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcbiAgfSk7XG5cbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gIGxldCBtb3VzZW92ZXIgPSBmYWxzZTtcbiAgbGV0IHVwZGF0ZVNsaWRlVGltZW91dElkO1xuXG4gIGNvbnN0IHVwZGF0ZVNsaWRlID0gKGluZGV4KSA9PiB7XG4gICAgdHJhbnNsYXRlWChzbGlkZXMsIGluZGV4LCAtMSk7XG4gICAgdHJhbnNsYXRlWChpbmRleEJhciwgaW5kZXgsIDEpO1xuICAgIHVwZGF0ZUxvZ29PcGFjaXR5KGxvZ29zLCBpbmRleCk7XG5cbiAgICBpZiAobW9iaWxlQnJlYWtwb2ludChwaXhlbFdpZHRoKSkge1xuICAgICAgbW92ZUNvbnRyb2xzQ29udGFpbmVyKGNvbnRyb2xzQ29udGFpbmVyLCBpbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNjaGVkdWxlU2xpZGVNb3ZlID0gKCkgPT5cbiAgICAodXBkYXRlU2xpZGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChtb3VzZW92ZXIpIHJldHVybjtcbiAgICAgIGlmIChtb2JpbGVCcmVha3BvaW50KHBpeGVsV2lkdGgpKSByZXR1cm47XG5cbiAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIGNvbnRyb2xzLmxlbmd0aDtcblxuICAgICAgdXBkYXRlU2xpZGUoY3VycmVudEluZGV4KTtcbiAgICAgIHNjaGVkdWxlU2xpZGVNb3ZlKCk7XG4gICAgfSwgU0xJREVfU0hPV19JTlRFUlZBTCkpO1xuXG4gIGNvbnN0IGxvZ29DbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoaW5kZXgpID0+ICgpID0+IHtcbiAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgdXBkYXRlU2xpZGUoY3VycmVudEluZGV4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlcnMgPSBjb250cm9scy5tYXAoKGNvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gY2xpY2tIYW5kbGVyKGluZGV4KTtcbiAgICAgIGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xuICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlciwgaSkgPT5cbiAgICAgICAgY29udHJvbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpXG4gICAgICApO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgcG9pbnRlck92ZXJDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgIG1vdXNlb3ZlciA9IHRydWU7XG4gICAgICBjbGVhclRpbWVvdXQodXBkYXRlU2xpZGVUaW1lb3V0SWQpO1xuICAgIH07XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGhhbmRsZXIpO1xuICB9O1xuXG4gIGNvbnN0IHBvaW50ZXJMZWZ0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBtb3VzZW92ZXIgPSBmYWxzZTtcbiAgICAgIHNjaGVkdWxlU2xpZGVNb3ZlKCk7XG4gICAgfTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoYW5kbGVyKTtcbiAgfTtcblxuICBjb25zdCB2aWV3cG9ydFJlc2l6ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh1cGRhdGVTbGlkZVRpbWVvdXRJZCk7XG4gICAgICBzY2hlZHVsZVNsaWRlTW92ZSgpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgfTtcblxuICBjb25zdCBzY3JvbGxPdmVyQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29udHJvbHNDb250YWluZXIucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+XG4gICAgICBjb250cm9sc0NvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVyKTtcbiAgfTtcblxuICBjb25zdCBsb2dvQ2xpY2tUZWFyZG93biA9IGxvZ29DbGljaygpO1xuICBjb25zdCBzY3JvbGxPdmVyQ29udGFpbmVyVGVhcmRvd24gPSBzY3JvbGxPdmVyQ29udGFpbmVyKCk7XG5cbiAgY29uc3Qgc2xpZGVzaG93SW5pdCA9ICgpID0+IHtcbiAgICBpZiAoZW5hYmxlU2xpZGVzaG93KSB7XG4gICAgICBzY2hlZHVsZVNsaWRlTW92ZSgpO1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLCBcInBvbGl0ZVwiKTtcblxuICAgICAgY29uc3QgdGVhcmRvd25zID0gW1xuICAgICAgICBwb2ludGVyT3ZlckNvbnRhaW5lcigpLFxuICAgICAgICBwb2ludGVyTGVmdENvbnRhaW5lcigpLFxuICAgICAgICB2aWV3cG9ydFJlc2l6ZWQoKSxcbiAgICAgIF07XG4gICAgICByZXR1cm4gKCkgPT4gdGVhcmRvd25zLmZvckVhY2goKHQpID0+IHQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoKSA9PiB7fTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2xpZGVzaG93VGVhcmRvd24gPSBzbGlkZXNob3dJbml0KCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgIC8vIFJlc3RvcmUgaW5pdGlhbCBwb3NpdGlvblxuICAgIHVwZGF0ZVNsaWRlKDApO1xuICAgIGNsZWFyVGltZW91dCh1cGRhdGVTbGlkZVRpbWVvdXRJZCk7XG5cbiAgICBsb2dvQ2xpY2tUZWFyZG93bigpO1xuICAgIHNsaWRlc2hvd1RlYXJkb3duKCk7XG4gICAgc2Nyb2xsT3ZlckNvbnRhaW5lclRlYXJkb3duKCk7XG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==