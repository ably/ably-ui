(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root[undefined]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/core/ConnectStateWrapper/component.jsx":
/*!****************************************************!*\
  !*** ./src/core/ConnectStateWrapper/component.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectStateWrapper": () => (/* binding */ ConnectStateWrapper),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remote_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remote-data-store */ "./src/core/remote-data-store.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/*
  Connect a react component to a global store.
  This is similar to what react-redux does but uses our global store so
  can share state with other React mount points or anything that uses the
  store.
  - selectors is an object where keys are your prop names and values are your select
  functions that work on the store to retrieve the state you are interested in
  - initial state is set in useEffect so the wrapped component needs to handle it's props set to undefined initially
*/

var ConnectStateWrapper = function ConnectStateWrapper(Component, selectors) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setStateForKey = function setStateForKey(key) {
    return function (storeState) {
      return setState(function () {
        return _defineProperty({}, key, storeState);
      });
    };
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var store = (0,_remote_data_store__WEBPACK_IMPORTED_MODULE_1__.getRemoteDataStore)();
    var resolvedState = Object.keys(selectors).reduce(function (acc, key) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, selectors[key](store)));
    }, {}); // Set initial state

    setState(resolvedState); // Create a store subscription for each selector. Depending on your use case, this can be inefficient.
    // When optimising for renders, look for wins with selectors better for your use and using connectState directly.

    Object.keys(selectors).forEach(function (key) {
      (0,_remote_data_store__WEBPACK_IMPORTED_MODULE_1__.connectState)(selectors[key], setStateForKey(key));
    });
  }, []);

  var WrappedComponent = function WrappedComponent(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({}, props, state));
  };

  return WrappedComponent;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectStateWrapper);

/***/ }),

/***/ "./src/core/FeaturedLink/component.jsx":
/*!*********************************************!*\
  !*** ./src/core/FeaturedLink/component.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon/component.jsx */ "./src/core/Icon/component.jsx");




var FeaturedLink = function FeaturedLink(_ref) {
  var url = _ref.url,
      _ref$textSize = _ref.textSize,
      textSize = _ref$textSize === void 0 ? "text-menu3" : _ref$textSize,
      _ref$iconColor = _ref.iconColor,
      iconColor = _ref$iconColor === void 0 ? "text-cool-black" : _ref$iconColor,
      _ref$flush = _ref.flush,
      flush = _ref$flush === void 0 ? false : _ref$flush,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: url,
    className: "ui-featured-link ".concat(textSize, " ").concat(flush ? "" : "py-8", " "),
    style: {
      "--featured-link-icon-size": "var(".concat(textSize.replace("text", "--fs"), ")")
    }
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "icon-gui-link-arrow",
    size: "calc(var(--featured-link-icon-size) * 1.25)",
    color: iconColor,
    additionalCSS: "ui-featured-link-icon"
  }));
};

FeaturedLink.propTypes = {
  url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  textSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  iconColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  flush: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedLink);

/***/ }),

/***/ "./src/core/Flash/component.jsx":
/*!**************************************!*\
  !*** ./src/core/Flash/component.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerFlashes": () => (/* binding */ reducerFlashes),
/* harmony export */   "FLASH_DATA_ID": () => (/* binding */ FLASH_DATA_ID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _remote_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../remote-data-store */ "./src/core/remote-data-store.js");
/* harmony import */ var _ConnectStateWrapper_component_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ConnectStateWrapper/component.jsx */ "./src/core/ConnectStateWrapper/component.jsx");
/* harmony import */ var _Icon_component_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icon/component.jsx */ "./src/core/Icon/component.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var REDUCER_KEY = "flashes";
var FLASH_DATA_ID = "ui-flashes";
var initialState = {
  items: []
};

var reducerFlashes = _defineProperty({}, REDUCER_KEY, function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "flash/push":
      {
        var flashes = Array.isArray(action.payload) ? action.payload : [action.payload];
        return {
          items: [].concat(_toConsumableArray(state.items), _toConsumableArray(flashes))
        };
      }

    default:
      return state;
  }
});

var selectFlashes = function selectFlashes(store) {
  return store.getState()[REDUCER_KEY];
};

var FlashT = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["error", "success", "notice", "info", "alert"]),
  content: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
var FLASH_BG_COLOR = {
  error: "bg-gui-error",
  success: "bg-zingy-green",
  notice: "bg-electric-cyan",
  info: "bg-electric-cyan",
  alert: "bg-active-orange"
};
var FLASH_TEXT_COLOR = {
  error: "text-white",
  success: "text-cool-black",
  notice: "text-cool-black",
  info: "text-cool-black",
  alert: "text-white"
};
var AUTO_HIDE = ["success", "info", "notice"];
var AUTO_HIDE_TIME = 8000;

var Flash = function Flash(_ref) {
  var type = _ref.type,
      content = _ref.content;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      closed = _useState2[0],
      setClosed = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      flashHeight = _useState4[0],
      setFlashHeight = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      triggerEntryAnimation = _useState6[0],
      setTriggerEntryAnimation = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return setTriggerEntryAnimation(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (AUTO_HIDE.includes(type)) {
      setTimeout(function () {
        // closeFlash is idempotent, we can call it even if the flash has been already closed
        closeFlash();
      }, AUTO_HIDE_TIME);
    }
  }, [closed]);

  var closeFlash = function closeFlash() {
    if (ref.current) {
      setFlashHeight(ref.current.getBoundingClientRect().height);
    }

    setTimeout(function () {
      return setClosed(true);
    }, 0);
  };

  var animateEntry = triggerEntryAnimation && !closed;
  var style;

  if (flashHeight && !closed) {
    style = {
      height: "".concat(flashHeight, "px")
    };
  } else if (closed) {
    style = {
      height: 0,
      marginTop: 0,
      zIndex: -1
    };
  } else {
    style = {};
  }

  var safeContent = dompurify__WEBPACK_IMPORTED_MODULE_1___default().sanitize(content, {
    ALLOWED_TAGS: ["a"],
    ALLOWED_ATTR: ["href", "data-method", "rel"]
  });
  var withIcons = {
    notice: "icon-gui-ably-badge",
    success: "icon-gui-tick",
    error: "icon-gui-warning",
    alert: "icon-gui-warning"
  };
  var iconColor = {
    notice: "text-cool-black",
    success: "text-cool-black",
    error: "text-white",
    alert: "text-white"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ui-flash-message ui-grid-px ".concat(animateEntry ? "ui-flash-message-enter" : ""),
    style: style,
    ref: ref,
    "data-id": "ui-flash"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(FLASH_BG_COLOR[type], " p-32 flex align-center rounded shadow-container-subtle")
  }, withIcons[type] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_component_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
    name: withIcons[type],
    color: iconColor[type],
    size: "1.5rem",
    additionalCSS: "mr-16 self-baseline"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-flash-text ".concat(FLASH_TEXT_COLOR[type]),
    dangerouslySetInnerHTML: {
      __html: safeContent
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "p-0 ml-auto self-start",
    onClick: closeFlash
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "h-24 w-24 transition-colors ui-icon-cool-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: "#sprite-close"
  })))));
};

Flash.propTypes = _objectSpread({}, FlashT);

var Flashes = function Flashes(_ref2) {
  var flashes = _ref2.flashes;
  var items = (flashes === null || flashes === void 0 ? void 0 : flashes.items) || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ui-flash",
    "data-id": FLASH_DATA_ID
  }, items.map(function (flash) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Flash, _extends({
      key: flash.type
    }, flash));
  }));
};

Flashes.propTypes = {
  flashes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    items: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape(FlashT))
  })
};

