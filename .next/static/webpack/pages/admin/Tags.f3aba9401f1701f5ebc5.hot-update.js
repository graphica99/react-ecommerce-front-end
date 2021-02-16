webpackHotUpdate_N_E("pages/admin/Tags",{

/***/ "./pages/admin/Components/TagContent/TagContent.js":
/*!*********************************************************!*\
  !*** ./pages/admin/Components/TagContent/TagContent.js ***!
  \*********************************************************/
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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");

var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\TagContent\\TagContent.js";







const styles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%"
    }
  },
  button: {
    width: "80%",
    padding: "8px"
  },
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: "block"
  },
  addUser: {
    marginRight: theme.spacing(1)
  },
  contentWrapper: {
    margin: "40px 16px"
  },
  loading: {
    backgroundColor: "#fff"
  },
  progress: {
    color: "#fff",
    paddingRight: "2px"
  }
});

function Content(props) {
  const {
    classes
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "outlined-basic",
      label: "Add a tag",
      variant: "outlined"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "contained",
      color: "primary",
      className: classes.button,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.progress
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), " Add Tag"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_c = Content;
Content.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Content));

var _c;

$RefreshReg$(_c, "Content");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9UYWdDb250ZW50L1RhZ0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL1RhZ3MuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYnV0dG9uIiwicGFkZGluZyIsInBhcGVyIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0IiwiY29udGVudFdyYXBwZXIiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJvZ3Jlc3MiLCJjb2xvciIsInBhZGRpbmdSaWdodCIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCIsIm1haW4iLCJkYXJrIiwiaDUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiTXVpVGFiIiwiZGlzYWJsZVJpcHBsZSIsIm1peGlucyIsInRvb2xiYXIiLCJtaW5IZWlnaHQiLCJvdmVycmlkZXMiLCJNdWlEcmF3ZXIiLCJNdWlCdXR0b24iLCJsYWJlbCIsInRleHRUcmFuc2Zvcm0iLCJjb250YWluZWQiLCJib3hTaGFkb3ciLCJNdWlUYWJzIiwibWFyZ2luTGVmdCIsImluZGljYXRvciIsImhlaWdodCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImNvbW1vbiIsIndoaXRlIiwibWluV2lkdGgiLCJicmVha3BvaW50cyIsInVwIiwiTXVpSWNvbkJ1dHRvbiIsIk11aVRvb2x0aXAiLCJ0b29sdGlwIiwiTXVpRGl2aWRlciIsIk11aUxpc3RJdGVtVGV4dCIsImZvbnRXZWlnaHRNZWRpdW0iLCJNdWlMaXN0SXRlbUljb24iLCJNdWlBdmF0YXIiLCJkcmF3ZXJXaWR0aCIsImRyYXdlciIsImZsZXhTaHJpbmsiLCJhcHAiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsImJhY2tncm91bmQiLCJmb290ZXIiLCJQYXBlcmJhc2UiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE1BQUksRUFBRTtBQUNKLGFBQVM7QUFDUEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsV0FBSyxFQUFFO0FBRkE7QUFETCxHQURtQjtBQU96QkMsUUFBTSxFQUFFO0FBQ05ELFNBQUssRUFBRSxLQUREO0FBRU5FLFdBQU8sRUFBRTtBQUZILEdBUGlCO0FBV3pCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLEdBREw7QUFFTE4sVUFBTSxFQUFFLE1BRkg7QUFHTE8sWUFBUSxFQUFFO0FBSEwsR0FYa0I7QUFnQnpCQyxXQUFTLEVBQUU7QUFDVEMsZ0JBQVksRUFBRTtBQURMLEdBaEJjO0FBbUJ6QkMsYUFBVyxFQUFFO0FBQ1hDLFlBQVEsRUFBRWIsS0FBSyxDQUFDYyxVQUFOLENBQWlCRDtBQURoQixHQW5CWTtBQXNCekJFLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFESixHQXRCa0I7QUF5QnpCQyxTQUFPLEVBQUU7QUFDUEMsZUFBVyxFQUFFbEIsS0FBSyxDQUFDRyxP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QUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBZUU7QUFBSyxpQkFBUyxFQUFFbkQsT0FBTyxDQUFDc0QsR0FBeEI7QUFBQSxnQ0FDRSxxRUFBQyxnREFBRDtBQUFRLHdCQUFjLEVBQUVVO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUVoRSxPQUFPLENBQUNhLElBQXpCO0FBQUEsaUNBQ0UscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFLRTtBQUFRLG1CQUFTLEVBQUViLE9BQU8sQ0FBQzBELE1BQTNCO0FBQUEsaUNBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBckNRQyxTOztNQUFBQSxTO0FBdUNUQSxTQUFTLENBQUMxRCxTQUFWLEdBQXNCO0FBQ3BCRCxTQUFPLEVBQUVFLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRE4sQ0FBdEI7QUFJZUMsMElBQVUsQ0FBQ2pDLE1BQUQsQ0FBVixDQUFtQnVGLFNBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vVGFncy5mM2FiYTk0MDFmMTcwMWY1ZWJjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgcGFkZGluZzogXCI4cHhcIixcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogOTM2LFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIHNlYXJjaElucHV0OiB7XHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSxcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBhZGRVc2VyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvbnRlbnRXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46IFwiNDBweCAxNnB4XCIsXHJcbiAgfSxcclxuICBsb2FkaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbiAgcHJvZ3Jlc3M6IHtcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIHBhZGRpbmdSaWdodDogXCIycHhcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgIDxUZXh0RmllbGQgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiIGxhYmVsPVwiQWRkIGEgdGFnXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfSAvPiBBZGQgVGFnXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbiAgVGhlbWVQcm92aWRlcixcclxuICB3aXRoU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi9OYXZpZ2F0b3JcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IFRhZ0NvbnRlbnQgZnJvbSBcIi4vQ29tcG9uZW50cy9UYWdDb250ZW50L1RhZ0NvbnRlbnRcIjtcclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAge1wiQ29weXJpZ2h0IMKpIFwifVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57XCIgXCJ9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHtcIi5cIn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcblxyXG5sZXQgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBsaWdodDogXCIjNjNjY2ZmXCIsXHJcbiAgICAgIG1haW46IFwiIzAwOWJlNVwiLFxyXG4gICAgICBkYXJrOiBcIiMwMDZkYjNcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiAyNixcclxuICAgICAgbGV0dGVyU3BhY2luZzogMC41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNoYXBlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgTXVpVGFiOiB7XHJcbiAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWl4aW5zOiB7XHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIG1pbkhlaWdodDogNDgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxudGhlbWUgPSB7XHJcbiAgLi4udGhlbWUsXHJcbiAgb3ZlcnJpZGVzOiB7XHJcbiAgICBNdWlEcmF3ZXI6IHtcclxuICAgICAgcGFwZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE4MjAyY1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICBsYWJlbDoge1xyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZWQ6IHtcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgIFwiJjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRhYnM6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIH0sXHJcbiAgICAgIGluZGljYXRvcjoge1xyXG4gICAgICAgIGhlaWdodDogMyxcclxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAzLFxyXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAzLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVGFiOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICBtYXJnaW46IFwiMCAxNnB4XCIsXHJcbiAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICBtaW5XaWR0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUljb25CdXR0b246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVG9vbHRpcDoge1xyXG4gICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aURpdmlkZXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDA0ODU0XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpTGlzdEl0ZW1UZXh0OiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpTGlzdEl0ZW1JY29uOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlBdmF0YXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNTY7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHA6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgfSxcclxuICBtYWluOiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCA0KSxcclxuICAgIGJhY2tncm91bmQ6IFwiI2VhZWZmMVwiLFxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYmFja2dyb3VuZDogXCIjZWFlZmYxXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBhcGVyYmFzZShwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfT5cclxuICAgICAgICAgIDxIaWRkZW4gc21VcCBpbXBsZW1lbnRhdGlvbj1cImpzXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0b3JcclxuICAgICAgICAgICAgICBQYXBlclByb3BzPXt7IHN0eWxlOiB7IHdpZHRoOiBkcmF3ZXJXaWR0aCB9IH19XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDxIaWRkZW4geHNEb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0b3IgUGFwZXJQcm9wcz17eyBzdHlsZTogeyB3aWR0aDogZHJhd2VyV2lkdGggfSB9fSAvPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwfT5cclxuICAgICAgICAgIDxIZWFkZXIgb25EcmF3ZXJUb2dnbGU9e2hhbmRsZURyYXdlclRvZ2dsZX0gLz5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgPFRhZ0NvbnRlbnQgLz5cclxuICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5QYXBlcmJhc2UucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQYXBlcmJhc2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9