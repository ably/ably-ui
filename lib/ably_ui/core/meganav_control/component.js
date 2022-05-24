(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AblyUi"] = factory();
	else
		root["AblyUi"] = root["AblyUi"] || {}, root["AblyUi"]["Core"] = root["AblyUi"]["Core"] || {}, root["AblyUi"]["Core"]["MeganavControl"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!**********************************************!*\
  !*** ./src/core/MeganavControl/component.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-query */ "./src/core/dom-query.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var MeganavControl = function MeganavControl() {
  var controls = Array.from((0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryIdAll)("meganav-control"));
  var panels = Array.from((0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryIdAll)("meganav-panel"));
  var mdBreakpoint = getComputedStyle(document.documentElement).getPropertyValue("--bp-md");

  var hoverEnabled = function hoverEnabled() {
    return window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: ".concat(mdBreakpoint, ")")).matches;
  };

  var controlsHaveFocus = function controlsHaveFocus() {
    return controls.some(function (control) {
      return control === document.activeElement;
    });
  };

  var hover = function hover(control, panel, open) {
    if (hoverEnabled() && !controlsHaveFocus()) {
      var _panel$classList;

      var classes = ["invisible", "visible"];

      (_panel$classList = panel.classList).replace.apply(_panel$classList, _toConsumableArray(open ? classes : classes.reverse()));

      control.setAttribute("aria-expanded", open);
    }
  };

  var mouseenterHandler = function mouseenterHandler(control, panel) {
    return function () {
      return hover(control, panel, true);
    };
  };

  var mouseleaveHandler = function mouseleaveHandler(control, panel) {
    return function () {
      return hover(control, panel, false);
    };
  };

  var clickHandler = function clickHandler(control, panel) {
    return function () {
      controls.forEach(function (node) {
        return node !== control && node.setAttribute("aria-expanded", false);
      });
      panels.forEach(function (node) {
        return node !== panel && node.classList.replace("visible", "invisible");
      });
      var ariaExpanded = control.getAttribute("aria-expanded");

      if (ariaExpanded) {
        control.setAttribute("aria-expanded", true);
        panel.classList.replace("invisible", "visible");
      } else {
        control.setAttribute("aria-expanded", false);
        panel.classList.replace("visible", "invisible");
      }
    };
  };

  return controls.map(function (control) {
    var item = control.parentNode;
    var panel = document.querySelector("#".concat(control.getAttribute("aria-controls")));
    var click = clickHandler(control, panel);
    var mouseenter = mouseenterHandler(control, panel);
    var mouseleave = mouseleaveHandler(control, panel);
    item.addEventListener("mouseenter", mouseenter);
    item.addEventListener("mouseleave", mouseleave);
    control.addEventListener("click", click);
    return [{
      teardown: function teardown() {
        item.removeEventListener("mouseenter", mouseenter);
        item.removeEventListener("mouseleave", mouseleave);
        control.removeEventListener("click", click);
      },
      clear: function clear() {
        control.setAttribute("aria-expanded", false);
        panel.classList.replace("visible", "invisible");
      }
    }];
  }).flat();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavControl);
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL2RvbS1xdWVyeS5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9zcmMvY29yZS9NZWdhbmF2Q29udHJvbC9jb21wb25lbnQuanMiXSwibmFtZXMiOlsicXVlcnlJZCIsInZhbCIsInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeUlkQWxsIiwicXVlcnlTZWxlY3RvckFsbCIsIk1lZ2FuYXZDb250cm9sIiwiY29udHJvbHMiLCJBcnJheSIsImZyb20iLCJwYW5lbHMiLCJtZEJyZWFrcG9pbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsImhvdmVyRW5hYmxlZCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY29udHJvbHNIYXZlRm9jdXMiLCJzb21lIiwiY29udHJvbCIsImFjdGl2ZUVsZW1lbnQiLCJob3ZlciIsInBhbmVsIiwib3BlbiIsImNsYXNzZXMiLCJjbGFzc0xpc3QiLCJyZXBsYWNlIiwicmV2ZXJzZSIsInNldEF0dHJpYnV0ZSIsIm1vdXNlZW50ZXJIYW5kbGVyIiwibW91c2VsZWF2ZUhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJmb3JFYWNoIiwibm9kZSIsImFyaWFFeHBhbmRlZCIsImdldEF0dHJpYnV0ZSIsIm1hcCIsIml0ZW0iLCJwYXJlbnROb2RlIiwiY2xpY2siLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhciIsImZsYXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQXVEO0FBQzlGLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsTUFBTUMsSUFBTix1RUFBYUMsUUFBYjtBQUFBLFNBQ3JCRCxJQUFJLENBQUNFLGFBQUwsb0JBQStCSCxHQUEvQixPQURxQjtBQUFBLENBQWhCO0FBR0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0osR0FBRDtBQUFBLE1BQU1DLElBQU4sdUVBQWFDLFFBQWI7QUFBQSxTQUN4QkQsSUFBSSxDQUFDSSxnQkFBTCxvQkFBa0NMLEdBQWxDLE9BRHdCO0FBQUEsQ0FBbkIsQzs7Ozs7O1VDSFA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsUUFBUSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0wsc0RBQVUsQ0FBQyxpQkFBRCxDQUFyQixDQUFqQjtBQUNBLE1BQU1NLE1BQU0sR0FBR0YsS0FBSyxDQUFDQyxJQUFOLENBQVdMLHNEQUFVLENBQUMsZUFBRCxDQUFyQixDQUFmO0FBQ0EsTUFBTU8sWUFBWSxHQUFHQyxnQkFBZ0IsQ0FDbkNWLFFBQVEsQ0FBQ1csZUFEMEIsQ0FBaEIsQ0FFbkJDLGdCQUZtQixDQUVGLFNBRkUsQ0FBckI7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUNuQkMsTUFBTSxDQUFDQyxVQUFQLDhEQUN3RE4sWUFEeEQsUUFFRU8sT0FIaUI7QUFBQSxHQUFyQjs7QUFLQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsV0FDeEJaLFFBQVEsQ0FBQ2EsSUFBVCxDQUFjLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQSxPQUFPLEtBQUtuQixRQUFRLENBQUNvQixhQUFsQztBQUFBLEtBQWQsQ0FEd0I7QUFBQSxHQUExQjs7QUFHQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDRixPQUFELEVBQVVHLEtBQVYsRUFBaUJDLElBQWpCLEVBQTBCO0FBQ3RDLFFBQUlWLFlBQVksTUFBTSxDQUFDSSxpQkFBaUIsRUFBeEMsRUFBNEM7QUFBQTs7QUFDMUMsVUFBTU8sT0FBTyxHQUFHLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FBaEI7O0FBQ0EsMEJBQUFGLEtBQUssQ0FBQ0csU0FBTixFQUFnQkMsT0FBaEIsNENBQTRCSCxJQUFJLEdBQUdDLE9BQUgsR0FBYUEsT0FBTyxDQUFDRyxPQUFSLEVBQTdDOztBQUNBUixhQUFPLENBQUNTLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0NMLElBQXRDO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQU1NLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ1YsT0FBRCxFQUFVRyxLQUFWO0FBQUEsV0FBb0I7QUFBQSxhQUM1Q0QsS0FBSyxDQUFDRixPQUFELEVBQVVHLEtBQVYsRUFBaUIsSUFBakIsQ0FEdUM7QUFBQSxLQUFwQjtBQUFBLEdBQTFCOztBQUdBLE1BQU1RLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ1gsT0FBRCxFQUFVRyxLQUFWO0FBQUEsV0FBb0I7QUFBQSxhQUM1Q0QsS0FBSyxDQUFDRixPQUFELEVBQVVHLEtBQVYsRUFBaUIsS0FBakIsQ0FEdUM7QUFBQSxLQUFwQjtBQUFBLEdBQTFCOztBQUdBLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNaLE9BQUQsRUFBVUcsS0FBVjtBQUFBLFdBQW9CLFlBQU07QUFDN0NqQixjQUFRLENBQUMyQixPQUFULENBQ0UsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksS0FBS2QsT0FBVCxJQUFvQmMsSUFBSSxDQUFDTCxZQUFMLENBQWtCLGVBQWxCLEVBQW1DLEtBQW5DLENBQTlCO0FBQUEsT0FERjtBQUlBcEIsWUFBTSxDQUFDd0IsT0FBUCxDQUNFLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLEtBQUtYLEtBQVQsSUFBa0JXLElBQUksQ0FBQ1IsU0FBTCxDQUFlQyxPQUFmLENBQXVCLFNBQXZCLEVBQWtDLFdBQWxDLENBQTVCO0FBQUEsT0FERjtBQUlBLFVBQU1RLFlBQVksR0FBR2YsT0FBTyxDQUFDZ0IsWUFBUixDQUFxQixlQUFyQixDQUFyQjs7QUFFQSxVQUFJRCxZQUFKLEVBQWtCO0FBQ2hCZixlQUFPLENBQUNTLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0MsSUFBdEM7QUFDQU4sYUFBSyxDQUFDRyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QixXQUF4QixFQUFxQyxTQUFyQztBQUNELE9BSEQsTUFHTztBQUNMUCxlQUFPLENBQUNTLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0MsS0FBdEM7QUFDQU4sYUFBSyxDQUFDRyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QixTQUF4QixFQUFtQyxXQUFuQztBQUNEO0FBQ0YsS0FsQm9CO0FBQUEsR0FBckI7O0FBb0JBLFNBQU9yQixRQUFRLENBQ1orQixHQURJLENBQ0EsVUFBQ2pCLE9BQUQsRUFBYTtBQUNoQixRQUFNa0IsSUFBSSxHQUFHbEIsT0FBTyxDQUFDbUIsVUFBckI7QUFDQSxRQUFNaEIsS0FBSyxHQUFHdEIsUUFBUSxDQUFDQyxhQUFULFlBQ1JrQixPQUFPLENBQUNnQixZQUFSLENBQXFCLGVBQXJCLENBRFEsRUFBZDtBQUdBLFFBQU1JLEtBQUssR0FBR1IsWUFBWSxDQUFDWixPQUFELEVBQVVHLEtBQVYsQ0FBMUI7QUFDQSxRQUFNa0IsVUFBVSxHQUFHWCxpQkFBaUIsQ0FBQ1YsT0FBRCxFQUFVRyxLQUFWLENBQXBDO0FBQ0EsUUFBTW1CLFVBQVUsR0FBR1gsaUJBQWlCLENBQUNYLE9BQUQsRUFBVUcsS0FBVixDQUFwQztBQUVBZSxRQUFJLENBQUNLLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DRixVQUFwQztBQUNBSCxRQUFJLENBQUNLLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DRCxVQUFwQztBQUNBdEIsV0FBTyxDQUFDdUIsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NILEtBQWxDO0FBRUEsV0FBTyxDQUNMO0FBQ0VJLGNBQVEsRUFBRSxvQkFBTTtBQUNkTixZQUFJLENBQUNPLG1CQUFMLENBQXlCLFlBQXpCLEVBQXVDSixVQUF2QztBQUNBSCxZQUFJLENBQUNPLG1CQUFMLENBQXlCLFlBQXpCLEVBQXVDSCxVQUF2QztBQUNBdEIsZUFBTyxDQUFDeUIsbUJBQVIsQ0FBNEIsT0FBNUIsRUFBcUNMLEtBQXJDO0FBQ0QsT0FMSDtBQU1FTSxXQUFLLEVBQUUsaUJBQU07QUFDWDFCLGVBQU8sQ0FBQ1MsWUFBUixDQUFxQixlQUFyQixFQUFzQyxLQUF0QztBQUNBTixhQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCLFNBQXhCLEVBQW1DLFdBQW5DO0FBQ0Q7QUFUSCxLQURLLENBQVA7QUFhRCxHQTNCSSxFQTRCSm9CLElBNUJJLEVBQVA7QUE2QkQsQ0E5RUQ7O0FBZ0ZBLGlFQUFlMUMsY0FBZixFIiwiZmlsZSI6ImNvcmUvTWVnYW5hdkNvbnRyb2wvY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQWJseVVpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFibHlVaVwiXSA9IHJvb3RbXCJBYmx5VWlcIl0gfHwge30sIHJvb3RbXCJBYmx5VWlcIl1bXCJDb3JlXCJdID0gcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl0gfHwge30sIHJvb3RbXCJBYmx5VWlcIl1bXCJDb3JlXCJdW1wiTWVnYW5hdkNvbnRyb2xcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgcXVlcnlJZCA9ICh2YWwsIHJvb3QgPSBkb2N1bWVudCkgPT5cbiAgcm9vdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke3ZhbH1dYCk7XG5cbmV4cG9ydCBjb25zdCBxdWVyeUlkQWxsID0gKHZhbCwgcm9vdCA9IGRvY3VtZW50KSA9PlxuICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWlkPSR7dmFsfV1gKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcXVlcnlJZEFsbCB9IGZyb20gXCIuLi9kb20tcXVlcnlcIjtcblxuY29uc3QgTWVnYW5hdkNvbnRyb2wgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gQXJyYXkuZnJvbShxdWVyeUlkQWxsKFwibWVnYW5hdi1jb250cm9sXCIpKTtcbiAgY29uc3QgcGFuZWxzID0gQXJyYXkuZnJvbShxdWVyeUlkQWxsKFwibWVnYW5hdi1wYW5lbFwiKSk7XG4gIGNvbnN0IG1kQnJlYWtwb2ludCA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tYnAtbWRcIik7XG5cbiAgY29uc3QgaG92ZXJFbmFibGVkID0gKCkgPT5cbiAgICB3aW5kb3cubWF0Y2hNZWRpYShcbiAgICAgIGAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIGFuZCAobWluLXdpZHRoOiAke21kQnJlYWtwb2ludH0pYFxuICAgICkubWF0Y2hlcztcblxuICBjb25zdCBjb250cm9sc0hhdmVGb2N1cyA9ICgpID0+XG4gICAgY29udHJvbHMuc29tZSgoY29udHJvbCkgPT4gY29udHJvbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgY29uc3QgaG92ZXIgPSAoY29udHJvbCwgcGFuZWwsIG9wZW4pID0+IHtcbiAgICBpZiAoaG92ZXJFbmFibGVkKCkgJiYgIWNvbnRyb2xzSGF2ZUZvY3VzKCkpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXCJpbnZpc2libGVcIiwgXCJ2aXNpYmxlXCJdO1xuICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlcGxhY2UoLi4uKG9wZW4gPyBjbGFzc2VzIDogY2xhc3Nlcy5yZXZlcnNlKCkpKTtcbiAgICAgIGNvbnRyb2wuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBvcGVuKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW91c2VlbnRlckhhbmRsZXIgPSAoY29udHJvbCwgcGFuZWwpID0+ICgpID0+XG4gICAgaG92ZXIoY29udHJvbCwgcGFuZWwsIHRydWUpO1xuXG4gIGNvbnN0IG1vdXNlbGVhdmVIYW5kbGVyID0gKGNvbnRyb2wsIHBhbmVsKSA9PiAoKSA9PlxuICAgIGhvdmVyKGNvbnRyb2wsIHBhbmVsLCBmYWxzZSk7XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGNvbnRyb2wsIHBhbmVsKSA9PiAoKSA9PiB7XG4gICAgY29udHJvbHMuZm9yRWFjaChcbiAgICAgIChub2RlKSA9PiBub2RlICE9PSBjb250cm9sICYmIG5vZGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSlcbiAgICApO1xuXG4gICAgcGFuZWxzLmZvckVhY2goXG4gICAgICAobm9kZSkgPT4gbm9kZSAhPT0gcGFuZWwgJiYgbm9kZS5jbGFzc0xpc3QucmVwbGFjZShcInZpc2libGVcIiwgXCJpbnZpc2libGVcIilcbiAgICApO1xuXG4gICAgY29uc3QgYXJpYUV4cGFuZGVkID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpO1xuXG4gICAgaWYgKGFyaWFFeHBhbmRlZCkge1xuICAgICAgY29udHJvbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xuICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlcGxhY2UoXCJpbnZpc2libGVcIiwgXCJ2aXNpYmxlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlcGxhY2UoXCJ2aXNpYmxlXCIsIFwiaW52aXNpYmxlXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gY29udHJvbHNcbiAgICAubWFwKChjb250cm9sKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gY29udHJvbC5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgIyR7Y29udHJvbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWBcbiAgICAgICk7XG4gICAgICBjb25zdCBjbGljayA9IGNsaWNrSGFuZGxlcihjb250cm9sLCBwYW5lbCk7XG4gICAgICBjb25zdCBtb3VzZWVudGVyID0gbW91c2VlbnRlckhhbmRsZXIoY29udHJvbCwgcGFuZWwpO1xuICAgICAgY29uc3QgbW91c2VsZWF2ZSA9IG1vdXNlbGVhdmVIYW5kbGVyKGNvbnRyb2wsIHBhbmVsKTtcblxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyKTtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VsZWF2ZSk7XG4gICAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGljayk7XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZWFyZG93bjogKCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyKTtcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VsZWF2ZSk7XG4gICAgICAgICAgICBjb250cm9sLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGljayk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGVhcjogKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZXBsYWNlKFwidmlzaWJsZVwiLCBcImludmlzaWJsZVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9KVxuICAgIC5mbGF0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWdhbmF2Q29udHJvbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=