var BackendFlashes = function BackendFlashes(_ref3) {
  var flashes = _ref3.flashes;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var transformedFlashes = flashes.map(function (flash) {
      var _flash = _slicedToArray(flash, 2),
          type = _flash[0],
          content = _flash[1];

      return {
        type: type,
        content: content
      };
    }) || [];

    if (transformedFlashes.length > 0) {
      var store = (0,_remote_data_store__WEBPACK_IMPORTED_MODULE_3__.getRemoteDataStore)();
      store.dispatch({
        type: "flash/push",
        payload: transformedFlashes
      });
    }
  }, []);
  var WrappedFlashes = (0,_ConnectStateWrapper_component_jsx__WEBPACK_IMPORTED_MODULE_4__.default)(Flashes, {
    flashes: selectFlashes
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedFlashes, null);
};

BackendFlashes.propTypes = {
  flashes: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)))
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackendFlashes);

/***/ }),

/***/ "./src/core/Icon/component.jsx":
/*!*************************************!*\
  !*** ./src/core/Icon/component.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _excluded = ["name", "size", "color", "additionalCSS"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Icon = function Icon(_ref) {
  var name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "0.75rem" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "" : _ref$color,
      _ref$additionalCSS = _ref.additionalCSS,
      additionalCSS = _ref$additionalCSS === void 0 ? "" : _ref$additionalCSS,
      additionalAttributes = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    className: "".concat(color, " ").concat(additionalCSS),
    style: {
      width: size,
      height: size
    }
  }, additionalAttributes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: "#sprite-".concat(name)
  }));
};

Icon.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  additionalCSS: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/core/Logo/component.jsx":
/*!*************************************!*\
  !*** ./src/core/Logo/component.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Logo = function Logo(_ref) {
  var theme = _ref.theme,
      dataId = _ref.dataId,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? "/" : _ref$href;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: href,
    className: "h-32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    "data-id": dataId,
    className: "".concat(theme.logoTextColor, " transition-colors"),
    width: "108",
    height: "32",
    viewBox: "0 0 108 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M62.922 24.9786V4.08813H66.6933V11.6512C67.9709 10.435 69.6164 9.76044 71.3538 9.76044C75.4318 9.76044 79.0498 12.8674 79.0498 17.5484C79.0498 22.2293 75.4318 25.3465 71.3538 25.3465C69.5244 25.3465 67.7971 24.6209 66.5094 23.3024V24.9786H62.922ZM75.2785 17.5484C75.2785 14.932 73.4183 13.1025 70.9859 13.1025C68.6148 13.1025 66.7853 14.84 66.6933 17.3644V17.5484C66.6933 20.1648 68.5534 21.9942 70.9859 21.9942C73.4183 21.9942 75.2785 20.1648 75.2785 17.5484ZM80.7975 24.9786V4.08813H84.5688V24.9786H80.7975ZM89.8425 30.3954L92.0399 25.1523L86.0712 10.1284H90.1491L93.9511 20.6247L97.8144 10.1284H101.954L93.8591 30.4056H89.8425V30.3954ZM56.9329 10.1284V12.0191C55.6247 10.5883 53.7952 9.77066 51.9147 9.77066C47.8367 9.77066 44.2187 12.8777 44.2187 17.5586C44.2187 22.2497 47.8367 25.3465 51.9147 25.3465C53.8668 25.3465 55.7166 24.4982 57.0555 22.9754V24.9888H60.3465V10.1284H56.9329ZM56.5649 17.5484C56.5649 20.1341 54.7048 21.9942 52.2724 21.9942C49.8399 21.9942 47.9798 20.1341 47.9798 17.5484C47.9798 14.9626 49.8399 13.1025 52.2724 13.1025C54.6435 13.1025 56.473 14.8706 56.5649 17.3644V17.5484Z",
    fill: "currentColor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19.2858 0L3.14788 29.5369L0 27.3293L14.932 0H19.2858ZM19.5107 0L35.6487 29.5369L38.7965 27.3293L23.8646 0H19.5107Z",
    fill: "url(#paint0_linear)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M35.4238 29.7107L19.3983 17.16L3.37271 29.7107L6.64323 32L19.3983 22.0147L32.1533 32L35.4238 29.7107Z",
    fill: "url(#paint1_linear)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear",
    x1: "5.47361",
    y1: "37.4219",
    x2: "32.4603",
    y2: "7.45023",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#FF5416"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.2535",
    stopColor: "#FF5115"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.461",
    stopColor: "#FF4712"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.6523",
    stopColor: "#FF350E"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.8327",
    stopColor: "#FF1E08"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#FF0000"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint1_linear",
    x1: "10.7084",
    y1: "39.3593",
    x2: "26.6583",
    y2: "21.6452",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#FF5416"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.2535",
    stopColor: "#FF5115"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.461",
    stopColor: "#FF4712"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.6523",
    stopColor: "#FF350E"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.8327",
    stopColor: "#FF1E08"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#FF0000"
  })))));
};

Logo.propTypes = {
  dataId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Logo));

/***/ }),

/***/ "./src/core/Meganav/component.js":
/*!***************************************!*\
  !*** ./src/core/Meganav/component.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Meganav)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.css */ "./src/core/Meganav/component.css");
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_component_css__WEBPACK_IMPORTED_MODULE_1__);
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

/***/ }),

/***/ "./src/core/MeganavBlogPostsList/component.jsx":
/*!*****************************************************!*\
  !*** ./src/core/MeganavBlogPostsList/component.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FeaturedLink/component.jsx */ "./src/core/FeaturedLink/component.jsx");




var MeganavBlogPostsList = function MeganavBlogPostsList(_ref) {
  var recentBlogPosts = _ref.recentBlogPosts,
      absUrl = _ref.absUrl;
  return recentBlogPosts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline",
    id: "meganav-why-ably-panel-list-blog"
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mb-8",
    "aria-labelledby": "meganav-why-ably-panel-list-blog"
  }, recentBlogPosts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: post.link
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: post.link,
      className: "ui-meganav-media group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ui-meganav-media-heading"
    }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ui-meganav-media-copy"
    }, post.pubDate)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    url: absUrl("/blog")
  }, "More from our Blog")) : null;
};

MeganavBlogPostsList.propTypes = {
  recentBlogPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    pubDate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  })),
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavBlogPostsList);

/***/ }),

/***/ "./src/core/MeganavContentDevelopers/component.jsx":
/*!*********************************************************!*\
  !*** ./src/core/MeganavContentDevelopers/component.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FeaturedLink/component.jsx */ "./src/core/FeaturedLink/component.jsx");
/* harmony import */ var _Icon_component_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon/component.jsx */ "./src/core/Icon/component.jsx");





var MeganavContentDevelopers = function MeganavContentDevelopers(_ref) {
  var absUrl = _ref.absUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "ui-meganav-content ui-grid-gap md:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline md:mb-8"
  }, "Documentation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "relative",
    action: absUrl("/search"),
    method: "get"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_component_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    name: "icon-gui-search",
    color: "text-cool-black",
    size: "1.5rem",
    additionalCSS: "absolute top-8 left-8 pt-1 mt-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "search",
    name: "q",
    className: "ui-input pl-48",
    placeholder: "Search docs"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-p1 font-medium text-cool-black mb-20"
  }, "Docs, quick start guides, tutorials, and API reference to help you start building with Ably\u2019s platform and APIs."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    url: absUrl("/docs")
  }, "Visit Documentation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline uppercase",
    id: "meganav-developers-panel-explore"
  }, "EXPLORE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "aria-labelledby": "meganav-developers-panel-explore"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/integrations"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Third-party integrations & plugins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Integrate and extend Ably with cloud services like AWS Kinesis."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/protocols"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Multi-protocol messaging"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "We support pub/sub over WebSockets, MQTT, SSE, and more."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/hub"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Streaming data sources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Augment your apps with realtime updates like weather or transit."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/periodic-table-of-realtime"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "The Periodic Table of Realtime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "A compendium for all things realtime and event-driven."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline uppercase",
    id: "meganav-developers-panel-quick-links"
  }, "Quick links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "aria-labelledby": "meganav-developers-panel-quick-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/download"),
    className: "group ui-meganav-media py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Download an SDK"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://changelog.ably.com/",
    className: "group ui-meganav-media py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Platform changelog"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/support"),
    className: "group ui-meganav-media py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Support & FAQs"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "http://status.ably.com/",
    className: "group ui-meganav-media py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Status", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    src: "https://status.ably.com/embed/icon",
    allowtransparency: "true",
    frameBorder: "0",
    scrolling: "no",
    className: "w-24 h-24 ml-4 border-none pointer-events-none align-middle"
  })))))));
};

