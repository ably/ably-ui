(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AblyUi"] = factory();
	else
		root["AblyUi"] = root["AblyUi"] || {}, root["AblyUi"]["Core"] = root["AblyUi"]["Core"] || {}, root["AblyUi"]["Core"]["FeatureFooter"] = factory();
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

/***/ "./src/core/FeatureFooter/component.css":
/*!**********************************************!*\
  !*** ./src/core/FeatureFooter/component.css ***!
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
  !*** ./src/core/FeatureFooter/component.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hubspot_chat_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hubspot-chat-toggle */ "./src/core/hubspot-chat-toggle.js");
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.css */ "./src/core/FeatureFooter/component.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return (0,_hubspot_chat_toggle__WEBPACK_IMPORTED_MODULE_0__.default)({
    dataId: "feature-footer"
  });
});
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL2RvbS1xdWVyeS5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9zcmMvY29yZS9odWJzcG90LWNoYXQtdG9nZ2xlLmpzIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL0ZlYXR1cmVGb290ZXIvY29tcG9uZW50LmNzcz9hMzlmIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL0ZlYXR1cmVGb290ZXIvY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInF1ZXJ5SWQiLCJ2YWwiLCJyb290IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlJZEFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbmFibGVCdG4iLCJlbCIsInRleHQiLCJkaXNhYmxlZCIsImlubmVyVGV4dCIsImRpc2FibGVCdG4iLCJXQUlUX0JFVFdFRU5fUkVUUklFU19NUyIsIk1BWF9SRVRSWV9DT1VOVCIsInRvZ2dsZUNoYXRXaWRnZXQiLCJwYXJhbXMiLCJkYXRhSWQiLCJjb250YWluZXIiLCJjaGF0QnV0dG9uIiwidGV4dEVuYWJsZWQiLCJkYXRhc2V0IiwiZW5hYmxlZExhYmVsIiwidGV4dERpc2FibGVkIiwiZGlzYWJsZWRMYWJlbCIsInRyaWdnZXIiLCJjbGlja0hhbmRsZXIiLCJ3YWl0Rm9yU2NyaXB0IiwiZGVsYXkiLCJ3aWRnZXQiLCJ3aW5kb3ciLCJIdWJTcG90Q29udmVyc2F0aW9ucyIsImlmcmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQXVEO0FBQzlGLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsTUFBTUMsSUFBTix1RUFBYUMsUUFBYjtBQUFBLFNBQ3JCRCxJQUFJLENBQUNFLGFBQUwsb0JBQStCSCxHQUEvQixPQURxQjtBQUFBLENBQWhCO0FBR0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0osR0FBRDtBQUFBLE1BQU1DLElBQU4sdUVBQWFDLFFBQWI7QUFBQSxTQUN4QkQsSUFBSSxDQUFDSSxnQkFBTCxvQkFBa0NMLEdBQWxDLE9BRHdCO0FBQUEsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU00sU0FBVCxDQUFtQkMsRUFBbkIsRUFBdUJDLElBQXZCLEVBQTZCO0FBQzNCRCxJQUFFLENBQUNFLFFBQUgsR0FBYyxLQUFkO0FBQ0FGLElBQUUsQ0FBQ0csU0FBSCxHQUFlRixJQUFmO0FBQ0Q7O0FBRUQsU0FBU0csVUFBVCxDQUFvQkosRUFBcEIsRUFBd0JDLElBQXhCLEVBQThCO0FBQzVCRCxJQUFFLENBQUNFLFFBQUgsR0FBYyxJQUFkO0FBQ0FGLElBQUUsQ0FBQ0csU0FBSCxHQUFlRixJQUFmO0FBQ0Q7O0FBRUQsSUFBTUksdUJBQXVCLEdBQUcsR0FBaEM7QUFDQSxJQUFJQyxlQUFlLEdBQUcsRUFBdEI7QUFFZSxTQUFTQyxnQkFBVCxHQUF1QztBQUFBLE1BQWJDLE1BQWEsdUVBQUosRUFBSTtBQUNwRCxNQUFRQyxNQUFSLEdBQW1CRCxNQUFuQixDQUFRQyxNQUFSO0FBQ0EsTUFBTUMsU0FBUyxHQUFHbEIsbURBQU8sQ0FBQ2lCLE1BQUQsQ0FBekI7QUFDQSxNQUFNRSxVQUFVLEdBQUduQixtREFBTyxDQUFDLGtCQUFELEVBQXFCa0IsU0FBckIsQ0FBMUI7QUFDQSxNQUFNRSxXQUFXLEdBQUdELFVBQVUsQ0FBQ0UsT0FBWCxDQUFtQkMsWUFBdkM7QUFDQSxNQUFNQyxZQUFZLEdBQUdKLFVBQVUsQ0FBQ0UsT0FBWCxDQUFtQkcsYUFBeEM7QUFFQSxNQUFJLENBQUNQLE1BQUQsSUFBVyxDQUFDQyxTQUFoQixFQUEyQjtBQUMzQixNQUFNTyxPQUFPLEdBQUd6QixtREFBTyxDQUFDLGtCQUFELEVBQXFCa0IsU0FBckIsQ0FBdkI7QUFFQSxNQUFJUSxZQUFKOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQy9CLFFBQU1DLE1BQU0sY0FBR0MsTUFBSCxxRUFBRyxRQUFRQyxvQkFBWCwwREFBRyxzQkFBOEJGLE1BQTdDLENBRCtCLENBRy9COztBQUNBLFFBQU1HLE1BQU0sR0FBRzdCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQ0FBdkIsQ0FBZjs7QUFFQXNCLGdCQUFZLEdBQUcsc0JBQUNPLENBQUQsRUFBTztBQUNwQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FMLFlBQU0sQ0FBQ00sSUFBUDtBQUNELEtBSEQ7O0FBS0EsUUFBSU4sTUFBTSxJQUFJRyxNQUFkLEVBQXNCO0FBQ3BCUCxhQUFPLENBQUNXLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDVixZQUFsQztBQUNBbkIsZUFBUyxDQUFDa0IsT0FBRCxFQUFVTCxXQUFWLENBQVQ7QUFDRCxLQUhELE1BR08sSUFBSSxFQUFFTixlQUFOLEVBQXVCO0FBQzVCdUIsZ0JBQVUsQ0FBQztBQUFBLGVBQU1WLGFBQWEsQ0FBQ2QsdUJBQUQsQ0FBbkI7QUFBQSxPQUFELEVBQStDZSxLQUEvQyxDQUFWO0FBQ0Q7QUFDRixHQWpCRDs7QUFtQkFoQixZQUFVLENBQUNhLE9BQUQsRUFBVUYsWUFBVixDQUFWO0FBQ0FJLGVBQWEsQ0FBQyxDQUFELENBQWI7QUFFQSxTQUFPLFlBQU07QUFDWGYsY0FBVSxDQUFDYSxPQUFELEVBQVVGLFlBQVYsQ0FBVjtBQUNBRSxXQUFPLENBQUNhLG1CQUFSLENBQTRCLE9BQTVCLEVBQXFDWixZQUFyQztBQUNELEdBSEQ7QUFJRCxDOzs7Ozs7Ozs7OztBQ2xFRDs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSxpRUFBZTtBQUFBLFNBQ2JYLDZEQUFnQixDQUFDO0FBQ2ZFLFVBQU0sRUFBRTtBQURPLEdBQUQsQ0FESDtBQUFBLENBQWYsRSIsImZpbGUiOiJjb3JlL0ZlYXR1cmVGb290ZXIvY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQWJseVVpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFibHlVaVwiXSA9IHJvb3RbXCJBYmx5VWlcIl0gfHwge30sIHJvb3RbXCJBYmx5VWlcIl1bXCJDb3JlXCJdID0gcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl0gfHwge30sIHJvb3RbXCJBYmx5VWlcIl1bXCJDb3JlXCJdW1wiRmVhdHVyZUZvb3RlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCBxdWVyeUlkID0gKHZhbCwgcm9vdCA9IGRvY3VtZW50KSA9PlxuICByb290LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7dmFsfV1gKTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5SWRBbGwgPSAodmFsLCByb290ID0gZG9jdW1lbnQpID0+XG4gIHJvb3QucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtaWQ9JHt2YWx9XWApO1xuIiwiaW1wb3J0IHsgcXVlcnlJZCB9IGZyb20gXCIuL2RvbS1xdWVyeVwiO1xuXG4vKlxuICAgIEEgbWV0aG9kIHRvIGVuYWJsZS9kaXNhYmxlIGEgQ1RBIHRoYXRcbiAgICBpcyB1c2VkIHRvIG9wZW4gdGhlIEh1YlNwb3QgY2hhdCB3aWRnZXRcblxuICAgIElmIHRoZSBDaGF0IHdpZGdldCBpcyB1bmF2YWlsYWJsZSB0aGlzIHNjcmlwdFxuICAgIHdpbGwgYXBwbHkgYSBkaXNhYmxlZCBwcm9wZXJ0eSBhbmQgY2hhbmdlXG4gICAgdGhlIHRleHQgb24gdGhlIGJ1dHRvbiwgdG8gd2FybiB0aGUgdXNlci5cblxuICAgIFBhcmFtczpcbiAgICAtIGRhdGFJZCAgICAgICAgdGhlIHBhcmVudCBjb250YWluZXIgZGF0YS1pZFxuXG4qL1xuXG5mdW5jdGlvbiBlbmFibGVCdG4oZWwsIHRleHQpIHtcbiAgZWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgZWwuaW5uZXJUZXh0ID0gdGV4dDtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUJ0bihlbCwgdGV4dCkge1xuICBlbC5kaXNhYmxlZCA9IHRydWU7XG4gIGVsLmlubmVyVGV4dCA9IHRleHQ7XG59XG5cbmNvbnN0IFdBSVRfQkVUV0VFTl9SRVRSSUVTX01TID0gMTAwO1xubGV0IE1BWF9SRVRSWV9DT1VOVCA9IDMwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDaGF0V2lkZ2V0KHBhcmFtcyA9IHt9KSB7XG4gIGNvbnN0IHsgZGF0YUlkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHF1ZXJ5SWQoZGF0YUlkKTtcbiAgY29uc3QgY2hhdEJ1dHRvbiA9IHF1ZXJ5SWQoXCJvcGVuLWNoYXQtd2lkZ2V0XCIsIGNvbnRhaW5lcik7XG4gIGNvbnN0IHRleHRFbmFibGVkID0gY2hhdEJ1dHRvbi5kYXRhc2V0LmVuYWJsZWRMYWJlbDtcbiAgY29uc3QgdGV4dERpc2FibGVkID0gY2hhdEJ1dHRvbi5kYXRhc2V0LmRpc2FibGVkTGFiZWw7XG5cbiAgaWYgKCFkYXRhSWQgfHwgIWNvbnRhaW5lcikgcmV0dXJuO1xuICBjb25zdCB0cmlnZ2VyID0gcXVlcnlJZChcIm9wZW4tY2hhdC13aWRnZXRcIiwgY29udGFpbmVyKTtcblxuICBsZXQgY2xpY2tIYW5kbGVyO1xuXG4gIGNvbnN0IHdhaXRGb3JTY3JpcHQgPSAoZGVsYXkpID0+IHtcbiAgICBjb25zdCB3aWRnZXQgPSB3aW5kb3c/Lkh1YlNwb3RDb252ZXJzYXRpb25zPy53aWRnZXQ7XG5cbiAgICAvLyBJZiB0aGUgY2hhdCBpcyBzZXQgdG8gYmUgaGlkZGVuIG91dCBvZiBob3VycyB0aGlzIHdpbGwgcmV0dXJuIG51bGxcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1YnNwb3QtbWVzc2FnZXMtaWZyYW1lLWNvbnRhaW5lclwiKTtcblxuICAgIGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB3aWRnZXQub3BlbigpO1xuICAgIH07XG5cbiAgICBpZiAod2lkZ2V0ICYmIGlmcmFtZSkge1xuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIGVuYWJsZUJ0bih0cmlnZ2VyLCB0ZXh0RW5hYmxlZCk7XG4gICAgfSBlbHNlIGlmICgtLU1BWF9SRVRSWV9DT1VOVCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB3YWl0Rm9yU2NyaXB0KFdBSVRfQkVUV0VFTl9SRVRSSUVTX01TKSwgZGVsYXkpO1xuICAgIH1cbiAgfTtcblxuICBkaXNhYmxlQnRuKHRyaWdnZXIsIHRleHREaXNhYmxlZCk7XG4gIHdhaXRGb3JTY3JpcHQoMCk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBkaXNhYmxlQnRuKHRyaWdnZXIsIHRleHREaXNhYmxlZCk7XG4gICAgdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgfTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRvZ2dsZUNoYXRXaWRnZXQgZnJvbSBcIi4uL2h1YnNwb3QtY2hhdC10b2dnbGVcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxuICB0b2dnbGVDaGF0V2lkZ2V0KHtcbiAgICBkYXRhSWQ6IFwiZmVhdHVyZS1mb290ZXJcIixcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9