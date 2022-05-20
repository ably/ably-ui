(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AblyUi"] = factory();
	else
		root["AblyUi"] = root["AblyUi"] || {}, root["AblyUi"]["Core"] = root["AblyUi"]["Core"] || {}, root["AblyUi"]["Core"]["MeganavControlMobilePanelClose"] = factory();
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
/*!**************************************************************!*\
  !*** ./src/core/MeganavControlMobilePanelClose/component.js ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-query */ "./src/core/dom-query.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var closeControls = Array.from((0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryIdAll)("meganav-control-mobile-panel-close"));
  var openControls = Array.from((0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryIdAll)("meganav-control-mobile-panel-open"));

  var clickHandler = function clickHandler(btn, openBtn, panel) {
    return function () {
      btn.setAttribute("aria-expanded", false);
      openBtn.setAttribute("aria-expanded", false);
      panel.classList.replace("block", "hidden");
      panel.style.height = null;
    };
  };

  return closeControls.map(function (btn) {
    var openBtn = openControls.find(function (open) {
      return open.getAttribute("aria-controls") === btn.getAttribute("aria-controls");
    });
    var panel = document.querySelector("#".concat(btn.getAttribute("aria-controls")));
    var handler = clickHandler(btn, openBtn, panel);
    btn.addEventListener("click", handler);
    return {
      teardown: function teardown() {
        return btn.removeEventListener("click", handler);
      },
      clear: function clear() {
        return btn.setAttribute("aria-expanded", false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL2RvbS1xdWVyeS5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9zcmMvY29yZS9NZWdhbmF2Q29udHJvbE1vYmlsZVBhbmVsQ2xvc2UvY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInF1ZXJ5SWQiLCJ2YWwiLCJyb290IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlJZEFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZUNvbnRyb2xzIiwiQXJyYXkiLCJmcm9tIiwib3BlbkNvbnRyb2xzIiwiY2xpY2tIYW5kbGVyIiwiYnRuIiwib3BlbkJ0biIsInBhbmVsIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwicmVwbGFjZSIsInN0eWxlIiwiaGVpZ2h0IiwibWFwIiwiZmluZCIsIm9wZW4iLCJnZXRBdHRyaWJ1dGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVEQUF1RDtBQUM5RixDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7O0FDVk8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLE1BQU1DLElBQU4sdUVBQWFDLFFBQWI7QUFBQSxTQUNyQkQsSUFBSSxDQUFDRSxhQUFMLG9CQUErQkgsR0FBL0IsT0FEcUI7QUFBQSxDQUFoQjtBQUdBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNKLEdBQUQ7QUFBQSxNQUFNQyxJQUFOLHVFQUFhQyxRQUFiO0FBQUEsU0FDeEJELElBQUksQ0FBQ0ksZ0JBQUwsb0JBQWtDTCxHQUFsQyxPQUR3QjtBQUFBLENBQW5CLEM7Ozs7OztVQ0hQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxpRUFBZSxZQUFNO0FBQ25CLE1BQU1NLGFBQWEsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQ3BCSixzREFBVSxDQUFDLG9DQUFELENBRFUsQ0FBdEI7QUFHQSxNQUFNSyxZQUFZLEdBQUdGLEtBQUssQ0FBQ0MsSUFBTixDQUNuQkosc0RBQVUsQ0FBQyxtQ0FBRCxDQURTLENBQXJCOztBQUlBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFlQyxLQUFmO0FBQUEsV0FBeUIsWUFBTTtBQUNsREYsU0FBRyxDQUFDRyxZQUFKLENBQWlCLGVBQWpCLEVBQWtDLEtBQWxDO0FBQ0FGLGFBQU8sQ0FBQ0UsWUFBUixDQUFxQixlQUFyQixFQUFzQyxLQUF0QztBQUNBRCxXQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCLE9BQXhCLEVBQWlDLFFBQWpDO0FBQ0FILFdBQUssQ0FBQ0ksS0FBTixDQUFZQyxNQUFaLEdBQXFCLElBQXJCO0FBQ0QsS0FMb0I7QUFBQSxHQUFyQjs7QUFPQSxTQUFPWixhQUFhLENBQUNhLEdBQWQsQ0FBa0IsVUFBQ1IsR0FBRCxFQUFTO0FBQ2hDLFFBQU1DLE9BQU8sR0FBR0gsWUFBWSxDQUFDVyxJQUFiLENBQ2QsVUFBQ0MsSUFBRDtBQUFBLGFBQ0VBLElBQUksQ0FBQ0MsWUFBTCxDQUFrQixlQUFsQixNQUF1Q1gsR0FBRyxDQUFDVyxZQUFKLENBQWlCLGVBQWpCLENBRHpDO0FBQUEsS0FEYyxDQUFoQjtBQUlBLFFBQU1ULEtBQUssR0FBR1gsUUFBUSxDQUFDQyxhQUFULFlBQ1JRLEdBQUcsQ0FBQ1csWUFBSixDQUFpQixlQUFqQixDQURRLEVBQWQ7QUFHQSxRQUFNQyxPQUFPLEdBQUdiLFlBQVksQ0FBQ0MsR0FBRCxFQUFNQyxPQUFOLEVBQWVDLEtBQWYsQ0FBNUI7QUFFQUYsT0FBRyxDQUFDYSxnQkFBSixDQUFxQixPQUFyQixFQUE4QkQsT0FBOUI7QUFFQSxXQUFPO0FBQ0xFLGNBQVEsRUFBRTtBQUFBLGVBQU1kLEdBQUcsQ0FBQ2UsbUJBQUosQ0FBd0IsT0FBeEIsRUFBaUNILE9BQWpDLENBQU47QUFBQSxPQURMO0FBRUxJLFdBQUssRUFBRTtBQUFBLGVBQU1oQixHQUFHLENBQUNHLFlBQUosQ0FBaUIsZUFBakIsRUFBa0MsS0FBbEMsQ0FBTjtBQUFBO0FBRkYsS0FBUDtBQUlELEdBaEJNLENBQVA7QUFpQkQsQ0FoQ0QsRSIsImZpbGUiOiJjb3JlL01lZ2FuYXZDb250cm9sTW9iaWxlUGFuZWxDbG9zZS9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBYmx5VWlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWJseVVpXCJdID0gcm9vdFtcIkFibHlVaVwiXSB8fCB7fSwgcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl0gPSByb290W1wiQWJseVVpXCJdW1wiQ29yZVwiXSB8fCB7fSwgcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl1bXCJNZWdhbmF2Q29udHJvbE1vYmlsZVBhbmVsQ2xvc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgcXVlcnlJZCA9ICh2YWwsIHJvb3QgPSBkb2N1bWVudCkgPT5cbiAgcm9vdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke3ZhbH1dYCk7XG5cbmV4cG9ydCBjb25zdCBxdWVyeUlkQWxsID0gKHZhbCwgcm9vdCA9IGRvY3VtZW50KSA9PlxuICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWlkPSR7dmFsfV1gKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcXVlcnlJZEFsbCB9IGZyb20gXCIuLi9kb20tcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBjbG9zZUNvbnRyb2xzID0gQXJyYXkuZnJvbShcbiAgICBxdWVyeUlkQWxsKFwibWVnYW5hdi1jb250cm9sLW1vYmlsZS1wYW5lbC1jbG9zZVwiKVxuICApO1xuICBjb25zdCBvcGVuQ29udHJvbHMgPSBBcnJheS5mcm9tKFxuICAgIHF1ZXJ5SWRBbGwoXCJtZWdhbmF2LWNvbnRyb2wtbW9iaWxlLXBhbmVsLW9wZW5cIilcbiAgKTtcblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSAoYnRuLCBvcGVuQnRuLCBwYW5lbCkgPT4gKCkgPT4ge1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcbiAgICBvcGVuQnRuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICAgIHBhbmVsLmNsYXNzTGlzdC5yZXBsYWNlKFwiYmxvY2tcIiwgXCJoaWRkZW5cIik7XG4gICAgcGFuZWwuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gY2xvc2VDb250cm9scy5tYXAoKGJ0bikgPT4ge1xuICAgIGNvbnN0IG9wZW5CdG4gPSBvcGVuQ29udHJvbHMuZmluZChcbiAgICAgIChvcGVuKSA9PlxuICAgICAgICBvcGVuLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIikgPT09IGJ0bi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpXG4gICAgKTtcbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7YnRuLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YFxuICAgICk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNsaWNrSGFuZGxlcihidG4sIG9wZW5CdG4sIHBhbmVsKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGVhcmRvd246ICgpID0+IGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlciksXG4gICAgICBjbGVhcjogKCkgPT4gYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpLFxuICAgIH07XG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=