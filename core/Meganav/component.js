(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AblyUi"] = factory();
	else
		root["AblyUi"] = root["AblyUi"] || {}, root["AblyUi"]["Core"] = root["AblyUi"]["Core"] || {}, root["AblyUi"]["Core"]["Meganav"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/MeganavControl/component.js":
/*!**********************************************!*\
  !*** ./src/core/MeganavControl/component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./src/core/MeganavControlMobileDropdown/component.js":
/*!************************************************************!*\
  !*** ./src/core/MeganavControlMobileDropdown/component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-lock */ "./node_modules/scroll-lock/dist/scroll-lock.js");
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_lock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-query */ "./src/core/dom-query.js");



var MeganavControlMobileDropdown = function MeganavControlMobileDropdown(_ref) {
  var clearPanels = _ref.clearPanels;
  var control = (0,_dom_query__WEBPACK_IMPORTED_MODULE_1__.queryId)("meganav-control-mobile-dropdown");
  var dropdown = (0,_dom_query__WEBPACK_IMPORTED_MODULE_1__.queryId)("meganav-mobile-dropdown");
  var menuIcon = (0,_dom_query__WEBPACK_IMPORTED_MODULE_1__.queryId)("meganav-control-mobile-dropdown-menu");
  var closeIcon = (0,_dom_query__WEBPACK_IMPORTED_MODULE_1__.queryId)("meganav-control-mobile-dropdown-close");

  var clickHandler = function clickHandler() {
    var ariaExpanded = control.getAttribute("aria-expanded");

    if (ariaExpanded === "false") {
      dropdown.classList.replace("invisible", "visible");
      control.setAttribute("aria-expanded", true);
      scroll_lock__WEBPACK_IMPORTED_MODULE_0___default().disablePageScroll();
    } else {
      dropdown.classList.replace("visible", "invisible");
      control.setAttribute("aria-expanded", false);
      scroll_lock__WEBPACK_IMPORTED_MODULE_0___default().enablePageScroll();
      clearPanels();
    }

    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  };

  control.addEventListener("click", clickHandler);
  return {
    teardown: function teardown() {
      control.removeEventListener("click", clickHandler);
      scroll_lock__WEBPACK_IMPORTED_MODULE_0___default().enablePageScroll();
    },
    clear: function clear() {
      dropdown.classList.replace("visible", "invisible");
      control.setAttribute("aria-expanded", false);
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      scroll_lock__WEBPACK_IMPORTED_MODULE_0___default().enablePageScroll();
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavControlMobileDropdown);

/***/ }),

/***/ "./src/core/MeganavControlMobilePanelClose/component.js":
/*!**************************************************************!*\
  !*** ./src/core/MeganavControlMobilePanelClose/component.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./src/core/MeganavControlMobilePanelOpen/component.js":
/*!*************************************************************!*\
  !*** ./src/core/MeganavControlMobilePanelOpen/component.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./src/core/css.js":
/*!*************************!*\
  !*** ./src/core/css.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),

/***/ "./src/core/Meganav/component.css":
/*!****************************************!*\
  !*** ./src/core/Meganav/component.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/scroll-lock/dist/scroll-lock.js":
/*!******************************************************!*\
  !*** ./node_modules/scroll-lock/dist/scroll-lock.js ***!
  \******************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_543__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_543__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_543__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_543__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_543__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_543__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_543__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_543__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_543__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_543__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_543__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_543__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_543__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_543__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_543__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_543__(__nested_webpack_require_543__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_4019__) {

"use strict";
__nested_webpack_require_4019__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/tools.js
var argumentAsArray = function argumentAsArray(argument) {
  return Array.isArray(argument) ? argument : [argument];
};
var isElement = function isElement(target) {
  return target instanceof Node;
};
var isElementList = function isElementList(nodeList) {
  return nodeList instanceof NodeList;
};
var eachNode = function eachNode(nodeList, callback) {
  if (nodeList && callback) {
    nodeList = isElementList(nodeList) ? nodeList : [nodeList];

    for (var i = 0; i < nodeList.length; i++) {
      if (callback(nodeList[i], i, nodeList.length) === true) {
        break;
      }
    }
  }
};
var throwError = function throwError(message) {
  return console.error("[scroll-lock] ".concat(message));
};
var arrayAsSelector = function arrayAsSelector(array) {
  if (Array.isArray(array)) {
    var selector = array.join(', ');
    return selector;
  }
};
var nodeListAsArray = function nodeListAsArray(nodeList) {
  var nodes = [];
  eachNode(nodeList, function (node) {
    return nodes.push(node);
  });
  return nodes;
};
var findParentBySelector = function findParentBySelector($el, selector) {
  var self = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var $root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

  if (self && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1) {
    return $el;
  }

  while (($el = $el.parentElement) && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) === -1) {
    ;
  }

  return $el;
};
var elementHasSelector = function elementHasSelector($el, selector) {
  var $root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var has = nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1;
  return has;
};
var elementHasOverflowHidden = function elementHasOverflowHidden($el) {
  if ($el) {
    var computedStyle = getComputedStyle($el);
    var overflowIsHidden = computedStyle.overflow === 'hidden';
    return overflowIsHidden;
  }
};
var elementScrollTopOnStart = function elementScrollTopOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    return scrollTop <= 0;
  }
};
var elementScrollTopOnEnd = function elementScrollTopOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    var scrollHeight = $el.scrollHeight;
    var scrollTopWithHeight = scrollTop + $el.offsetHeight;
    return scrollTopWithHeight >= scrollHeight;
  }
};
var elementScrollLeftOnStart = function elementScrollLeftOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    return scrollLeft <= 0;
  }
};
var elementScrollLeftOnEnd = function elementScrollLeftOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    var scrollWidth = $el.scrollWidth;
    var scrollLeftWithWidth = scrollLeft + $el.offsetWidth;
    return scrollLeftWithWidth >= scrollWidth;
  }
};
var elementIsScrollableField = function elementIsScrollableField($el) {
  var selector = 'textarea, [contenteditable="true"]';
  return elementHasSelector($el, selector);
};
var elementIsInputRange = function elementIsInputRange($el) {
  var selector = 'input[type="range"]';
  return elementHasSelector($el, selector);
};
// CONCATENATED MODULE: ./src/scroll-lock.js
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "disablePageScroll", function() { return disablePageScroll; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "enablePageScroll", function() { return enablePageScroll; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getScrollState", function() { return getScrollState; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "clearQueueScrollLocks", function() { return clearQueueScrollLocks; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getTargetScrollBarWidth", function() { return scroll_lock_getTargetScrollBarWidth; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getCurrentTargetScrollBarWidth", function() { return scroll_lock_getCurrentTargetScrollBarWidth; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getPageScrollBarWidth", function() { return getPageScrollBarWidth; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getCurrentPageScrollBarWidth", function() { return getCurrentPageScrollBarWidth; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addScrollableTarget", function() { return scroll_lock_addScrollableTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "removeScrollableTarget", function() { return scroll_lock_removeScrollableTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addScrollableSelector", function() { return scroll_lock_addScrollableSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "removeScrollableSelector", function() { return scroll_lock_removeScrollableSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addLockableTarget", function() { return scroll_lock_addLockableTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addLockableSelector", function() { return scroll_lock_addLockableSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "setFillGapMethod", function() { return scroll_lock_setFillGapMethod; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addFillGapTarget", function() { return scroll_lock_addFillGapTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "removeFillGapTarget", function() { return scroll_lock_removeFillGapTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addFillGapSelector", function() { return scroll_lock_addFillGapSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "removeFillGapSelector", function() { return scroll_lock_removeFillGapSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "refillGaps", function() { return refillGaps; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var FILL_GAP_AVAILABLE_METHODS = ['padding', 'margin', 'width', 'max-width', 'none'];
var TOUCH_DIRECTION_DETECT_OFFSET = 3;
var state = {
  scroll: true,
  queue: 0,
  scrollableSelectors: ['[data-scroll-lock-scrollable]'],
  lockableSelectors: ['body', '[data-scroll-lock-lockable]'],
  fillGapSelectors: ['body', '[data-scroll-lock-fill-gap]', '[data-scroll-lock-lockable]'],
  fillGapMethod: FILL_GAP_AVAILABLE_METHODS[0],
  //
  startTouchY: 0,
  startTouchX: 0
};
var disablePageScroll = function disablePageScroll(target) {
  if (state.queue <= 0) {
    state.scroll = false;
    scroll_lock_hideLockableOverflow();
    fillGaps();
  }

  scroll_lock_addScrollableTarget(target);
  state.queue++;
};
var enablePageScroll = function enablePageScroll(target) {
  state.queue > 0 && state.queue--;

  if (state.queue <= 0) {
    state.scroll = true;
    scroll_lock_showLockableOverflow();
    unfillGaps();
  }

  scroll_lock_removeScrollableTarget(target);
};
var getScrollState = function getScrollState() {
  return state.scroll;
};
var clearQueueScrollLocks = function clearQueueScrollLocks() {
  state.queue = 0;
};
var scroll_lock_getTargetScrollBarWidth = function getTargetScrollBarWidth($target) {
  var onlyExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var currentOverflowYProperty = $target.style.overflowY;

    if (onlyExists) {
      if (!getScrollState()) {
        $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-overflow-y-property');
      }
    } else {
      $target.style.overflowY = 'scroll';
    }

    var width = scroll_lock_getCurrentTargetScrollBarWidth($target);
    $target.style.overflowY = currentOverflowYProperty;
    return width;
  } else {
    return 0;
  }
};
var scroll_lock_getCurrentTargetScrollBarWidth = function getCurrentTargetScrollBarWidth($target) {
  if (isElement($target)) {
    if ($target === document.body) {
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      var currentWidth = windowWidth - documentWidth;
      return currentWidth;
    } else {
      var borderLeftWidthCurrentProperty = $target.style.borderLeftWidth;
      var borderRightWidthCurrentProperty = $target.style.borderRightWidth;
      $target.style.borderLeftWidth = '0px';
      $target.style.borderRightWidth = '0px';

      var _currentWidth = $target.offsetWidth - $target.clientWidth;

      $target.style.borderLeftWidth = borderLeftWidthCurrentProperty;
      $target.style.borderRightWidth = borderRightWidthCurrentProperty;
      return _currentWidth;
    }
  } else {
    return 0;
  }
};
var getPageScrollBarWidth = function getPageScrollBarWidth() {
  var onlyExists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return scroll_lock_getTargetScrollBarWidth(document.body, onlyExists);
};
var getCurrentPageScrollBarWidth = function getCurrentPageScrollBarWidth() {
  return scroll_lock_getCurrentTargetScrollBarWidth(document.body);
};
var scroll_lock_addScrollableTarget = function addScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-scrollable', '');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeScrollableTarget = function removeScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.removeAttribute('data-scroll-lock-scrollable');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addScrollableSelector = function addScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors.push(selector);
    });
  }
};
var scroll_lock_removeScrollableSelector = function removeScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors = state.scrollableSelectors.filter(function (sSelector) {
        return sSelector !== selector;
      });
    });
  }
};
var scroll_lock_addLockableTarget = function addLockableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-lockable', '');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }
  }
};
var scroll_lock_addLockableSelector = function addLockableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.lockableSelectors.push(selector);
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }

    scroll_lock_addFillGapSelector(selector);
  }
};
var scroll_lock_setFillGapMethod = function setFillGapMethod(method) {
  if (method) {
    if (FILL_GAP_AVAILABLE_METHODS.indexOf(method) !== -1) {
      state.fillGapMethod = method;
      refillGaps();
    } else {
      var methods = FILL_GAP_AVAILABLE_METHODS.join(', ');
      throwError("\"".concat(method, "\" method is not available!\nAvailable fill gap methods: ").concat(methods, "."));
    }
  }
};
var scroll_lock_addFillGapTarget = function addFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-fill-gap', '');

          if (!state.scroll) {
            scroll_lock_fillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeFillGapTarget = function removeFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.removeAttribute('data-scroll-lock-fill-gap');

          if (!state.scroll) {
            scroll_lock_unfillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addFillGapSelector = function addFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      if (state.fillGapSelectors.indexOf(selector) === -1) {
        state.fillGapSelectors.push(selector);

        if (!state.scroll) {
          scroll_lock_fillGapSelector(selector);
        }
      }
    });
  }
};
var scroll_lock_removeFillGapSelector = function removeFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.fillGapSelectors = state.fillGapSelectors.filter(function (fSelector) {
        return fSelector !== selector;
      });

      if (!state.scroll) {
        scroll_lock_unfillGapSelector(selector);
      }
    });
  }
};
var refillGaps = function refillGaps() {
  if (!state.scroll) {
    fillGaps();
  }
};

var scroll_lock_hideLockableOverflow = function hideLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_hideLockableOverflowSelector(selector);
};

var scroll_lock_showLockableOverflow = function showLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_showLockableOverflowSelector(selector);
};

var scroll_lock_hideLockableOverflowSelector = function hideLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_hideLockableOverflowTarget($target);
  });
};

var scroll_lock_showLockableOverflowSelector = function showLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_showLockableOverflowTarget($target);
  });
};

var scroll_lock_hideLockableOverflowTarget = function hideLockableOverflowTarget($target) {
  if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') !== 'true') {
    var computedStyle = window.getComputedStyle($target);
    $target.setAttribute('data-scroll-lock-saved-overflow-y-property', computedStyle.overflowY);
    $target.setAttribute('data-scroll-lock-saved-inline-overflow-property', $target.style.overflow);
    $target.setAttribute('data-scroll-lock-saved-inline-overflow-y-property', $target.style.overflowY);
    $target.style.overflow = 'hidden';
    $target.setAttribute('data-scroll-lock-locked', 'true');
  }
};

var scroll_lock_showLockableOverflowTarget = function showLockableOverflowTarget($target) {
  if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') === 'true') {
    $target.style.overflow = $target.getAttribute('data-scroll-lock-saved-inline-overflow-property');
    $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-inline-overflow-y-property');
    $target.removeAttribute('data-scroll-lock-saved-overflow-property');
    $target.removeAttribute('data-scroll-lock-saved-inline-overflow-property');
    $target.removeAttribute('data-scroll-lock-saved-inline-overflow-y-property');
    $target.removeAttribute('data-scroll-lock-locked');
  }
};

var fillGaps = function fillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_fillGapSelector(selector);
  });
};

var unfillGaps = function unfillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_unfillGapSelector(selector);
  });
};

var scroll_lock_fillGapSelector = function fillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  var isLockable = state.lockableSelectors.indexOf(selector) !== -1;
  eachNode($targets, function ($target) {
    scroll_lock_fillGapTarget($target, isLockable);
  });
};

var scroll_lock_fillGapTarget = function fillGapTarget($target) {
  var isLockable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var scrollBarWidth;

    if ($target.getAttribute('data-scroll-lock-lockable') === '' || isLockable) {
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($target, true);
    } else {
      var $lockableParent = findParentBySelector($target, arrayAsSelector(state.lockableSelectors));
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($lockableParent, true);
    }

    if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
      scroll_lock_unfillGapTarget($target);
    }

    var computedStyle = window.getComputedStyle($target);
    $target.setAttribute('data-scroll-lock-filled-gap', 'true');
    $target.setAttribute('data-scroll-lock-current-fill-gap-method', state.fillGapMethod);

    if (state.fillGapMethod === 'margin') {
      var currentMargin = parseFloat(computedStyle.marginRight);
      $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
    } else if (state.fillGapMethod === 'width') {
      $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'max-width') {
      $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'padding') {
      var currentPadding = parseFloat(computedStyle.paddingRight);
      $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
    }
  }
};

var scroll_lock_unfillGapSelector = function unfillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_unfillGapTarget($target);
  });
};

var scroll_lock_unfillGapTarget = function unfillGapTarget($target) {
  if (isElement($target)) {
    if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
      var currentFillGapMethod = $target.getAttribute('data-scroll-lock-current-fill-gap-method');
      $target.removeAttribute('data-scroll-lock-filled-gap');
      $target.removeAttribute('data-scroll-lock-current-fill-gap-method');

      if (currentFillGapMethod === 'margin') {
        $target.style.marginRight = "";
      } else if (currentFillGapMethod === 'width') {
        $target.style.width = "";
      } else if (currentFillGapMethod === 'max-width') {
        $target.style.maxWidth = "";
      } else if (currentFillGapMethod === 'padding') {
        $target.style.paddingRight = "";
      }
    }
  }
};

var onResize = function onResize(e) {
  refillGaps();
};

var onTouchStart = function onTouchStart(e) {
  if (!state.scroll) {
    state.startTouchY = e.touches[0].clientY;
    state.startTouchX = e.touches[0].clientX;
  }
};

var scroll_lock_onTouchMove = function onTouchMove(e) {
  if (!state.scroll) {
    var startTouchY = state.startTouchY,
        startTouchX = state.startTouchX;
    var currentClientY = e.touches[0].clientY;
    var currentClientX = e.touches[0].clientX;

    if (e.touches.length < 2) {
      var selector = arrayAsSelector(state.scrollableSelectors);
      var direction = {
        up: startTouchY < currentClientY,
        down: startTouchY > currentClientY,
        left: startTouchX < currentClientX,
        right: startTouchX > currentClientX
      };
      var directionWithOffset = {
        up: startTouchY + TOUCH_DIRECTION_DETECT_OFFSET < currentClientY,
        down: startTouchY - TOUCH_DIRECTION_DETECT_OFFSET > currentClientY,
        left: startTouchX + TOUCH_DIRECTION_DETECT_OFFSET < currentClientX,
        right: startTouchX - TOUCH_DIRECTION_DETECT_OFFSET > currentClientX
      };

      var handle = function handle($el) {
        var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if ($el) {
          var parentScrollableEl = findParentBySelector($el, selector, false);

          if (elementIsInputRange($el)) {
            return false;
          }

          if (skip || elementIsScrollableField($el) && findParentBySelector($el, selector) || elementHasSelector($el, selector)) {
            var prevent = false;

            if (elementScrollLeftOnStart($el) && elementScrollLeftOnEnd($el)) {
              if (direction.up && elementScrollTopOnStart($el) || direction.down && elementScrollTopOnEnd($el)) {
                prevent = true;
              }
            } else if (elementScrollTopOnStart($el) && elementScrollTopOnEnd($el)) {
              if (direction.left && elementScrollLeftOnStart($el) || direction.right && elementScrollLeftOnEnd($el)) {
                prevent = true;
              }
            } else if (directionWithOffset.up && elementScrollTopOnStart($el) || directionWithOffset.down && elementScrollTopOnEnd($el) || directionWithOffset.left && elementScrollLeftOnStart($el) || directionWithOffset.right && elementScrollLeftOnEnd($el)) {
              prevent = true;
            }

            if (prevent) {
              if (parentScrollableEl) {
                handle(parentScrollableEl, true);
              } else {
                if (e.cancelable) {
                  e.preventDefault();
                }
              }
            }
          } else {
            handle(parentScrollableEl);
          }
        } else {
          if (e.cancelable) {
            e.preventDefault();
          }
        }
      };

      handle(e.target);
    }
  }
};

var onTouchEnd = function onTouchEnd(e) {
  if (!state.scroll) {
    state.startTouchY = 0;
    state.startTouchX = 0;
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('resize', onResize);
}

if (typeof document !== 'undefined') {
  document.addEventListener('touchstart', onTouchStart);
  document.addEventListener('touchmove', scroll_lock_onTouchMove, {
    passive: false
  });
  document.addEventListener('touchend', onTouchEnd);
}

var deprecatedMethods = {
  hide: function hide(target) {
    throwError('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget');
    disablePageScroll(target);
  },
  show: function show(target) {
    throwError('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget');
    enablePageScroll(target);
  },
  toggle: function toggle(target) {
    throwError('"toggle" is deprecated! Do not use it.');

    if (getScrollState()) {
      disablePageScroll();
    } else {
      enablePageScroll(target);
    }
  },
  getState: function getState() {
    throwError('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate');
    return getScrollState();
  },
  getWidth: function getWidth() {
    throwError('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth');
    return getPageScrollBarWidth();
  },
  getCurrentWidth: function getCurrentWidth() {
    throwError('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth');
    return getCurrentPageScrollBarWidth();
  },
  setScrollableTargets: function setScrollableTargets(target) {
    throwError('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget');
    scroll_lock_addScrollableTarget(target);
  },
  setFillGapSelectors: function setFillGapSelectors(selector) {
    throwError('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector');
    scroll_lock_addFillGapSelector(selector);
  },
  setFillGapTargets: function setFillGapTargets(target) {
    throwError('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget');
    scroll_lock_addFillGapTarget(target);
  },
  clearQueue: function clearQueue() {
    throwError('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks');
    clearQueueScrollLocks();
  }
};

var scrollLock = _objectSpread({
  disablePageScroll: disablePageScroll,
  enablePageScroll: enablePageScroll,
  getScrollState: getScrollState,
  clearQueueScrollLocks: clearQueueScrollLocks,
  getTargetScrollBarWidth: scroll_lock_getTargetScrollBarWidth,
  getCurrentTargetScrollBarWidth: scroll_lock_getCurrentTargetScrollBarWidth,
  getPageScrollBarWidth: getPageScrollBarWidth,
  getCurrentPageScrollBarWidth: getCurrentPageScrollBarWidth,
  addScrollableSelector: scroll_lock_addScrollableSelector,
  removeScrollableSelector: scroll_lock_removeScrollableSelector,
  addScrollableTarget: scroll_lock_addScrollableTarget,
  removeScrollableTarget: scroll_lock_removeScrollableTarget,
  addLockableSelector: scroll_lock_addLockableSelector,
  addLockableTarget: scroll_lock_addLockableTarget,
  addFillGapSelector: scroll_lock_addFillGapSelector,
  removeFillGapSelector: scroll_lock_removeFillGapSelector,
  addFillGapTarget: scroll_lock_addFillGapTarget,
  removeFillGapTarget: scroll_lock_removeFillGapTarget,
  setFillGapMethod: scroll_lock_setFillGapMethod,
  refillGaps: refillGaps,
  _state: state
}, deprecatedMethods);

/* harmony default export */ var scroll_lock = __webpack_exports__["default"] = (scrollLock);

