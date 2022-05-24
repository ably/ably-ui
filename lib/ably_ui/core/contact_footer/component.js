(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AblyUi"] = factory();
	else
		root["AblyUi"] = root["AblyUi"] || {}, root["AblyUi"]["Core"] = root["AblyUi"]["Core"] || {}, root["AblyUi"]["Core"]["ContactFooter"] = factory();
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

/***/ }),

/***/ "./src/core/hubspot-chat-toggle.js":
/*!*****************************************!*\
  !*** ./src/core/hubspot-chat-toggle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleChatWidget)
/* harmony export */ });
/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-query */ "./src/core/dom-query.js");

/*
    A method to enable/disable a CTA that
    is used to open the HubSpot chat widget

    If the Chat widget is unavailable this script
    will apply a disabled property and change
    the text on the button, to warn the user.

    Params:
    - dataId        the parent container data-id

*/

function enableBtn(el, text) {
  el.disabled = false;
  el.innerText = text;
}

function disableBtn(el, text) {
  el.disabled = true;
  el.innerText = text;
}

var WAIT_BETWEEN_RETRIES_MS = 100;
var MAX_RETRY_COUNT = 30;
function toggleChatWidget() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var dataId = params.dataId;
  var container = (0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryId)(dataId);
  var chatButton = (0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryId)("open-chat-widget", container);
  var textEnabled = chatButton.dataset.enabledLabel;
  var textDisabled = chatButton.dataset.disabledLabel;
  if (!dataId || !container) return;
  var trigger = (0,_dom_query__WEBPACK_IMPORTED_MODULE_0__.queryId)("open-chat-widget", container);
  var clickHandler;

  var waitForScript = function waitForScript(delay) {
    var _window, _window$HubSpotConver;

    var widget = (_window = window) === null || _window === void 0 ? void 0 : (_window$HubSpotConver = _window.HubSpotConversations) === null || _window$HubSpotConver === void 0 ? void 0 : _window$HubSpotConver.widget; // If the chat is set to be hidden out of hours this will return null

    var iframe = document.querySelector("#hubspot-messages-iframe-container");

    clickHandler = function clickHandler(e) {
      e.preventDefault();
      widget.open();
    };

    if (widget && iframe) {
      trigger.addEventListener("click", clickHandler);
      enableBtn(trigger, textEnabled);
    } else if (--MAX_RETRY_COUNT) {
      setTimeout(function () {
        return waitForScript(WAIT_BETWEEN_RETRIES_MS);
      }, delay);
    }
  };

  disableBtn(trigger, textDisabled);
  waitForScript(0);
  return function () {
    disableBtn(trigger, textDisabled);
    trigger.removeEventListener("click", clickHandler);
  };
}

/***/ }),

/***/ "./src/core/ContactFooter/component.css":
/*!**********************************************!*\
  !*** ./src/core/ContactFooter/component.css ***!
  \**********************************************/
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
/*!*********************************************!*\
  !*** ./src/core/ContactFooter/component.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.css */ "./src/core/ContactFooter/component.css");