MeganavContentDevelopers.propTypes = {
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavContentDevelopers);

/***/ }),

/***/ "./src/core/MeganavContentPlatform/component.jsx":
/*!*******************************************************!*\
  !*** ./src/core/MeganavContentPlatform/component.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FeaturedLink/component.jsx */ "./src/core/FeaturedLink/component.jsx");




var MeganavContentPlatform = function MeganavContentPlatform(_ref) {
  var paths = _ref.paths,
      absUrl = _ref.absUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "ui-meganav-content ui-grid-gap sm:grid-cols-2 md:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:col-span-full md:col-span-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex mb-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: paths.ablyStack,
    alt: "Ably homepage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline ml-24"
  }, "The Ably Platform")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-p2 font-medium text-cool-black mb-8"
  }, "Easily power any realtime experience in your application. No complex infrastructure to manage or provision. Just a simple API that handles everything realtime, and lets you focus on your code."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    url: absUrl("/platform")
  }, "Explore how it works")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline",
    id: "meganav-platform-panel-list-our-features"
  }, "Our features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "aria-labelledby": "meganav-platform-panel-list-our-features"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/pub-sub-messaging"),
    className: "group ui-meganav-media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Publish/subscribe messaging"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Feature-rich pub/sub messaging to power any realtime requirement."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/push-notifications"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Push notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Deliver native notifications at scale with our unified API."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/integrations"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Third-party integrations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Integrate and extend Ably with cloud services like AWS Kinesis."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/protocols"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Multi-protocol messaging"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "We support pub/sub over WebSockets, MQTT, SSE, and more."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/hub"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Streaming data sources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Augment your apps with realtime updates like weather or transit.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    url: absUrl("/platform")
  }, "Explore all platform features")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline",
    id: "meganav-platform-panel-list-our-technology"
  }, "Our technology"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mb-8",
    "aria-labelledby": "meganav-platform-panel-list-our-technology"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/four-pillars-of-dependability#performance"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Predictable performance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "We provide predictability so you can be confident your realtime application will always perform as expected."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/four-pillars-of-dependability#integrity"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Guaranteed ordering & delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "We guarantee in-order data delivery, even after disconnections."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/four-pillars-of-dependability#reliability"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Fault tolerant infrastructure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Redundant at regional and global levels with 99.999% uptime SLAs."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/four-pillars-of-dependability#availability"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "High scalability & availability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Elastic, battle-tested global infrastructure for massive scale."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/network"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Global edge network"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "An edge network of 15 core routing datacenters and 200+ PoPs.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    url: absUrl("/four-pillars-of-dependability")
  }, "Explore our technology")));
};

MeganavContentPlatform.propTypes = {
  paths: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    ablyStack: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    iconSprites: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavContentPlatform);

/***/ }),

/***/ "./src/core/MeganavContentUseCases/component.jsx":
/*!*******************************************************!*\
  !*** ./src/core/MeganavContentUseCases/component.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var MeganavContentUseCases = function MeganavContentUseCases(_ref) {
  var absUrl = _ref.absUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "ui-meganav-content ui-grid-gap md:grid-cols-2 gap-y-0 md:gap-y-32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline",
    id: "meganav-use-cases-panel-industry-use-cases"
  }, "By use case"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "aria-labelledby": "meganav-use-cases-panel-industry-use-cases"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/edtech"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "EdTech"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Deliver interactive learning experiences like multi-user classrooms with chat."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/virtual-events"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Virtual Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Power engaging virtual events with interactive realtime features."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/sports-and-media"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Sports & Media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Deliver global realtime experiences to keep fans informed, engaged, entertained."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/fintech"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Fintech"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Deliver fast, personalised fintech data in realtime to mobile & web customers."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/gaming"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Gaming"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Power interactive gaming experiences that are wicked fast and utterly reliable."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/automotive-logistics-and-mobility"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Automotive, Logistics, & Mobility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Power asset tracking, live transit updates, race-critical diagnostics, and more."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "md:mt-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/b2b-platforms"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "B2B Platforms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Empower customers with realtime technology that gives them a competitive edge."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/healthcare"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Healthcare"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Provide HIPAA-compliant realtime apps healthcare professionals can depend on."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/ecommerce-and-retail"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "eCommerce & Retail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Enable realtime pricing, inventory, and transactions to enrich user experiences."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/iot-and-connected-devices"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "IoT & Connected Devices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Monitor and control global IoT deployments of any kind in realtime."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/asset-tracking"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Asset Tracking"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Track assets in realtime with a solution optimized for last mile logistics, food delivery applications, and urban mobility services."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/solutions/extend-kafka-to-the-edge"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Extend Kafka to the edge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Enhance and reliably expand Kafka's event streaming capabilities beyond your private network."))))));
};

MeganavContentUseCases.propTypes = {
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavContentUseCases);

/***/ }),

/***/ "./src/core/MeganavContentWhyAbly/component.jsx":
/*!******************************************************!*\
  !*** ./src/core/MeganavContentWhyAbly/component.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FeaturedLink/component.jsx */ "./src/core/FeaturedLink/component.jsx");
/* harmony import */ var _MeganavBlogPostsList_component_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MeganavBlogPostsList/component.jsx */ "./src/core/MeganavBlogPostsList/component.jsx");
/* harmony import */ var _ConnectStateWrapper_component_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ConnectStateWrapper/component.jsx */ "./src/core/ConnectStateWrapper/component.jsx");
/* harmony import */ var _remote_blogs_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../remote-blogs-posts */ "./src/core/remote-blogs-posts.js");







var MeganavContentWhyAbly = function MeganavContentWhyAbly(_ref) {
  var absUrl = _ref.absUrl;
  var BlogPostsList = (0,_ConnectStateWrapper_component_jsx__WEBPACK_IMPORTED_MODULE_4__.default)(_MeganavBlogPostsList_component_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    recentBlogPosts: _remote_blogs_posts__WEBPACK_IMPORTED_MODULE_5__.selectRecentBlogPosts
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "ui-meganav-content ui-grid-gap md:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline",
    id: "meganav-why-ably-panel-list-why-companies"
  }, "Why companies choose Ably"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "aria-labelledby": "meganav-why-ably-panel-list-why-companies"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/customers"),
    className: "group ui-meganav-media py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Customers"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/case-studies"),
    className: "group ui-meganav-media py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Case studies"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/compare"),
    className: "group ui-meganav-media py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Compare our tech"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/aws"),
    className: "group ui-meganav-media py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Ably & AWS"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/resources/datasheets"),
    className: "group ui-meganav-media py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Resources"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ui-meganav-overline",
    id: "meganav-why-ably-panel-list-four-pillars"
  }, "Four pillars of dependability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mb-8",
    "aria-labelledby": "meganav-why-ably-panel-list-four-pillars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/four-pillars-of-dependability#performance"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Predictable performance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "A low-latency global edge network across 200+ PoPs."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/four-pillars-of-dependability#integrity"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Guaranteed ordering & delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "We guarantee in-order data delivery, even after disconnections."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/four-pillars-of-dependability#reliability"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "Fault tolerant infrastructure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Redundant at regional and global levels with 99.999% uptime SLAs."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/four-pillars-of-dependability#availability"),
    className: "ui-meganav-media group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-heading"
  }, "High scalability & availability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-media-copy"
  }, "Elastic, battle-tested global infrastructure for massive scale.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeaturedLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    url: absUrl("/four-pillars-of-dependability")
  }, "Explore our Four Pillars of Dependability")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlogPostsList, {
    absUrl: absUrl
  }));
};

