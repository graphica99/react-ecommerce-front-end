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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\TagContent\\TagContent.js",
    _s = $RefreshSig$();









const styles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%"
    }
  },
  button: {
    width: "80%",
    padding: "11px"
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
    marginRight: "20px",
    height: "5px",
    width: "5px"
  }
});

function Content(props) {
  _s();

  const {
    classes
  } = props;
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: input,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const onInputHandler = e => {
    setInput(e.target.value);
  };

  const onSubmitHandler = () => {
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("localhost:1000/api/tag/add-tag", {
      tag: input
    }).then(success => {
      console.log("sent successfully");
    }).catch(e => console.log(e));
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "outlined-basic",
      label: "Add a tag",
      variant: "outlined",
      onChange: onInputHandler,
      value: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "contained",
      color: "primary",
      className: classes.button,
      onClick: onSubmitHandler,
      disableRipple: true,
      children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.progress,
        disableShrink: false,
        variant: "indeterminate",
        size: 24
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, this) : "", " ", "Add Tag"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

_s(Content, "Asx6dvmluAoXeoZ73DcBwN1E1YA=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9UYWdDb250ZW50L1RhZ0NvbnRlbnQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYnV0dG9uIiwicGFkZGluZyIsInBhcGVyIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0IiwiY29udGVudFdyYXBwZXIiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJvZ3Jlc3MiLCJjb2xvciIsImhlaWdodCIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJvbklucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0SGFuZGxlciIsImF4aW9zIiwicG9zdCIsInRhZyIsInRoZW4iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwic2V0VGltZW91dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE1BQUksRUFBRTtBQUNKLGFBQVM7QUFDUEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsV0FBSyxFQUFFO0FBRkE7QUFETCxHQURtQjtBQU96QkMsUUFBTSxFQUFFO0FBQ05ELFNBQUss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QUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0FwRFFHLE87O0tBQUFBLE87QUFzRFRBLE9BQU8sQ0FBQ3NCLFNBQVIsR0FBb0I7QUFDbEJwQixTQUFPLEVBQUVxQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUNwRCxNQUFELENBQVYsQ0FBbUIwQixPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1RhZ3MuZTM2MzdmNmEwM2YyOTc4NDMxN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgcGFkZGluZzogXCIxMXB4XCIsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWF4V2lkdGg6IDkzNixcclxuICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIHNlYXJjaEJhcjoge1xyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgfSxcclxuICBzZWFyY2hJbnB1dDoge1xyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUsXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgYWRkVXNlcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBjb250ZW50V3JhcHBlcjoge1xyXG4gICAgbWFyZ2luOiBcIjQwcHggMTZweFwiLFxyXG4gIH0sXHJcbiAgbG9hZGluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICB9LFxyXG4gIHByb2dyZXNzOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCIyMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiNXB4XCIsXHJcbiAgICB3aWR0aDogXCI1cHhcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25JbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwibG9jYWxob3N0OjEwMDAvYXBpL3RhZy9hZGQtdGFnXCIsIHsgdGFnOiBpbnB1dCB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VudCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG5cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICBsYWJlbD1cIkFkZCBhIHRhZ1wiXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBvbkNoYW5nZT17b25JbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc31cclxuICAgICAgICAgICAgZGlzYWJsZVNocmluaz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgc2l6ZT17MjR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgQWRkIFRhZ1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5Db250ZW50LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ29udGVudCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=