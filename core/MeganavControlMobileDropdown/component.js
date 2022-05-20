(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AblyUi"] = factory();
	else
		root["AblyUi"] = root["AblyUi"] || {}, root["AblyUi"]["Core"] = root["AblyUi"]["Core"] || {}, root["AblyUi"]["Core"]["MeganavControlMobileDropdown"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/*!************************************************************!*\
  !*** ./src/core/MeganavControlMobileDropdown/component.js ***!
  \************************************************************/
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
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS8uL3NyYy9jb3JlL2RvbS1xdWVyeS5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWxvY2svZGlzdC9zY3JvbGwtbG9jay5qcyIsIndlYnBhY2s6Ly9BYmx5VWkuQ29yZS5bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0FibHlVaS5Db3JlLltuYW1lXS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQWJseVVpLkNvcmUuW25hbWVdLy4vc3JjL2NvcmUvTWVnYW5hdkNvbnRyb2xNb2JpbGVEcm9wZG93bi9jb21wb25lbnQuanMiXSwibmFtZXMiOlsicXVlcnlJZCIsInZhbCIsInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeUlkQWxsIiwicXVlcnlTZWxlY3RvckFsbCIsIk1lZ2FuYXZDb250cm9sTW9iaWxlRHJvcGRvd24iLCJjbGVhclBhbmVscyIsImNvbnRyb2wiLCJkcm9wZG93biIsIm1lbnVJY29uIiwiY2xvc2VJY29uIiwiY2xpY2tIYW5kbGVyIiwiYXJpYUV4cGFuZGVkIiwiZ2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwicmVwbGFjZSIsInNldEF0dHJpYnV0ZSIsInNjcm9sbExvY2siLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXIiLCJyZW1vdmUiLCJhZGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQXVEO0FBQzlGLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsTUFBTUMsSUFBTix1RUFBYUMsUUFBYjtBQUFBLFNBQ3JCRCxJQUFJLENBQUNFLGFBQUwsb0JBQStCSCxHQUEvQixPQURxQjtBQUFBLENBQWhCO0FBR0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0osR0FBRDtBQUFBLE1BQU1DLElBQU4sdUVBQWFDLFFBQWI7QUFBQSxTQUN4QkQsSUFBSSxDQUFDSSxnQkFBTCxvQkFBa0NMLEdBQWxDLE9BRHdCO0FBQUEsQ0FBbkIsQzs7Ozs7Ozs7OztBQ0hQO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLMkI7QUFDakMsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4QkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsOEJBQW1CO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QixlQUFlLDhCQUFtQjtBQUNsQyxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FB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Q0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FB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QjtBQUNBYixlQUFTLENBQUNJLFNBQVYsQ0FBb0JVLEdBQXBCLENBQXdCLFFBQXhCO0FBQ0FQLHlFQUFBO0FBQ0Q7QUFYSSxHQUFQO0FBYUQsQ0F2Q0Q7O0FBeUNBLGlFQUFlWiw0QkFBZixFIiwiZmlsZSI6ImNvcmUvTWVnYW5hdkNvbnRyb2xNb2JpbGVEcm9wZG93bi9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBYmx5VWlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWJseVVpXCJdID0gcm9vdFtcIkFibHlVaVwiXSB8fCB7fSwgcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl0gPSByb290W1wiQWJseVVpXCJdW1wiQ29yZVwiXSB8fCB7fSwgcm9vdFtcIkFibHlVaVwiXVtcIkNvcmVcIl1bXCJNZWdhbmF2Q29udHJvbE1vYmlsZURyb3Bkb3duXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IHF1ZXJ5SWQgPSAodmFsLCByb290ID0gZG9jdW1lbnQpID0+XG4gIHJvb3QucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHt2YWx9XWApO1xuXG5leHBvcnQgY29uc3QgcXVlcnlJZEFsbCA9ICh2YWwsIHJvb3QgPSBkb2N1bWVudCkgPT5cbiAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZD0ke3ZhbH1dYCk7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzY3JvbGxMb2NrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNjcm9sbExvY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvdG9vbHMuanNcbnZhciBhcmd1bWVudEFzQXJyYXkgPSBmdW5jdGlvbiBhcmd1bWVudEFzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJndW1lbnQpID8gYXJndW1lbnQgOiBbYXJndW1lbnRdO1xufTtcbnZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiBpc0VsZW1lbnQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBOb2RlO1xufTtcbnZhciBpc0VsZW1lbnRMaXN0ID0gZnVuY3Rpb24gaXNFbGVtZW50TGlzdChub2RlTGlzdCkge1xuICByZXR1cm4gbm9kZUxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdDtcbn07XG52YXIgZWFjaE5vZGUgPSBmdW5jdGlvbiBlYWNoTm9kZShub2RlTGlzdCwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGVMaXN0ICYmIGNhbGxiYWNrKSB7XG4gICAgbm9kZUxpc3QgPSBpc0VsZW1lbnRMaXN0KG5vZGVMaXN0KSA/IG5vZGVMaXN0IDogW25vZGVMaXN0XTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjYWxsYmFjayhub2RlTGlzdFtpXSwgaSwgbm9kZUxpc3QubGVuZ3RoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgdGhyb3dFcnJvciA9IGZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4gY29uc29sZS5lcnJvcihcIltzY3JvbGwtbG9ja10gXCIuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG52YXIgYXJyYXlBc1NlbGVjdG9yID0gZnVuY3Rpb24gYXJyYXlBc1NlbGVjdG9yKGFycmF5KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHZhciBzZWxlY3RvciA9IGFycmF5LmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG59O1xudmFyIG5vZGVMaXN0QXNBcnJheSA9IGZ1bmN0aW9uIG5vZGVMaXN0QXNBcnJheShub2RlTGlzdCkge1xuICB2YXIgbm9kZXMgPSBbXTtcbiAgZWFjaE5vZGUobm9kZUxpc3QsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGVzLnB1c2gobm9kZSk7XG4gIH0pO1xuICByZXR1cm4gbm9kZXM7XG59O1xudmFyIGZpbmRQYXJlbnRCeVNlbGVjdG9yID0gZnVuY3Rpb24gZmluZFBhcmVudEJ5U2VsZWN0b3IoJGVsLCBzZWxlY3Rvcikge1xuICB2YXIgc2VsZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgdmFyICRyb290ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBkb2N1bWVudDtcblxuICBpZiAoc2VsZiAmJiBub2RlTGlzdEFzQXJyYXkoJHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmluZGV4T2YoJGVsKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gJGVsO1xuICB9XG5cbiAgd2hpbGUgKCgkZWwgPSAkZWwucGFyZW50RWxlbWVudCkgJiYgbm9kZUxpc3RBc0FycmF5KCRyb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5pbmRleE9mKCRlbCkgPT09IC0xKSB7XG4gICAgO1xuICB9XG5cbiAgcmV0dXJuICRlbDtcbn07XG52YXIgZWxlbWVudEhhc1NlbGVjdG9yID0gZnVuY3Rpb24gZWxlbWVudEhhc1NlbGVjdG9yKCRlbCwgc2VsZWN0b3IpIHtcbiAgdmFyICRyb290ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBkb2N1bWVudDtcbiAgdmFyIGhhcyA9IG5vZGVMaXN0QXNBcnJheSgkcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuaW5kZXhPZigkZWwpICE9PSAtMTtcbiAgcmV0dXJuIGhhcztcbn07XG52YXIgZWxlbWVudEhhc092ZXJmbG93SGlkZGVuID0gZnVuY3Rpb24gZWxlbWVudEhhc092ZXJmbG93SGlkZGVuKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCRlbCk7XG4gICAgdmFyIG92ZXJmbG93SXNIaWRkZW4gPSBjb21wdXRlZFN0eWxlLm92ZXJmbG93ID09PSAnaGlkZGVuJztcbiAgICByZXR1cm4gb3ZlcmZsb3dJc0hpZGRlbjtcbiAgfVxufTtcbnZhciBlbGVtZW50U2Nyb2xsVG9wT25TdGFydCA9IGZ1bmN0aW9uIGVsZW1lbnRTY3JvbGxUb3BPblN0YXJ0KCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gJGVsLnNjcm9sbFRvcDtcbiAgICByZXR1cm4gc2Nyb2xsVG9wIDw9IDA7XG4gIH1cbn07XG52YXIgZWxlbWVudFNjcm9sbFRvcE9uRW5kID0gZnVuY3Rpb24gZWxlbWVudFNjcm9sbFRvcE9uRW5kKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gJGVsLnNjcm9sbFRvcDtcbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJGVsLnNjcm9sbEhlaWdodDtcbiAgICB2YXIgc2Nyb2xsVG9wV2l0aEhlaWdodCA9IHNjcm9sbFRvcCArICRlbC5vZmZzZXRIZWlnaHQ7XG4gICAgcmV0dXJuIHNjcm9sbFRvcFdpdGhIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0O1xuICB9XG59O1xudmFyIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCA9IGZ1bmN0aW9uIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCgkZWwpIHtcbiAgaWYgKCRlbCkge1xuICAgIGlmIChlbGVtZW50SGFzT3ZlcmZsb3dIaWRkZW4oJGVsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbExlZnQgPSAkZWwuc2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gc2Nyb2xsTGVmdCA8PSAwO1xuICB9XG59O1xudmFyIGVsZW1lbnRTY3JvbGxMZWZ0T25FbmQgPSBmdW5jdGlvbiBlbGVtZW50U2Nyb2xsTGVmdE9uRW5kKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9ICRlbC5zY3JvbGxMZWZ0O1xuICAgIHZhciBzY3JvbGxXaWR0aCA9ICRlbC5zY3JvbGxXaWR0aDtcbiAgICB2YXIgc2Nyb2xsTGVmdFdpdGhXaWR0aCA9IHNjcm9sbExlZnQgKyAkZWwub2Zmc2V0V2lkdGg7XG4gICAgcmV0dXJuIHNjcm9sbExlZnRXaXRoV2lkdGggPj0gc2Nyb2xsV2lkdGg7XG4gIH1cbn07XG52YXIgZWxlbWVudElzU2Nyb2xsYWJsZUZpZWxkID0gZnVuY3Rpb24gZWxlbWVudElzU2Nyb2xsYWJsZUZpZWxkKCRlbCkge1xuICB2YXIgc2VsZWN0b3IgPSAndGV4dGFyZWEsIFtjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJztcbiAgcmV0dXJuIGVsZW1lbnRIYXNTZWxlY3RvcigkZWwsIHNlbGVjdG9yKTtcbn07XG52YXIgZWxlbWVudElzSW5wdXRSYW5nZSA9IGZ1bmN0aW9uIGVsZW1lbnRJc0lucHV0UmFuZ2UoJGVsKSB7XG4gIHZhciBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwicmFuZ2VcIl0nO1xuICByZXR1cm4gZWxlbWVudEhhc1NlbGVjdG9yKCRlbCwgc2VsZWN0b3IpO1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3Njcm9sbC1sb2NrLmpzXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGlzYWJsZVBhZ2VTY3JvbGxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkaXNhYmxlUGFnZVNjcm9sbDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZW5hYmxlUGFnZVNjcm9sbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGVuYWJsZVBhZ2VTY3JvbGw7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldFNjcm9sbFN0YXRlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2V0U2Nyb2xsU3RhdGU7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNsZWFyUXVldWVTY3JvbGxMb2Nrc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNsZWFyUXVldWVTY3JvbGxMb2NrczsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0VGFyZ2V0U2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJnZXRQYWdlU2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRQYWdlU2Nyb2xsQmFyV2lkdGg7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRDdXJyZW50UGFnZVNjcm9sbEJhcldpZHRoOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRTY3JvbGxhYmxlVGFyZ2V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVtb3ZlU2Nyb2xsYWJsZVRhcmdldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX3JlbW92ZVNjcm9sbGFibGVUYXJnZXQ7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFkZFNjcm9sbGFibGVTZWxlY3RvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVTZWxlY3RvcjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRMb2NrYWJsZVRhcmdldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0OyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRMb2NrYWJsZVNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvcjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwic2V0RmlsbEdhcE1ldGhvZFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX3NldEZpbGxHYXBNZXRob2Q7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFkZEZpbGxHYXBUYXJnZXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19hZGRGaWxsR2FwVGFyZ2V0OyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZW1vdmVGaWxsR2FwVGFyZ2V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfcmVtb3ZlRmlsbEdhcFRhcmdldDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYWRkRmlsbEdhcFNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkRmlsbEdhcFNlbGVjdG9yOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZW1vdmVGaWxsR2FwU2VsZWN0b3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwU2VsZWN0b3I7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInJlZmlsbEdhcHNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZWZpbGxHYXBzOyB9KTtcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuXG52YXIgRklMTF9HQVBfQVZBSUxBQkxFX01FVEhPRFMgPSBbJ3BhZGRpbmcnLCAnbWFyZ2luJywgJ3dpZHRoJywgJ21heC13aWR0aCcsICdub25lJ107XG52YXIgVE9VQ0hfRElSRUNUSU9OX0RFVEVDVF9PRkZTRVQgPSAzO1xudmFyIHN0YXRlID0ge1xuICBzY3JvbGw6IHRydWUsXG4gIHF1ZXVlOiAwLFxuICBzY3JvbGxhYmxlU2VsZWN0b3JzOiBbJ1tkYXRhLXNjcm9sbC1sb2NrLXNjcm9sbGFibGVdJ10sXG4gIGxvY2thYmxlU2VsZWN0b3JzOiBbJ2JvZHknLCAnW2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGVdJ10sXG4gIGZpbGxHYXBTZWxlY3RvcnM6IFsnYm9keScsICdbZGF0YS1zY3JvbGwtbG9jay1maWxsLWdhcF0nLCAnW2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGVdJ10sXG4gIGZpbGxHYXBNZXRob2Q6IEZJTExfR0FQX0FWQUlMQUJMRV9NRVRIT0RTWzBdLFxuICAvL1xuICBzdGFydFRvdWNoWTogMCxcbiAgc3RhcnRUb3VjaFg6IDBcbn07XG52YXIgZGlzYWJsZVBhZ2VTY3JvbGwgPSBmdW5jdGlvbiBkaXNhYmxlUGFnZVNjcm9sbCh0YXJnZXQpIHtcbiAgaWYgKHN0YXRlLnF1ZXVlIDw9IDApIHtcbiAgICBzdGF0ZS5zY3JvbGwgPSBmYWxzZTtcbiAgICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdygpO1xuICAgIGZpbGxHYXBzKCk7XG4gIH1cblxuICBzY3JvbGxfbG9ja19hZGRTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCk7XG4gIHN0YXRlLnF1ZXVlKys7XG59O1xudmFyIGVuYWJsZVBhZ2VTY3JvbGwgPSBmdW5jdGlvbiBlbmFibGVQYWdlU2Nyb2xsKHRhcmdldCkge1xuICBzdGF0ZS5xdWV1ZSA+IDAgJiYgc3RhdGUucXVldWUtLTtcblxuICBpZiAoc3RhdGUucXVldWUgPD0gMCkge1xuICAgIHN0YXRlLnNjcm9sbCA9IHRydWU7XG4gICAgc2Nyb2xsX2xvY2tfc2hvd0xvY2thYmxlT3ZlcmZsb3coKTtcbiAgICB1bmZpbGxHYXBzKCk7XG4gIH1cblxuICBzY3JvbGxfbG9ja19yZW1vdmVTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCk7XG59O1xudmFyIGdldFNjcm9sbFN0YXRlID0gZnVuY3Rpb24gZ2V0U2Nyb2xsU3RhdGUoKSB7XG4gIHJldHVybiBzdGF0ZS5zY3JvbGw7XG59O1xudmFyIGNsZWFyUXVldWVTY3JvbGxMb2NrcyA9IGZ1bmN0aW9uIGNsZWFyUXVldWVTY3JvbGxMb2NrcygpIHtcbiAgc3RhdGUucXVldWUgPSAwO1xufTtcbnZhciBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCA9IGZ1bmN0aW9uIGdldFRhcmdldFNjcm9sbEJhcldpZHRoKCR0YXJnZXQpIHtcbiAgdmFyIG9ubHlFeGlzdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICB2YXIgY3VycmVudE92ZXJmbG93WVByb3BlcnR5ID0gJHRhcmdldC5zdHlsZS5vdmVyZmxvd1k7XG5cbiAgICBpZiAob25seUV4aXN0cykge1xuICAgICAgaWYgKCFnZXRTY3JvbGxTdGF0ZSgpKSB7XG4gICAgICAgICR0YXJnZXQuc3R5bGUub3ZlcmZsb3dZID0gJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtb3ZlcmZsb3cteS1wcm9wZXJ0eScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IHNjcm9sbF9sb2NrX2dldEN1cnJlbnRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkdGFyZ2V0KTtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9IGN1cnJlbnRPdmVyZmxvd1lQcm9wZXJ0eTtcbiAgICByZXR1cm4gd2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoID0gZnVuY3Rpb24gZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoKCR0YXJnZXQpIHtcbiAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgIGlmICgkdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICB2YXIgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IHdpbmRvd1dpZHRoIC0gZG9jdW1lbnRXaWR0aDtcbiAgICAgIHJldHVybiBjdXJyZW50V2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBib3JkZXJMZWZ0V2lkdGhDdXJyZW50UHJvcGVydHkgPSAkdGFyZ2V0LnN0eWxlLmJvcmRlckxlZnRXaWR0aDtcbiAgICAgIHZhciBib3JkZXJSaWdodFdpZHRoQ3VycmVudFByb3BlcnR5ID0gJHRhcmdldC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoO1xuICAgICAgJHRhcmdldC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGggPSAnMHB4JztcbiAgICAgICR0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9ICcwcHgnO1xuXG4gICAgICB2YXIgX2N1cnJlbnRXaWR0aCA9ICR0YXJnZXQub2Zmc2V0V2lkdGggLSAkdGFyZ2V0LmNsaWVudFdpZHRoO1xuXG4gICAgICAkdGFyZ2V0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IGJvcmRlckxlZnRXaWR0aEN1cnJlbnRQcm9wZXJ0eTtcbiAgICAgICR0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9IGJvcmRlclJpZ2h0V2lkdGhDdXJyZW50UHJvcGVydHk7XG4gICAgICByZXR1cm4gX2N1cnJlbnRXaWR0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG52YXIgZ2V0UGFnZVNjcm9sbEJhcldpZHRoID0gZnVuY3Rpb24gZ2V0UGFnZVNjcm9sbEJhcldpZHRoKCkge1xuICB2YXIgb25seUV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gIHJldHVybiBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aChkb2N1bWVudC5ib2R5LCBvbmx5RXhpc3RzKTtcbn07XG52YXIgZ2V0Q3VycmVudFBhZ2VTY3JvbGxCYXJXaWR0aCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgoKSB7XG4gIHJldHVybiBzY3JvbGxfbG9ja19nZXRDdXJyZW50VGFyZ2V0U2Nyb2xsQmFyV2lkdGgoZG9jdW1lbnQuYm9keSk7XG59O1xudmFyIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVUYXJnZXQgPSBmdW5jdGlvbiBhZGRTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCkge1xuICBpZiAodGFyZ2V0KSB7XG4gICAgdmFyIHRhcmdldHMgPSBhcmd1bWVudEFzQXJyYXkodGFyZ2V0KTtcbiAgICB0YXJnZXRzLm1hcChmdW5jdGlvbiAoJHRhcmdldHMpIHtcbiAgICAgIGVhY2hOb2RlKCR0YXJnZXRzLCBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAgICAgICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpKSB7XG4gICAgICAgICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2Nyb2xsYWJsZScsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19yZW1vdmVTY3JvbGxhYmxlVGFyZ2V0ID0gZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCkge1xuICAgIHZhciB0YXJnZXRzID0gYXJndW1lbnRBc0FycmF5KHRhcmdldCk7XG4gICAgdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKCR0YXJnZXRzKSB7XG4gICAgICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICAgICAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgICAgICAgICR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLXNjcm9sbGFibGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19hZGRTY3JvbGxhYmxlU2VsZWN0b3IgPSBmdW5jdGlvbiBhZGRTY3JvbGxhYmxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLnNjcm9sbGFibGVTZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yID0gZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHZhciBzZWxlY3RvcnMgPSBhcmd1bWVudEFzQXJyYXkoc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9ycy5tYXAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICBzdGF0ZS5zY3JvbGxhYmxlU2VsZWN0b3JzID0gc3RhdGUuc2Nyb2xsYWJsZVNlbGVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKHNTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gc1NlbGVjdG9yICE9PSBzZWxlY3RvcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0ID0gZnVuY3Rpb24gYWRkTG9ja2FibGVUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IGFyZ3VtZW50QXNBcnJheSh0YXJnZXQpO1xuICAgIHRhcmdldHMubWFwKGZ1bmN0aW9uICgkdGFyZ2V0cykge1xuICAgICAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICAgICAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1sb2NrYWJsZScsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmICghZ2V0U2Nyb2xsU3RhdGUoKSkge1xuICAgICAgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3coKTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvciA9IGZ1bmN0aW9uIGFkZExvY2thYmxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLmxvY2thYmxlU2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFnZXRTY3JvbGxTdGF0ZSgpKSB7XG4gICAgICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdygpO1xuICAgIH1cblxuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfc2V0RmlsbEdhcE1ldGhvZCA9IGZ1bmN0aW9uIHNldEZpbGxHYXBNZXRob2QobWV0aG9kKSB7XG4gIGlmIChtZXRob2QpIHtcbiAgICBpZiAoRklMTF9HQVBfQVZBSUxBQkxFX01FVEhPRFMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkge1xuICAgICAgc3RhdGUuZmlsbEdhcE1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIHJlZmlsbEdhcHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1ldGhvZHMgPSBGSUxMX0dBUF9BVkFJTEFCTEVfTUVUSE9EUy5qb2luKCcsICcpO1xuICAgICAgdGhyb3dFcnJvcihcIlxcXCJcIi5jb25jYXQobWV0aG9kLCBcIlxcXCIgbWV0aG9kIGlzIG5vdCBhdmFpbGFibGUhXFxuQXZhaWxhYmxlIGZpbGwgZ2FwIG1ldGhvZHM6IFwiKS5jb25jYXQobWV0aG9kcywgXCIuXCIpKTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfYWRkRmlsbEdhcFRhcmdldCA9IGZ1bmN0aW9uIGFkZEZpbGxHYXBUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IGFyZ3VtZW50QXNBcnJheSh0YXJnZXQpO1xuICAgIHRhcmdldHMubWFwKGZ1bmN0aW9uICgkdGFyZ2V0cykge1xuICAgICAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICAgICAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1maWxsLWdhcCcsICcnKTtcblxuICAgICAgICAgIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgICAgICAgICBzY3JvbGxfbG9ja19maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwVGFyZ2V0ID0gZnVuY3Rpb24gcmVtb3ZlRmlsbEdhcFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCkge1xuICAgIHZhciB0YXJnZXRzID0gYXJndW1lbnRBc0FycmF5KHRhcmdldCk7XG4gICAgdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKCR0YXJnZXRzKSB7XG4gICAgICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICAgICAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgICAgICAgICR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLWZpbGwtZ2FwJyk7XG5cbiAgICAgICAgICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgICAgICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19hZGRGaWxsR2FwU2VsZWN0b3IgPSBmdW5jdGlvbiBhZGRGaWxsR2FwU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLmluZGV4T2Yoc2VsZWN0b3IpID09PSAtMSkge1xuICAgICAgICBzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgICAgICAgc2Nyb2xsX2xvY2tfZmlsbEdhcFNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIHNjcm9sbF9sb2NrX3JlbW92ZUZpbGxHYXBTZWxlY3RvciA9IGZ1bmN0aW9uIHJlbW92ZUZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgc2VsZWN0b3JzID0gYXJndW1lbnRBc0FycmF5KHNlbGVjdG9yKTtcbiAgICBzZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgc3RhdGUuZmlsbEdhcFNlbGVjdG9ycyA9IHN0YXRlLmZpbGxHYXBTZWxlY3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChmU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZTZWxlY3RvciAhPT0gc2VsZWN0b3I7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzdGF0ZS5zY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIHJlZmlsbEdhcHMgPSBmdW5jdGlvbiByZWZpbGxHYXBzKCkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIGZpbGxHYXBzKCk7XG4gIH1cbn07XG5cbnZhciBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdyA9IGZ1bmN0aW9uIGhpZGVMb2NrYWJsZU92ZXJmbG93KCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUubG9ja2FibGVTZWxlY3RvcnMpO1xuICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja19zaG93TG9ja2FibGVPdmVyZmxvdyA9IGZ1bmN0aW9uIHNob3dMb2NrYWJsZU92ZXJmbG93KCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUubG9ja2FibGVTZWxlY3RvcnMpO1xuICBzY3JvbGxfbG9ja19zaG93TG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yID0gZnVuY3Rpb24gaGlkZUxvY2thYmxlT3ZlcmZsb3dTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3dUYXJnZXQoJHRhcmdldCk7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX3Nob3dMb2NrYWJsZU92ZXJmbG93U2VsZWN0b3IgPSBmdW5jdGlvbiBzaG93TG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHZhciAkdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICBzY3JvbGxfbG9ja19zaG93TG9ja2FibGVPdmVyZmxvd1RhcmdldCgkdGFyZ2V0KTtcbiAgfSk7XG59O1xuXG52YXIgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3dUYXJnZXQgPSBmdW5jdGlvbiBoaWRlTG9ja2FibGVPdmVyZmxvd1RhcmdldCgkdGFyZ2V0KSB7XG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkgJiYgJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stbG9ja2VkJykgIT09ICd0cnVlJykge1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJHRhcmdldCk7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtb3ZlcmZsb3cteS1wcm9wZXJ0eScsIGNvbXB1dGVkU3R5bGUub3ZlcmZsb3dZKTtcbiAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1zYXZlZC1pbmxpbmUtb3ZlcmZsb3ctcHJvcGVydHknLCAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93KTtcbiAgICAkdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1zYXZlZC1pbmxpbmUtb3ZlcmZsb3cteS1wcm9wZXJ0eScsICR0YXJnZXQuc3R5bGUub3ZlcmZsb3dZKTtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stbG9ja2VkJywgJ3RydWUnKTtcbiAgfVxufTtcblxudmFyIHNjcm9sbF9sb2NrX3Nob3dMb2NrYWJsZU92ZXJmbG93VGFyZ2V0ID0gZnVuY3Rpb24gc2hvd0xvY2thYmxlT3ZlcmZsb3dUYXJnZXQoJHRhcmdldCkge1xuICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpICYmICR0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLWxvY2tlZCcpID09PSAndHJ1ZScpIHtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtaW5saW5lLW92ZXJmbG93LXByb3BlcnR5Jyk7XG4gICAgJHRhcmdldC5zdHlsZS5vdmVyZmxvd1kgPSAkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1zYXZlZC1pbmxpbmUtb3ZlcmZsb3cteS1wcm9wZXJ0eScpO1xuICAgICR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLXNhdmVkLW92ZXJmbG93LXByb3BlcnR5Jyk7XG4gICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtaW5saW5lLW92ZXJmbG93LXByb3BlcnR5Jyk7XG4gICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stc2F2ZWQtaW5saW5lLW92ZXJmbG93LXktcHJvcGVydHknKTtcbiAgICAkdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1sb2NrZWQnKTtcbiAgfVxufTtcblxudmFyIGZpbGxHYXBzID0gZnVuY3Rpb24gZmlsbEdhcHMoKSB7XG4gIHN0YXRlLmZpbGxHYXBTZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHNjcm9sbF9sb2NrX2ZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0pO1xufTtcblxudmFyIHVuZmlsbEdhcHMgPSBmdW5jdGlvbiB1bmZpbGxHYXBzKCkge1xuICBzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICBzY3JvbGxfbG9ja191bmZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX2ZpbGxHYXBTZWxlY3RvciA9IGZ1bmN0aW9uIGZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgdmFyIGlzTG9ja2FibGUgPSBzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycy5pbmRleE9mKHNlbGVjdG9yKSAhPT0gLTE7XG4gIGVhY2hOb2RlKCR0YXJnZXRzLCBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAgIHNjcm9sbF9sb2NrX2ZpbGxHYXBUYXJnZXQoJHRhcmdldCwgaXNMb2NrYWJsZSk7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX2ZpbGxHYXBUYXJnZXQgPSBmdW5jdGlvbiBmaWxsR2FwVGFyZ2V0KCR0YXJnZXQpIHtcbiAgdmFyIGlzTG9ja2FibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICB2YXIgc2Nyb2xsQmFyV2lkdGg7XG5cbiAgICBpZiAoJHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGUnKSA9PT0gJycgfHwgaXNMb2NrYWJsZSkge1xuICAgICAgc2Nyb2xsQmFyV2lkdGggPSBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkdGFyZ2V0LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyICRsb2NrYWJsZVBhcmVudCA9IGZpbmRQYXJlbnRCeVNlbGVjdG9yKCR0YXJnZXQsIGFycmF5QXNTZWxlY3RvcihzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycykpO1xuICAgICAgc2Nyb2xsQmFyV2lkdGggPSBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkbG9ja2FibGVQYXJlbnQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmICgkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1maWxsZWQtZ2FwJykgPT09ICd0cnVlJykge1xuICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgIH1cblxuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJHRhcmdldCk7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stZmlsbGVkLWdhcCcsICd0cnVlJyk7XG4gICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stY3VycmVudC1maWxsLWdhcC1tZXRob2QnLCBzdGF0ZS5maWxsR2FwTWV0aG9kKTtcblxuICAgIGlmIChzdGF0ZS5maWxsR2FwTWV0aG9kID09PSAnbWFyZ2luJykge1xuICAgICAgdmFyIGN1cnJlbnRNYXJnaW4gPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQpO1xuICAgICAgJHRhcmdldC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCIuY29uY2F0KGN1cnJlbnRNYXJnaW4gKyBzY3JvbGxCYXJXaWR0aCwgXCJweFwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmZpbGxHYXBNZXRob2QgPT09ICd3aWR0aCcpIHtcbiAgICAgICR0YXJnZXQuc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSAtIFwiLmNvbmNhdChzY3JvbGxCYXJXaWR0aCwgXCJweClcIik7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5maWxsR2FwTWV0aG9kID09PSAnbWF4LXdpZHRoJykge1xuICAgICAgJHRhcmdldC5zdHlsZS5tYXhXaWR0aCA9IFwiY2FsYygxMDAlIC0gXCIuY29uY2F0KHNjcm9sbEJhcldpZHRoLCBcInB4KVwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmZpbGxHYXBNZXRob2QgPT09ICdwYWRkaW5nJykge1xuICAgICAgdmFyIGN1cnJlbnRQYWRkaW5nID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgICAkdGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KGN1cnJlbnRQYWRkaW5nICsgc2Nyb2xsQmFyV2lkdGgsIFwicHhcIik7XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2Nyb2xsX2xvY2tfdW5maWxsR2FwU2VsZWN0b3IgPSBmdW5jdGlvbiB1bmZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICB9KTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja191bmZpbGxHYXBUYXJnZXQgPSBmdW5jdGlvbiB1bmZpbGxHYXBUYXJnZXQoJHRhcmdldCkge1xuICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpKSB7XG4gICAgaWYgKCR0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC1sb2NrLWZpbGxlZC1nYXAnKSA9PT0gJ3RydWUnKSB7XG4gICAgICB2YXIgY3VycmVudEZpbGxHYXBNZXRob2QgPSAkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtbG9jay1jdXJyZW50LWZpbGwtZ2FwLW1ldGhvZCcpO1xuICAgICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stZmlsbGVkLWdhcCcpO1xuICAgICAgJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWxvY2stY3VycmVudC1maWxsLWdhcC1tZXRob2QnKTtcblxuICAgICAgaWYgKGN1cnJlbnRGaWxsR2FwTWV0aG9kID09PSAnbWFyZ2luJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZpbGxHYXBNZXRob2QgPT09ICd3aWR0aCcpIHtcbiAgICAgICAgJHRhcmdldC5zdHlsZS53aWR0aCA9IFwiXCI7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRGaWxsR2FwTWV0aG9kID09PSAnbWF4LXdpZHRoJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLm1heFdpZHRoID0gXCJcIjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZpbGxHYXBNZXRob2QgPT09ICdwYWRkaW5nJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgb25SZXNpemUgPSBmdW5jdGlvbiBvblJlc2l6ZShlKSB7XG4gIHJlZmlsbEdhcHMoKTtcbn07XG5cbnZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIHN0YXRlLnN0YXJ0VG91Y2hZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgc3RhdGUuc3RhcnRUb3VjaFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgfVxufTtcblxudmFyIHNjcm9sbF9sb2NrX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIHZhciBzdGFydFRvdWNoWSA9IHN0YXRlLnN0YXJ0VG91Y2hZLFxuICAgICAgICBzdGFydFRvdWNoWCA9IHN0YXRlLnN0YXJ0VG91Y2hYO1xuICAgIHZhciBjdXJyZW50Q2xpZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgIHZhciBjdXJyZW50Q2xpZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPCAyKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUuc2Nyb2xsYWJsZVNlbGVjdG9ycyk7XG4gICAgICB2YXIgZGlyZWN0aW9uID0ge1xuICAgICAgICB1cDogc3RhcnRUb3VjaFkgPCBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgZG93bjogc3RhcnRUb3VjaFkgPiBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgbGVmdDogc3RhcnRUb3VjaFggPCBjdXJyZW50Q2xpZW50WCxcbiAgICAgICAgcmlnaHQ6IHN0YXJ0VG91Y2hYID4gY3VycmVudENsaWVudFhcbiAgICAgIH07XG4gICAgICB2YXIgZGlyZWN0aW9uV2l0aE9mZnNldCA9IHtcbiAgICAgICAgdXA6IHN0YXJ0VG91Y2hZICsgVE9VQ0hfRElSRUNUSU9OX0RFVEVDVF9PRkZTRVQgPCBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgZG93bjogc3RhcnRUb3VjaFkgLSBUT1VDSF9ESVJFQ1RJT05fREVURUNUX09GRlNFVCA+IGN1cnJlbnRDbGllbnRZLFxuICAgICAgICBsZWZ0OiBzdGFydFRvdWNoWCArIFRPVUNIX0RJUkVDVElPTl9ERVRFQ1RfT0ZGU0VUIDwgY3VycmVudENsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBzdGFydFRvdWNoWCAtIFRPVUNIX0RJUkVDVElPTl9ERVRFQ1RfT0ZGU0VUID4gY3VycmVudENsaWVudFhcbiAgICAgIH07XG5cbiAgICAgIHZhciBoYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUoJGVsKSB7XG4gICAgICAgIHZhciBza2lwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgICBpZiAoJGVsKSB7XG4gICAgICAgICAgdmFyIHBhcmVudFNjcm9sbGFibGVFbCA9IGZpbmRQYXJlbnRCeVNlbGVjdG9yKCRlbCwgc2VsZWN0b3IsIGZhbHNlKTtcblxuICAgICAgICAgIGlmIChlbGVtZW50SXNJbnB1dFJhbmdlKCRlbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2tpcCB8fCBlbGVtZW50SXNTY3JvbGxhYmxlRmllbGQoJGVsKSAmJiBmaW5kUGFyZW50QnlTZWxlY3RvcigkZWwsIHNlbGVjdG9yKSB8fCBlbGVtZW50SGFzU2VsZWN0b3IoJGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHZhciBwcmV2ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U2Nyb2xsTGVmdE9uU3RhcnQoJGVsKSAmJiBlbGVtZW50U2Nyb2xsTGVmdE9uRW5kKCRlbCkpIHtcbiAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi51cCAmJiBlbGVtZW50U2Nyb2xsVG9wT25TdGFydCgkZWwpIHx8IGRpcmVjdGlvbi5kb3duICYmIGVsZW1lbnRTY3JvbGxUb3BPbkVuZCgkZWwpKSB7XG4gICAgICAgICAgICAgICAgcHJldmVudCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFNjcm9sbFRvcE9uU3RhcnQoJGVsKSAmJiBlbGVtZW50U2Nyb2xsVG9wT25FbmQoJGVsKSkge1xuICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgJiYgZWxlbWVudFNjcm9sbExlZnRPblN0YXJ0KCRlbCkgfHwgZGlyZWN0aW9uLnJpZ2h0ICYmIGVsZW1lbnRTY3JvbGxMZWZ0T25FbmQoJGVsKSkge1xuICAgICAgICAgICAgICAgIHByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbldpdGhPZmZzZXQudXAgJiYgZWxlbWVudFNjcm9sbFRvcE9uU3RhcnQoJGVsKSB8fCBkaXJlY3Rpb25XaXRoT2Zmc2V0LmRvd24gJiYgZWxlbWVudFNjcm9sbFRvcE9uRW5kKCRlbCkgfHwgZGlyZWN0aW9uV2l0aE9mZnNldC5sZWZ0ICYmIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCgkZWwpIHx8IGRpcmVjdGlvbldpdGhPZmZzZXQucmlnaHQgJiYgZWxlbWVudFNjcm9sbExlZnRPbkVuZCgkZWwpKSB7XG4gICAgICAgICAgICAgIHByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldmVudCkge1xuICAgICAgICAgICAgICBpZiAocGFyZW50U2Nyb2xsYWJsZUVsKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlKHBhcmVudFNjcm9sbGFibGVFbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGUocGFyZW50U2Nyb2xsYWJsZUVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaGFuZGxlKGUudGFyZ2V0KTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBvblRvdWNoRW5kID0gZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XG4gIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgc3RhdGUuc3RhcnRUb3VjaFkgPSAwO1xuICAgIHN0YXRlLnN0YXJ0VG91Y2hYID0gMDtcbiAgfVxufTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XG59XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBzY3JvbGxfbG9ja19vblRvdWNoTW92ZSwge1xuICAgIHBhc3NpdmU6IGZhbHNlXG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xufVxuXG52YXIgZGVwcmVjYXRlZE1ldGhvZHMgPSB7XG4gIGhpZGU6IGZ1bmN0aW9uIGhpZGUodGFyZ2V0KSB7XG4gICAgdGhyb3dFcnJvcignXCJoaWRlXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiZGlzYWJsZVBhZ2VTY3JvbGxcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjZGlzYWJsZXBhZ2VzY3JvbGxzY3JvbGxhYmxldGFyZ2V0Jyk7XG4gICAgZGlzYWJsZVBhZ2VTY3JvbGwodGFyZ2V0KTtcbiAgfSxcbiAgc2hvdzogZnVuY3Rpb24gc2hvdyh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInNob3dcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJlbmFibGVQYWdlU2Nyb2xsXCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2VuYWJsZXBhZ2VzY3JvbGxzY3JvbGxhYmxldGFyZ2V0Jyk7XG4gICAgZW5hYmxlUGFnZVNjcm9sbCh0YXJnZXQpO1xuICB9LFxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInRvZ2dsZVwiIGlzIGRlcHJlY2F0ZWQhIERvIG5vdCB1c2UgaXQuJyk7XG5cbiAgICBpZiAoZ2V0U2Nyb2xsU3RhdGUoKSkge1xuICAgICAgZGlzYWJsZVBhZ2VTY3JvbGwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5hYmxlUGFnZVNjcm9sbCh0YXJnZXQpO1xuICAgIH1cbiAgfSxcbiAgZ2V0U3RhdGU6IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHRocm93RXJyb3IoJ1wiZ2V0U3RhdGVcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJnZXRTY3JvbGxTdGF0ZVwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNnZXRzY3JvbGxzdGF0ZScpO1xuICAgIHJldHVybiBnZXRTY3JvbGxTdGF0ZSgpO1xuICB9LFxuICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgdGhyb3dFcnJvcignXCJnZXRXaWR0aFwiIGlzIGRlcHJlY2F0ZWQhIFVzZSBcImdldFBhZ2VTY3JvbGxCYXJXaWR0aFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNnZXRwYWdlc2Nyb2xsYmFyd2lkdGgnKTtcbiAgICByZXR1cm4gZ2V0UGFnZVNjcm9sbEJhcldpZHRoKCk7XG4gIH0sXG4gIGdldEN1cnJlbnRXaWR0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFdpZHRoKCkge1xuICAgIHRocm93RXJyb3IoJ1wiZ2V0Q3VycmVudFdpZHRoXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiZ2V0Q3VycmVudFBhZ2VTY3JvbGxCYXJXaWR0aFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNnZXRjdXJyZW50cGFnZXNjcm9sbGJhcndpZHRoJyk7XG4gICAgcmV0dXJuIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgoKTtcbiAgfSxcbiAgc2V0U2Nyb2xsYWJsZVRhcmdldHM6IGZ1bmN0aW9uIHNldFNjcm9sbGFibGVUYXJnZXRzKHRhcmdldCkge1xuICAgIHRocm93RXJyb3IoJ1wic2V0U2Nyb2xsYWJsZVRhcmdldHNcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJhZGRTY3JvbGxhYmxlVGFyZ2V0XCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2FkZHNjcm9sbGFibGV0YXJnZXRzY3JvbGxhYmxldGFyZ2V0Jyk7XG4gICAgc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldCh0YXJnZXQpO1xuICB9LFxuICBzZXRGaWxsR2FwU2VsZWN0b3JzOiBmdW5jdGlvbiBzZXRGaWxsR2FwU2VsZWN0b3JzKHNlbGVjdG9yKSB7XG4gICAgdGhyb3dFcnJvcignXCJzZXRGaWxsR2FwU2VsZWN0b3JzXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiYWRkRmlsbEdhcFNlbGVjdG9yXCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2FkZGZpbGxnYXBzZWxlY3RvcmZpbGxnYXBzZWxlY3RvcicpO1xuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0sXG4gIHNldEZpbGxHYXBUYXJnZXRzOiBmdW5jdGlvbiBzZXRGaWxsR2FwVGFyZ2V0cyh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInNldEZpbGxHYXBUYXJnZXRzXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiYWRkRmlsbEdhcFRhcmdldFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNhZGRmaWxsZ2FwdGFyZ2V0ZmlsbGdhcHRhcmdldCcpO1xuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBUYXJnZXQodGFyZ2V0KTtcbiAgfSxcbiAgY2xlYXJRdWV1ZTogZnVuY3Rpb24gY2xlYXJRdWV1ZSgpIHtcbiAgICB0aHJvd0Vycm9yKCdcImNsZWFyUXVldWVcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJjbGVhclF1ZXVlU2Nyb2xsTG9ja3NcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjY2xlYXJxdWV1ZXNjcm9sbGxvY2tzJyk7XG4gICAgY2xlYXJRdWV1ZVNjcm9sbExvY2tzKCk7XG4gIH1cbn07XG5cbnZhciBzY3JvbGxMb2NrID0gX29iamVjdFNwcmVhZCh7XG4gIGRpc2FibGVQYWdlU2Nyb2xsOiBkaXNhYmxlUGFnZVNjcm9sbCxcbiAgZW5hYmxlUGFnZVNjcm9sbDogZW5hYmxlUGFnZVNjcm9sbCxcbiAgZ2V0U2Nyb2xsU3RhdGU6IGdldFNjcm9sbFN0YXRlLFxuICBjbGVhclF1ZXVlU2Nyb2xsTG9ja3M6IGNsZWFyUXVldWVTY3JvbGxMb2NrcyxcbiAgZ2V0VGFyZ2V0U2Nyb2xsQmFyV2lkdGg6IHNjcm9sbF9sb2NrX2dldFRhcmdldFNjcm9sbEJhcldpZHRoLFxuICBnZXRDdXJyZW50VGFyZ2V0U2Nyb2xsQmFyV2lkdGg6IHNjcm9sbF9sb2NrX2dldEN1cnJlbnRUYXJnZXRTY3JvbGxCYXJXaWR0aCxcbiAgZ2V0UGFnZVNjcm9sbEJhcldpZHRoOiBnZXRQYWdlU2Nyb2xsQmFyV2lkdGgsXG4gIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGg6IGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgsXG4gIGFkZFNjcm9sbGFibGVTZWxlY3Rvcjogc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVNlbGVjdG9yLFxuICByZW1vdmVTY3JvbGxhYmxlU2VsZWN0b3I6IHNjcm9sbF9sb2NrX3JlbW92ZVNjcm9sbGFibGVTZWxlY3RvcixcbiAgYWRkU2Nyb2xsYWJsZVRhcmdldDogc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldCxcbiAgcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldDogc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldCxcbiAgYWRkTG9ja2FibGVTZWxlY3Rvcjogc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvcixcbiAgYWRkTG9ja2FibGVUYXJnZXQ6IHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0LFxuICBhZGRGaWxsR2FwU2VsZWN0b3I6IHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcixcbiAgcmVtb3ZlRmlsbEdhcFNlbGVjdG9yOiBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwU2VsZWN0b3IsXG4gIGFkZEZpbGxHYXBUYXJnZXQ6IHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBUYXJnZXQsXG4gIHJlbW92ZUZpbGxHYXBUYXJnZXQ6IHNjcm9sbF9sb2NrX3JlbW92ZUZpbGxHYXBUYXJnZXQsXG4gIHNldEZpbGxHYXBNZXRob2Q6IHNjcm9sbF9sb2NrX3NldEZpbGxHYXBNZXRob2QsXG4gIHJlZmlsbEdhcHM6IHJlZmlsbEdhcHMsXG4gIF9zdGF0ZTogc3RhdGVcbn0sIGRlcHJlY2F0ZWRNZXRob2RzKTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2Nyb2xsX2xvY2sgPSBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChzY3JvbGxMb2NrKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pW1wiZGVmYXVsdFwiXTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc2Nyb2xsTG9jayBmcm9tIFwic2Nyb2xsLWxvY2tcIjtcblxuaW1wb3J0IHsgcXVlcnlJZCB9IGZyb20gXCIuLi9kb20tcXVlcnlcIjtcblxuY29uc3QgTWVnYW5hdkNvbnRyb2xNb2JpbGVEcm9wZG93biA9ICh7IGNsZWFyUGFuZWxzIH0pID0+IHtcbiAgY29uc3QgY29udHJvbCA9IHF1ZXJ5SWQoXCJtZWdhbmF2LWNvbnRyb2wtbW9iaWxlLWRyb3Bkb3duXCIpO1xuICBjb25zdCBkcm9wZG93biA9IHF1ZXJ5SWQoXCJtZWdhbmF2LW1vYmlsZS1kcm9wZG93blwiKTtcbiAgY29uc3QgbWVudUljb24gPSBxdWVyeUlkKFwibWVnYW5hdi1jb250cm9sLW1vYmlsZS1kcm9wZG93bi1tZW51XCIpO1xuICBjb25zdCBjbG9zZUljb24gPSBxdWVyeUlkKFwibWVnYW5hdi1jb250cm9sLW1vYmlsZS1kcm9wZG93bi1jbG9zZVwiKTtcblxuICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJpYUV4cGFuZGVkID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpO1xuXG4gICAgaWYgKGFyaWFFeHBhbmRlZCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVwbGFjZShcImludmlzaWJsZVwiLCBcInZpc2libGVcIik7XG4gICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdHJ1ZSk7XG4gICAgICBzY3JvbGxMb2NrLmRpc2FibGVQYWdlU2Nyb2xsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZXBsYWNlKFwidmlzaWJsZVwiLCBcImludmlzaWJsZVwiKTtcbiAgICAgIGNvbnRyb2wuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgICBzY3JvbGxMb2NrLmVuYWJsZVBhZ2VTY3JvbGwoKTtcbiAgICAgIGNsZWFyUGFuZWxzKCk7XG4gICAgfVxuXG4gICAgbWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBjbG9zZUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfTtcblxuICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuXG4gIHJldHVybiB7XG4gICAgdGVhcmRvd246ICgpID0+IHtcbiAgICAgIGNvbnRyb2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICBzY3JvbGxMb2NrLmVuYWJsZVBhZ2VTY3JvbGwoKTtcbiAgICB9LFxuICAgIGNsZWFyOiAoKSA9PiB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVwbGFjZShcInZpc2libGVcIiwgXCJpbnZpc2libGVcIik7XG4gICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICAgICAgbWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgc2Nyb2xsTG9jay5lbmFibGVQYWdlU2Nyb2xsKCk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZ2FuYXZDb250cm9sTW9iaWxlRHJvcGRvd247XG4iXSwic291cmNlUm9vdCI6IiJ9