MeganavContentWhyAbly.propTypes = {
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavContentWhyAbly);

/***/ }),

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

/***/ "./src/core/MeganavControl/component.jsx":
/*!***********************************************!*\
  !*** ./src/core/MeganavControl/component.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon/component.jsx */ "./src/core/Icon/component.jsx");




var MeganavControl = function MeganavControl(_ref) {
  var ariaControls = _ref.ariaControls,
      children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    "data-id": "meganav-control",
    className: "ui-meganav-link h-64 flex items-center group ".concat(theme.textColor),
    "aria-expanded": "false",
    "aria-controls": ariaControls,
    "aria-label": "Show ".concat(children)
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "icon-gui-disclosure-arrow",
    color: "text-cool-black",
    size: "1.5rem",
    additionalCSS: "transform rotate-90 group-hover:text-gui-hover group-focus:text-gui-focus"
  }));
};

MeganavControl.propTypes = {
  ariaControls: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
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

/***/ "./src/core/MeganavControlMobileDropdown/component.jsx":
/*!*************************************************************!*\
  !*** ./src/core/MeganavControlMobileDropdown/component.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon/component.jsx */ "./src/core/Icon/component.jsx");




var MeganavControlMobileDropdown = function MeganavControlMobileDropdown(_ref) {
  var theme = _ref.theme;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "block ml-24 mr-0 px-0 py-16 hover:text-gui-hover focus:text-gui-focus focus:outline-none",
    "data-id": "meganav-control-mobile-dropdown",
    "aria-expanded": "false",
    "aria-controls": "meganav-mobile-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "icon-gui-burger-menu",
    size: "1.5rem",
    color: theme.mobileMenuColor,
    additionalCSS: "transition-colors",
    "data-id": "meganav-control-mobile-dropdown-menu"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "icon-gui-close",
    size: "1.5rem",
    color: theme.mobileMenuColor,
    additionalCSS: "transition-colors hidden",
    "data-id": "meganav-control-mobile-dropdown-close"
  }));
};

MeganavControlMobileDropdown.propTypes = {
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
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

/***/ "./src/core/MeganavControlMobilePanelClose/component.jsx":
/*!***************************************************************!*\
  !*** ./src/core/MeganavControlMobilePanelClose/component.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon/component.jsx */ "./src/core/Icon/component.jsx");




var MeganavControlMobilePanelClose = function MeganavControlMobilePanelClose(_ref) {
  var ariaControls = _ref.ariaControls;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-24 md:mx-32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "ui-meganav-mobile-link text-gui-default mb-16",
    "data-id": "meganav-control-mobile-panel-close",
    "aria-expanded": "false",
    "aria-controls": ariaControls,
    "aria-label": "Hide panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "icon-gui-disclosure-arrow",
    color: "text-cool-black",
    size: "1.5rem",
    additionalCSS: "relative -top-1 transform rotate-180"
  }), "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "ui-meganav-hr"
  }));
};

MeganavControlMobilePanelClose.propTypes = {
  ariaControls: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavControlMobilePanelClose);

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

/***/ "./src/core/MeganavControlMobilePanelOpen/component.jsx":
/*!**************************************************************!*\
  !*** ./src/core/MeganavControlMobilePanelOpen/component.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon/component.jsx */ "./src/core/Icon/component.jsx");




var MeganavControlMobilePanelOpen = function MeganavControlMobilePanelOpen(_ref) {
  var ariaControls = _ref.ariaControls,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "ui-meganav-mobile-link",
    "data-id": "meganav-control-mobile-panel-open",
    "aria-expanded": "false",
    "aria-controls": ariaControls,
    "aria-label": "Show ".concat(children)
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "icon-gui-disclosure-arrow",
    color: "text-cool-black",
    size: "1.5rem",
    additionalCSS: "relative -top-1 ml-auto float-right"
  }));
};

MeganavControlMobilePanelOpen.propTypes = {
  ariaControls: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavControlMobilePanelOpen);

/***/ }),

/***/ "./src/core/MeganavItemsDesktop/component.jsx":
/*!****************************************************!*\
  !*** ./src/core/MeganavItemsDesktop/component.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Meganav_component_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Meganav/component.json */ "./src/core/Meganav/component.json");
/* harmony import */ var _MeganavControl_component_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MeganavControl/component.jsx */ "./src/core/MeganavControl/component.jsx");





var MeganavDesktopItems = function MeganavDesktopItems(_ref) {
  var panels = _ref.panels,
      paths = _ref.paths,
      theme = _ref.theme,
      absUrl = _ref.absUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "hidden md:flex",
    "data-id": "meganav-items-desktop"
  }, _Meganav_component_json__WEBPACK_IMPORTED_MODULE_2__.panels.map(function (panel) {
    var PanelComponent = panels[panel.component];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "ui-meganav-item",
      key: panel.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeganavControl_component_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
      theme: theme,
      ariaControls: panel.id
    }, panel.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui-meganav-panel invisible",
      id: panel.id,
      "data-id": "meganav-panel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PanelComponent, {
      paths: paths,
      absUrl: absUrl
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ui-meganav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/pricing"),
    "data-id": "meganav-link",
    className: "ui-meganav-link h-64 items-center flex ".concat(theme.textColor)
  }, "Pricing")));
};

MeganavDesktopItems.propTypes = {
  panels: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  paths: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    logo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    iconSprites: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    ablyStack: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    blogThumb1: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    blogThumb2: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    blogThumb3: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(MeganavDesktopItems));

/***/ }),

/***/ "./src/core/MeganavItemsMobile/component.jsx":
/*!***************************************************!*\
  !*** ./src/core/MeganavItemsMobile/component.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignOutLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SignOutLink/component.jsx */ "./src/core/SignOutLink/component.jsx");
/* harmony import */ var _Meganav_component_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Meganav/component.json */ "./src/core/Meganav/component.json");
/* harmony import */ var _MeganavControlMobileDropdown_component_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MeganavControlMobileDropdown/component.jsx */ "./src/core/MeganavControlMobileDropdown/component.jsx");
/* harmony import */ var _MeganavControlMobilePanelClose_component_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MeganavControlMobilePanelClose/component.jsx */ "./src/core/MeganavControlMobilePanelClose/component.jsx");
/* harmony import */ var _MeganavControlMobilePanelOpen_component_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MeganavControlMobilePanelOpen/component.jsx */ "./src/core/MeganavControlMobilePanelOpen/component.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var MeganavItemsMobile = function MeganavItemsMobile(_ref) {
  var panels = _ref.panels,
      paths = _ref.paths,
      sessionState = _ref.sessionState,
      theme = _ref.theme,
      loginLink = _ref.loginLink,
      absUrl = _ref.absUrl;
  var classNames = "ui-meganav-link ".concat(theme.textColor);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex md:hidden",
    "data-id": "meganav-items-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, sessionState.signedIn && sessionState.logOut ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SignOutLink_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, _extends({
    absUrl: absUrl
  }, sessionState.logOut), function (_ref2) {
    var text = _ref2.text,
        href = _ref2.href,
        onClick = _ref2.onClick;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      onClick: onClick,
      href: absUrl(href),
      className: classNames,
      "data-id": "meganav-link"
    }, text);
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl(loginLink),
    className: classNames,
    "data-id": "meganav-link"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ui-meganav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeganavControlMobileDropdown_component_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
    theme: theme
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ui-meganav-mobile-dropdown invisible",
    id: "meganav-mobile-dropdown",
    "data-id": "meganav-mobile-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-16 ui-grid-px bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mb-16"
  }, _Meganav_component_json__WEBPACK_IMPORTED_MODULE_3__.panels.map(function (panel) {
    var PanelComponent = panels[panel.component];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "ui-meganav-mobile-item",
      key: "".concat(panel.id, "-mobile")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeganavControlMobilePanelOpen_component_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
      ariaControls: "".concat(panel.id, "-mobile")
    }, panel.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui-meganav-panel-mobile hidden",
      id: "".concat(panel.id, "-mobile"),
      "data-scroll-lock-scrollable": true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeganavControlMobilePanelClose_component_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
      ariaControls: "".concat(panel.id, "-mobile")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PanelComponent, {
      paths: paths,
      absUrl: absUrl
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/pricing"),
    className: "ui-meganav-mobile-link"
  }, "Pricing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "ui-meganav-hr mb-20"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-center mb-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/contact"),
    className: "text-menu2 font-medium block ml-0 mr-8 lg:mx-12 p-0 hover:text-gui-hover focus:text-gui-focus focus:outline-none"
  }, "Contact us"), sessionState.signedIn && sessionState.account ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl(sessionState.account.links.dashboard.href),
    className: "ui-btn-secondary"
  }, "Dashboard") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/sign-up"),
    className: "ui-btn"
  }, "Sign up free"))))));
};

