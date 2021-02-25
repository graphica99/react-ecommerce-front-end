webpackHotUpdate_N_E("pages/admin/Products",{

/***/ "./node_modules/@material-ui/icons/PhotoCamera.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/PhotoCamera.js ***!
  \********************************************************/
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3.2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
})), 'PhotoCamera');

exports.default = _default;

/***/ }),

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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\ProductContent\\ProductContent.js",
    _s = $RefreshSig$();











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
      width: "50%" // marginBottom: "40px",

    }
  }
});

function Content(props) {
  _s();

  const {
    classes
  } = props;
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const handleCapture = e => {
    console.log(e.target.files[0].name); // const fileReader = new FileReader();
    // const name = target.accept.includes("image") ? "images" : "videos";
    // fileReader.readAsDataURL(target.files[0]);
    // fileReader.onload = (e) => {
    //   setImage([...image, e.target.result]);
    //   // setImage((prevState) => ({
    //   //   [name]: [...prevState[name], e.target.result],
    //   // }));
    // };
  };

  console.log(image);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: classes.root,
      noValidate: true,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        width: "50",
        height: "50",
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h5",
        children: "Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "outlined-basic",
        label: "Add a tag",
        variant: "outlined" // onChange={onInputHandler}
        // value={input}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
        native: true,
        variant: "outlined" // value={10}
        // onChange={handleChange}
        ,
        label: "Age",
        inputProps: {
          name: "age",
          id: "outlined-age-native-simple"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: 10,
          children: "Ten"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: 20,
          children: "Twenty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: 30,
          children: "Thirty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
        native: true,
        variant: "outlined" // value={10}
        // onChange={handleChange}
        ,
        label: "Age",
        inputProps: {
          name: "age",
          id: "outlined-age-native-simple"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: 10,
          children: "Ten"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: 20,
          children: "Twenty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: 30,
          children: "Thirty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        accept: "image/*" // className=/{classes.input}
        ,
        style: {
          display: "none"
        },
        id: "icon-button-photo",
        onChange: handleCapture,
        type: "file"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "icon-button-photo",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s(Content, "DGue+pwyCBKe/L+qcOeAL4sTjdo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vUHJvZHVjdHMuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJwYXBlciIsIm1heFdpZHRoIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJzZWFyY2hCYXIiLCJib3JkZXJCb3R0b20iLCJzZWFyY2hJbnB1dCIsImZvbnRTaXplIiwidHlwb2dyYXBoeSIsImJsb2NrIiwiZGlzcGxheSIsImFkZFVzZXIiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJjb250ZW50V3JhcHBlciIsInJvb3QiLCJ3aWR0aCIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJpbWFnZSIsInNldEltYWdlIiwidXNlU3RhdGUiLCJoYW5kbGVDYXB0dXJlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIiwiQ29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0IiwibWFpbiIsImRhcmsiLCJoNSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJNdWlUYWIiLCJkaXNhYmxlUmlwcGxlIiwibWl4aW5zIiwidG9vbGJhciIsIm1pbkhlaWdodCIsIm92ZXJyaWRlcyIsIk11aURyYXdlciIsImJhY2tncm91bmRDb2xvciIsIk11aUJ1dHRvbiIsImxhYmVsIiwidGV4dFRyYW5zZm9ybSIsImNvbnRhaW5lZCIsImJveFNoYWRvdyIsIk11aVRhYnMiLCJtYXJnaW5MZWZ0IiwiaW5kaWNhdG9yIiwiaGVpZ2h0IiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiY29tbW9uIiwid2hpdGUiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJicmVha3BvaW50cyIsInVwIiwiTXVpSWNvbkJ1dHRvbiIsIk11aVRvb2x0aXAiLCJ0b29sdGlwIiwiTXVpRGl2aWRlciIsIk11aUxpc3RJdGVtVGV4dCIsImZvbnRXZWlnaHRNZWRpdW0iLCJNdWlMaXN0SXRlbUljb24iLCJjb2xvciIsIk11aUF2YXRhciIsImRyYXdlcldpZHRoIiwiZHJhd2VyIiwiZmxleFNocmluayIsImFwcCIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwiYmFja2dyb3VuZCIsImZvb3RlciIsIlBhcGVyYmFzZSIsIm1vYmlsZU9wZW4iLCJzZXRNb2JpbGVPcGVuIiwiUmVhY3QiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRCwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3pCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLEdBREw7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEMsWUFBUSxFQUFFO0FBSEwsR0FEa0I7QUFNekJDLFdBQVMsRUFBRTtB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LE9BQU8sQ0FBQ3dCLElBQXpCO0FBQUEsaUNBQ0UscUVBQUMsa0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFLRTtBQUFRLG1CQUFTLEVBQUV4QixPQUFPLENBQUN3RSxNQUEzQjtBQUFBLGlDQUNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQXJDUUMsUzs7TUFBQUEsUztBQXVDVEEsU0FBUyxDQUFDN0QsU0FBVixHQUFzQjtBQUNwQlosU0FBTyxFQUFFYSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQUROLENBQXRCO0FBSWVDLDBJQUFVLENBQUNyQyxNQUFELENBQVYsQ0FBbUI4RixTQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1Byb2R1Y3RzLjM4YWU3NjFmYTQxMGNiZmFjZDYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgY3g6IFwiMTJcIixcbiAgY3k6IFwiMTJcIixcbiAgcjogXCIzLjJcIlxufSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6XCJcbn0pKSwgJ1Bob3RvQ2FtZXJhJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1heFdpZHRoOiA5MzYsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBzZWFyY2hCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXQ6IHtcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIGFkZFVzZXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgY29udGVudFdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogXCI0MHB4IDE2cHhcIixcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICAvLyBtYXJnaW5Cb3R0b206IFwiNDBweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FwdHVyZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlc1swXS5uYW1lKTtcclxuICAgIC8vIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gY29uc3QgbmFtZSA9IHRhcmdldC5hY2NlcHQuaW5jbHVkZXMoXCJpbWFnZVwiKSA/IFwiaW1hZ2VzXCIgOiBcInZpZGVvc1wiO1xyXG5cclxuICAgIC8vIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTCh0YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgLy8gZmlsZVJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgLy8gICBzZXRJbWFnZShbLi4uaW1hZ2UsIGUudGFyZ2V0LnJlc3VsdF0pO1xyXG4gICAgLy8gICAvLyBzZXRJbWFnZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgLy8gICAvLyAgIFtuYW1lXTogWy4uLnByZXZTdGF0ZVtuYW1lXSwgZS50YXJnZXQucmVzdWx0XSxcclxuICAgIC8vICAgLy8gfSkpO1xyXG4gICAgLy8gfTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGltYWdlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICA8aW1nIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+UHJvZHVjdDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCBhIHRhZ1wiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgLy8gb25DaGFuZ2U9e29uSW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgLy8gdmFsdWU9e2lucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgLy8gdmFsdWU9ezEwfVxyXG4gICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIGxhYmVsPVwiQWdlXCJcclxuICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmFtZTogXCJhZ2VcIixcclxuICAgICAgICAgICAgaWQ6IFwib3V0bGluZWQtYWdlLW5hdGl2ZS1zaW1wbGVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIDxvcHRpb24gYXJpYS1sYWJlbD1cIk5vbmVcIiAvPiAqL31cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEwfT5UZW48L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezIwfT5Ud2VudHk8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezMwfT5UaGlydHk8L29wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgLy8gdmFsdWU9ezEwfVxyXG4gICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIGxhYmVsPVwiQWdlXCJcclxuICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmFtZTogXCJhZ2VcIixcclxuICAgICAgICAgICAgaWQ6IFwib3V0bGluZWQtYWdlLW5hdGl2ZS1zaW1wbGVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIDxvcHRpb24gYXJpYS1sYWJlbD1cIk5vbmVcIiAvPiAqL31cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEwfT5UZW48L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezIwfT5Ud2VudHk8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezMwfT5UaGlydHk8L29wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lPS97Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICBpZD1cImljb24tYnV0dG9uLXBob3RvXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDYXB0dXJlfVxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpY29uLWJ1dHRvbi1waG90b1wiPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbiAgVGhlbWVQcm92aWRlcixcclxuICB3aXRoU3R5bGVzLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi9OYXZpZ2F0b3JcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IFByb2R1Y3RDb250ZW50IGZyb20gXCIuL0NvbXBvbmVudHMvUHJvZHVjdENvbnRlbnQvUHJvZHVjdENvbnRlbnRcIjtcclxuXHJcbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAge1wiQ29weXJpZ2h0IMKpIFwifVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgWW91ciBXZWJzaXRlXHJcbiAgICAgIDwvTGluaz57XCIgXCJ9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHtcIi5cIn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcblxyXG5sZXQgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBsaWdodDogXCIjNjNjY2ZmXCIsXHJcbiAgICAgIG1haW46IFwiIzAwOWJlNVwiLFxyXG4gICAgICBkYXJrOiBcIiMwMDZkYjNcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBoNToge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiAyNixcclxuICAgICAgbGV0dGVyU3BhY2luZzogMC41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNoYXBlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgTXVpVGFiOiB7XHJcbiAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWl4aW5zOiB7XHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIG1pbkhlaWdodDogNDgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxudGhlbWUgPSB7XHJcbiAgLi4udGhlbWUsXHJcbiAgb3ZlcnJpZGVzOiB7XHJcbiAgICBNdWlEcmF3ZXI6IHtcclxuICAgICAgcGFwZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE4MjAyY1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICBsYWJlbDoge1xyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZWQ6IHtcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgIFwiJjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRhYnM6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIH0sXHJcbiAgICAgIGluZGljYXRvcjoge1xyXG4gICAgICAgIGhlaWdodDogMyxcclxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAzLFxyXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAzLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVGFiOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICBtYXJnaW46IFwiMCAxNnB4XCIsXHJcbiAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICBtaW5XaWR0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUljb25CdXR0b246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVG9vbHRpcDoge1xyXG4gICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aURpdmlkZXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDA0ODU0XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpTGlzdEl0ZW1UZXh0OiB7XHJcbiAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpTGlzdEl0ZW1JY29uOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlBdmF0YXI6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNTY7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHA6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgfSxcclxuICBtYWluOiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCA0KSxcclxuICAgIGJhY2tncm91bmQ6IFwiI2VhZWZmMVwiLFxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYmFja2dyb3VuZDogXCIjZWFlZmYxXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBhcGVyYmFzZShwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfT5cclxuICAgICAgICAgIDxIaWRkZW4gc21VcCBpbXBsZW1lbnRhdGlvbj1cImpzXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0b3JcclxuICAgICAgICAgICAgICBQYXBlclByb3BzPXt7IHN0eWxlOiB7IHdpZHRoOiBkcmF3ZXJXaWR0aCB9IH19XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDxIaWRkZW4geHNEb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0b3IgUGFwZXJQcm9wcz17eyBzdHlsZTogeyB3aWR0aDogZHJhd2VyV2lkdGggfSB9fSAvPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwfT5cclxuICAgICAgICAgIDxIZWFkZXIgb25EcmF3ZXJUb2dnbGU9e2hhbmRsZURyYXdlclRvZ2dsZX0gLz5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgPFByb2R1Y3RDb250ZW50IC8+XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuUGFwZXJiYXNlLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUGFwZXJiYXNlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==