/* harmony import */ var _hubspot_chat_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hubspot-chat-toggle */ "./src/core/hubspot-chat-toggle.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return (0,_hubspot_chat_toggle__WEBPACK_IMPORTED_MODULE_1__.default)({
    dataId: "contact-footer"
  });
});
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL2RvbS1xdWVyeS5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9zcmMvY29yZS9odWJzcG90LWNoYXQtdG9nZ2xlLmpzIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL0NvbnRhY3RGb290ZXIvY29tcG9uZW50LmNzcz81NTg1Iiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL0NvbnRhY3RGb290ZXIvY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInF1ZXJ5SWQiLCJ2YWwiLCJyb290IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlJZEFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbmFibGVCdG4iLCJlbCIsInRleHQiLCJkaXNhYmxlZCIsImlubmVyVGV4dCIsImRpc2FibGVCdG4iLCJXQUlUX0JFVFdFRU5fUkVUUklFU19NUyIsIk1BWF9SRVRSWV9DT1VOVCIsInRvZ2dsZUNoYXRXaWRnZXQiLCJwYXJhbXMiLCJkYXRhSWQiLCJjb250YWluZXIiLCJjaGF0QnV0dG9uIiwidGV4dEVuYWJsZWQiLCJkYXRhc2V0IiwiZW5hYmxlZExhYmVsIiwidGV4dERpc2FibGVkIiwiZGlzYWJsZWRMYWJlbCIsInRyaWdnZXIiLCJjbGlja0hhbmRsZXIiLCJ3YWl0Rm9yU2NyaXB0IiwiZGVsYXkiLCJ3aWRnZXQiLCJ3aW5kb3ciLCJIdWJTcG90Q29udmVyc2F0aW9ucyIsImlmcmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQXVEO0FBQzlGLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsTUFBTUMsSUFBTix1RUFBYUMsUUFBYjtBQUFBLFNBQ3JCRCxJQUFJLENBQUNFLGFBQUwsb0JBQStCSCxHQUEvQixPQURxQjtBQUFBLENBQWhCO0FBR0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0osR0FBRDtBQUFBLE1BQU1DLElBQU4sdUVBQWFDLFFBQWI7QUFBQSxTQUN4QkQsSUFBSSxDQUFDSSxnQkFBTCxvQkFBa0NMLEdBQWxDLE9BRHdCO0FBQUEsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU00sU0FBVCxDQUFtQkMsRUFBbkIsRUFBdUJDLElBQXZCLEVBQTZCO0FBQzNCRCxJQUFFLENBQUNFLFFBQUgsR0FBYyxLQUFkO0FBQ0FGLElBQUUsQ0FBQ0csU0FBSCxHQUFlRixJQUFmO0FBQ0Q7O0FBRUQsU0FBU0csVUFBVCxDQUFvQkosRUFBcEIsRUFBd0JDLElBQXhCLEVBQThCO0FBQzVCRCxJQUFFLENBQUNFLFFBQUgsR0FBYyxJQUFkO0FBQ0FGLElBQUUsQ0FBQ0csU0FBSCxHQUFlRixJQUFmO0FBQ0Q7O0FBRUQsSUFBTUksdUJBQXVCLEdBQUcsR0FBaEM7QUFDQSxJQUFJQyxlQUFlLEdBQUcsRUFBdEI7QUFFZSxTQUFTQyxnQkFBVCxHQUF1QztBQUFBLE1BQWJDLE1BQWEsdUVBQUosRUFBSTtBQUNwRCxNQUFRQyxNQUFSLEdBQW1CRCxNQUFuQixDQUFRQyxNQUFSO0FBQ0EsTUFBTUMsU0FBUyxHQUFHbEIsbURBQU8sQ0FBQ2lCLE1BQUQsQ0FBekI7QUFDQSxNQUFNRSxVQUFVLEdBQUduQixtREFBTyxDQUFDLGtCQUFELEVBQXFCa0IsU0FBckIsQ0FBMUI7QUFDQSxNQUFNRSxXQUFXLEdBQUdELFVBQVUsQ0FBQ0UsT0FBWCxDQUFtQkMsWUFBdkM7QUFDQSxNQUFNQyxZQUFZLEdBQUdKLFVBQVUsQ0FBQ0UsT0FBWCxDQUFtQkcsYUFBeEM7QUFFQSxNQUFJLENBQUNQLE1BQUQsSUFBVyxDQUFDQyxTQUFoQixFQUEyQjtBQUMzQixNQUFNTyxPQUFPLEdBQUd6QixtREFBTyxDQUFDLGtCQUFELEVBQXFCa0IsU0FBckIsQ0FBdkI7QUFFQSxNQUFJUSxZQUFKOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQy9CLFFBQU1DLE1BQU0sY0FBR0MsTUFBSCxxRUFBRyxRQUFRQyxvQkFBWCwwREFBRyxzQkFBOEJGLE1BQTdDLENBRCtCLENBRy9COztBQUNBLFFBQU1HLE1BQU0sR0FBRzdCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQ0FBdkIsQ0FBZjs7QUFFQXNCLGdCQUFZLEdBQUcsc0JBQUNPLENBQUQsRUFBTztBQUNwQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FMLFlBQU0sQ0FBQ00sSUFBUDtBQUNELEtBSEQ7O0FBS0EsUUFBSU4sTUFBTSxJQUFJRyxNQUFkLEVBQXNCO0FBQ3BCUCxhQUFPLENBQUNXLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDVixZQUFsQztBQUNBbkIsZUFBUyxDQUFDa0IsT0FBRCxFQUFVTCxXQUFWLENBQVQ7QUFDRCxLQUhELE1BR08sSUFBSSxFQUFFTixlQUFOLEVBQXVCO0FBQzVCdUIsZ0JBQVUsQ0FBQztBQUFBLGVBQU1WLGFBQWEsQ0FBQ2QsdUJBQUQsQ0FBbkI7QUFBQSxPQUFELEVBQStDZSxLQUEvQyxDQUFWO0FBQ0Q7QUFDRixHQWpCRDs7QUFtQkFoQixZQUFVLENBQUNhLE9BQUQsRUFBVUYsWUFBVixDQUFWO0FBQ0FJLGVBQWEsQ0FBQyxDQUFELENBQWI7QUFFQSxTQUFPLFlBQU07QUFDWGYsY0FBVSxDQUFDYSxPQUFELEVBQVVGLFlBQVYsQ0FBVjtBQUNBRSxXQUFPLENBQUNhLG1CQUFSLENBQTRCLE9BQTVCLEVBQXFDWixZQUFyQztBQUNELEdBSEQ7QUFJRCxDOzs7Ozs7Ozs7OztBQ2xFRDs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSxpRUFBZTtBQUFBLFNBQU1YLDZEQUFnQixDQUFDO0FBQUVFLFVBQU0sRUFBRTtBQUFWLEdBQUQsQ0FBdEI7QUFBQSxDQUFmLEUiLCJmaWxlIjoiY29yZS9Db250YWN0Rm9vdGVyL2NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFibHlVaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBYmx5VWlcIl0gPSByb290W1wiQWJseVVpXCJdIHx8IHt9LCByb290W1wiQWJseVVpXCJdW1wiQ29yZVwiXSA9IHJvb3RbXCJBYmx5VWlcIl1bXCJDb3JlXCJdIHx8IHt9LCByb290W1wiQWJseVVpXCJdW1wiQ29yZVwiXVtcIkNvbnRhY3RGb290ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgcXVlcnlJZCA9ICh2YWwsIHJvb3QgPSBkb2N1bWVudCkgPT5cbiAgcm9vdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke3ZhbH1dYCk7XG5cbmV4cG9ydCBjb25zdCBxdWVyeUlkQWxsID0gKHZhbCwgcm9vdCA9IGRvY3VtZW50KSA9PlxuICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWlkPSR7dmFsfV1gKTtcbiIsImltcG9ydCB7IHF1ZXJ5SWQgfSBmcm9tIFwiLi9kb20tcXVlcnlcIjtcblxuLypcbiAgICBBIG1ldGhvZCB0byBlbmFibGUvZGlzYWJsZSBhIENUQSB0aGF0XG4gICAgaXMgdXNlZCB0byBvcGVuIHRoZSBIdWJTcG90IGNoYXQgd2lkZ2V0XG5cbiAgICBJZiB0aGUgQ2hhdCB3aWRnZXQgaXMgdW5hdmFpbGFibGUgdGhpcyBzY3JpcHRcbiAgICB3aWxsIGFwcGx5IGEgZGlzYWJsZWQgcHJvcGVydHkgYW5kIGNoYW5nZVxuICAgIHRoZSB0ZXh0IG9uIHRoZSBidXR0b24sIHRvIHdhcm4gdGhlIHVzZXIuXG5cbiAgICBQYXJhbXM6XG4gICAgLSBkYXRhSWQgICAgICAgIHRoZSBwYXJlbnQgY29udGFpbmVyIGRhdGEtaWRcblxuKi9cblxuZnVuY3Rpb24gZW5hYmxlQnRuKGVsLCB0ZXh0KSB7XG4gIGVsLmRpc2FibGVkID0gZmFsc2U7XG4gIGVsLmlubmVyVGV4dCA9IHRleHQ7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVCdG4oZWwsIHRleHQpIHtcbiAgZWwuZGlzYWJsZWQgPSB0cnVlO1xuICBlbC5pbm5lclRleHQgPSB0ZXh0O1xufVxuXG5jb25zdCBXQUlUX0JFVFdFRU5fUkVUUklFU19NUyA9IDEwMDtcbmxldCBNQVhfUkVUUllfQ09VTlQgPSAzMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2hhdFdpZGdldChwYXJhbXMgPSB7fSkge1xuICBjb25zdCB7IGRhdGFJZCB9ID0gcGFyYW1zO1xuICBjb25zdCBjb250YWluZXIgPSBxdWVyeUlkKGRhdGFJZCk7XG4gIGNvbnN0IGNoYXRCdXR0b24gPSBxdWVyeUlkKFwib3Blbi1jaGF0LXdpZGdldFwiLCBjb250YWluZXIpO1xuICBjb25zdCB0ZXh0RW5hYmxlZCA9IGNoYXRCdXR0b24uZGF0YXNldC5lbmFibGVkTGFiZWw7XG4gIGNvbnN0IHRleHREaXNhYmxlZCA9IGNoYXRCdXR0b24uZGF0YXNldC5kaXNhYmxlZExhYmVsO1xuXG4gIGlmICghZGF0YUlkIHx8ICFjb250YWluZXIpIHJldHVybjtcbiAgY29uc3QgdHJpZ2dlciA9IHF1ZXJ5SWQoXCJvcGVuLWNoYXQtd2lkZ2V0XCIsIGNvbnRhaW5lcik7XG5cbiAgbGV0IGNsaWNrSGFuZGxlcjtcblxuICBjb25zdCB3YWl0Rm9yU2NyaXB0ID0gKGRlbGF5KSA9PiB7XG4gICAgY29uc3Qgd2lkZ2V0ID0gd2luZG93Py5IdWJTcG90Q29udmVyc2F0aW9ucz8ud2lkZ2V0O1xuXG4gICAgLy8gSWYgdGhlIGNoYXQgaXMgc2V0IHRvIGJlIGhpZGRlbiBvdXQgb2YgaG91cnMgdGhpcyB3aWxsIHJldHVybiBudWxsXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodWJzcG90LW1lc3NhZ2VzLWlmcmFtZS1jb250YWluZXJcIik7XG5cbiAgICBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgd2lkZ2V0Lm9wZW4oKTtcbiAgICB9O1xuXG4gICAgaWYgKHdpZGdldCAmJiBpZnJhbWUpIHtcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICBlbmFibGVCdG4odHJpZ2dlciwgdGV4dEVuYWJsZWQpO1xuICAgIH0gZWxzZSBpZiAoLS1NQVhfUkVUUllfQ09VTlQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2FpdEZvclNjcmlwdChXQUlUX0JFVFdFRU5fUkVUUklFU19NUyksIGRlbGF5KTtcbiAgICB9XG4gIH07XG5cbiAgZGlzYWJsZUJ0bih0cmlnZ2VyLCB0ZXh0RGlzYWJsZWQpO1xuICB3YWl0Rm9yU2NyaXB0KDApO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgZGlzYWJsZUJ0bih0cmlnZ2VyLCB0ZXh0RGlzYWJsZWQpO1xuICAgIHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gIH07XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50LmNzc1wiO1xuaW1wb3J0IHRvZ2dsZUNoYXRXaWRnZXQgZnJvbSBcIi4uL2h1YnNwb3QtY2hhdC10b2dnbGVcIjtcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHRvZ2dsZUNoYXRXaWRnZXQoeyBkYXRhSWQ6IFwiY29udGFjdC1mb290ZXJcIiB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=