MeganavItemsMobile.propTypes = {
  panels: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  paths: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    iconSprites: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  sessionState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  loginLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(MeganavItemsMobile, function (oldState, newState) {
  var pathsOld = oldState.pathsOld,
      themeOld = oldState.themeOld;
  var pathsNew = newState.pathsNew,
      themeNew = newState.themeNew;

  if (pathsOld === pathsNew && themeOld === themeNew && Object.keys(newState.sessionState || {}).length === 0) {
    return true;
  } else {
    return false;
  }
}));

/***/ }),

/***/ "./src/core/MeganavItemsSignedIn/component.jsx":
/*!*****************************************************!*\
  !*** ./src/core/MeganavItemsSignedIn/component.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MeganavControl_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MeganavControl/component.jsx */ "./src/core/MeganavControl/component.jsx");
/* harmony import */ var _SignOutLink_component_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SignOutLink/component.jsx */ "./src/core/SignOutLink/component.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var truncate = function truncate(string, length) {
  return string !== null && string !== void 0 && string.length && string.length > length ? "".concat(string.slice(0, length - 1), "\u2026") : string;
};

var MeganavItemsSignedIn = function MeganavItemsSignedIn(_ref) {
  var sessionState = _ref.sessionState,
      theme = _ref.theme,
      absUrl = _ref.absUrl;
  var links = sessionState.account ? Object.keys(sessionState.account.links).map(function (key) {
    return sessionState.account.links[key];
  }) : [];
  var accountName = truncate(sessionState.accountName, 20);
  var preferredEmail = truncate(sessionState.preferredEmail, 20);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "hidden md:flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ui-meganav-item relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeganavControl_component_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    ariaControls: "account-panel",
    theme: theme
  }, accountName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ui-meganav-panel-account invisible",
    id: "account-panel",
    "data-id": "meganav-panel"
  }, sessionState.account && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-overline mt-16 mx-16"
  }, "Your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mb-16 mx-16"
  }, links.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.href
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "ui-meganav-account-link",
      href: absUrl(item.href)
    }, item.text));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ui-meganav-overline mx-16"
  }, preferredEmail), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mb-8 mx-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl(sessionState.mySettings.href),
    className: "ui-meganav-account-link"
  }, sessionState.mySettings.text)), sessionState.myAccessTokens && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl(sessionState.myAccessTokens.href),
    className: "ui-meganav-account-link"
  }, sessionState.myAccessTokens.text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ui-version-tag"
  }, "preview")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "ui-meganav-hr mb-16"
  }), sessionState.logOut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-16 px-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SignOutLink_component_jsx__WEBPACK_IMPORTED_MODULE_3__.default, _extends({
    absUrl: absUrl
  }, sessionState.logOut), function (_ref2) {
    var text = _ref2.text,
        href = _ref2.href,
        onClick = _ref2.onClick;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      onClick: onClick,
      href: absUrl(href),
      className: "ui-meganav-account-link"
    }, text);
  })))), sessionState.account && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ml-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl(sessionState.account.links.dashboard.href),
    className: "ui-btn-secondary p-btn-small"
  }, "Dashboard")));
};

MeganavItemsSignedIn.propTypes = {
  sessionState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  paths: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    iconSprites: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeganavItemsSignedIn);

/***/ }),

/***/ "./src/core/Notice/component.js":
/*!**************************************!*\
  !*** ./src/core/Notice/component.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.css */ "./src/core/Notice/component.css");
/* harmony import */ var _component_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_component_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dom_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-query */ "./src/core/dom-query.js");
/* harmony import */ var _Flash_component_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Flash/component.jsx */ "./src/core/Flash/component.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var COOKIE_EXPIRY = 90;
var COLLAPSE_TRIGGER_DISTANCE = 5;
var SCROLL_LISTENER_THROTTLE = 100;
var RESIZE_LISTENER_THROTTLE = 100;

var isMdViewport = function isMdViewport() {
  return !window.matchMedia("(min-width: 65rem)").matches;
};

var adjustFlashMargin = function adjustFlashMargin(open) {
  // HACK ALERT
  // Add margin to flashes when opening the notice.
  // Flashes are react components and this notice needs to work as a view-component and react component.
  // We could do this with redux but then we potentially update state on every scroll event, which
  // even with debounce will deplate our frame budget.
  var flash = (0,_dom_query__WEBPACK_IMPORTED_MODULE_3__.queryId)(_Flash_component_jsx__WEBPACK_IMPORTED_MODULE_4__.FLASH_DATA_ID);

  if (flash) {
    flash.style.marginTop = open ? "4rem" : null;
  }
};

var hideOnMobile = function hideOnMobile(bannerContainer) {
  if (isMdViewport()) {
    bannerContainer.style.display = "none";
  } else {
    bannerContainer.style.display = null;
  }
};

var hideNotice = function hideNotice(bannerContainer) {
  bannerContainer.style.maxHeight = 0;
  bannerContainer.style.overflow = "hidden";
  adjustFlashMargin(false);
};

var showNotice = function showNotice(bannerContainer) {
  bannerContainer.style.maxHeight = null;
  bannerContainer.style.overflow = null;
  adjustFlashMargin(true);
};

var setupRememberClosed = function setupRememberClosed(cookieId, noticeId) {
  var cookie = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(cookieId) || "";
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set(cookieId, "".concat(cookie.replace("".concat(noticeId, ","), "") + noticeId, ","), {
    expires: COOKIE_EXPIRY
  });
};

var hasBeenClosedBefore = function hasBeenClosedBefore(cookieId, noticeId) {
  return (js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(cookieId) || "").includes(noticeId);
};

var setupNoticeCollapse = function setupNoticeCollapse(bannerContainer) {
  var scrollTop = window.scrollY;

  if (scrollTop > COLLAPSE_TRIGGER_DISTANCE) {
    hideNotice(bannerContainer);
  }

  var listener = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function () {
    var scrollTop = window.scrollY;

    if (scrollTop > COLLAPSE_TRIGGER_DISTANCE) {
      hideNotice(bannerContainer);
    } else if (bannerContainer.style.overflow) {
      showNotice(bannerContainer);
    }
  }, SCROLL_LISTENER_THROTTLE);
  document.addEventListener("scroll", listener);
  return function () {
    return document.removeEventListener("scroll", listener);
  };
};

var setupCloseBtn = function setupCloseBtn(bannerContainer, cookieId, noticeId, collapseUnmountListeners) {
  var closeBtn = bannerContainer.querySelector("button");
  if (!closeBtn) return function () {};

  var listener = function listener() {
    if (cookieId && noticeId) setupRememberClosed(cookieId, noticeId);
    hideNotice(bannerContainer);
    collapseUnmountListeners();
  };

  closeBtn.addEventListener("click", listener);
  return function () {
    return document.removeEventListener("click", listener);
  };
};

