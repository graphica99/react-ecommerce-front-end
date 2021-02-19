webpackHotUpdate_N_E("pages/admin/Category",{

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

/***/ "./pages/admin/Category.js":
/*!*********************************!*\
  !*** ./pages/admin/Category.js ***!
  \*********************************/
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
/* harmony import */ var _Components_CategoryContent_CategoryContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/CategoryContent/CategoryContent */ "./pages/admin/Components/CategoryContent/CategoryContent.js");



var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Category.js",
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Components_CategoryContent_CategoryContent__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9IZWxwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL01lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCIsIm1haW4iLCJkYXJrIiwidHlwb2dyYXBoeSIsImg1IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwicHJvcHMiLCJNdWlUYWIiLCJkaXNhYmxlUmlwcGxlIiwibWl4aW5zIiwidG9vbGJhciIsIm1pbkhlaWdodCIsIm92ZXJyaWRlcyIsIk11aURyYXdlciIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiTXVpQnV0dG9uIiwibGFiZWwiLCJ0ZXh0VHJhbnNmb3JtIiwiY29udGFpbmVkIiwiYm94U2hhZG93IiwiTXVpVGFicyIsInJvb3QiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImluZGljYXRvciIsImhlaWdodCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImNvbW1vbiIsIndoaXRlIiwibWFyZ2luIiwibWluV2lkdGgiLCJwYWRkaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIk11aUljb25CdXR0b24iLCJNdWlUb29sdGlwIiwidG9vbHRpcCIsIk11aURpdmlkZXIiLCJNdWlMaXN0SXRlbVRleHQiLCJmb250V2VpZ2h0TWVkaXVtIiwiTXVpTGlzdEl0ZW1JY29uIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsIk11aUF2YXRhciIsIndpZHRoIiwiZHJhd2VyV2lkdGgiLCJzdHlsZXMiLCJkaXNwbGF5IiwiZHJhd2VyIiwiZmxleFNocmluayIsImFwcCIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwiYmFja2dyb3VuZCIsImZvb3RlciIsIlBhcGVyYmFzZSIsImNsYXNzZXMiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJzdHlsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIiwibGlnaHRDb2xvciIsInNlY29uZGFyeUJhciIsInpJbmRleCIsIm1lbnVCdXR0b24iLCJpY29uQnV0dG9uQXZhdGFyIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiYnV0dG9uIiwiYm9yZGVyQ29sb3IiLCJIZWFkZXIiLCJvbkRyYXdlclRvZ2dsZSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GLDhCQUE4QixtQkFBTyxDQUFDLHNIQUErQzs7QUFFckY7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFbkQsNENBQTRDLG1CQUFPLENBQUMsdUZBQXVCOztBQUUzRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwyQjs7Ozs7Ozs7Ozs7O0FDbkJhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVE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LFFBSlg7QUFLRSxlQUFTLEVBQUUsQ0FMYjtBQUFBLDZCQU9FLHFFQUFDLGtFQUFEO0FBQUEsK0JBQ0UscUVBQUMsOERBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQWdCLG9CQUFVLEVBQUMsUUFBM0I7QUFBb0MsaUJBQU8sRUFBRSxDQUE3QztBQUFBLGlDQUNFLHFFQUFDLDhEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFXLGNBQUUsTUFBYjtBQUFBLG1DQUNFLHFFQUFDLHFFQUFEO0FBQ0UsbUJBQUssRUFBQyxTQURSO0FBRUUscUJBQU8sRUFBQyxJQUZWO0FBR0UsdUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGLGVBOENFLHFFQUFDLGdFQUFEO0FBQ0UsZUFBUyxFQUFDLEtBRFo7QUFFRSxlQUFTLEVBQUViLE9BQU8sQ0FBQ2EsWUFGckI7QUFHRSxXQUFLLEVBQUMsU0FIUjtBQUlFLGNBQVEsRUFBQyxRQUpYO0FBS0UsZUFBUyxFQUFFO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdERDs7S0ExRFFRLE07QUE0RFRBLE1BQU0sQ0FBQ2QsU0FBUCxHQUFtQjtBQUNqQlAsU0FBTyxFQUFFUSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURUO0FBRWpCWSxnQkFBYyxFQUFFZCxpREFBUyxDQUFDZSxJQUFWLENBQWViO0FBRmQsQ0FBbkI7QUFLZUMsMklBQVUsQ0FBQ3JCLE1BQUQsQ0FBVixDQUFtQitCLE1BQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vQ2F0ZWdvcnkuZjg3YjU0N2Y5MDk2NzRiMjUxYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE3aC0ydi0yaDJ2MnptMi4wNy03Ljc1bC0uOS45MkMxMy40NSAxMi45IDEzIDEzLjUgMTMgMTVoLTJ2LS41YzAtMS4xLjQ1LTIuMSAxLjE3LTIuODNsMS4yNC0xLjI2Yy4zNy0uMzYuNTktLjg2LjU5LTEuNDEgMC0xLjEtLjktMi0yLTJzLTIgLjktMiAySDhjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNGMwIC44OC0uMzYgMS42OC0uOTMgMi4yNXpcIlxufSksICdIZWxwJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelwiXG59KSwgJ01lbnUnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDIyYzEuMSAwIDItLjkgMi0yaC00YzAgMS4xLjg5IDIgMiAyem02LTZ2LTVjMC0zLjA3LTEuNjQtNS42NC00LjUtNi4zMlY0YzAtLjgzLS42Ny0xLjUtMS41LTEuNXMtMS41LjY3LTEuNSAxLjV2LjY4QzcuNjMgNS4zNiA2IDcuOTIgNiAxMXY1bC0yIDJ2MWgxNnYtMWwtMi0yelwiXG59KSwgJ05vdGlmaWNhdGlvbnMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbiAgVGhlbWVQcm92aWRlcixcclxuICB3aXRoU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi9OYXZpZ2F0b3JcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IENhdGVnb3J5Q29udGVudCBmcm9tIFwiLi9Db21wb25lbnRzL0NhdGVnb3J5Q29udGVudC9DYXRlZ29yeUNvbnRlbnRcIjtcclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAge1wiQ29weXJpZ2h0IMKpIFwifVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57XCIgXCJ9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHtcIi5cIn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcblxyXG5sZXQgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBsaWdodDogXCIjNjNjY2ZmXCIsXHJcbiAgICAgIG1haW46IFwiIzAwOWJlNVwiLFxyXG4gICAgICBkYXJrOiBcIiMwMDZkYjNcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiAyNixcclxuICAgICAgbGV0dGVyU3BhY2luZzogMC41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNoYXBlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgTXVpVGFiOiB7XHJcbiAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWl4aW5zOiB7XHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIG1pbkhlaWdodDogNDgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxudGhlbWUgPSB7XHJcbiAgLi4udGhlbWUsXHJcbiAgb3ZlcnJpZGVzOiB7XHJcbiAgICBNdWlEcmF3ZXI6IHtcclxuICAgICAgcGFwZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE4MjAyY1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICBsYWJlbDoge1xyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZWQ6IHtcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgIFwiJjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRhYnM6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIH0sXHJcbiAgICAgIGluZGljYXRvcjoge1xyXG4gICAgICAgIGhlaWdodDogMyxcclxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAzLFxyXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAzLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVGFiOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICBtYXJnaW46IFwiMCAxNnB4XCIsXHJcbiAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICBtaW5XaWR0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUljb25CdXR0b246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVG9vbHRpcDoge1xyXG4gICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aURpdmlkZXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDA0ODU0XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpTGlzdEl0ZW1UZXh0OiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpTGlzdEl0ZW1JY29uOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlBdmF0YXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNTY7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHA6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgfSxcclxuICBtYWluOiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCA0KSxcclxuICAgIGJhY2tncm91bmQ6IFwiI2VhZWZmMVwiLFxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYmFja2dyb3VuZDogXCIjZWFlZmYxXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBhcGVyYmFzZShwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfT5cclxuICAgICAgICAgIDxIaWRkZW4gc21VcCBpbXBsZW1lbnRhdGlvbj1cImpzXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0b3JcclxuICAgICAgICAgICAgICBQYXBlclByb3BzPXt7IHN0eWxlOiB7IHdpZHRoOiBkcmF3ZXJXaWR0aCB9IH19XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDxIaWRkZW4geHNEb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0b3IgUGFwZXJQcm9wcz17eyBzdHlsZTogeyB3aWR0aDogZHJhd2VyV2lkdGggfSB9fSAvPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwfT5cclxuICAgICAgICAgIDxIZWFkZXIgb25EcmF3ZXJUb2dnbGU9e2hhbmRsZURyYXdlclRvZ2dsZX0gLz5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgPENhdGVnb3J5Q29udGVudCAvPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcblBhcGVyYmFzZS5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFBhcGVyYmFzZSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgSGVscEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCI7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IFRhYiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5jb25zdCBsaWdodENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNylcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBzZWNvbmRhcnlCYXI6IHtcclxuICAgIHpJbmRleDogMCxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpbkxlZnQ6IC10aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgaWNvbkJ1dHRvbkF2YXRhcjoge1xyXG4gICAgcGFkZGluZzogNCxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgIGNvbG9yOiBsaWdodENvbG9yLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgYm9yZGVyQ29sb3I6IGxpZ2h0Q29sb3IsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMsIG9uRHJhd2VyVG9nZ2xlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QXBwQmFyIGNvbG9yPVwicHJpbWFyeVwiIHBvc2l0aW9uPVwic3RpY2t5XCIgZWxldmF0aW9uPXswfT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25EcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbkF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhci8xLmpwZ1wiIGFsdD1cIk15IEF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPEFwcEJhclxyXG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUJhcn1cclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgID48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8QXBwQmFyXHJcbiAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5QmFyfVxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxyXG4gICAgICAgIGVsZXZhdGlvbj17MH1cclxuICAgICAgPjwvQXBwQmFyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBvbkRyYXdlclRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIZWFkZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9