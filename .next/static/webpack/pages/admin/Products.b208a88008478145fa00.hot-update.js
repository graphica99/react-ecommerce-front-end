webpackHotUpdate_N_E("pages/admin/Products",{

/***/ "./pages/admin/Components/ProductContent/ProductContent.js":
/*!*****************************************************************!*\
  !*** ./pages/admin/Components/ProductContent/ProductContent.js ***!
  \*****************************************************************/
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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");

var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\ProductContent\\ProductContent.js";






const styles = theme => ({
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
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%",
      marginBottom: "40px"
    }
  }
});

function Content(props) {
  const {
    classes
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: classes.root,
      noValidate: true,
      autoComplete: "off",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h5",
        children: "Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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

/***/ "./pages/admin/Products.js":
/*!*********************************!*\
  !*** ./pages/admin/Products.js ***!
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
/* harmony import */ var _Components_ProductContent_ProductContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/ProductContent/ProductContent */ "./pages/admin/Components/ProductContent/ProductContent.js");



var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Products.js",
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Components_ProductContent_ProductContent__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vUHJvZHVjdHMuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJwYXBlciIsIm1heFdpZHRoIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJzZWFyY2hCYXIiLCJib3JkZXJCb3R0b20iLCJzZWFyY2hJbnB1dCIsImZvbnRTaXplIiwidHlwb2dyYXBoeSIsImJsb2NrIiwiZGlzcGxheSIsImFkZFVzZXIiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJjb250ZW50V3JhcHBlciIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCIsIm1haW4iLCJkYXJrIiwiaDUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiTXVpVGFiIiwiZGlzYWJsZVJpcHBsZSIsIm1peGlucyIsInRvb2xiYXIiLCJtaW5IZWlnaHQiLCJvdmVycmlkZXMiLCJNdWlEcmF3ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlCdXR0b24iLCJsYWJlbCIsInRleHRUcmFuc2Zvcm0iLCJjb250YWluZWQiLCJib3hTaGFkb3ciLCJNdWlUYWJzIiwibWFyZ2luTGVmdCIsImluZGljYXRvciIsImhlaWdodCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImNvbW1vbiIsIndoaXRlIiwibWluV2lkdGgiLCJwYWRkaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIk11aUljb25CdXR0b24iLCJNdWlUb29sdGlwIiwidG9vbHRpcCIsIk11aURpdmlkZXIiLCJNdWlMaXN0SXRlbVRleHQiLCJmb250V2VpZ2h0TWVkaXVtIiwiTXVpTGlzdEl0ZW1JY29uIiwiY29sb3IiLCJNdWlBdmF0YXIiLCJkcmF3ZXJXaWR0aCIsImRyYXdlciIsImZsZXhTaHJpbmsiLCJhcHAiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsImJhY2tncm91bmQiLCJmb290ZXIiLCJQYXBlcmJhc2UiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUUsR0FETDtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMQyxZQUFRLEVBQUU7QUFITCxHQURrQjtBQU16QkMsV0FBUyxFQUFFO0FBQ1RDLGdCQUFZLEVBQUU7QUFETCxHQU5jO0FBU3pCQyxhQUFXLEVBQUU7QUFDWEMsWUFBUSxFQUFFUixLQUFLLENBQUNTLFVBQU4sQ0FBaUJEO0FBRGhCLEdBVFk7QUFZekJFLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFESixHQVprQjtBQWV6QkMsU0FBTyxFQUFFO0FBQ1BDLGVBQVcsRUFBRWIsS0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZDtBQUROLEdBZmdCO0FBa0J6QkMsZ0JBQWMsRUFBRTtBQUNkWixVQUFNLEVBQUU7QUFETSxHQWxCUztBQXFCekJhLE1BQUksRUFBRTtBQUNKLGFBQVM7QUFDUGIsWUFBTSxFQUFFSCxLQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEcsV0FBSyxFQUFFLEtBRkE7QUFHUEMsa0JBQVksRUFBRTtBQUhQO0FBREw7QUFyQm1CLENB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QSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBckNRQyxTOztNQUFBQSxTO0FBdUNUQSxTQUFTLENBQUM3RCxTQUFWLEdBQXNCO0FBQ3BCRCxTQUFPLEVBQUVFLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRE4sQ0FBdEI7QUFJZUMsMElBQVUsQ0FBQzNCLE1BQUQsQ0FBVixDQUFtQm9GLFNBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vUHJvZHVjdHMuYjIwOGE4ODAwODQ3ODE0NWZhMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogOTM2LFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIHNlYXJjaElucHV0OiB7XHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSxcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBhZGRVc2VyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvbnRlbnRXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46IFwiNDBweCAxNnB4XCIsXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjQwcHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+UHJvZHVjdDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5Db250ZW50LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ29udGVudCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU11aVRoZW1lLFxyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgd2l0aFN0eWxlcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IEhpZGRlbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4vTmF2aWdhdG9yXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBQcm9kdWN0Q29udGVudCBmcm9tIFwiLi9Db21wb25lbnRzL1Byb2R1Y3RDb250ZW50L1Byb2R1Y3RDb250ZW50XCI7XHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHtcIkNvcHlyaWdodCDCqSBcIn1cclxuICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL1wiPlxyXG4gICAgICAgIFlvdXIgV2Vic2l0ZVxyXG4gICAgICA8L0xpbms+e1wiIFwifVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7XCIuXCJ9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG5cclxubGV0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbGlnaHQ6IFwiIzYzY2NmZlwiLFxyXG4gICAgICBtYWluOiBcIiMwMDliZTVcIixcclxuICAgICAgZGFyazogXCIjMDA2ZGIzXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgaDU6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBmb250U2l6ZTogMjYsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IDAuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzaGFwZToge1xyXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIE11aVRhYjoge1xyXG4gICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1peGluczoge1xyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBtaW5IZWlnaHQ6IDQ4LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbnRoZW1lID0ge1xyXG4gIC4uLnRoZW1lLFxyXG4gIG92ZXJyaWRlczoge1xyXG4gICAgTXVpRHJhd2VyOiB7XHJcbiAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxODIwMmNcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlCdXR0b246IHtcclxuICAgICAgbGFiZWw6IHtcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgfSxcclxuICAgICAgY29udGFpbmVkOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICBcIiY6YWN0aXZlXCI6IHtcclxuICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlUYWJzOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmRpY2F0b3I6IHtcclxuICAgICAgICBoZWlnaHQ6IDMsXHJcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMyxcclxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogMyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRhYjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjAgMTZweFwiLFxyXG4gICAgICAgIG1pbldpZHRoOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlJY29uQnV0dG9uOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRvb2x0aXA6IHtcclxuICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlEaXZpZGVyOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQwNDg1NFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUxpc3RJdGVtVGV4dDoge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUxpc3RJdGVtSWNvbjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpQXZhdGFyOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogMzIsXHJcbiAgICAgICAgaGVpZ2h0OiAzMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjU2O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgfSxcclxuICBkcmF3ZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXBwOiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gIH0sXHJcbiAgbWFpbjoge1xyXG4gICAgZmxleDogMSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiwgNCksXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNlYWVmZjFcIixcclxuICB9LFxyXG4gIGZvb3Rlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJhY2tncm91bmQ6IFwiI2VhZWZmMVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBQYXBlcmJhc2UocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFttb2JpbGVPcGVuLCBzZXRNb2JpbGVPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlT3BlbighbW9iaWxlT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn0+XHJcbiAgICAgICAgICA8SGlkZGVuIHNtVXAgaW1wbGVtZW50YXRpb249XCJqc1wiPlxyXG4gICAgICAgICAgICA8TmF2aWdhdG9yXHJcbiAgICAgICAgICAgICAgUGFwZXJQcm9wcz17eyBzdHlsZTogeyB3aWR0aDogZHJhd2VyV2lkdGggfSB9fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxyXG4gICAgICAgICAgICAgIG9wZW49e21vYmlsZU9wZW59XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICA8SGlkZGVuIHhzRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgICAgICA8TmF2aWdhdG9yIFBhcGVyUHJvcHM9e3sgc3R5bGU6IHsgd2lkdGg6IGRyYXdlcldpZHRoIH0gfX0gLz5cclxuICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcH0+XHJcbiAgICAgICAgICA8SGVhZGVyIG9uRHJhd2VyVG9nZ2xlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9IC8+XHJcbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0Q29udGVudCAvPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcblBhcGVyYmFzZS5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFBhcGVyYmFzZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=