var resizeHandler = function resizeHandler(bannerContainer) {
  var handler = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function () {
    hideOnMobile(bannerContainer);
  }, RESIZE_LISTENER_THROTTLE);
  window.addEventListener("resize", handler);
  return function () {
    return window.removeEventListener("resize", handler);
  };
};

var Notice = function Notice(_ref) {
  var bannerContainer = _ref.bannerContainer,
      cookieId = _ref.cookieId,
      noticeId = _ref.noticeId,
      options = _ref.options;
  if (typeof window === "undefined") return function () {};

  if (!bannerContainer) {
    console.warn("A Notice component was initited but no notice container was found.");
    return function () {};
  }

  if (hasBeenClosedBefore(cookieId, noticeId)) return function () {};
  hideOnMobile(bannerContainer);
  showNotice(bannerContainer);

  var opts = _objectSpread({
    collapse: true
  }, options);

  var collapseUnmountListeners = opts.collapse ? setupNoticeCollapse(bannerContainer) : function () {};
  var closeBtnUnmountListeners = setupCloseBtn(bannerContainer, cookieId, noticeId, collapseUnmountListeners);
  var resizeUnmountListener = resizeHandler(bannerContainer);
  return function () {
    [closeBtnUnmountListeners, collapseUnmountListeners, resizeUnmountListener].forEach(function (unmount) {
      return unmount();
    });
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notice);

/***/ }),

/***/ "./src/core/Notice/component.jsx":
/*!***************************************!*\
  !*** ./src/core/Notice/component.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component.js */ "./src/core/Notice/component.js");
/* harmony import */ var _Icon_component_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon/component.jsx */ "./src/core/Icon/component.jsx");


var contentWrapperClasses = "font-light w-full pr-8 text-p3 self-center";



var ContentWrapper = function ContentWrapper(_ref) {
  var buttonLink = _ref.buttonLink,
      children = _ref.children;
  return buttonLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: buttonLink,
    className: contentWrapperClasses
  }, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: contentWrapperClasses
  }, children);
};

ContentWrapper.propTypes = {
  buttonLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};

var Notice = function Notice(_ref2) {
  var buttonLink = _ref2.buttonLink,
      buttonLabel = _ref2.buttonLabel,
      bodyText = _ref2.bodyText,
      title = _ref2.title,
      config = _ref2.config,
      closeBtn = _ref2.closeBtn,
      _ref2$bgColor = _ref2.bgColor,
      bgColor = _ref2$bgColor === void 0 ? "bg-gradient-active-orange" : _ref2$bgColor,
      _ref2$textColor = _ref2.textColor,
      textColor = _ref2$textColor === void 0 ? "text-white" : _ref2$textColor;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_component_js__WEBPACK_IMPORTED_MODULE_2__.default)({
      bannerContainer: document.querySelector('[data-id="ui-notice"]'),
      cookieId: config.cookieId,
      noticeId: config.noticeId,
      options: {
        collapse: config.collapse
      }
    });
  }, []);
  var wrapperClasses = ["ui-announcement", bgColor, textColor].join(" ");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: wrapperClasses,
    "data-id": "ui-notice",
    style: {
      maxHeight: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ui-grid-px py-16 max-w-screen-xl mx-auto flex items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentWrapper, {
    buttonLink: buttonLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    className: "font-medium whitespace-nowrap pr-4"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pr-4"
  }, bodyText), buttonLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "underline cursor-pointer whitespace-nowrap"
  }, buttonLabel)), closeBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "ml-auto h-20 w-20 border-none bg-none self-baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_component_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    name: "icon-gui-close",
    size: "1.25rem",
    color: "text-white"
  }))));
};

Notice.propTypes = {
  buttonLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  buttonLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  bodyText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  closeBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    collapse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    noticeId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    cookieId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  bgColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  textColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notice);

/***/ }),

/***/ "./src/core/SignOutLink/component.jsx":
/*!********************************************!*\
  !*** ./src/core/SignOutLink/component.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var SignOutLink = function SignOutLink(_ref) {
  var token = _ref.token,
      href = _ref.href,
      text = _ref.text,
      children = _ref.children,
      absUrl = _ref.absUrl;
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var onClick = function onClick(e) {
    formRef.current.submit();
    e.preventDefault();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    ref: formRef,
    method: "post",
    action: absUrl(href),
    className: "hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "_method",
    value: "delete",
    type: "hidden"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "authenticity_token",
    value: token,
    type: "hidden"
  })), children({
    href: href,
    text: text,
    onClick: onClick
  }));
};

SignOutLink.propTypes = {
  token: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignOutLink);

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

/***/ "./src/core/remote-blogs-posts.js":
/*!****************************************!*\
  !*** ./src/core/remote-blogs-posts.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchBlogPosts": () => (/* binding */ fetchBlogPosts),
/* harmony export */   "reducerBlogPosts": () => (/* binding */ reducerBlogPosts),
/* harmony export */   "selectRecentBlogPosts": () => (/* binding */ selectRecentBlogPosts)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remote_data_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-data-util */ "./src/core/remote-data-util.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var fetchBlogPosts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(store, blogUrl) {
    var res, payload;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (blogUrl) {
              _context.next = 4;
              break;
            }

            console.warn("Skipping fetching blog posts, invalid blogUrl: \"".concat(blogUrl, "\""));
            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return fetch(blogUrl);

          case 6:
            res = _context.sent;

            if (!(0,_remote_data_util__WEBPACK_IMPORTED_MODULE_1__.isJsonResponse)(res.headers.get("content-type"))) {
              _context.next = 14;
              break;
            }

            _context.next = 10;
            return res.json();

          case 10:
            payload = _context.sent;
            store.dispatch({
              type: "blog/loaded",
              payload: payload
            });
            _context.next = 15;
            break;

          case 14:
            throw new Error("Blog posts url is not serving json");

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.warn("Could not fetch blog posts due to error:", _context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function fetchBlogPosts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var initialState = {
  recent: null
};
var REDUCER_KEY = "blogPosts";

var reducerBlogPosts = _defineProperty({}, REDUCER_KEY, function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "blog/loaded":
      return _objectSpread(_objectSpread({}, state), {}, {
        recent: action.payload
      });

    default:
      return state;
  }
});

var selectRecentBlogPosts = function selectRecentBlogPosts(store) {
  var _store$getState$REDUC;

  return (_store$getState$REDUC = store.getState()[REDUCER_KEY]) === null || _store$getState$REDUC === void 0 ? void 0 : _store$getState$REDUC.recent;
};



/***/ }),

/***/ "./src/core/remote-data-store.js":
/*!***************************************!*\
  !*** ./src/core/remote-data-store.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachStoreToWindow": () => (/* binding */ attachStoreToWindow),
/* harmony export */   "getRemoteDataStore": () => (/* binding */ getRemoteDataStore),
/* harmony export */   "connectState": () => (/* binding */ connectState),
/* harmony export */   "createRemoteDataStore": () => (/* binding */ createRemoteDataStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var attachStoreToWindow = function attachStoreToWindow(store) {
  window.AblyUi = window.AblyUi || {};
  window.AblyUi.RemoteDataStore = store;
};
var getRemoteDataStore = function getRemoteDataStore() {
  if (!window.AblyUi.RemoteDataStore) {
    throw new Error("Remote store was called before one was created");
  }

  return window.AblyUi.RemoteDataStore;
};
var connectState = function connectState(selector, setState) {
  var store = getRemoteDataStore();
  var cachedOldState = selector(store);
  store.subscribe(function () {
    var newState = selector(store); // Do nothing, state is the same

    if (newState === cachedOldState) {
      return;
    }

    cachedOldState = newState;
    setState(newState);
  });
};
var createRemoteDataStore = function createRemoteDataStore(reducers) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducers));
};

/***/ }),