/***/ })
/******/ ])["default"];
});

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./src/core/Meganav/component.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Meganav)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.css */ "./src/core/Meganav/component.css");
/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-query */ "./src/core/dom-query.js");
/* harmony import */ var _MeganavControl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MeganavControl/component */ "./src/core/MeganavControl/component.js");
/* harmony import */ var _MeganavControlMobileDropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MeganavControlMobileDropdown/component */ "./src/core/MeganavControlMobileDropdown/component.js");
/* harmony import */ var _MeganavControlMobilePanelOpen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MeganavControlMobilePanelOpen/component */ "./src/core/MeganavControlMobilePanelOpen/component.js");
/* harmony import */ var _MeganavControlMobilePanelClose_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MeganavControlMobilePanelClose/component */ "./src/core/MeganavControlMobilePanelClose/component.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // Glossary:
// item - is the element which contains both the control and the panel - these are adjacent
// control - interactive element that controls showing and hiding of dropdown or panel
// panel - container for meganav content
// dropdown - container for top level items on mobile
// clear - return to initial state
// teardown - remove all event listeners (for example when removing nodes)





 // Close menu when user clicks outside of viewport

var windowOnBlur = function windowOnBlur(closeAll) {
  window.onblur = function () {
    return closeAll();
  };

  return {
    teardown: function teardown() {
      return window.onblur = null;
    }
  };
}; // Close menu when click/tap outside of nav


var documentClick = function documentClick(closeAll) {
  var meganav = (0,_dom_query__WEBPACK_IMPORTED_MODULE_2__.queryId)("meganav");

  var clickHandler = function clickHandler(e) {
    if (meganav.contains(e.target)) return;
    closeAll();
  };

  document.addEventListener("click", clickHandler);
  return {
    teardown: function teardown() {
      return document.removeEventListener("click", clickHandler);
    }
  };
}; // Invert from transparent to white


var documentScroll = function documentScroll(themeName) {
  if (themeName !== "transparentToWhite") return {
    teardown: function teardown() {}
  };
  var meganav = (0,_dom_query__WEBPACK_IMPORTED_MODULE_2__.queryId)("meganav");
  var navItems = (0,_dom_query__WEBPACK_IMPORTED_MODULE_2__.queryIdAll)("meganav-link");
  var controlMobileDropdownMenu = (0,_dom_query__WEBPACK_IMPORTED_MODULE_2__.queryId)("meganav-control-mobile-dropdown-menu");
  var controlMobileDropdownClose = (0,_dom_query__WEBPACK_IMPORTED_MODULE_2__.queryId)("meganav-control-mobile-dropdown-close");
  var controls = (0,_dom_query__WEBPACK_IMPORTED_MODULE_2__.queryIdAll)("meganav-control");
  var signUpBtn = (0,_dom_query__WEBPACK_IMPORTED_MODULE_2__.queryId)("meganav-sign-up-btn");
  var invertTextCollection = [].concat(_toConsumableArray(Array.from(controls)), _toConsumableArray(Array.from(navItems)), [(0,_dom_query__WEBPACK_IMPORTED_MODULE_2__.queryId)("meganav-logo")]);

  var invertMobleDropdownColor = function invertMobleDropdownColor(invert) {
    var whiteToBlack = ["ui-icon-white", "ui-icon-cool-black"];
    var blackToWhite = [].concat(whiteToBlack).reverse();

    if (invert) {
      var _controlMobileDropdow, _controlMobileDropdow2;

      controlMobileDropdownMenu === null || controlMobileDropdownMenu === void 0 ? void 0 : (_controlMobileDropdow = controlMobileDropdownMenu.classList).replace.apply(_controlMobileDropdow, whiteToBlack);
      controlMobileDropdownClose === null || controlMobileDropdownClose === void 0 ? void 0 : (_controlMobileDropdow2 = controlMobileDropdownClose.classList).replace.apply(_controlMobileDropdow2, whiteToBlack);
    } else {
      var _controlMobileDropdow3, _controlMobileDropdow4;

      controlMobileDropdownMenu === null || controlMobileDropdownMenu === void 0 ? void 0 : (_controlMobileDropdow3 = controlMobileDropdownMenu.classList).replace.apply(_controlMobileDropdow3, _toConsumableArray(blackToWhite));
      controlMobileDropdownClose === null || controlMobileDropdownClose === void 0 ? void 0 : (_controlMobileDropdow4 = controlMobileDropdownClose.classList).replace.apply(_controlMobileDropdow4, _toConsumableArray(blackToWhite));
    }
  };

  var inverSignupBtnColors = function inverSignupBtnColors(invert) {
    if (invert) {
      signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.classList.replace("bg-white", "bg-cool-black");
      signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.classList.replace("text-cool-black", "text-white");
    } else {
      signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.classList.replace("bg-cool-black", "bg-white");
      signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.classList.replace("text-white", "text-cool-black");
    }
  };

  var scrollHandler = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    if (window.scrollY > 5) {
      meganav.classList.replace("bg-transparent", "bg-white");
      inverSignupBtnColors(true);
      invertMobleDropdownColor(true);
      invertTextCollection.forEach(function (n) {
        return n.classList.replace("text-white", "text-cool-black");
      });
    } else {
      meganav.classList.replace("bg-white", "bg-transparent");
      inverSignupBtnColors(false);
      invertMobleDropdownColor(false);
      invertTextCollection.forEach(function (n) {
        return n.classList.replace("text-cool-black", "text-white");
      });
    }
  }, 150);
  document.addEventListener("scroll", scrollHandler);
  return {
    teardown: function teardown() {
      return document.removeEventListener("scroll", scrollHandler);
    }
  };
};

