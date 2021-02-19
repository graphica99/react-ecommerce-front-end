webpackHotUpdate_N_E("pages/admin/Tags",{

/***/ "./node_modules/@material-ui/icons/Help.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Help.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
}), 'Help');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Menu.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Menu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'Menu');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Notifications.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/Notifications.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
}), 'Notifications');

exports.default = _default;

/***/ }),

/***/ "./pages/admin/Header.js":
/*!*******************************!*\
  !*** ./pages/admin/Header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Help */ "./node_modules/@material-ui/icons/Help.js");
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Header.js";


















const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing(1)
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
});

function Header(props) {
  const {
    classes,
    onDrawerToggle
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "primary",
      position: "sticky",
      elevation: 0,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          container: true,
          spacing: 1,
          alignItems: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__["default"], {
            smUp: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                color: "inherit",
                "aria-label": "open drawer",
                onClick: onDrawerToggle,
                className: classes.menuButton,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              color: "inherit",
              className: classes.iconButtonAvatar,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
                src: "/static/images/avatar/1.jpg",
                alt: "My Avatar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "div",
      className: classes.secondaryBar,
      color: "primary",
      position: "static",
      elevation: 0,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          container: true,
          alignItems: "center",
          spacing: 1,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            xs: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
              color: "inherit",
              variant: "h5",
              component: "h1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "div",
      className: classes.secondaryBar,
      color: "primary",
      position: "static",
      elevation: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_c = Header;
Header.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onDrawerToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["withStyles"])(styles)(Header));

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/admin/Tags.js":
/*!*****************************!*\
  !*** ./pages/admin/Tags.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Navigator */ "./pages/admin/Navigator.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header */ "./pages/admin/Header.js");
/* harmony import */ var _Components_TagContent_TagContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/TagContent/TagContent */ "./pages/admin/Components/TagContent/TagContent.js");



var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Tags.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function Copyright() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    children: ["Copyright © ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: "inherit",
      href: "https://material-ui.com/",
      children: "Your Website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), " ", new Date().getFullYear(), "."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_c = Copyright;
let theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3"
    }
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  shape: {
    borderRadius: 8
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
});
theme = _objectSpread(_objectSpread({}, theme), {}, {
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#18202c"
      }
    },
    MuiButton: {
      label: {
        textTransform: "none"
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none"
        }
      }
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1)
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white
      }
    },
    MuiTab: {
      root: {
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1)
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "#404854"
      }
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    }
  }
});
const drawerWidth = 256;
const styles = {
  root: {
    display: "flex",
    minHeight: "100vh"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  app: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: "#eaeff1"
  },
  footer: {
    padding: theme.spacing(2),
    background: "#eaeff1"
  }
};

