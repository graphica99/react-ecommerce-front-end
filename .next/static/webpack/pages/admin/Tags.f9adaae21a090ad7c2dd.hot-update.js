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
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);


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
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const onInputHandler = e => {
    setInput(e.target.value);
  };

  const onSubmitHandler = () => {
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://localhost:1000/api/tag/add-tag", {
      tag: input
    }, {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg"
      }
    }).then(success => {
      setIsLoading(false);
      console.log("sent successfully");
    }).catch(e => console.log(e));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      open: open,
      onClose: () => setOpen(false),
      message: "I love snacks" // key={vertical + horizontal}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
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
        lineNumber: 91,
        columnNumber: 9
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
          lineNumber: 106,
          columnNumber: 13
        }, this) : "", " ", "Add Tag"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

_s(Content, "AHoAw5YgE7nT9LobLGXwWwFTHjE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9UYWdDb250ZW50L1RhZ0NvbnRlbnQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYnV0dG9uIiwicGFkZGluZyIsInBhcGVyIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0IiwiY29udGVudFdyYXBwZXIiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJvZ3Jlc3MiLCJjb2xvciIsImhlaWdodCIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJvcGVuIiwic2V0T3BlbiIsIm9uSW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXRIYW5kbGVyIiwiYXhpb3MiLCJwb3N0IiwidGFnIiwiaGVhZGVycyIsInRoZW4iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsS0FBWTtBQUN6QkMsTUFBSSxFQUFFO0FBQ0osYUFBUztBQUNQQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQQyxXQUFLLEVBQUU7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QTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUscUVBQUMsZ0VBQUQ7QUFDRSxlQUFPLEVBQUMsV0FEVjtBQUVFLGFBQUssRUFBQyxTQUZSO0FBR0UsaUJBQVMsRUFBRUosT0FBTyxDQUFDdEIsTUFIckI7QUFJRSxlQUFPLEVBQUVrQyxlQUpYO0FBS0UscUJBQWEsRUFBRSxJQUxqQjtBQUFBLG1CQU9HWCxTQUFTLGdCQUNSLHFFQUFDLDBFQUFEO0FBQ0UsbUJBQVMsRUFBRUQsT0FBTyxDQUFDTCxRQURyQjtBQUVFLHVCQUFhLEVBQUUsS0FGakI7QUFHRSxpQkFBTyxFQUFDLGVBSFY7QUFJRSxjQUFJLEVBQUU7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURRLEdBUVIsRUFmSixFQWdCSyxHQWhCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVDRDs7R0FwRVFHLE87O0tBQUFBLE87QUFzRVRBLE9BQU8sQ0FBQzBCLFNBQVIsR0FBb0I7QUFDbEJ4QixTQUFPLEVBQUV5QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUN4RCxNQUFELENBQVYsQ0FBbUIwQixPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1RhZ3MuZjlhZGFhZTIxYTA5MGFkN2MyZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgcGFkZGluZzogXCIxMXB4XCIsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWF4V2lkdGg6IDkzNixcclxuICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIHNlYXJjaEJhcjoge1xyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgfSxcclxuICBzZWFyY2hJbnB1dDoge1xyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUsXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgYWRkVXNlcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBjb250ZW50V3JhcHBlcjoge1xyXG4gICAgbWFyZ2luOiBcIjQwcHggMTZweFwiLFxyXG4gIH0sXHJcbiAgbG9hZGluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICB9LFxyXG4gIHByb2dyZXNzOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCIyMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiNXB4XCIsXHJcbiAgICB3aWR0aDogXCI1cHhcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBvbklucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9hZGQtdGFnXCIsXHJcbiAgICAgICAgeyB0YWc6IGlucHV0IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVd016WTRPU3dpWlhod0lqb3hOakV6T0RZek5qZzVmUS5zNk1CRHR5T1RYSWxQMUZlZlR0MmJDMHF5alc2ZXRzZGNvVHl6dHBOQkpnXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW50IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcImJvdHRvbVwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICBtZXNzYWdlPVwiSSBsb3ZlIHNuYWNrc1wiXHJcbiAgICAgICAgLy8ga2V5PXt2ZXJ0aWNhbCArIGhvcml6b250YWx9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgYSB0YWdcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0SGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVTaHJpbms9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICBzaXplPXsyNH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgQWRkIFRhZ1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==