function Meganav() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    themeName: null
  },
      themeName = _ref.themeName;

  var controls = (0,_MeganavControl_component__WEBPACK_IMPORTED_MODULE_3__.default)();
  var panelOpenControls = (0,_MeganavControlMobilePanelOpen_component__WEBPACK_IMPORTED_MODULE_5__.default)();
  var panelCloseControls = (0,_MeganavControlMobilePanelClose_component__WEBPACK_IMPORTED_MODULE_6__.default)();
  var mobileDropdownControl = (0,_MeganavControlMobileDropdown_component__WEBPACK_IMPORTED_MODULE_4__.default)({
    clearPanels: function clearPanels() {
      return [].concat(_toConsumableArray(panelOpenControls), _toConsumableArray(panelCloseControls)).forEach(function (i) {
        return i.clear();
      });
    }
  });

  var closeAll = function closeAll() {
    return [mobileDropdownControl].concat(_toConsumableArray(panelOpenControls), _toConsumableArray(panelCloseControls), _toConsumableArray(controls)).forEach(function (i) {
      return i.clear();
    });
  };

  var teardowns = [documentScroll(themeName), documentClick(closeAll), windowOnBlur(closeAll), mobileDropdownControl].concat(_toConsumableArray(controls), _toConsumableArray(panelOpenControls), _toConsumableArray(panelCloseControls)).map(function (i) {
    return i.teardown;
  });
  return function () {
    return teardowns.forEach(function (teardown) {
      return teardown();
    });
  };
}
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL01lZ2FuYXZDb250cm9sL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9zcmMvY29yZS9NZWdhbmF2Q29udHJvbE1vYmlsZURyb3Bkb3duL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9zcmMvY29yZS9NZWdhbmF2Q29udHJvbE1vYmlsZVBhbmVsQ2xvc2UvY29tcG9uZW50LmpzIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL01lZ2FuYXZDb250cm9sTW9iaWxlUGFuZWxPcGVuL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9zcmMvY29yZS9jc3MuanMiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdLy4vc3JjL2NvcmUvZG9tLXF1ZXJ5LmpzIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdLy4vc3JjL2NvcmUvTWVnYW5hdi9jb21wb25lbnQuY3NzPzBjNjUiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdLy4vbm9kZV9tb2R1bGVzL3Njcm9sbC1sb2NrL2Rpc3Qvc2Nyb2xsLWxvY2suanMiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL01lZ2FuYXYvY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIk1lZ2FuYXZDb250cm9sIiwiY29udHJvbHMiLCJBcnJheSIsImZyb20iLCJxdWVyeUlkQWxsIiwicGFuZWxzIiwibWRCcmVha3BvaW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsImhvdmVyRW5hYmxlZCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY29udHJvbHNIYXZlRm9jdXMiLCJzb21lIiwiY29udHJvbCIsImFjdGl2ZUVsZW1lbnQiLCJob3ZlciIsInBhbmVsIiwib3BlbiIsImNsYXNzZXMiLCJjbGFzc0xpc3QiLCJyZXBsYWNlIiwicmV2ZXJzZSIsInNldEF0dHJpYnV0ZSIsIm1vdXNlZW50ZXJIYW5kbGVyIiwibW91c2VsZWF2ZUhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJmb3JFYWNoIiwibm9kZSIsImFyaWFFeHBhbmRlZCIsImdldEF0dHJpYnV0ZSIsIm1hcCIsIml0ZW0iLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsImNsaWNrIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJhZGRFdmVudExpc3RlbmVyIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXIiLCJmbGF0IiwiTWVnYW5hdkNvbnRyb2xNb2JpbGVEcm9wZG93biIsImNsZWFyUGFuZWxzIiwicXVlcnlJZCIsImRyb3Bkb3duIiwibWVudUljb24iLCJjbG9zZUljb24iLCJzY3JvbGxMb2NrIiwidG9nZ2xlIiwicmVtb3ZlIiwiYWRkIiwiY2xvc2VDb250cm9scyIsIm9wZW5Db250cm9scyIsImJ0biIsIm9wZW5CdG4iLCJzdHlsZSIsImhlaWdodCIsImZpbmQiLCJoYW5kbGVyIiwibWVnYW5hdkhlaWdodCIsInJlbXNUb1BpeGVsVmFsdWUiLCJjbG9zZUJ0biIsImlubmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicmVtU3RyaW5nIiwicGFyc2VGbG9hdCIsImZvbnRTaXplIiwidmFsIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3dPbkJsdXIiLCJjbG9zZUFsbCIsIm9uYmx1ciIsImRvY3VtZW50Q2xpY2siLCJtZWdhbmF2IiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnRTY3JvbGwiLCJ0aGVtZU5hbWUiLCJuYXZJdGVtcyIsImNvbnRyb2xNb2JpbGVEcm9wZG93bk1lbnUiLCJjb250cm9sTW9iaWxlRHJvcGRvd25DbG9zZSIsInNpZ25VcEJ0biIsImludmVydFRleHRDb2xsZWN0aW9uIiwiaW52ZXJ0TW9ibGVEcm9wZG93bkNvbG9yIiwiaW52ZXJ0Iiwid2hpdGVUb0JsYWNrIiwiYmxhY2tUb1doaXRlIiwiaW52ZXJTaWdudXBCdG5Db2xvcnMiLCJzY3JvbGxIYW5kbGVyIiwidGhyb3R0bGUiLCJzY3JvbGxZIiwibiIsIk1lZ2FuYXYiLCJwYW5lbE9wZW5Db250cm9scyIsIk1vYmlsZVBhbmVsT3BlbkNsaWNrIiwicGFuZWxDbG9zZUNvbnRyb2xzIiwiTW9iaWxlUGFuZWxDbG9zZUNsaWNrIiwibW9iaWxlRHJvcGRvd25Db250cm9sIiwiaSIsInRlYXJkb3ducyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx1REFBdUQ7QUFDOUYsQ0FBQztBQUNELE87Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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NEIscUJBREYsNEJBRUtKLGlCQUZMLHNCQUdLRSxrQkFITCxzQkFJS3JHLFFBSkwsR0FLRTZCLE9BTEYsQ0FLVSxVQUFDMkUsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQzdELEtBQUYsRUFBUDtBQUFBLEtBTFYsQ0FEZTtBQUFBLEdBQWpCOztBQVFBLE1BQU04RCxTQUFTLEdBQUcsQ0FDaEJ2QixjQUFjLENBQUNDLFNBQUQsQ0FERSxFQUVoQk4sYUFBYSxDQUFDRixRQUFELENBRkcsRUFHaEJELFlBQVksQ0FBQ0MsUUFBRCxDQUhJLEVBSWhCNEIscUJBSmdCLDRCQUtidkcsUUFMYSxzQkFNYm1HLGlCQU5hLHNCQU9iRSxrQkFQYSxHQVFoQnBFLEdBUmdCLENBUVosVUFBQ3VFLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUMvRCxRQUFUO0FBQUEsR0FSWSxDQUFsQjtBQVVBLFNBQU87QUFBQSxXQUFNZ0UsU0FBUyxDQUFDNUUsT0FBVixDQUFrQixVQUFDWSxRQUFEO0FBQUEsYUFBY0EsUUFBUSxFQUF0QjtBQUFBLEtBQWxCLENBQU47QUFBQSxHQUFQO0FBQ0QsQyIsImZpbGUiOiJjb3JlL01lZ2FuYXYvY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQWJseVVpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFibHlVaVwiXSA9IHJvb3RbXCJBYmx5VWlcIl0gfHwge30sIHJvb3RbXCJBYmx5VWlcIl1bXCJDb3JlXCJdID0gcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl0gfHwge30sIHJvb3RbXCJBYmx5VWlcIl1bXCJDb3JlXCJdW1wiTWVnYW5hdlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCB7IHF1ZXJ5SWRBbGwgfSBmcm9tIFwiLi4vZG9tLXF1ZXJ5XCI7XG5cbmNvbnN0IE1lZ2FuYXZDb250cm9sID0gKCkgPT4ge1xuICBjb25zdCBjb250cm9scyA9IEFycmF5LmZyb20ocXVlcnlJZEFsbChcIm1lZ2FuYXYtY29udHJvbFwiKSk7XG4gIGNvbnN0IHBhbmVscyA9IEFycmF5LmZyb20ocXVlcnlJZEFsbChcIm1lZ2FuYXYtcGFuZWxcIikpO1xuICBjb25zdCBtZEJyZWFrcG9pbnQgPSBnZXRDb21wdXRlZFN0eWxlKFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICApLmdldFByb3BlcnR5VmFsdWUoXCItLWJwLW1kXCIpO1xuXG4gIGNvbnN0IGhvdmVyRW5hYmxlZCA9ICgpID0+XG4gICAgd2luZG93Lm1hdGNoTWVkaWEoXG4gICAgICBgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSBhbmQgKG1pbi13aWR0aDogJHttZEJyZWFrcG9pbnR9KWBcbiAgICApLm1hdGNoZXM7XG5cbiAgY29uc3QgY29udHJvbHNIYXZlRm9jdXMgPSAoKSA9PlxuICAgIGNvbnRyb2xzLnNvbWUoKGNvbnRyb2wpID0+IGNvbnRyb2wgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gIGNvbnN0IGhvdmVyID0gKGNvbnRyb2wsIHBhbmVsLCBvcGVuKSA9PiB7XG4gICAgaWYgKGhvdmVyRW5hYmxlZCgpICYmICFjb250cm9sc0hhdmVGb2N1cygpKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gW1wiaW52aXNpYmxlXCIsIFwidmlzaWJsZVwiXTtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZXBsYWNlKC4uLihvcGVuID8gY2xhc3NlcyA6IGNsYXNzZXMucmV2ZXJzZSgpKSk7XG4gICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgb3Blbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vdXNlZW50ZXJIYW5kbGVyID0gKGNvbnRyb2wsIHBhbmVsKSA9PiAoKSA9PlxuICAgIGhvdmVyKGNvbnRyb2wsIHBhbmVsLCB0cnVlKTtcblxuICBjb25zdCBtb3VzZWxlYXZlSGFuZGxlciA9IChjb250cm9sLCBwYW5lbCkgPT4gKCkgPT5cbiAgICBob3Zlcihjb250cm9sLCBwYW5lbCwgZmFsc2UpO1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChjb250cm9sLCBwYW5lbCkgPT4gKCkgPT4ge1xuICAgIGNvbnRyb2xzLmZvckVhY2goXG4gICAgICAobm9kZSkgPT4gbm9kZSAhPT0gY29udHJvbCAmJiBub2RlLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpXG4gICAgKTtcblxuICAgIHBhbmVscy5mb3JFYWNoKFxuICAgICAgKG5vZGUpID0+IG5vZGUgIT09IHBhbmVsICYmIG5vZGUuY2xhc3NMaXN0LnJlcGxhY2UoXCJ2aXNpYmxlXCIsIFwiaW52aXNpYmxlXCIpXG4gICAgKTtcblxuICAgIGNvbnN0IGFyaWFFeHBhbmRlZCA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKTtcblxuICAgIGlmIChhcmlhRXhwYW5kZWQpIHtcbiAgICAgIGNvbnRyb2wuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZXBsYWNlKFwiaW52aXNpYmxlXCIsIFwidmlzaWJsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZXBsYWNlKFwidmlzaWJsZVwiLCBcImludmlzaWJsZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNvbnRyb2xzXG4gICAgLm1hcCgoY29udHJvbCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGNvbnRyb2wucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCMke2NvbnRyb2wuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gXG4gICAgICApO1xuICAgICAgY29uc3QgY2xpY2sgPSBjbGlja0hhbmRsZXIoY29udHJvbCwgcGFuZWwpO1xuICAgICAgY29uc3QgbW91c2VlbnRlciA9IG1vdXNlZW50ZXJIYW5kbGVyKGNvbnRyb2wsIHBhbmVsKTtcbiAgICAgIGNvbnN0IG1vdXNlbGVhdmUgPSBtb3VzZWxlYXZlSGFuZGxlcihjb250cm9sLCBwYW5lbCk7XG5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlcik7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1vdXNlbGVhdmUpO1xuICAgICAgY29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2spO1xuXG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdGVhcmRvd246ICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlcik7XG4gICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1vdXNlbGVhdmUpO1xuICAgICAgICAgICAgY29udHJvbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2spO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xlYXI6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVwbGFjZShcInZpc2libGVcIiwgXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfSlcbiAgICAuZmxhdCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVnYW5hdkNvbnRyb2w7XG4iLCJpbXBvcnQgc2Nyb2xsTG9jayBmcm9tIFwic2Nyb2xsLWxvY2tcIjtcblxuaW1wb3J0IHsgcXVlcnlJZCB9IGZyb20gXCIuLi9kb20tcXVlcnlcIjtcblxuY29uc3QgTWVnYW5hdkNvbnRyb2xNb2JpbGVEcm9wZG93biA9ICh7IGNsZWFyUGFuZWxzIH0pID0+IHtcbiAgY29uc3QgY29udHJvbCA9IHF1ZXJ5SWQoXCJtZWdhbmF2LWNvbnRyb2wtbW9iaWxlLWRyb3Bkb3duXCIpO1xuICBjb25zdCBkcm9wZG93biA9IHF1ZXJ5SWQoXCJtZWdhbmF2LW1vYmlsZS1kcm9wZG93blwiKTtcbiAgY29uc3QgbWVudUljb24gPSBxdWVyeUlkKFwibWVnYW5hdi1jb250cm9sLW1vYmlsZS1kcm9wZG93bi1tZW51XCIpO1xuICBjb25zdCBjbG9zZUljb24gPSBxdWVyeUlkKFwibWVnYW5hdi1jb250cm9sLW1vYmlsZS1kcm9wZG93bi1jbG9zZVwiKTtcblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJpYUV4cGFuZGVkID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpO1xuXG4gICAgaWYgKGFyaWFFeHBhbmRlZCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVwbGFjZShcImludmlzaWJsZVwiLCBcInZpc2libGVcIik7XG4gICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdHJ1ZSk7XG4gICAgICBzY3JvbGxMb2NrLmRpc2FibGVQYWdlU2Nyb2xsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZXBsYWNlKFwidmlzaWJsZVwiLCBcImludmlzaWJsZVwiKTtcbiAgICAgIGNvbnRyb2wuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgICBzY3JvbGxMb2NrLmVuYWJsZVBhZ2VTY3JvbGwoKTtcbiAgICAgIGNsZWFyUGFuZWxzKCk7XG4gICAgfVxuXG4gICAgbWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBjbG9zZUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfTtcblxuICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuXG4gIHJldHVybiB7XG4gICAgdGVhcmRvd246ICgpID0+IHtcbiAgICAgIGNvbnRyb2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICBzY3JvbGxMb2NrLmVuYWJsZVBhZ2VTY3JvbGwoKTtcbiAgICB9LFxuICAgIGNsZWFyOiAoKSA9PiB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVwbGFjZShcInZpc2libGVcIiwgXCJpbnZpc2libGVcIik7XG4gICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICAgICAgbWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgc2Nyb2xsTG9jay5lbmFibGVQYWdlU2Nyb2xsKCk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZ2FuYXZDb250cm9sTW9iaWxlRHJvcGRvd247XG4iLCJpbXBvcnQgeyBxdWVyeUlkQWxsIH0gZnJvbSBcIi4uL2RvbS1xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGNsb3NlQ29udHJvbHMgPSBBcnJheS5mcm9tKFxuICAgIHF1ZXJ5SWRBbGwoXCJtZWdhbmF2LWNvbnRyb2wtbW9iaWxlLXBhbmVsLWNsb3NlXCIpXG4gICk7XG4gIGNvbnN0IG9wZW5Db250cm9scyA9IEFycmF5LmZyb20oXG4gICAgcXVlcnlJZEFsbChcIm1lZ2FuYXYtY29udHJvbC1tb2JpbGUtcGFuZWwtb3BlblwiKVxuICApO1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChidG4sIG9wZW5CdG4sIHBhbmVsKSA9PiAoKSA9PiB7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICAgIG9wZW5CdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgcGFuZWwuY2xhc3NMaXN0LnJlcGxhY2UoXCJibG9ja1wiLCBcImhpZGRlblwiKTtcbiAgICBwYW5lbC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBjbG9zZUNvbnRyb2xzLm1hcCgoYnRuKSA9PiB7XG4gICAgY29uc3Qgb3BlbkJ0biA9IG9wZW5Db250cm9scy5maW5kKFxuICAgICAgKG9wZW4pID0+XG4gICAgICAgIG9wZW4uZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSA9PT0gYnRuLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIilcbiAgICApO1xuICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtidG4uZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gXG4gICAgKTtcbiAgICBjb25zdCBoYW5kbGVyID0gY2xpY2tIYW5kbGVyKGJ0biwgb3BlbkJ0biwgcGFuZWwpO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZWFyZG93bjogKCkgPT4gYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKSxcbiAgICAgIGNsZWFyOiAoKSA9PiBidG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSksXG4gICAgfTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgcXVlcnlJZCwgcXVlcnlJZEFsbCB9IGZyb20gXCIuLi9kb20tcXVlcnlcIjtcbmltcG9ydCB7IHJlbXNUb1BpeGVsVmFsdWUgfSBmcm9tIFwiLi4vY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgY2xvc2VDb250cm9scyA9IEFycmF5LmZyb20oXG4gICAgcXVlcnlJZEFsbChcIm1lZ2FuYXYtY29udHJvbC1tb2JpbGUtcGFuZWwtY2xvc2VcIilcbiAgKTtcbiAgY29uc3Qgb3BlbkNvbnRyb2xzID0gQXJyYXkuZnJvbShcbiAgICBxdWVyeUlkQWxsKFwibWVnYW5hdi1jb250cm9sLW1vYmlsZS1wYW5lbC1vcGVuXCIpXG4gICk7XG4gIGNvbnN0IGRyb3Bkb3duID0gcXVlcnlJZChcIm1lZ2FuYXYtbW9iaWxlLWRyb3Bkb3duXCIpO1xuXG4gIC8vIEhlaWdodCBpcyBkZWZpbmVkIGluIHJlbSdzIHNvIHRvIGdldCB0aGUgcGl4ZWwgdmFsdWUgd2UgbmVlZCB0byBmaW5kIHRoZSBmb250U2l6ZSBvbiByb290XG4gIGNvbnN0IG1lZ2FuYXZIZWlnaHQgPSByZW1zVG9QaXhlbFZhbHVlKFxuICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICAgXCItLXVpLW1lZ2FuYXYtaGVpZ2h0XCJcbiAgICApXG4gICk7XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGJ0biwgY2xvc2VCdG4sIHBhbmVsKSA9PiAoKSA9PiB7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdHJ1ZSk7XG4gICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcbiAgICBwYW5lbC5jbGFzc0xpc3QucmVwbGFjZShcImhpZGRlblwiLCBcImJsb2NrXCIpO1xuXG4gICAgLy8gT24gZGV2aWNlcyB3aGVyZSB3ZSBkb24ndCBoYXZlIGVub3VnaCBzcGFjZSBmb3IgdGhlIHBhbmVsLCBzZXQgaXQncyBoZWlnaHQgdG9cbiAgICAvLyB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCAobWludXMgdGhlIG1lZ2FuYXYgaGVpZ2h0KSAtIHRoaXMgd2lsbCB0cmlnZ2VyIGEgc2Nyb2xsLlxuICAgIC8vIE90aGVyd2lzZSBqdXN0IHNldCBpdCB0byB0aGUgcGFuZWwgaGVpZ2h0LiBUaGlzIGhhbmRsZXMgdGhlIGNhc2Ugd2hlcmUgdGhlIHJhdGlvIG9mIHZlcnRpY2FsXG4gICAgLy8gc3BhY2UgdG8gaG9yaXpvbnRhbCBpcyBlc3BlY2lhbGx5IGhpZ2ggKHRoaW5rIHRhYmxldHMsIGJ1dCBub3Qgb25seSkuXG4gICAgcGFuZWwuc3R5bGUuaGVpZ2h0ID0gYCR7XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLSBtZWdhbmF2SGVpZ2h0ID4gcGFuZWwub2Zmc2V0SGVpZ2h0XG4gICAgICAgID8gcGFuZWwub2Zmc2V0SGVpZ2h0XG4gICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0IC0gbWVnYW5hdkhlaWdodFxuICAgIH1weGA7XG4gIH07XG5cbiAgcmV0dXJuIG9wZW5Db250cm9scy5tYXAoKGJ0bikgPT4ge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gY2xvc2VDb250cm9scy5maW5kKFxuICAgICAgKG5vZGUpID0+XG4gICAgICAgIG5vZGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSA9PT0gYnRuLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIilcbiAgICApO1xuICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtidG4uZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gXG4gICAgKTtcbiAgICBjb25zdCBoYW5kbGVyID0gY2xpY2tIYW5kbGVyKGJ0biwgY2xvc2VCdG4sIHBhbmVsKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGVhcmRvd246ICgpID0+IGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlciksXG4gICAgICBjbGVhcjogKCkgPT4ge1xuICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVwbGFjZShcImJsb2NrXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwidWktbWVnYW5hdi1tb2JpbGUtZHJvcGRvd24tZXhwYW5kXCIpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgICAgIHBhbmVsLnN0eWxlLmhlaWdodCA9IG51bGw7XG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCByZW1zVG9QaXhlbFZhbHVlID0gKHJlbVN0cmluZykgPT5cbiAgcGFyc2VGbG9hdChyZW1TdHJpbmcpICpcbiAgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpO1xuIiwiZXhwb3J0IGNvbnN0IHF1ZXJ5SWQgPSAodmFsLCByb290ID0gZG9jdW1lbnQpID0+XG4gIHJvb3QucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHt2YWx9XWApO1xuXG5leHBvcnQgY29uc3QgcXVlcnlJZEFsbCA9ICh2YWwsIHJvb3QgPSBkb2N1bWVudCkgPT5cbiAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZD0ke3ZhbH1dYCk7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzY3JvbGxMb2NrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNjcm9sbExvY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvdG9vbHMuanNcbnZhciBhcmd1bWVudEFzQXJyYXkgPSBmdW5jdGlvbiBhcmd1bWVudEFzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJndW1lbnQpID8gYXJndW1lbnQgOiBbYXJndW1lbnRdO1xufTtcbnZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiBpc0VsZW1lbnQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBOb2RlO1xufTtcbnZhciBpc0VsZW1lbnRMaXN0ID0gZnVuY3Rpb24gaXNFbGVtZW50TGlzdChub2RlTGlzdCkge1xuICByZXR1cm4gbm9kZUxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdDtcbn07XG52YXIgZWFjaE5vZGUgPSBmdW5jdGlvbiBlYWNoTm9kZShub2RlTGlzdCwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGVMaXN0ICYmIGNhbGxiYWNrKSB7XG4gICAgbm9kZUxpc3QgPSBpc0VsZW1lbnRMaXN0KG5vZGVMaXN0KSA/IG5vZGVMaXN0IDogW25vZGVMaXN0XTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjYWxsYmFjayhub2RlTGlzdFtpXSwgaSwgbm9kZUxpc3QubGVuZ3RoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgdGhyb3dFcnJvciA9IGZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4gY29uc29sZS5lcnJvcihcIltzY3JvbGwtbG9ja10gXCIuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG52YXIgYXJyYXlBc1NlbGVjdG9yID0gZnVuY3Rpb24gYXJyYXlBc1NlbGVjdG9yKGFycmF5KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHZhciBzZWxlY3RvciA9IGFycmF5LmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG59O1xudmFyIG5vZGVMaXN0QXNBcnJheSA9IGZ1bmN0aW9uIG5vZGVMaXN0QXNBcnJheShub2RlTGlzdCkge1xuICB2YXIgbm9kZXMgPSBbXTtcbiAgZWFjaE5vZGUobm9kZUxpc3QsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGVzLnB1c2gobm9kZSk7XG4gIH0pO1xuICByZXR1cm4gbm9kZXM7XG59O1xudmFyIGZpbmRQYXJlbnRCeVNlbGVjdG9yID0gZnVuY3Rpb24gZmluZFBhcmVudEJ5U2VsZWN0b3IoJGVsLCBzZWxlY3Rvcikge1xuICB2YXIgc2VsZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgdmFyICRyb290ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBkb2N1bWVudDtcblxuICBpZiAoc2VsZiAmJiBub2RlTGlzdEFzQXJyYXkoJHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmluZGV4T2YoJGVsKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gJGVsO1xuICB9XG5cbiAgd2hpbGUgKCgkZWwgPSAkZWwucGFyZW50RWxlbWVudCkgJiYgbm9kZUxpc3RBc0FycmF5KCRyb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5pbmRleE9mKCRlbCkgPT09IC0xKSB7XG4gICAgO1xuICB9XG5cbiAgcmV0dXJuICRlbDtcbn07XG52YXIgZWxlbWVudEhhc1NlbGVjdG9yID0gZnVuY3Rpb24gZWxlbWVudEhhc1NlbGVjdG9yKCRlbCwgc2VsZWN0b3IpIHtcbiAgdmFyICRyb290ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBkb2N1bWVudDtcbiAgdmFyIGhhcyA9IG5vZGVMaXN0QXNBcnJheSgkcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuaW5kZXhPZigkZWwpICE9PSAtMTtcbiAgcmV0dXJuIGhhcztcbn07XG52YXIgZWxlbWVudEhhc092ZXJmbG93SGlkZGVuID0gZnVuY3Rpb24gZWxlbWVudEhhc092ZXJmbG93SGlkZGVuKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCRlbCk7XG4gICAgdmFyIG92ZXJmbG93SXNIaWRkZW4gPSBjb21wdXRlZFN0eWxlLm92ZXJmbG93ID09PSAnaGlkZGVuJztcbiAgICByZXR1cm4gb3ZlcmZsb3dJc0hpZGRlbjtcbiAgfVxufTtcbnZhciBlbGVtZW50U2Nyb2xsVG9wT25TdGFydCA9IGZ1bmN0aW9uIGVsZW1lbnRTY3JvbGxUb3BPblN0YXJ0KCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gJGVsLnNjcm9sbFRvcDtcbiAgICByZXR1cm4gc2Nyb2xsVG9wIDw9IDA7XG4gIH1cbn07XG52YXIgZWxlbWVudFNjcm9sbFRvcE9uRW5kID0gZnVuY3Rpb24gZWxlbWVudFNjcm9sbFRvcE9uRW5kKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gJGVsLnNjcm9sbFRvcDtcbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJGVsLnNjcm9sbEhlaWdodDtcbiAgICB2YXIgc2Nyb2xsVG9wV2l0aEhlaWdodCA9IHNjcm9sbFRvcCArICRlbC5vZmZzZXRIZWlnaHQ7XG4gICAgcmV0dXJuIHNjcm9sbFRvcFdpdGhIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0O1xuICB9XG59O1xudmFyIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCA9IGZ1bmN0aW9uIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCgkZWwpIHtcbiAgaWYgKCRlbCkge1xuICAgIGlmIChlbGVtZW50SGFzT3ZlcmZsb3dIaWRkZW4oJGVsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbExlZnQgPSAkZWwuc2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gc2Nyb2xsTGVmdCA8PSAwO1xuICB9XG59O1xudmFyIGVsZW1lbnRTY3JvbGxMZWZ0T25FbmQgPSBmdW5jdGlvbiBlbGVtZW50U2Nyb2xsTGVmdE9uRW5kKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9ICRlbC5zY3JvbGxMZWZ0O1xuICAgIHZhciBzY3JvbGxXaWR0aCA9ICRlbC5zY3JvbGxXaWR0aDtcbiAgICB2YXIgc2Nyb2xsTGVmdFdpdGhXaWR0aCA9IHNjcm9sbExlZnQgKyAkZWwub2Zmc2V0V2lkdGg7XG4gICAgcmV0dXJuIHNjcm9sbExlZnRXaXRoV2lkdGggPj0gc2Nyb2xsV2lkdGg7XG4gIH1cbn07XG52YXIgZWxlbWVudElzU2Nyb2xsYWJsZUZpZWxkID0gZnVuY3Rpb24gZWxlbWVudElzU2Nyb2xsYWJsZUZpZWxkKCRlbCkge1xuICB2YXIgc2VsZWN0b3IgPSAndGV4dGFyZWEsIFtjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJztcbiAgcmV0dXJuIGVsZW1lbnRIYXNTZWxlY3RvcigkZWwsIHNlbGVjdG9yKTtcbn07XG52YXIgZWxlbWVudElzSW5wdXRSYW5nZSA9IGZ1bmN0aW9uIGVsZW1lbnRJc0lucHV0UmFuZ2UoJGVsKSB7XG4gIHZhciBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwicmFuZ2VcIl0nO1xuICByZXR1cm4gZWxlbWVudEhhc1NlbGVjdG9yKCRlbCwgc2VsZWN0b3IpO1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3Njcm9sbC1sb2NrLmpzXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGlzYWJsZVBhZ2VTY3JvbGxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkaXNhYmxlUGFnZVNjcm9sbDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZW5hYmxlUGFnZVNjcm9sbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGVuYWJsZVBhZ2VTY3JvbGw7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldFNjcm9sbFN0YXRlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2V0U2Nyb2xsU3RhdGU7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNsZWFyUXVldWVTY3JvbGxMb2Nrc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNsZWFyUXVldWVTY3JvbGxMb2NrczsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0VGFyZ2V0U2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJnZXRQYWdlU2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRQYWdlU2Nyb2xsQmFyV2lkdGg7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRDdXJyZW50UGFnZVNjcm9sbEJhcldpZHRoOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRTY3JvbGxhYmxlVGFyZ2V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVtb3ZlU2Nyb2xsYWJsZVRhcmdldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX3JlbW92ZVNjcm9sbGFibGVUYXJnZXQ7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFkZFNjcm9sbGFibGVTZWxlY3RvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVTZWxlY3RvcjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRMb2NrYWJsZVRhcmdldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0OyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRMb2NrYWJsZVNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvcjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwic2V0RmlsbEdhcE1ldGhvZFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX3NldEZpbGxHYXBNZXRob2Q7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFkZEZpbGxHYXBUYXJnZXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19hZGRGaWxsR2FwVGFyZ2V0OyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZW1vdmVGaWxsR2FwVGFyZ2V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfcmVtb3ZlRmlsbEdhcFRhcmdldDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYWRkRmlsbEdhcFNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkRmlsbEdhcFNlbGVjdG9yOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZW1vdmVGaWxsR2FwU2VsZWN0b3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwU2VsZWN0b3I7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInJlZmlsbEdhcHNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZWZpbGxHYXBzOyB9KTtcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuXG52YXIgRklMTF9HQVBfQVZBSUxBQkxFX01FVEhPRFMgPSBbJ3BhZGRpbmcnLCAnbWFyZ2luJywgJ3dpZHRoJywgJ21heC13aWR0aCcsICdub25lJ107XG52YXIgVE9VQ0hfRElSRUNUSU9OX0RFVEVDVF9PRkZTRVQgPSAzO1xudmFyIHN0YXRlID0ge1xuICBzY3JvbGw6IHRydWUsXG4gIHF1ZXVlOiAwLFxuICBzY3JvbGxhYmxlU2VsZWN0b3JzOiBbJ1tkYXRhLXNjcm9sbC1sb2NrLXNjcm9sbGFibGVdJ10sXG4gIGxvY2thYmxlU2VsZWN0b3JzOiBbJ2JvZHknLCAnW2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGVdJ10sXG4gIGZpbGxHYXBTZWxlY3RvcnM6IFsnYm9keScsICdbZGF0YS1zY3JvbGwtbG9jay1maWxsLWdhcF0nLCAnW2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGVdJ10sXG4gIGZpbGxHYXBNZXRob2Q6IEZJTExfR0FQX0FWQUlMQUJMRV9NRVRIT0RTWzBdLFxuICAvL1xuICBzdGFydFRvdWNoWTogMCxcbiAgc3RhcnRUb3VjaFg6IDBcbn07XG52YXIgZGlzYWJsZVBhZ2VTY3JvbGwgPSBmdW5jdGlvbiBkaXNhYmxlUGFnZVNjcm9sbCh0YXJnZXQpIHtcbiAgaWYgKHN0YXRlLnF1ZXVlIDw9IDApIHtcbiAgICBzdGF0ZS5zY3JvbGwgPSBmYWxzZTtcbiAgICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdygpO1xuICAgIGZpbGxHYXBzKCk7XG4gIH1cblxuICBzY3JvbGxfbG9ja19hZGRTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCk7XG4gIHN0YXRlLnF1ZXVlKys7XG59O1xudmFyIGVuYWJsZVBhZ2VTY3JvbGwgPSBmdW5jdGlvbiBlbmFibGVQYWdlU2Nyb2xsKHRhcmdldCkge1xuICBzdGF0ZS5xdWV1ZSA+IDAgJiYgc3RhdGUucXVldWUtLTtcblxuICBpZiAoc3RhdGUucXVldWUgPD0gMCkge1xuICAgIHN0YXRlLnNjcm9sbCA9IHRydWU7XG4gICAgc2Nyb2xsX2xvY2tfc2hvd0xvY2thYmxlT3ZlcmZsb3coKTtcbiAgICB1bmZpbGxHYXBzKCk7XG4gIH1cblxuICBzY3JvbGxfbG9ja19yZW1vdmVTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCk7XG59O1xudmFyIGdldFNjcm9sbFN0YXRlID0gZnVuY3Rpb24gZ2V0U2Nyb2xsU3RhdGUoKSB7XG4gIHJldHVybiBzdGF0ZS5zY3JvbGw7XG59O1xudmFyIGNsZWFyUXVldWVTY3JvbGxMb2NrcyA9IGZ1bmN0aW9uIGNsZWFyUXVldWVTY3JvbGxMb2NrcygpIHtcbiAgc3RhdGUucXVldWUgPSAwO1xufTtcbnZhciBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCA9IGZ1bmN0aW9uIGdldFRhcmdldFNjcm9sbEJhcldpZHRoKCR0YXJnZXQpIHtcbiAgdmFyIG9ubHlFeGlzdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICB2YXIgY3VycmVudE92ZXJmbG93WVByb3BlcnR5ID0gJHRhcmdldC5zdHlsZS5vdmVyZmxvd1k7XG5cbiAgICBpZiAob25seUV4aXN0cykge1xuICAgICAgaWYgKCFnZXRTY3JvbGxTdGF0ZSgpKSB7XG4gICAgICAgICR0YXJnZXQuc3R5bGUub3ZlcmZsb3dZID0gJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtb3ZlcmZsb3cteS1wcm9wZXJ0eScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IHNjcm9sbF9sb2NrX2dldEN1cnJlbnRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkdGFyZ2V0KTtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9IGN1cnJlbnRPdmVyZmxvd1lQcm9wZXJ0eTtcbiAgICByZXR1cm4gd2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoID0gZnVuY3Rpb24gZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoKCR0YXJnZXQpIHtcbiAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgIGlmICgkdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICB2YXIgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IHdpbmRvd1dpZHRoIC0gZG9jdW1lbnRXaWR0aDtcbiAgICAgIHJldHVybiBjdXJyZW50V2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBib3JkZXJMZWZ0V2lkdGhDdXJyZW50UHJvcGVydHkgPSAkdGFyZ2V0LnN0eWxlLmJvcmRlckxlZnRXaWR0aDtcbiAgICAgIHZhciBib3JkZXJSaWdodFdpZHRoQ3VycmVudFByb3BlcnR5ID0gJHRhcmdldC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoO1xuICAgICAgJHRhcmdldC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGggPSAnMHB4JztcbiAgICAgICR0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9ICcwcHgnO1xuXG4gICAgICB2YXIgX2N1cnJlbnRXaWR0aCA9ICR0YXJnZXQub2Zmc2V0V2lkdGggLSAkdGFyZ2V0LmNsaWVudFdpZHRoO1xuXG4gICAgICAkdGFyZ2V0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IGJvcmRlckxlZnRXaWR0aEN1cnJlbnRQcm9wZXJ0eTtcbiAgICAgICR0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9IGJvcmRlclJpZ2h0V2lkdGhDdXJyZW50UHJvcGVydHk7XG4gICAgICByZXR1cm4gX2N1cnJlbnRXaWR0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG52YXIgZ2V0UGFnZVNjcm9sbEJhcldpZHRoID0gZnVuY3Rpb24gZ2V0UGFnZVNjcm9sbEJhcldpZHRoKCkge1xuICB2YXIgb25seUV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gIHJldHVybiBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aChkb2N1bWVudC5ib2R5LCBvbmx5RXhpc3RzKTtcbn07XG52YXIgZ2V0Q3VycmVudFBhZ2VTY3JvbGxCYXJXaWR0aCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgoKSB7XG4gIHJldHVybiBzY3JvbGxfbG9ja19nZXRDdXJyZW50VGFyZ2V0U2Nyb2xsQmFyV2lkdGgoZG9jdW1lbnQuYm9keSk7XG59O1xudmFyIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVUYXJnZXQgPSBmdW5jdGlvbiBhZGRTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCkge1xuICBpZiAodGFyZ2V0KSB7XG4gICAgdmFyIHRhcmdldHMgPSBhcmd1bWVudEFzQXJyYXkodGFyZ2V0KTtcbiAgICB0YXJnZXRzLm1hcChmdW5jdGlvbiAoJHRhcmdldHMpIHtcbiAgICAgIGVhY2hOb2RlKCR0YXJnZXRzLCBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAgICAgICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpKSB7XG4gICAgICAgICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2Nyb2xsYWJsZScsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19yZW1vdmVTY3JvbGxhYmxlVGFyZ2V0ID0gZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCkge1xuICAgIHZhciB0YXJnZXRzID0gYXJndW1lbnRBc0FycmF5KHRhcmdldCk7XG4gICAgdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKCR0YXJnZXRzKSB7XG4gICAgICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICAgICAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgICAgICAgICR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLXNjcm9sbGFibGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19hZGRTY3JvbGxhYmxlU2VsZWN0b3IgPSBmdW5jdGlvbiBhZGRTY3JvbGxhYmxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLnNjcm9sbGFibGVTZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yID0gZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHZhciBzZWxlY3RvcnMgPSBhcmd1bWVudEFzQXJyYXkoc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9ycy5tYXAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICBzdGF0ZS5zY3JvbGxhYmxlU2VsZWN0b3JzID0gc3RhdGUuc2Nyb2xsYWJsZVNlbGVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKHNTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gc1NlbGVjdG9yICE9PSBzZWxlY3RvcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0ID0gZnVuY3Rpb24gYWRkTG9ja2FibGVUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IGFyZ3VtZW50QXNBcnJheSh0YXJnZXQpO1xuICAgIHRhcmdldHMubWFwKGZ1bmN0aW9uICgkdGFyZ2V0cykge1xuICAgICAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICAgICAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1sb2NrYWJsZScsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmICghZ2V0U2Nyb2xsU3RhdGUoKSkge1xuICAgICAgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3coKTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvciA9IGZ1bmN0aW9uIGFkZExvY2thYmxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLmxvY2thYmxlU2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFnZXRTY3JvbGxTdGF0ZSgpKSB7XG4gICAgICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdygpO1xuICAgIH1cblxuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfc2V0RmlsbEdhcE1ldGhvZCA9IGZ1bmN0aW9uIHNldEZpbGxHYXBNZXRob2QobWV0aG9kKSB7XG4gIGlmIChtZXRob2QpIHtcbiAgICBpZiAoRklMTF9HQVBfQVZBSUxBQkxFX01FVEhPRFMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkge1xuICAgICAgc3RhdGUuZmlsbEdhcE1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIHJlZmlsbEdhcHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1ldGhvZHMgPSBGSUxMX0dBUF9BVkFJTEFCTEVfTUVUSE9EUy5qb2luKCcsICcpO1xuICAgICAgdGhyb3dFcnJvcihcIlxcXCJcIi5jb25jYXQobWV0aG9kLCBcIlxcXCIgbWV0aG9kIGlzIG5vdCBhdmFpbGFibGUhXFxuQXZhaWxhYmxlIGZpbGwgZ2FwIG1ldGhvZHM6IFwiKS5jb25jYXQobWV0aG9kcywgXCIuXCIpKTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfYWRkRmlsbEdhcFRhcmdldCA9IGZ1bmN0aW9uIGFkZEZpbGxHYXBUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IGFyZ3VtZW50QXNBcnJheSh0YXJnZXQpO1xuICAgIHRhcmdldHMubWFwKGZ1bmN0aW9uICgkdGFyZ2V0cykge1xuICAgICAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICAgICAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1maWxsLWdhcCcsICcnKTtcblxuICAgICAgICAgIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgICAgICAgICBzY3JvbGxfbG9ja19maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwVGFyZ2V0ID0gZnVuY3Rpb24gcmVtb3ZlRmlsbEdhcFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCkge1xuICAgIHZhciB0YXJnZXRzID0gYXJndW1lbnRBc0FycmF5KHRhcmdldCk7XG4gICAgdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKCR0YXJnZXRzKSB7XG4gICAgICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICAgICAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgICAgICAgICR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLWZpbGwtZ2FwJyk7XG5cbiAgICAgICAgICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgICAgICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19hZGRGaWxsR2FwU2VsZWN0b3IgPSBmdW5jdGlvbiBhZGRGaWxsR2FwU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLmluZGV4T2Yoc2VsZWN0b3IpID09PSAtMSkge1xuICAgICAgICBzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgICAgICAgc2Nyb2xsX2xvY2tfZmlsbEdhcFNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIHNjcm9sbF9sb2NrX3JlbW92ZUZpbGxHYXBTZWxlY3RvciA9IGZ1bmN0aW9uIHJlbW92ZUZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgc2VsZWN0b3JzID0gYXJndW1lbnRBc0FycmF5KHNlbGVjdG9yKTtcbiAgICBzZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgc3RhdGUuZmlsbEdhcFNlbGVjdG9ycyA9IHN0YXRlLmZpbGxHYXBTZWxlY3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChmU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZTZWxlY3RvciAhPT0gc2VsZWN0b3I7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzdGF0ZS5zY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIHJlZmlsbEdhcHMgPSBmdW5jdGlvbiByZWZpbGxHYXBzKCkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIGZpbGxHYXBzKCk7XG4gIH1cbn07XG5cbnZhciBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdyA9IGZ1bmN0aW9uIGhpZGVMb2NrYWJsZU92ZXJmbG93KCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUubG9ja2FibGVTZWxlY3RvcnMpO1xuICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja19zaG93TG9ja2FibGVPdmVyZmxvdyA9IGZ1bmN0aW9uIHNob3dMb2NrYWJsZU92ZXJmbG93KCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUubG9ja2FibGVTZWxlY3RvcnMpO1xuICBzY3JvbGxfbG9ja19zaG93TG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yID0gZnVuY3Rpb24gaGlkZUxvY2thYmxlT3ZlcmZsb3dTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3dUYXJnZXQoJHRhcmdldCk7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX3Nob3dMb2NrYWJsZU92ZXJmbG93U2VsZWN0b3IgPSBmdW5jdGlvbiBzaG93TG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHZhciAkdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICBzY3JvbGxfbG9ja19zaG93TG9ja2FibGVPdmVyZmxvd1RhcmdldCgkdGFyZ2V0KTtcbiAgfSk7XG59O1xuXG52YXIgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3dUYXJnZXQgPSBmdW5jdGlvbiBoaWRlTG9ja2FibGVPdmVyZmxvd1RhcmdldCgkdGFyZ2V0KSB7XG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkgJiYgJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stbG9ja2VkJykgIT09ICd0cnVlJykge1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJHRhcmdldCk7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtb3ZlcmZsb3cteS1wcm9wZXJ0eScsIGNvbXB1dGVkU3R5bGUub3ZlcmZsb3dZKTtcbiAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1zYXZlZC1pbmxpbmUtb3ZlcmZsb3ctcHJvcGVydHknLCAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93KTtcbiAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1zYXZlZC1pbmxpbmUtb3ZlcmZsb3cteS1wcm9wZXJ0eScsICR0YXJnZXQuc3R5bGUub3ZlcmZsb3dZKTtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stbG9ja2VkJywgJ3RydWUnKTtcbiAgfVxufTtcblxudmFyIHNjcm9sbF9sb2NrX3Nob3dMb2NrYWJsZU92ZXJmbG93VGFyZ2V0ID0gZnVuY3Rpb24gc2hvd0xvY2thYmxlT3ZlcmZsb3dUYXJnZXQoJHRhcmdldCkge1xuICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpICYmICR0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLWxvY2tlZCcpID09PSAndHJ1ZScpIHtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtaW5saW5lLW92ZXJmbG93LXByb3BlcnR5Jyk7XG4gICAgJHRhcmdldC5zdHlsZS5vdmVyZmxvd1kgPSAkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1zYXZlZC1pbmxpbmUtb3ZlcmZsb3cteS1wcm9wZXJ0eScpO1xuICAgICR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLXNhdmVkLW92ZXJmbG93LXByb3BlcnR5Jyk7XG4gICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtaW5saW5lLW92ZXJmbG93LXByb3BlcnR5Jyk7XG4gICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtaW5saW5lLW92ZXJmbG93LXktcHJvcGVydHknKTtcbiAgICAkdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1sb2NrZWQnKTtcbiAgfVxufTtcblxudmFyIGZpbGxHYXBzID0gZnVuY3Rpb24gZmlsbEdhcHMoKSB7XG4gIHN0YXRlLmZpbGxHYXBTZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHNjcm9sbF9sb2NrX2ZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0pO1xufTtcblxudmFyIHVuZmlsbEdhcHMgPSBmdW5jdGlvbiB1bmZpbGxHYXBzKCkge1xuICBzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICBzY3JvbGxfbG9ja191bmZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX2ZpbGxHYXBTZWxlY3RvciA9IGZ1bmN0aW9uIGZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgdmFyIGlzTG9ja2FibGUgPSBzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycy5pbmRleE9mKHNlbGVjdG9yKSAhPT0gLTE7XG4gIGVhY2hOb2RlKCR0YXJnZXRzLCBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAgIHNjcm9sbF9sb2NrX2ZpbGxHYXBUYXJnZXQoJHRhcmdldCwgaXNMb2NrYWJsZSk7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX2ZpbGxHYXBUYXJnZXQgPSBmdW5jdGlvbiBmaWxsR2FwVGFyZ2V0KCR0YXJnZXQpIHtcbiAgdmFyIGlzTG9ja2FibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICB2YXIgc2Nyb2xsQmFyV2lkdGg7XG5cbiAgICBpZiAoJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGUnKSA9PT0gJycgfHwgaXNMb2NrYWJsZSkge1xuICAgICAgc2Nyb2xsQmFyV2lkdGggPSBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkdGFyZ2V0LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyICRsb2NrYWJsZVBhcmVudCA9IGZpbmRQYXJlbnRCeVNlbGVjdG9yKCR0YXJnZXQsIGFycmF5QXNTZWxlY3RvcihzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycykpO1xuICAgICAgc2Nyb2xsQmFyV2lkdGggPSBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkbG9ja2FibGVQYXJlbnQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmICgkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1maWxsZWQtZ2FwJykgPT09ICd0cnVlJykge1xuICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgIH1cblxuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJHRhcmdldCk7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stZmlsbGVkLWdhcCcsICd0cnVlJyk7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stY3VycmVudC1maWxsLWdhcC1tZXRob2QnLCBzdGF0ZS5maWxsR2FwTWV0aG9kKTtcblxuICAgIGlmIChzdGF0ZS5maWxsR2FwTWV0aG9kID09PSAnbWFyZ2luJykge1xuICAgICAgdmFyIGN1cnJlbnRNYXJnaW4gPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQpO1xuICAgICAgJHRhcmdldC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCIuY29uY2F0KGN1cnJlbnRNYXJnaW4gKyBzY3JvbGxCYXJXaWR0aCwgXCJweFwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmZpbGxHYXBNZXRob2QgPT09ICd3aWR0aCcpIHtcbiAgICAgICR0YXJnZXQuc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSAtIFwiLmNvbmNhdChzY3JvbGxCYXJXaWR0aCwgXCJweClcIik7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5maWxsR2FwTWV0aG9kID09PSAnbWF4LXdpZHRoJykge1xuICAgICAgJHRhcmdldC5zdHlsZS5tYXhXaWR0aCA9IFwiY2FsYygxMDAlIC0gXCIuY29uY2F0KHNjcm9sbEJhcldpZHRoLCBcInB4KVwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmZpbGxHYXBNZXRob2QgPT09ICdwYWRkaW5nJykge1xuICAgICAgdmFyIGN1cnJlbnRQYWRkaW5nID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgICAkdGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KGN1cnJlbnRQYWRkaW5nICsgc2Nyb2xsQmFyV2lkdGgsIFwicHhcIik7XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2Nyb2xsX2xvY2tfdW5maWxsR2FwU2VsZWN0b3IgPSBmdW5jdGlvbiB1bmZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICB9KTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja191bmZpbGxHYXBUYXJnZXQgPSBmdW5jdGlvbiB1bmZpbGxHYXBUYXJnZXQoJHRhcmdldCkge1xuICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpKSB7XG4gICAgaWYgKCR0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLWZpbGxlZC1nYXAnKSA9PT0gJ3RydWUnKSB7XG4gICAgICB2YXIgY3VycmVudEZpbGxHYXBNZXRob2QgPSAkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1jdXJyZW50LWZpbGwtZ2FwLW1ldGhvZCcpO1xuICAgICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stZmlsbGVkLWdhcCcpO1xuICAgICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stY3VycmVudC1maWxsLWdhcC1tZXRob2QnKTtcblxuICAgICAgaWYgKGN1cnJlbnRGaWxsR2FwTWV0aG9kID09PSAnbWFyZ2luJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZpbGxHYXBNZXRob2QgPT09ICd3aWR0aCcpIHtcbiAgICAgICAgJHRhcmdldC5zdHlsZS53aWR0aCA9IFwiXCI7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRGaWxsR2FwTWV0aG9kID09PSAnbWF4LXdpZHRoJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLm1heFdpZHRoID0gXCJcIjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZpbGxHYXBNZXRob2QgPT09ICdwYWRkaW5nJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgb25SZXNpemUgPSBmdW5jdGlvbiBvblJlc2l6ZShlKSB7XG4gIHJlZmlsbEdhcHMoKTtcbn07XG5cbnZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIHN0YXRlLnN0YXJ0VG91Y2hZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgc3RhdGUuc3RhcnRUb3VjaFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgfVxufTtcblxudmFyIHNjcm9sbF9sb2NrX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIHZhciBzdGFydFRvdWNoWSA9IHN0YXRlLnN0YXJ0VG91Y2hZLFxuICAgICAgICBzdGFydFRvdWNoWCA9IHN0YXRlLnN0YXJ0VG91Y2hYO1xuICAgIHZhciBjdXJyZW50Q2xpZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgIHZhciBjdXJyZW50Q2xpZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPCAyKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUuc2Nyb2xsYWJsZVNlbGVjdG9ycyk7XG4gICAgICB2YXIgZGlyZWN0aW9uID0ge1xuICAgICAgICB1cDogc3RhcnRUb3VjaFkgPCBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgZG93bjogc3RhcnRUb3VjaFkgPiBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgbGVmdDogc3RhcnRUb3VjaFggPCBjdXJyZW50Q2xpZW50WCxcbiAgICAgICAgcmlnaHQ6IHN0YXJ0VG91Y2hYID4gY3VycmVudENsaWVudFhcbiAgICAgIH07XG4gICAgICB2YXIgZGlyZWN0aW9uV2l0aE9mZnNldCA9IHtcbiAgICAgICAgdXA6IHN0YXJ0VG91Y2hZICsgVE9VQ0hfRElSRUNUSU9OX0RFVEVDVF9PRkZTRVQgPCBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgZG93bjogc3RhcnRUb3VjaFkgLSBUT1VDSF9ESVJFQ1RJT05fREVURUNUX09GRlNFVCA+IGN1cnJlbnRDbGllbnRZLFxuICAgICAgICBsZWZ0OiBzdGFydFRvdWNoWCArIFRPVUNIX0RJUkVDVElPTl9ERVRFQ1RfT0ZGU0VUIDwgY3VycmVudENsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBzdGFydFRvdWNoWCAtIFRPVUNIX0RJUkVDVElPTl9ERVRFQ1RfT0ZGU0VUID4gY3VycmVudENsaWVudFhcbiAgICAgIH07XG5cbiAgICAgIHZhciBoYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUoJGVsKSB7XG4gICAgICAgIHZhciBza2lwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgICBpZiAoJGVsKSB7XG4gICAgICAgICAgdmFyIHBhcmVudFNjcm9sbGFibGVFbCA9IGZpbmRQYXJlbnRCeVNlbGVjdG9yKCRlbCwgc2VsZWN0b3IsIGZhbHNlKTtcblxuICAgICAgICAgIGlmIChlbGVtZW50SXNJbnB1dFJhbmdlKCRlbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2tpcCB8fCBlbGVtZW50SXNTY3JvbGxhYmxlRmllbGQoJGVsKSAmJiBmaW5kUGFyZW50QnlTZWxlY3RvcigkZWwsIHNlbGVjdG9yKSB8fCBlbGVtZW50SGFzU2VsZWN0b3IoJGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHZhciBwcmV2ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U2Nyb2xsTGVmdE9uU3RhcnQoJGVsKSAmJiBlbGVtZW50U2Nyb2xsTGVmdE9uRW5kKCRlbCkpIHtcbiAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi51cCAmJiBlbGVtZW50U2Nyb2xsVG9wT25TdGFydCgkZWwpIHx8IGRpcmVjdGlvbi5kb3duICYmIGVsZW1lbnRTY3JvbGxUb3BPbkVuZCgkZWwpKSB7XG4gICAgICAgICAgICAgICAgcHJldmVudCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFNjcm9sbFRvcE9uU3RhcnQoJGVsKSAmJiBlbGVtZW50U2Nyb2xsVG9wT25FbmQoJGVsKSkge1xuICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgJiYgZWxlbWVudFNjcm9sbExlZnRPblN0YXJ0KCRlbCkgfHwgZGlyZWN0aW9uLnJpZ2h0ICYmIGVsZW1lbnRTY3JvbGxMZWZ0T25FbmQoJGVsKSkge1xuICAgICAgICAgICAgICAgIHByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbldpdGhPZmZzZXQudXAgJiYgZWxlbWVudFNjcm9sbFRvcE9uU3RhcnQoJGVsKSB8fCBkaXJlY3Rpb25XaXRoT2Zmc2V0LmRvd24gJiYgZWxlbWVudFNjcm9sbFRvcE9uRW5kKCRlbCkgfHwgZGlyZWN0aW9uV2l0aE9mZnNldC5sZWZ0ICYmIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCgkZWwpIHx8IGRpcmVjdGlvbldpdGhPZmZzZXQucmlnaHQgJiYgZWxlbWVudFNjcm9sbExlZnRPbkVuZCgkZWwpKSB7XG4gICAgICAgICAgICAgIHByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldmVudCkge1xuICAgICAgICAgICAgICBpZiAocGFyZW50U2Nyb2xsYWJsZUVsKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlKHBhcmVudFNjcm9sbGFibGVFbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGUocGFyZW50U2Nyb2xsYWJsZUVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaGFuZGxlKGUudGFyZ2V0KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBvblRvdWNoRW5kID0gZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XG4gIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgc3RhdGUuc3RhcnRUb3VjaFkgPSAwO1xuICAgIHN0YXRlLnN0YXJ0VG91Y2hYID0gMDtcbiAgfVxufTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XG59XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBzY3JvbGxfbG9ja19vblRvdWNoTW92ZSwge1xuICAgIHBhc3NpdmU6IGZhbHNlXG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xufVxuXG52YXIgZGVwcmVjYXRlZE1ldGhvZHMgPSB7XG4gIGhpZGU6IGZ1bmN0aW9uIGhpZGUodGFyZ2V0KSB7XG4gICAgdGhyb3dFcnJvcignXCJoaWRlXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiZGlzYWJsZVBhZ2VTY3JvbGxcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjZGlzYWJsZXBhZ2VzY3JvbGxzY3JvbGxhYmxldGFyZ2V0Jyk7XG4gICAgZGlzYWJsZVBhZ2VTY3JvbGwodGFyZ2V0KTtcbiAgfSxcbiAgc2hvdzogZnVuY3Rpb24gc2hvdyh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInNob3dcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJlbmFibGVQYWdlU2Nyb2xsXCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2VuYWJsZXBhZ2VzY3JvbGxzY3JvbGxhYmxldGFyZ2V0Jyk7XG4gICAgZW5hYmxlUGFnZVNjcm9sbCh0YXJnZXQpO1xuICB9LFxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInRvZ2dsZVwiIGlzIGRlcHJlY2F0ZWQhIERvIG5vdCB1c2UgaXQuJyk7XG5cbiAgICBpZiAoZ2V0U2Nyb2xsU3RhdGUoKSkge1xuICAgICAgZGlzYWJsZVBhZ2VTY3JvbGwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5hYmxlUGFnZVNjcm9sbCh0YXJnZXQpO1xuICAgIH1cbiAgfSxcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHRocm93RXJyb3IoJ1wiZ2V0U3RhdGVcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJnZXRTY3JvbGxTdGF0ZVwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNnZXRzY3JvbGxzdGF0ZScpO1xuICAgIHJldHVybiBnZXRTY3JvbGxTdGF0ZSgpO1xuICB9LFxuICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgdGhyb3dFcnJvcignXCJnZXRXaWR0aFwiIGlzIGRlcHJlY2F0ZWQhIFVzZSBcImdldFBhZ2VTY3JvbGxCYXJXaWR0aFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNnZXRwYWdlc2Nyb2xsYmFyd2lkdGgnKTtcbiAgICByZXR1cm4gZ2V0UGFnZVNjcm9sbEJhcldpZHRoKCk7XG4gIH0sXG4gIGdldEN1cnJlbnRXaWR0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFdpZHRoKCkge1xuICAgIHRocm93RXJyb3IoJ1wiZ2V0Q3VycmVudFdpZHRoXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiZ2V0Q3VycmVudFBhZ2VTY3JvbGxCYXJXaWR0aFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNnZXRjdXJyZW50cGFnZXNjcm9sbGJhcndpZHRoJyk7XG4gICAgcmV0dXJuIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgoKTtcbiAgfSxcbiAgc2V0U2Nyb2xsYWJsZVRhcmdldHM6IGZ1bmN0aW9uIHNldFNjcm9sbGFibGVUYXJnZXRzKHRhcmdldCkge1xuICAgIHRocm93RXJyb3IoJ1wic2V0U2Nyb2xsYWJsZVRhcmdldHNcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJhZGRTY3JvbGxhYmxlVGFyZ2V0XCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2FkZHNjcm9sbGFibGV0YXJnZXRzY3JvbGxhYmxldGFyZ2V0Jyk7XG4gICAgc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldCh0YXJnZXQpO1xuICB9LFxuICBzZXRGaWxsR2FwU2VsZWN0b3JzOiBmdW5jdGlvbiBzZXRGaWxsR2FwU2VsZWN0b3JzKHNlbGVjdG9yKSB7XG4gICAgdGhyb3dFcnJvcignXCJzZXRGaWxsR2FwU2VsZWN0b3JzXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiYWRkRmlsbEdhcFNlbGVjdG9yXCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2FkZGZpbGxnYXBzZWxlY3RvcmZpbGxnYXBzZWxlY3RvcicpO1xuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0sXG4gIHNldEZpbGxHYXBUYXJnZXRzOiBmdW5jdGlvbiBzZXRGaWxsR2FwVGFyZ2V0cyh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInNldEZpbGxHYXBUYXJnZXRzXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiYWRkRmlsbEdhcFRhcmdldFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNhZGRmaWxsZ2FwdGFyZ2V0ZmlsbGdhcHRhcmdldCcpO1xuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBUYXJnZXQodGFyZ2V0KTtcbiAgfSxcbiAgY2xlYXJRdWV1ZTogZnVuY3Rpb24gY2xlYXJRdWV1ZSgpIHtcbiAgICB0aHJvd0Vycm9yKCdcImNsZWFyUXVldWVcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJjbGVhclF1ZXVlU2Nyb2xsTG9ja3NcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjY2xlYXJxdWV1ZXNjcm9sbGxvY2tzJyk7XG4gICAgY2xlYXJRdWV1ZVNjcm9sbExvY2tzKCk7XG4gIH1cbn07XG5cbnZhciBzY3JvbGxMb2NrID0gX29iamVjdFNwcmVhZCh7XG4gIGRpc2FibGVQYWdlU2Nyb2xsOiBkaXNhYmxlUGFnZVNjcm9sbCxcbiAgZW5hYmxlUGFnZVNjcm9sbDogZW5hYmxlUGFnZVNjcm9sbCxcbiAgZ2V0U2Nyb2xsU3RhdGU6IGdldFNjcm9sbFN0YXRlLFxuICBjbGVhclF1ZXVlU2Nyb2xsTG9ja3M6IGNsZWFyUXVldWVTY3JvbGxMb2NrcyxcbiAgZ2V0VGFyZ2V0U2Nyb2xsQmFyV2lkdGg6IHNjcm9sbF9sb2NrX2dldFRhcmdldFNjcm9sbEJhcldpZHRoLFxuICBnZXRDdXJyZW50VGFyZ2V0U2Nyb2xsQmFyV2lkdGg6IHNjcm9sbF9sb2NrX2dldEN1cnJlbnRUYXJnZXRTY3JvbGxCYXJXaWR0aCxcbiAgZ2V0UGFnZVNjcm9sbEJhcldpZHRoOiBnZXRQYWdlU2Nyb2xsQmFyV2lkdGgsXG4gIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGg6IGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgsXG4gIGFkZFNjcm9sbGFibGVTZWxlY3Rvcjogc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVNlbGVjdG9yLFxuICByZW1vdmVTY3JvbGxhYmxlU2VsZWN0b3I6IHNjcm9sbF9sb2NrX3JlbW92ZVNjcm9sbGFibGVTZWxlY3RvcixcbiAgYWRkU2Nyb2xsYWJsZVRhcmdldDogc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldCxcbiAgcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldDogc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldCxcbiAgYWRkTG9ja2FibGVTZWxlY3Rvcjogc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvcixcbiAgYWRkTG9ja2FibGVUYXJnZXQ6IHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0LFxuICBhZGRGaWxsR2FwU2VsZWN0b3I6IHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcixcbiAgcmVtb3ZlRmlsbEdhcFNlbGVjdG9yOiBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwU2VsZWN0b3IsXG4gIGFkZEZpbGxHYXBUYXJnZXQ6IHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBUYXJnZXQsXG4gIHJlbW92ZUZpbGxHYXBUYXJnZXQ6IHNjcm9sbF9sb2NrX3JlbW92ZUZpbGxHYXBUYXJnZXQsXG4gIHNldEZpbGxHYXBNZXRob2Q6IHNjcm9sbF9sb2NrX3NldEZpbGxHYXBNZXRob2QsXG4gIHJlZmlsbEdhcHM6IHJlZmlsbEdhcHMsXG4gIF9zdGF0ZTogc3RhdGVcbn0sIGRlcHJlY2F0ZWRNZXRob2RzKTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2Nyb2xsX2xvY2sgPSBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChzY3JvbGxMb2NrKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pW1wiZGVmYXVsdFwiXTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0aHJvdHRsZSBmcm9tIFwibG9kYXNoLnRocm90dGxlXCI7XG5cbmltcG9ydCBcIi4vY29tcG9uZW50LmNzc1wiO1xuXG4vLyBHbG9zc2FyeTpcbi8vIGl0ZW0gLSBpcyB0aGUgZWxlbWVudCB3aGljaCBjb250YWlucyBib3RoIHRoZSBjb250cm9sIGFuZCB0aGUgcGFuZWwgLSB0aGVzZSBhcmUgYWRqYWNlbnRcbi8vIGNvbnRyb2wgLSBpbnRlcmFjdGl2ZSBlbGVtZW50IHRoYXQgY29udHJvbHMgc2hvd2luZyBhbmQgaGlkaW5nIG9mIGRyb3Bkb3duIG9yIHBhbmVsXG4vLyBwYW5lbCAtIGNvbnRhaW5lciBmb3IgbWVnYW5hdiBjb250ZW50XG4vLyBkcm9wZG93biAtIGNvbnRhaW5lciBmb3IgdG9wIGxldmVsIGl0ZW1zIG9uIG1vYmlsZVxuLy8gY2xlYXIgLSByZXR1cm4gdG8gaW5pdGlhbCBzdGF0ZVxuLy8gdGVhcmRvd24gLSByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycyAoZm9yIGV4YW1wbGUgd2hlbiByZW1vdmluZyBub2RlcylcblxuaW1wb3J0IHsgcXVlcnlJZCwgcXVlcnlJZEFsbCB9IGZyb20gXCIuLi9kb20tcXVlcnlcIjtcblxuaW1wb3J0IE1lZ2FuYXZDb250cm9sIGZyb20gXCIuLi9NZWdhbmF2Q29udHJvbC9jb21wb25lbnRcIjtcblxuaW1wb3J0IE1lZ2FuYXZDb250cm9sTW9iaWxlRHJvcGRvd24gZnJvbSBcIi4uL01lZ2FuYXZDb250cm9sTW9iaWxlRHJvcGRvd24vY29tcG9uZW50XCI7XG5pbXBvcnQgTW9iaWxlUGFuZWxPcGVuQ2xpY2sgZnJvbSBcIi4uL01lZ2FuYXZDb250cm9sTW9iaWxlUGFuZWxPcGVuL2NvbXBvbmVudFwiO1xuaW1wb3J0IE1vYmlsZVBhbmVsQ2xvc2VDbGljayBmcm9tIFwiLi4vTWVnYW5hdkNvbnRyb2xNb2JpbGVQYW5lbENsb3NlL2NvbXBvbmVudFwiO1xuXG4vLyBDbG9zZSBtZW51IHdoZW4gdXNlciBjbGlja3Mgb3V0c2lkZSBvZiB2aWV3cG9ydFxuY29uc3Qgd2luZG93T25CbHVyID0gKGNsb3NlQWxsKSA9PiB7XG4gIHdpbmRvdy5vbmJsdXIgPSAoKSA9PiBjbG9zZUFsbCgpO1xuICByZXR1cm4geyB0ZWFyZG93bjogKCkgPT4gKHdpbmRvdy5vbmJsdXIgPSBudWxsKSB9O1xufTtcblxuLy8gQ2xvc2UgbWVudSB3aGVuIGNsaWNrL3RhcCBvdXRzaWRlIG9mIG5hdlxuY29uc3QgZG9jdW1lbnRDbGljayA9IChjbG9zZUFsbCkgPT4ge1xuICBjb25zdCBtZWdhbmF2ID0gcXVlcnlJZChcIm1lZ2FuYXZcIik7XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICBpZiAobWVnYW5hdi5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBjbG9zZUFsbCgpO1xuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuXG4gIHJldHVybiB7XG4gICAgdGVhcmRvd246ICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpLFxuICB9O1xufTtcblxuLy8gSW52ZXJ0IGZyb20gdHJhbnNwYXJlbnQgdG8gd2hpdGVcbmNvbnN0IGRvY3VtZW50U2Nyb2xsID0gKHRoZW1lTmFtZSkgPT4ge1xuICBpZiAodGhlbWVOYW1lICE9PSBcInRyYW5zcGFyZW50VG9XaGl0ZVwiKSByZXR1cm4geyB0ZWFyZG93bjogKCkgPT4ge30gfTtcblxuICBjb25zdCBtZWdhbmF2ID0gcXVlcnlJZChcIm1lZ2FuYXZcIik7XG4gIGNvbnN0IG5hdkl0ZW1zID0gcXVlcnlJZEFsbChcIm1lZ2FuYXYtbGlua1wiKTtcbiAgY29uc3QgY29udHJvbE1vYmlsZURyb3Bkb3duTWVudSA9IHF1ZXJ5SWQoXG4gICAgXCJtZWdhbmF2LWNvbnRyb2wtbW9iaWxlLWRyb3Bkb3duLW1lbnVcIlxuICApO1xuICBjb25zdCBjb250cm9sTW9iaWxlRHJvcGRvd25DbG9zZSA9IHF1ZXJ5SWQoXG4gICAgXCJtZWdhbmF2LWNvbnRyb2wtbW9iaWxlLWRyb3Bkb3duLWNsb3NlXCJcbiAgKTtcbiAgY29uc3QgY29udHJvbHMgPSBxdWVyeUlkQWxsKFwibWVnYW5hdi1jb250cm9sXCIpO1xuICBjb25zdCBzaWduVXBCdG4gPSBxdWVyeUlkKFwibWVnYW5hdi1zaWduLXVwLWJ0blwiKTtcblxuICBjb25zdCBpbnZlcnRUZXh0Q29sbGVjdGlvbiA9IFtcbiAgICAuLi5BcnJheS5mcm9tKGNvbnRyb2xzKSxcbiAgICAuLi5BcnJheS5mcm9tKG5hdkl0ZW1zKSxcbiAgICBxdWVyeUlkKFwibWVnYW5hdi1sb2dvXCIpLFxuICBdO1xuXG4gIGNvbnN0IGludmVydE1vYmxlRHJvcGRvd25Db2xvciA9IChpbnZlcnQpID0+IHtcbiAgICBjb25zdCB3aGl0ZVRvQmxhY2sgPSBbXCJ1aS1pY29uLXdoaXRlXCIsIFwidWktaWNvbi1jb29sLWJsYWNrXCJdO1xuICAgIGNvbnN0IGJsYWNrVG9XaGl0ZSA9IFsuLi53aGl0ZVRvQmxhY2tdLnJldmVyc2UoKTtcblxuICAgIGlmIChpbnZlcnQpIHtcbiAgICAgIGNvbnRyb2xNb2JpbGVEcm9wZG93bk1lbnU/LmNsYXNzTGlzdC5yZXBsYWNlKC4uLndoaXRlVG9CbGFjayk7XG4gICAgICBjb250cm9sTW9iaWxlRHJvcGRvd25DbG9zZT8uY2xhc3NMaXN0LnJlcGxhY2UoLi4ud2hpdGVUb0JsYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbE1vYmlsZURyb3Bkb3duTWVudT8uY2xhc3NMaXN0LnJlcGxhY2UoLi4uYmxhY2tUb1doaXRlKTtcbiAgICAgIGNvbnRyb2xNb2JpbGVEcm9wZG93bkNsb3NlPy5jbGFzc0xpc3QucmVwbGFjZSguLi5ibGFja1RvV2hpdGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbnZlclNpZ251cEJ0bkNvbG9ycyA9IChpbnZlcnQpID0+IHtcbiAgICBpZiAoaW52ZXJ0KSB7XG4gICAgICBzaWduVXBCdG4/LmNsYXNzTGlzdC5yZXBsYWNlKFwiYmctd2hpdGVcIiwgXCJiZy1jb29sLWJsYWNrXCIpO1xuICAgICAgc2lnblVwQnRuPy5jbGFzc0xpc3QucmVwbGFjZShcInRleHQtY29vbC1ibGFja1wiLCBcInRleHQtd2hpdGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZ25VcEJ0bj8uY2xhc3NMaXN0LnJlcGxhY2UoXCJiZy1jb29sLWJsYWNrXCIsIFwiYmctd2hpdGVcIik7XG4gICAgICBzaWduVXBCdG4/LmNsYXNzTGlzdC5yZXBsYWNlKFwidGV4dC13aGl0ZVwiLCBcInRleHQtY29vbC1ibGFja1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IHRocm90dGxlKCgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiA1KSB7XG4gICAgICBtZWdhbmF2LmNsYXNzTGlzdC5yZXBsYWNlKFwiYmctdHJhbnNwYXJlbnRcIiwgXCJiZy13aGl0ZVwiKTtcbiAgICAgIGludmVyU2lnbnVwQnRuQ29sb3JzKHRydWUpO1xuICAgICAgaW52ZXJ0TW9ibGVEcm9wZG93bkNvbG9yKHRydWUpO1xuXG4gICAgICBpbnZlcnRUZXh0Q29sbGVjdGlvbi5mb3JFYWNoKChuKSA9PlxuICAgICAgICBuLmNsYXNzTGlzdC5yZXBsYWNlKFwidGV4dC13aGl0ZVwiLCBcInRleHQtY29vbC1ibGFja1wiKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVnYW5hdi5jbGFzc0xpc3QucmVwbGFjZShcImJnLXdoaXRlXCIsIFwiYmctdHJhbnNwYXJlbnRcIik7XG4gICAgICBpbnZlclNpZ251cEJ0bkNvbG9ycyhmYWxzZSk7XG4gICAgICBpbnZlcnRNb2JsZURyb3Bkb3duQ29sb3IoZmFsc2UpO1xuXG4gICAgICBpbnZlcnRUZXh0Q29sbGVjdGlvbi5mb3JFYWNoKChuKSA9PlxuICAgICAgICBuLmNsYXNzTGlzdC5yZXBsYWNlKFwidGV4dC1jb29sLWJsYWNrXCIsIFwidGV4dC13aGl0ZVwiKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIDE1MCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcblxuICByZXR1cm4ge1xuICAgIHRlYXJkb3duOiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVnYW5hdih7IHRoZW1lTmFtZSB9ID0geyB0aGVtZU5hbWU6IG51bGwgfSkge1xuICBjb25zdCBjb250cm9scyA9IE1lZ2FuYXZDb250cm9sKCk7XG4gIGNvbnN0IHBhbmVsT3BlbkNvbnRyb2xzID0gTW9iaWxlUGFuZWxPcGVuQ2xpY2soKTtcbiAgY29uc3QgcGFuZWxDbG9zZUNvbnRyb2xzID0gTW9iaWxlUGFuZWxDbG9zZUNsaWNrKCk7XG5cbiAgY29uc3QgbW9iaWxlRHJvcGRvd25Db250cm9sID0gTWVnYW5hdkNvbnRyb2xNb2JpbGVEcm9wZG93bih7XG4gICAgY2xlYXJQYW5lbHM6ICgpID0+XG4gICAgICBbLi4ucGFuZWxPcGVuQ29udHJvbHMsIC4uLnBhbmVsQ2xvc2VDb250cm9sc10uZm9yRWFjaCgoaSkgPT4gaS5jbGVhcigpKSxcbiAgfSk7XG5cbiAgY29uc3QgY2xvc2VBbGwgPSAoKSA9PlxuICAgIFtcbiAgICAgIG1vYmlsZURyb3Bkb3duQ29udHJvbCxcbiAgICAgIC4uLnBhbmVsT3BlbkNvbnRyb2xzLFxuICAgICAgLi4ucGFuZWxDbG9zZUNvbnRyb2xzLFxuICAgICAgLi4uY29udHJvbHMsXG4gICAgXS5mb3JFYWNoKChpKSA9PiBpLmNsZWFyKCkpO1xuXG4gIGNvbnN0IHRlYXJkb3ducyA9IFtcbiAgICBkb2N1bWVudFNjcm9sbCh0aGVtZU5hbWUpLFxuICAgIGRvY3VtZW50Q2xpY2soY2xvc2VBbGwpLFxuICAgIHdpbmRvd09uQmx1cihjbG9zZUFsbCksXG4gICAgbW9iaWxlRHJvcGRvd25Db250cm9sLFxuICAgIC4uLmNvbnRyb2xzLFxuICAgIC4uLnBhbmVsT3BlbkNvbnRyb2xzLFxuICAgIC4uLnBhbmVsQ2xvc2VDb250cm9scyxcbiAgXS5tYXAoKGkpID0+IGkudGVhcmRvd24pO1xuXG4gIHJldHVybiAoKSA9PiB0ZWFyZG93bnMuZm9yRWFjaCgodGVhcmRvd24pID0+IHRlYXJkb3duKCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==