function Paperbase(props) {
  _s();

  const {
    classes
  } = props;
  const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
        className: classes.drawer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__["default"], {
          smUp: true,
          implementation: "js",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Navigator__WEBPACK_IMPORTED_MODULE_9__["default"], {
            PaperProps: {
              style: {
                width: drawerWidth
              }
            },
            variant: "temporary",
            open: mobileOpen,
            onClose: handleDrawerToggle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__["default"], {
          xsDown: true,
          implementation: "css",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Navigator__WEBPACK_IMPORTED_MODULE_9__["default"], {
            PaperProps: {
              style: {
                width: drawerWidth
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.app,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onDrawerToggle: handleDrawerToggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
          className: classes.main,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Components_TagContent_TagContent__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
          className: classes.footer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Copyright, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 5
  }, this);
}

_s(Paperbase, "33pz4tKGxA4/1e2zOoGo8gBQzP0=");

_c2 = Paperbase;
Paperbase.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Paperbase));

var _c, _c2;

$RefreshReg$(_c, "Copyright");
$RefreshReg$(_c2, "Paperbase");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9IZWxwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL01lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9UYWdzLmpzIl0sIm5hbWVzIjpbImxpZ2h0Q29sb3IiLCJzdHlsZXMiLCJ0aGVtZSIsInNlY29uZGFyeUJhciIsInpJbmRleCIsIm1lbnVCdXR0b24iLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImljb25CdXR0b25BdmF0YXIiLCJwYWRkaW5nIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJidXR0b24iLCJib3JkZXJDb2xvciIsIkhlYWRlciIsInByb3BzIiwiY2xhc3NlcyIsIm9uRHJhd2VyVG9nZ2xlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJ3aXRoU3R5bGVzIiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiY3JlYXRlTXVpVGhlbWUiLCJwcmltYXJ5IiwibGlnaHQiLCJtYWluIiwiZGFyayIsInR5cG9ncmFwaHkiLCJoNSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsIk11aVRhYiIsImRpc2FibGVSaXBwbGUiLCJtaXhpbnMiLCJ0b29sYmFyIiwibWluSGVpZ2h0Iiwib3ZlcnJpZGVzIiwiTXVpRHJhd2VyIiwicGFwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlCdXR0b24iLCJsYWJlbCIsInRleHRUcmFuc2Zvcm0iLCJjb250YWluZWQiLCJib3hTaGFkb3ciLCJNdWlUYWJzIiwicm9vdCIsImluZGljYXRvciIsImhlaWdodCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsIm1hcmdpbiIsIm1pbldpZHRoIiwiYnJlYWtwb2ludHMiLCJ1cCIsIk11aUljb25CdXR0b24iLCJNdWlUb29sdGlwIiwidG9vbHRpcCIsIk11aURpdmlkZXIiLCJNdWlMaXN0SXRlbVRleHQiLCJmb250V2VpZ2h0TWVkaXVtIiwiTXVpTGlzdEl0ZW1JY29uIiwibWFyZ2luUmlnaHQiLCJNdWlBdmF0YXIiLCJ3aWR0aCIsImRyYXdlcldpZHRoIiwiZGlzcGxheSIsImRyYXdlciIsImZsZXhTaHJpbmsiLCJhcHAiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsImJhY2tncm91bmQiLCJmb290ZXIiLCJQYXBlcmJhc2UiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7Ozs7Ozs7QUNuQmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRiw4QkFBOEIsbUJBQU8sQ0FBQyxzSEFBK0M7O0FBRXJGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELDRDQUE0QyxtQkFBTyxDQUFDLHVGQUF1Qjs7QUFFM0U7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkI7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LEVBQUMsS0FBOUI7QUFBQSxpQ0FDRSxxRUFBQyxrREFBRDtBQUFXLHNCQUFVLEVBQUU7QUFBRUMsbUJBQUssRUFBRTtBQUFFaEIscUJBQUssRUFBRUM7QUFBVDtBQUFUO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBZUU7QUFBSyxpQkFBUyxFQUFFekQsT0FBTyxDQUFDNkQsR0FBeEI7QUFBQSxnQ0FDRSxxRUFBQyxnREFBRDtBQUFRLHdCQUFjLEVBQUVVO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUV2RSxPQUFPLENBQUNjLElBQXpCO0FBQUEsaUNBQ0UscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFLRTtBQUFRLG1CQUFTLEVBQUVkLE9BQU8sQ0FBQ2lFLE1BQTNCO0FBQUEsaUNBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBckNRQyxTOztNQUFBQSxTO0FBdUNUQSxTQUFTLENBQUNoRSxTQUFWLEdBQXNCO0FBQ3BCRixTQUFPLEVBQUVHLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRE4sQ0FBdEI7QUFJZUUsMElBQVUsQ0FBQzFCLE1BQUQsQ0FBVixDQUFtQnFGLFNBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vVGFncy5mODdiNTQ3ZjkwOTY3NGIyNTFiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTdoLTJ2LTJoMnYyem0yLjA3LTcuNzVsLS45LjkyQzEzLjQ1IDEyLjkgMTMgMTMuNSAxMyAxNWgtMnYtLjVjMC0xLjEuNDUtMi4xIDEuMTctMi44M2wxLjI0LTEuMjZjLjM3LS4zNi41OS0uODYuNTktMS40MSAwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJIOGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgLjg4LS4zNiAxLjY4LS45MyAyLjI1elwiXG59KSwgJ0hlbHAnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XCJcbn0pLCAnTWVudScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMjJjMS4xIDAgMi0uOSAyLTJoLTRjMCAxLjEuODkgMiAyIDJ6bTYtNnYtNWMwLTMuMDctMS42NC01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42MyA1LjM2IDYgNy45MiA2IDExdjVsLTIgMnYxaDE2di0xbC0yLTJ6XCJcbn0pLCAnTm90aWZpY2F0aW9ucycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IEhlbHBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCBUYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgbGlnaHRDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgc2Vjb25kYXJ5QmFyOiB7XHJcbiAgICB6SW5kZXg6IDAsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAtdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGljb25CdXR0b25BdmF0YXI6IHtcclxuICAgIHBhZGRpbmc6IDQsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICBjb2xvcjogbGlnaHRDb2xvcixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIGJvcmRlckNvbG9yOiBsaWdodENvbG9yLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzLCBvbkRyYXdlclRvZ2dsZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEJhciBjb2xvcj1cInByaW1hcnlcIiBwb3NpdGlvbj1cInN0aWNreVwiIGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdXR0b25BdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9XCIvc3RhdGljL2ltYWdlcy9hdmF0YXIvMS5qcGdcIiBhbHQ9XCJNeSBBdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRhcnlCYXJ9XHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXHJcbiAgICAgICAgZWxldmF0aW9uPXswfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICA+PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPEFwcEJhclxyXG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUJhcn1cclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgID48L0FwcEJhcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgb25EcmF3ZXJUb2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSGVhZGVyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbiAgVGhlbWVQcm92aWRlcixcclxuICB3aXRoU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi9OYXZpZ2F0b3JcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IFRhZ0NvbnRlbnQgZnJvbSBcIi4vQ29tcG9uZW50cy9UYWdDb250ZW50L1RhZ0NvbnRlbnRcIjtcclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAge1wiQ29weXJpZ2h0IMKpIFwifVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57XCIgXCJ9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHtcIi5cIn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcblxyXG5sZXQgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBsaWdodDogXCIjNjNjY2ZmXCIsXHJcbiAgICAgIG1haW46IFwiIzAwOWJlNVwiLFxyXG4gICAgICBkYXJrOiBcIiMwMDZkYjNcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiAyNixcclxuICAgICAgbGV0dGVyU3BhY2luZzogMC41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNoYXBlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgTXVpVGFiOiB7XHJcbiAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWl4aW5zOiB7XHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIG1pbkhlaWdodDogNDgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxudGhlbWUgPSB7XHJcbiAgLi4udGhlbWUsXHJcbiAgb3ZlcnJpZGVzOiB7XHJcbiAgICBNdWlEcmF3ZXI6IHtcclxuICAgICAgcGFwZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE4MjAyY1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICBsYWJlbDoge1xyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZWQ6IHtcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgIFwiJjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRhYnM6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIH0sXHJcbiAgICAgIGluZGljYXRvcjoge1xyXG4gICAgICAgIGhlaWdodDogMyxcclxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAzLFxyXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAzLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVGFiOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICBtYXJnaW46IFwiMCAxNnB4XCIsXHJcbiAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICBtaW5XaWR0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUljb25CdXR0b246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVG9vbHRpcDoge1xyXG4gICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aURpdmlkZXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDA0ODU0XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpTGlzdEl0ZW1UZXh0OiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpTGlzdEl0ZW1JY29uOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlBdmF0YXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNTY7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHA6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgfSxcclxuICBtYWluOiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCA0KSxcclxuICAgIGJhY2tncm91bmQ6IFwiI2VhZWZmMVwiLFxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYmFja2dyb3VuZDogXCIjZWFlZmYxXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBhcGVyYmFzZShwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfT5cclxuICAgICAgICAgIDxIaWRkZW4gc21VcCBpbXBsZW1lbnRhdGlvbj1cImpzXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0b3JcclxuICAgICAgICAgICAgICBQYXBlclByb3BzPXt7IHN0eWxlOiB7IHdpZHRoOiBkcmF3ZXJXaWR0aCB9IH19XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDxIaWRkZW4geHNEb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0b3IgUGFwZXJQcm9wcz17eyBzdHlsZTogeyB3aWR0aDogZHJhd2VyV2lkdGggfSB9fSAvPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwfT5cclxuICAgICAgICAgIDxIZWFkZXIgb25EcmF3ZXJUb2dnbGU9e2hhbmRsZURyYXdlclRvZ2dsZX0gLz5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgPFRhZ0NvbnRlbnQgLz5cclxuICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5QYXBlcmJhc2UucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQYXBlcmJhc2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9