(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AblyUi"] = factory();
	else
		root["AblyUi"] = root["AblyUi"] || {}, root["AblyUi"]["Core"] = root["AblyUi"]["Core"] || {}, root["AblyUi"]["Core"]["MeganavControlMobilePanelOpen"] = factory();
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
/*!*************************************************************!*\
  !*** ./src/core/MeganavControlMobilePanelOpen/component.js ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-query */ "./src/core/dom-query.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css */ "./src/core/css.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var closeControls = Array.from((0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryIdAll)("meganav-control-mobile-panel-close"));
  var openControls = Array.from((0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryIdAll)("meganav-control-mobile-panel-open"));
  var dropdown = (0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryId)("meganav-mobile-dropdown"); // Height is defined in rem's so to get the pixel value we need to find the fontSize on root

  var meganavHeight = (0,_css__WEBPACK_IMPORTED_MODULE_1__.remsToPixelValue)(getComputedStyle(document.documentElement).getPropertyValue("--ui-meganav-height"));

  var clickHandler = function clickHandler(btn, closeBtn, panel) {
    return function () {
      btn.setAttribute("aria-expanded", true);
      closeBtn.setAttribute("aria-expanded", true);
      panel.classList.replace("hidden", "block"); // On devices where we don't have enough space for the panel, set it's height to
      // the height of the viewport (minus the meganav height) - this will trigger a scroll.
      // Otherwise just set it to the panel height. This handles the case where the ratio of vertical
      // space to horizontal is especially high (think tablets, but not only).

      panel.style.height = "".concat(window.innerHeight - meganavHeight > panel.offsetHeight ? panel.offsetHeight : window.innerHeight - meganavHeight, "px");
    };
  };

  return openControls.map(function (btn) {
    var closeBtn = closeControls.find(function (node) {
      return node.getAttribute("aria-controls") === btn.getAttribute("aria-controls");
    });
    var panel = document.querySelector("#".concat(btn.getAttribute("aria-controls")));
    var handler = clickHandler(btn, closeBtn, panel);
    btn.addEventListener("click", handler);
    return {
      teardown: function teardown() {
        return btn.removeEventListener("click", handler);
      },
      clear: function clear() {
        panel.classList.replace("block", "hidden");
        dropdown.classList.remove("ui-meganav-mobile-dropdown-expand");
        btn.setAttribute("aria-expanded", false);
        panel.style.height = null;
      }
    };
  });
});
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL2Nzcy5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9zcmMvY29yZS9kb20tcXVlcnkuanMiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdLy4vc3JjL2NvcmUvTWVnYW5hdkNvbnRyb2xNb2JpbGVQYW5lbE9wZW4vY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInJlbXNUb1BpeGVsVmFsdWUiLCJyZW1TdHJpbmciLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZm9udFNpemUiLCJxdWVyeUlkIiwidmFsIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeUlkQWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3NlQ29udHJvbHMiLCJBcnJheSIsImZyb20iLCJvcGVuQ29udHJvbHMiLCJkcm9wZG93biIsIm1lZ2FuYXZIZWlnaHQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY2xpY2tIYW5kbGVyIiwiYnRuIiwiY2xvc2VCdG4iLCJwYW5lbCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInJlcGxhY2UiLCJzdHlsZSIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwibWFwIiwiZmluZCIsIm5vZGUiLCJnZXRBdHRyaWJ1dGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVEQUF1RDtBQUM5RixDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7QUNWTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFNBQUQ7QUFBQSxTQUM5QkMsVUFBVSxDQUFDRCxTQUFELENBQVYsR0FDQUMsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDQyxlQUFWLENBQWhCLENBQTJDQyxRQUE1QyxDQUZvQjtBQUFBLENBQXpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxNQUFNQyxJQUFOLHVFQUFhTCxRQUFiO0FBQUEsU0FDckJLLElBQUksQ0FBQ0MsYUFBTCxvQkFBK0JGLEdBQS9CLE9BRHFCO0FBQUEsQ0FBaEI7QUFHQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDSCxHQUFEO0FBQUEsTUFBTUMsSUFBTix1RUFBYUwsUUFBYjtBQUFBLFNBQ3hCSyxJQUFJLENBQUNHLGdCQUFMLG9CQUFrQ0osR0FBbEMsT0FEd0I7QUFBQSxDQUFuQixDOzs7Ozs7VUNIUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUEsaUVBQWUsWUFBTTtBQUNuQixNQUFNSyxhQUFhLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUNwQkosc0RBQVUsQ0FBQyxvQ0FBRCxDQURVLENBQXRCO0FBR0EsTUFBTUssWUFBWSxHQUFHRixLQUFLLENBQUNDLElBQU4sQ0FDbkJKLHNEQUFVLENBQUMsbUNBQUQsQ0FEUyxDQUFyQjtBQUdBLE1BQU1NLFFBQVEsR0FBR1YsbURBQU8sQ0FBQyx5QkFBRCxDQUF4QixDQVBtQixDQVNuQjs7QUFDQSxNQUFNVyxhQUFhLEdBQUdsQixzREFBZ0IsQ0FDcENHLGdCQUFnQixDQUFDQyxRQUFRLENBQUNDLGVBQVYsQ0FBaEIsQ0FBMkNjLGdCQUEzQyxDQUNFLHFCQURGLENBRG9DLENBQXRDOztBQU1BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBTUMsUUFBTixFQUFnQkMsS0FBaEI7QUFBQSxXQUEwQixZQUFNO0FBQ25ERixTQUFHLENBQUNHLFlBQUosQ0FBaUIsZUFBakIsRUFBa0MsSUFBbEM7QUFDQUYsY0FBUSxDQUFDRSxZQUFULENBQXNCLGVBQXRCLEVBQXVDLElBQXZDO0FBQ0FELFdBQUssQ0FBQ0UsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0IsUUFBeEIsRUFBa0MsT0FBbEMsRUFIbUQsQ0FLbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FILFdBQUssQ0FBQ0ksS0FBTixDQUFZQyxNQUFaLGFBQ0VDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQlosYUFBckIsR0FBcUNLLEtBQUssQ0FBQ1EsWUFBM0MsR0FDSVIsS0FBSyxDQUFDUSxZQURWLEdBRUlGLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQlosYUFIM0I7QUFLRCxLQWRvQjtBQUFBLEdBQXJCOztBQWdCQSxTQUFPRixZQUFZLENBQUNnQixHQUFiLENBQWlCLFVBQUNYLEdBQUQsRUFBUztBQUMvQixRQUFNQyxRQUFRLEdBQUdULGFBQWEsQ0FBQ29CLElBQWQsQ0FDZixVQUFDQyxJQUFEO0FBQUEsYUFDRUEsSUFBSSxDQUFDQyxZQUFMLENBQWtCLGVBQWxCLE1BQXVDZCxHQUFHLENBQUNjLFlBQUosQ0FBaUIsZUFBakIsQ0FEekM7QUFBQSxLQURlLENBQWpCO0FBSUEsUUFBTVosS0FBSyxHQUFHbkIsUUFBUSxDQUFDTSxhQUFULFlBQ1JXLEdBQUcsQ0FBQ2MsWUFBSixDQUFpQixlQUFqQixDQURRLEVBQWQ7QUFHQSxRQUFNQyxPQUFPLEdBQUdoQixZQUFZLENBQUNDLEdBQUQsRUFBTUMsUUFBTixFQUFnQkMsS0FBaEIsQ0FBNUI7QUFFQUYsT0FBRyxDQUFDZ0IsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEJELE9BQTlCO0FBRUEsV0FBTztBQUNMRSxjQUFRLEVBQUU7QUFBQSxlQUFNakIsR0FBRyxDQUFDa0IsbUJBQUosQ0FBd0IsT0FBeEIsRUFBaUNILE9BQWpDLENBQU47QUFBQSxPQURMO0FBRUxJLFdBQUssRUFBRSxpQkFBTTtBQUNYakIsYUFBSyxDQUFDRSxTQUFOLENBQWdCQyxPQUFoQixDQUF3QixPQUF4QixFQUFpQyxRQUFqQztBQUNBVCxnQkFBUSxDQUFDUSxTQUFULENBQW1CZ0IsTUFBbkIsQ0FBMEIsbUNBQTFCO0FBQ0FwQixXQUFHLENBQUNHLFlBQUosQ0FBaUIsZUFBakIsRUFBa0MsS0FBbEM7QUFDQUQsYUFBSyxDQUFDSSxLQUFOLENBQVlDLE1BQVosR0FBcUIsSUFBckI7QUFDRDtBQVBJLEtBQVA7QUFTRCxHQXJCTSxDQUFQO0FBc0JELENBdERELEUiLCJmaWxlIjoiY29yZS9NZWdhbmF2Q29udHJvbE1vYmlsZVBhbmVsT3Blbi9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBYmx5VWlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWJseVVpXCJdID0gcm9vdFtcIkFibHlVaVwiXSB8fCB7fSwgcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl0gPSByb290W1wiQWJseVVpXCJdW1wiQ29yZVwiXSB8fCB7fSwgcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl1bXCJNZWdhbmF2Q29udHJvbE1vYmlsZVBhbmVsT3BlblwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCByZW1zVG9QaXhlbFZhbHVlID0gKHJlbVN0cmluZykgPT5cbiAgcGFyc2VGbG9hdChyZW1TdHJpbmcpICpcbiAgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpO1xuIiwiZXhwb3J0IGNvbnN0IHF1ZXJ5SWQgPSAodmFsLCByb290ID0gZG9jdW1lbnQpID0+XG4gIHJvb3QucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHt2YWx9XWApO1xuXG5leHBvcnQgY29uc3QgcXVlcnlJZEFsbCA9ICh2YWwsIHJvb3QgPSBkb2N1bWVudCkgPT5cbiAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZD0ke3ZhbH1dYCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHF1ZXJ5SWQsIHF1ZXJ5SWRBbGwgfSBmcm9tIFwiLi4vZG9tLXF1ZXJ5XCI7XG5pbXBvcnQgeyByZW1zVG9QaXhlbFZhbHVlIH0gZnJvbSBcIi4uL2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGNsb3NlQ29udHJvbHMgPSBBcnJheS5mcm9tKFxuICAgIHF1ZXJ5SWRBbGwoXCJtZWdhbmF2LWNvbnRyb2wtbW9iaWxlLXBhbmVsLWNsb3NlXCIpXG4gICk7XG4gIGNvbnN0IG9wZW5Db250cm9scyA9IEFycmF5LmZyb20oXG4gICAgcXVlcnlJZEFsbChcIm1lZ2FuYXYtY29udHJvbC1tb2JpbGUtcGFuZWwtb3BlblwiKVxuICApO1xuICBjb25zdCBkcm9wZG93biA9IHF1ZXJ5SWQoXCJtZWdhbmF2LW1vYmlsZS1kcm9wZG93blwiKTtcblxuICAvLyBIZWlnaHQgaXMgZGVmaW5lZCBpbiByZW0ncyBzbyB0byBnZXQgdGhlIHBpeGVsIHZhbHVlIHdlIG5lZWQgdG8gZmluZCB0aGUgZm9udFNpemUgb24gcm9vdFxuICBjb25zdCBtZWdhbmF2SGVpZ2h0ID0gcmVtc1RvUGl4ZWxWYWx1ZShcbiAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAgIFwiLS11aS1tZWdhbmF2LWhlaWdodFwiXG4gICAgKVxuICApO1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChidG4sIGNsb3NlQnRuLCBwYW5lbCkgPT4gKCkgPT4ge1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdHJ1ZSk7XG4gICAgcGFuZWwuY2xhc3NMaXN0LnJlcGxhY2UoXCJoaWRkZW5cIiwgXCJibG9ja1wiKTtcblxuICAgIC8vIE9uIGRldmljZXMgd2hlcmUgd2UgZG9uJ3QgaGF2ZSBlbm91Z2ggc3BhY2UgZm9yIHRoZSBwYW5lbCwgc2V0IGl0J3MgaGVpZ2h0IHRvXG4gICAgLy8gdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKG1pbnVzIHRoZSBtZWdhbmF2IGhlaWdodCkgLSB0aGlzIHdpbGwgdHJpZ2dlciBhIHNjcm9sbC5cbiAgICAvLyBPdGhlcndpc2UganVzdCBzZXQgaXQgdG8gdGhlIHBhbmVsIGhlaWdodC4gVGhpcyBoYW5kbGVzIHRoZSBjYXNlIHdoZXJlIHRoZSByYXRpbyBvZiB2ZXJ0aWNhbFxuICAgIC8vIHNwYWNlIHRvIGhvcml6b250YWwgaXMgZXNwZWNpYWxseSBoaWdoICh0aGluayB0YWJsZXRzLCBidXQgbm90IG9ubHkpLlxuICAgIHBhbmVsLnN0eWxlLmhlaWdodCA9IGAke1xuICAgICAgd2luZG93LmlubmVySGVpZ2h0IC0gbWVnYW5hdkhlaWdodCA+IHBhbmVsLm9mZnNldEhlaWdodFxuICAgICAgICA/IHBhbmVsLm9mZnNldEhlaWdodFxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodCAtIG1lZ2FuYXZIZWlnaHRcbiAgICB9cHhgO1xuICB9O1xuXG4gIHJldHVybiBvcGVuQ29udHJvbHMubWFwKChidG4pID0+IHtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGNsb3NlQ29udHJvbHMuZmluZChcbiAgICAgIChub2RlKSA9PlxuICAgICAgICBub2RlLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIikgPT09IGJ0bi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpXG4gICAgKTtcbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7YnRuLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YFxuICAgICk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNsaWNrSGFuZGxlcihidG4sIGNsb3NlQnRuLCBwYW5lbCk7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRlYXJkb3duOiAoKSA9PiBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpLFxuICAgICAgY2xlYXI6ICgpID0+IHtcbiAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlcGxhY2UoXCJibG9ja1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcInVpLW1lZ2FuYXYtbW9iaWxlLWRyb3Bkb3duLWV4cGFuZFwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICAgICAgICBwYW5lbC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9