/***/ "./src/core/remote-data-util.js":
/*!**************************************!*\
  !*** ./src/core/remote-data-util.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isJsonResponse": () => (/* binding */ isJsonResponse)
/* harmony export */ });
// isJsonResponse is useful for environments where hitting an endpoint
// would return an html page (eg. Gatsby local dev)
var isJsonResponse = function isJsonResponse(contentType) {
  return contentType && contentType.includes("application/json");
};

/***/ }),

/***/ "./src/core/remote-session-data.js":
/*!*****************************************!*\
  !*** ./src/core/remote-session-data.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchSessionData": () => (/* binding */ fetchSessionData),
/* harmony export */   "reducerSessionData": () => (/* binding */ reducerSessionData),
/* harmony export */   "selectSessionData": () => (/* binding */ selectSessionData)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remote_data_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-data-util */ "./src/core/remote-data-util.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Fetches current users session data
// Assumes an authenticated session, so will only work when used on ably.com/ably.io

var NOT_FOUND_ERROR_CODE = "not-found";

var fetchSessionData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(store, sessionUrl) {
    var sessionLoaded, res, jsonResponse, payload;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sessionLoaded = function sessionLoaded() {
              var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return store.dispatch({
                type: "session/loaded",
                payload: payload
              });
            };

            _context.prev = 1;

            if (sessionUrl) {
              _context.next = 6;
              break;
            }

            console.warn("Skipping fetching session, invalid sessionUrl: \"".concat(sessionUrl, "\""));
            sessionLoaded();
            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return fetch(sessionUrl, {
              cache: "no-cache"
            });

          case 8:
            res = _context.sent;
            jsonResponse = (0,_remote_data_util__WEBPACK_IMPORTED_MODULE_1__.isJsonResponse)(res.headers.get("content-type"));

            if (jsonResponse) {
              _context.next = 12;
              break;
            }

            throw new Error("Session endpoint is not serving json");

          case 12:
            _context.next = 14;
            return res.json();

          case 14:
            payload = _context.sent;

            if (payload.error === NOT_FOUND_ERROR_CODE) {
              sessionLoaded();
            } else {
              sessionLoaded(payload);
            }

            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](1);
            sessionLoaded();
            console.warn("Could not fetch session data due to error:", _context.t0);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 18]]);
  }));

  return function fetchSessionData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var initialState = {
  data: null
};
var REDUCER_KEY = "session";

var reducerSessionData = _defineProperty({}, REDUCER_KEY, function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "session/loaded":
      return _objectSpread(_objectSpread({}, state), {}, {
        data: action.payload
      });

    default:
      return state;
  }
});

var selectSessionData = function selectSessionData(store) {
  var _store$getState$REDUC;

  return (_store$getState$REDUC = store.getState()[REDUCER_KEY]) === null || _store$getState$REDUC === void 0 ? void 0 : _store$getState$REDUC.data;
};



/***/ }),

/***/ "./src/core/url-base.js":
/*!******************************!*\
  !*** ./src/core/url-base.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DEFAULT_URL_BASE = "";

var absUrl = function absUrl(path) {
  var urlBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_URL_BASE;
  return "".concat(urlBase).concat(path);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (absUrl);

/***/ }),

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/***/ (function(module) {

/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);

  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);

  var regExpTest = unapply(RegExp.prototype.test);

  var typeErrorCreate = unconstruct(TypeError);

  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }

  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }

  /* Add properties to a lookup table */
  function addToSet(set, array) {
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;
    while (l--) {
      var element = array[l];
      if (typeof element === 'string') {
        var lcElement = stringToLowerCase(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }

  /* Shallow clone an object */
  function clone(object) {
    var newObject = create(null);

    var property = void 0;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property])) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }

  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */
  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);

  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'feimage', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);

  var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);

  var text = freeze(['#text']);

  var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);

  var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

  var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */
  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html$$1) {
          return html$$1;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '2.2.9';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;

      return DOMPurify;
    }

    var originalDocument = window.document;

    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        Text = window.Text,
        Comment = window.Comment,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;


    var ElementPrototype = Element.prototype;

    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode');

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML('') : '';

    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment;
    var importNode = originalDocument.importNode;


    var documentMode = {};
    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;

    var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
        ERB_EXPR$$1 = ERB_EXPR,
        DATA_ATTR$$1 = DATA_ATTR,
        ARIA_ATTR$$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    var SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify.
     *
     * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
     * might cause XSS from attacks hidden in closed shadowroots in case the browser
     * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
     */
    var RETURN_DOM_IMPORT = true;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    var RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    var IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    var USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);

      /* Set configuration parameters */
      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false; // Default true
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html);
          addToSet(ALLOWED_ATTR, html$1);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl);
          addToSet(ALLOWED_ATTR, mathMl$1);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);

    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']);

    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    var ALL_SVG_TAGS = addToSet({}, svg);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);

    var ALL_MATHML_TAGS = addToSet({}, mathMl);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);

    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element);

      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: HTML_NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }

        // The only way to switch from MathML to SVG is via
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }

        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }

        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }

        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        // Certain elements are allowed in both SVG and HTML
        // namespace. We need to specify them explicitly
        // so that they don't get erronously deleted from
        // HTML namespace.
        var commonSvgAndHTMLElements = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (commonSvgAndHTMLElements[tagName] || !ALL_SVG_TAGS[tagName]);
      }

      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG or MathML). Return false just in case.
      return false;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, { element: node });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name);

      // We void attribute values for unremovable "is"" attributes
      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc = void 0;
      var leadingWhitespace = void 0;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, 'text/html');
        } catch (_) {}
      }

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? '' : dirtyPayload;
        } catch (_) {
          // Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };

    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */
    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    var _isClobbered = function _isClobbered(elm) {
      if (elm instanceof Text || elm instanceof Comment) {
        return false;
      }

      if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function') {
        return true;
      }

      return false;
    };

    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    var _isNode = function _isNode(object) {
      return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content = void 0;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Check if tagname contains Unicode */
      if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      var tagName = stringToLowerCase(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Detect mXSS attempts abusing namespace confusion */
      if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);
        return true;
      }

      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
        content = stringReplace(content, ERB_EXPR$$1, ' ');
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        return false;

        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr = void 0;
      var value = void 0;
      var lcName = void 0;
      var l = void 0;
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;

      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;

        value = stringTrim(attr.value);
        lcName = stringToLowerCase(name);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
          value = stringReplace(value, ERB_EXPR$$1, ' ');
        }

        /* Is `value` valid for this attribute? */
        var lcTag = currentNode.nodeName.toLowerCase();
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode = void 0;
      var shadowIterator = _createIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty, cfg) {
      var body = void 0;
      var importedNode = void 0;
      var currentNode = void 0;
      var oldNode = void 0;
      var returnNode = void 0;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }

      /* Check we can run. Otherwise fall back or ignore */
      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) ; else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : emptyHTML;
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }

        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (RETURN_DOM_IMPORT) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = stringToLowerCase(tag);
      var lcName = stringToLowerCase(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


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
/***/ (() => {



/***/ }),

/***/ "./src/core/Notice/component.css":
/*!***************************************!*\
  !*** ./src/core/Notice/component.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": () => (/* binding */ ActionTypes),
/* harmony export */   "applyMiddleware": () => (/* binding */ applyMiddleware),
/* harmony export */   "bindActionCreators": () => (/* binding */ bindActionCreators),
/* harmony export */   "combineReducers": () => (/* binding */ combineReducers),
/* harmony export */   "compose": () => (/* binding */ compose),
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
    function miniKindOf(val) {
      if (val === void 0) return 'undefined';
      if (val === null) return 'null';
      var type = typeof val;

      switch (type) {
        case 'boolean':
        case 'string':
        case 'number':
        case 'symbol':
        case 'function':
          {
            return type;
          }
      }

      if (Array.isArray(val)) return 'array';
      if (isDate(val)) return 'date';
      if (isError(val)) return 'error';
      var constructorName = ctorName(val);

      switch (constructorName) {
        case 'Symbol':
        case 'Promise':
        case 'WeakMap':
        case 'WeakSet':
        case 'Map':
        case 'Set':
          return constructorName;
      } // other


      return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
    }

    function ctorName(val) {
      return typeof val.constructor === 'function' ? val.constructor.name : null;
    }

    function isError(val) {
      return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
    }

    function isDate(val) {
      if (val instanceof Date) return true;
      return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
    }

    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


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

