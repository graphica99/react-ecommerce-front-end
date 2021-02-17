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
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("http://localhost:1000/api/tag/add-tag", {
      tag: input
    }, {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg"
      }
    }).then(success => {
      setIsLoading(false);
      console.log("sent successfully");
    }).catch(e => console.log(e)); // setTimeout(() => {
    // }, 2000);
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
      lineNumber: 84,
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
        lineNumber: 99,
        columnNumber: 11
      }, this) : "", " ", "Add Tag"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9UYWdDb250ZW50L1RhZ0NvbnRlbnQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYnV0dG9uIiwicGFkZGluZyIsInBhcGVyIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0IiwiY29udGVudFdyYXBwZXIiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJvZ3Jlc3MiLCJjb2xvciIsImhlaWdodCIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJvbklucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0SGFuZGxlciIsImF4aW9zIiwicG9zdCIsInRhZyIsImhlYWRlcnMiLCJ0aGVuIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE1BQUksRUFBRTtBQUNKLGFBQVM7QUFDUEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsV0FBSyxFQUFFO0FBRkE7QUFETCxHQURtQjtBQU96QkMsUUFBTSxFQUFFO0FBQ05ELFNBQUssRUFB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QTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztHQTlEUUcsTzs7S0FBQUEsTztBQWdFVEEsT0FBTyxDQUFDc0IsU0FBUixHQUFvQjtBQUNsQnBCLFNBQU8sRUFBRXFCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBcEI7QUFJZUMsMElBQVUsQ0FBQ3BELE1BQUQsQ0FBVixDQUFtQjBCLE9BQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vVGFncy5iZDk0YTI1ZDM3MDY2NzYzNWFhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgd2lkdGg6IFwiODAlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjExcHhcIixcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogOTM2LFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIHNlYXJjaElucHV0OiB7XHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSxcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBhZGRVc2VyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvbnRlbnRXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46IFwiNDBweCAxNnB4XCIsXHJcbiAgfSxcclxuICBsb2FkaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbiAgcHJvZ3Jlc3M6IHtcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcclxuICAgIGhlaWdodDogXCI1cHhcIixcclxuICAgIHdpZHRoOiBcIjVweFwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQ29udGVudChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvbklucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9hZGQtdGFnXCIsXHJcbiAgICAgICAgeyB0YWc6IGlucHV0IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVd016WTRPU3dpWlhod0lqb3hOakV6T0RZek5qZzVmUS5zNk1CRHR5T1RYSWxQMUZlZlR0MmJDMHF5alc2ZXRzZGNvVHl6dHBOQkpnXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW50IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgLy8gfSwgMjAwMCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICBsYWJlbD1cIkFkZCBhIHRhZ1wiXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBvbkNoYW5nZT17b25JbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc31cclxuICAgICAgICAgICAgZGlzYWJsZVNocmluaz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgc2l6ZT17MjR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgQWRkIFRhZ1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5Db250ZW50LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ29udGVudCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=