/***/ }),

/***/ "./src/core/Meganav/component.json":
/*!*****************************************!*\
  !*** ./src/core/Meganav/component.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"themes":{"white":{"backgroundColor":"bg-white","textColor":"text-cool-black","buttonBackgroundColor":"","buttonTextColor":"","mobileMenuColor":"text-cool-black","logoTextColor":"text-cool-black","barShadow":"shadow-subtle"},"black":{"backgroundColor":"bg-cool-black","textColor":"text-white","buttonBackgroundColor":"bg-white","buttonTextColor":"text-cool-black","mobileMenuColor":"text-white","logoTextColor":"text-white","barShadow":""},"transparentToWhite":{"backgroundColor":"bg-transparent","textColor":"text-white","buttonBackgroundColor":"bg-white","buttonTextColor":"text-cool-black","mobileMenuColor":"text-white","logoTextColor":"text-white","barShadow":""}},"panels":[{"label":"Platform","id":"platform-panel","component":"MeganavContentPlatform"},{"label":"Use Cases","id":"use-cases-panel","component":"MeganavContentUseCases"},{"label":"Why Ably","id":"why-ably-panel","component":"MeganavContentWhyAbly"},{"label":"Developers","id":"developers-panel","component":"MeganavContentDevelopers"}]}');

/***/ }),

/***/ "react":
/*!*********************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react"} ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/*!****************************************!*\
  !*** ./src/core/Meganav/component.jsx ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Meganav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _remote_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../remote-data-store */ "./src/core/remote-data-store.js");
/* harmony import */ var _remote_session_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../remote-session-data */ "./src/core/remote-session-data.js");
/* harmony import */ var _Logo_component_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo/component.jsx */ "./src/core/Logo/component.jsx");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.js */ "./src/core/Meganav/component.js");
/* harmony import */ var _MeganavItemsDesktop_component_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MeganavItemsDesktop/component.jsx */ "./src/core/MeganavItemsDesktop/component.jsx");
/* harmony import */ var _MeganavItemsSignedIn_component_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MeganavItemsSignedIn/component.jsx */ "./src/core/MeganavItemsSignedIn/component.jsx");
/* harmony import */ var _MeganavItemsMobile_component_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MeganavItemsMobile/component.jsx */ "./src/core/MeganavItemsMobile/component.jsx");
/* harmony import */ var _Notice_component_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Notice/component.jsx */ "./src/core/Notice/component.jsx");
/* harmony import */ var _component_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component.json */ "./src/core/Meganav/component.json");
/* harmony import */ var _url_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../url-base */ "./src/core/url-base.js");
/* harmony import */ var _MeganavContentPlatform_component_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../MeganavContentPlatform/component.jsx */ "./src/core/MeganavContentPlatform/component.jsx");
/* harmony import */ var _MeganavContentUseCases_component_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../MeganavContentUseCases/component.jsx */ "./src/core/MeganavContentUseCases/component.jsx");
/* harmony import */ var _MeganavContentWhyAbly_component_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../MeganavContentWhyAbly/component.jsx */ "./src/core/MeganavContentWhyAbly/component.jsx");
/* harmony import */ var _MeganavContentDevelopers_component_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../MeganavContentDevelopers/component.jsx */ "./src/core/MeganavContentDevelopers/component.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var SignIn = function SignIn(_ref) {
  var sessionState = _ref.sessionState,
      theme = _ref.theme,
      loginLink = _ref.loginLink,
      absUrl = _ref.absUrl;
  return sessionState.signedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeganavItemsSignedIn_component_jsx__WEBPACK_IMPORTED_MODULE_7__.default, {
    absUrl: absUrl,
    sessionState: sessionState,
    theme: theme
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "hidden md:flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/contact"),
    className: "ui-meganav-link ".concat(theme.textColor),
    "data-id": "meganav-link"
  }, "Contact us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl(loginLink),
    className: "ui-meganav-link ".concat(theme.textColor),
    "data-id": "meganav-link"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ml-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: absUrl("/sign-up"),
    "data-id": "meganav-sign-up-btn",
    className: "ui-btn p-btn-small ".concat(theme.buttonBackgroundColor, " ").concat(theme.buttonTextColor)
  }, "Sign up free")));
};

SignIn.propTypes = {
  sessionState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  paths: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  loginLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  absUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

var SignInPlaceholder = function SignInPlaceholder() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null);
};

var panels = {
  MeganavContentPlatform: _MeganavContentPlatform_component_jsx__WEBPACK_IMPORTED_MODULE_12__.default,
  MeganavContentUseCases: _MeganavContentUseCases_component_jsx__WEBPACK_IMPORTED_MODULE_13__.default,
  MeganavContentWhyAbly: _MeganavContentWhyAbly_component_jsx__WEBPACK_IMPORTED_MODULE_14__.default,
  MeganavContentDevelopers: _MeganavContentDevelopers_component_jsx__WEBPACK_IMPORTED_MODULE_15__.default
};
function Meganav(_ref2) {
  var paths = _ref2.paths,
      _ref2$themeName = _ref2.themeName,
      themeName = _ref2$themeName === void 0 ? "white" : _ref2$themeName,
      notice = _ref2.notice,
      _ref2$loginLink = _ref2.loginLink,
      loginLink = _ref2$loginLink === void 0 ? "/login" : _ref2$loginLink,
      urlBase = _ref2.urlBase;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      sessionState = _useState2[0],
      setSessionState = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Note if state is never updated, sessionState stays null and never removes the placeholder.
    // This makes SSR consistent (ie. we always show the placeholder)
    (0,_remote_data_store__WEBPACK_IMPORTED_MODULE_2__.connectState)(_remote_session_data__WEBPACK_IMPORTED_MODULE_3__.selectSessionData, setSessionState);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var teardown = (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.default)({
      themeName: themeName
    });
    return function () {
      return teardown();
    };
  }, [sessionState]);
  var theme = _component_json__WEBPACK_IMPORTED_MODULE_10__.themes[themeName];

  var absUrl = function absUrl(path) {
    return (0,_url_base__WEBPACK_IMPORTED_MODULE_11__.default)(path, urlBase);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "ui-meganav-wrapper ".concat(theme.backgroundColor, " ").concat(theme.barShadow),
    "data-id": "meganav",
    "aria-label": "Main"
  }, notice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Notice_component_jsx__WEBPACK_IMPORTED_MODULE_9__.default, _extends({}, notice.props, {
    config: notice.config
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ui-meganav ui-grid-px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logo_component_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
    theme: theme,
    dataId: "meganav-logo",
    href: urlBase
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeganavItemsDesktop_component_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
    panels: panels,
    paths: paths,
    theme: theme,
    absUrl: absUrl
  }), sessionState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SignIn, {
    sessionState: sessionState,
    theme: theme,
    loginLink: loginLink,
    absUrl: absUrl
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SignInPlaceholder, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MeganavItemsMobile_component_jsx__WEBPACK_IMPORTED_MODULE_8__.default, {
    panels: panels,
    sessionState: sessionState || {},
    paths: paths,
    theme: theme,
    loginLink: loginLink,
    absUrl: absUrl
  })));
}
Meganav.propTypes = {
  paths: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  themeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["white", "black", "transparentToWhite"]),
  notice: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    props: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      bodyText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      buttonLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      buttonLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      closeBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
    }),
    config: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      cookieId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      noticeId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
      collapse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
    })
  }),
  loginLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  urlBase: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});