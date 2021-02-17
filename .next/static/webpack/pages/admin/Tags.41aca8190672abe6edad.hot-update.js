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
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");


var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\TagContent\\TagContent.js",
    _s = $RefreshSig$();


















const styles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  chipRoot: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    marginLeft: 10
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  button: {
    width: "100%",
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
  },
  alert: {
    width: "100%",
    marginLeft: "10px",
    marginBottom: "10px"
  },
  table: {
    marginTop: "30px",
    width: "100%"
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    state: false,
    msg: ""
  });
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: chipData,
    1: setChipData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: openDialog,
    1: setOpenDialog
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const onInputHandler = e => {
    setInput(e.target.value);
  };

  const handleAgree = chipData => {
    setChipData(chipData => chipData.filter(chip => chip._id !== chipData._id)); // localhost:1000/api/tag/delete-tag/

    axios__WEBPACK_IMPORTED_MODULE_8___default.a.delete(`http://localhost:1000/api/tag/delete-tag/${chipToDelete._id}`, {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzU4ODEwNCwiZXhwIjoxNjEzOTQ4MTA0fQ.chKNWhsy1kMt1ccvG6dAoDucVgfp7XdphMpvyr_702Q"
      }
    }).then(success => {
      setOpen({
        state: true,
        msg: "Post deleted Successfully"
      });
      setIsLoading(false);
      setError("");
      console.log("deleted successfully");
    }).catch(e => {
      setError(e.response.data.msg);
      console.log(e.response.data.msg);
      setIsLoading(false);
    });
  };

  const handleDelete = () => () => {
    handleClickOpen();
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
      setOpen({
        state: true,
        msg: "Post added successfully"
      });
      setIsLoading(false);
      setError("");
      console.log("sent successfully");
    }).catch(e => {
      setError(e.response.data.msg);
      console.log(e.response.data.msg);
      setIsLoading(false);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:1000/api/tag/all-tags", {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg"
      }
    }).then(success => {
      setChipData(success.data); // console.log(success);
    }).catch(e => {
      console.log(e.response.data.msg);
    });
  }, [isLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "outlined",
      severity: "info",
      className: classes.alert,
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      open: open.state,
      onClose: () => setOpen(false),
      message: open.msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
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
        lineNumber: 185,
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
          lineNumber: 200,
          columnNumber: 13
        }, this) : "", " ", "Add Tag"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__["default"], {
      component: "ul",
      className: classes.chipRoot,
      children: chipData.map(data => {
        let icon;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__["default"], {
            icon: icon,
            label: data.tag,
            onDelete: data.label === "React" ? undefined : handleDelete(data),
            className: classes.chip
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 15
          }, this)
        }, data._id, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_12__["default"], {
      open: openDialog,
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "alert-dialog-title",
        children: "Use Google's location service?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_14__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_15__["default"], {
          id: "alert-dialog-description",
          children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: handleClose,
          color: "primary",
          children: "Disagree"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: handleAgree,
          color: "primary",
          autoFocus: true,
          children: "Agree"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 170,
    columnNumber: 5
  }, this);
}

_s(Content, "drNUJM+GULthk5tj6Lkz7QqAo9M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9UYWdDb250ZW50L1RhZ0NvbnRlbnQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiY2hpcFJvb3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImxpc3RTdHlsZSIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiY2hpcCIsImJ1dHRvbiIsInBhcGVyIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJhZGRVc2VyIiwibWFyZ2luUmlnaHQiLCJjb250ZW50V3JhcHBlciIsImxvYWRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9ncmVzcyIsImNvbG9yIiwiaGVpZ2h0IiwiYWxlcnQiLCJtYXJnaW5Cb3R0b20iLCJ0YWJsZSIsIm1hcmdpblRvcCIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJvcGVuIiwic2V0T3BlbiIsInN0YXRlIiwibXNnIiwiZXJyb3IiLCJzZXRFcnJvciIsImNoaXBEYXRhIiwic2V0Q2hpcERhdGEiLCJvcGVuRGlhbG9nIiwic2V0T3BlbkRpYWxvZyIsImhhbmRsZUNsaWNrT3BlbiIsImhhbmRsZUNsb3NlIiwib25JbnB1dEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBZ3JlZSIsImZpbHRlciIsIl9pZCIsImF4aW9zIiwiZGVsZXRlIiwiY2hpcFRvRGVsZXRlIiwiaGVhZGVycyIsInRoZW4iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwicmVzcG9uc2UiLCJkYXRhIiwiaGFuZGxlRGVsZXRlIiwib25TdWJtaXRIYW5kbGVyIiwicG9zdCIsInRhZyIsInVzZUVmZmVjdCIsImdldCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm1hcCIsImljb24iLCJsYWJlbCIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE1BQUksRUFBRTtBQUNKLGFBQVM7QUFDUEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsV0FBSyxFQUFFO0FBRkE7QUFETCxHQURtQjtBQU96QkMsVUFBUSxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxNQUREO0FBRVJDLGtCQUFjLEVBQUUsUUFGUjtBQUdSQyxZQUFRLEVBQUUsTUFIRjtBQUlSQyxhQUFTLEVBQUUsTUFKSDtBQUtSQyxXQUFPLEVBQUVWLEtBQUssQ0FBQ0csT0FBTixDQUFjLEdBQWQsQ0FMRDtBQU1SUSxjQUFVLEVBQUU7QUFOSixHQVBlO0FBZXpCQyxNQUFJLEVBQUU7QUFDSlYsVUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxHQUFkO0FBREosR0FmbUI7QUFrQnpCVSxRQUFNLEVBQUU7QUFDTlQsU0FBSyxFQUFFLE1BREQ7QUFFTk0sV0FBTyxFQUFFO0FBRkgsR0FsQmlCO0FBc0J6QkksT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRSxHQURMO0FBRUxiLFVBQU0sRUFBRSxNQUZIO0FBR0xjLFlBQVEsRUFBRTtBQUhMLEdBdEJrQjtBQTJCekJDLFdBQVMsRUFBRTtBQUNUQyxnQkFBWSxFQUFFO0FBREwsR0EzQmM7QUE4QnpCQyxhQUFXLEVBQUU7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RVYsVUFEUjtBQUVFLGFBQU8sRUFBRUcsV0FGWDtBQUdFLHlCQUFnQixvQkFIbEI7QUFJRSwwQkFBaUIsMEJBSm5CO0FBQUEsOEJBTUUscUVBQUMsc0VBQUQ7QUFBYSxVQUFFLEVBQUMsb0JBQWhCO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFTRSxxRUFBQyx3RUFBRDtBQUFBLCtCQUNFLHFFQUFDLDRFQUFEO0FBQW1CLFlBQUUsRUFBQywwQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFlRSxxRUFBQyx3RUFBRDtBQUFBLGdDQUNFLHFFQUFDLGdFQUFEO0FBQVEsaUJBQU8sRUFBRUEsV0FBakI7QUFBOEIsZUFBSyxFQUFDLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUscUVBQUMsZ0VBQUQ7QUFBUSxpQkFBTyxFQUFFSyxXQUFqQjtBQUE4QixlQUFLLEVBQUMsU0FBcEM7QUFBOEMsbUJBQVMsTUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUZEOztHQWpMUXhCLE87O0tBQUFBLE87QUFtTFRBLE9BQU8sQ0FBQ2tELFNBQVIsR0FBb0I7QUFDbEJoRCxTQUFPLEVBQUVpRCxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUMxRixNQUFELENBQVYsQ0FBbUJvQyxPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1RhZ3MuNDFhY2E4MTkwNjcyYWJlNmVkYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCI7XHJcbmltcG9ydCBDaGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGlwXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjaGlwUm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgIGxpc3RTdHlsZTogXCJub25lXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICB9LFxyXG4gIGNoaXA6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLjUpLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjExcHhcIixcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogOTM2LFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIHNlYXJjaElucHV0OiB7XHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSxcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBhZGRVc2VyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvbnRlbnRXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46IFwiNDBweCAxNnB4XCIsXHJcbiAgfSxcclxuICBsb2FkaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbiAgcHJvZ3Jlc3M6IHtcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcclxuICAgIGhlaWdodDogXCI1cHhcIixcclxuICAgIHdpZHRoOiBcIjVweFwiLFxyXG4gIH0sXHJcbiAgYWxlcnQ6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICB9LFxyXG4gIHRhYmxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbn0pO1xyXG5mdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoeyBzdGF0ZTogZmFsc2UsIG1zZzogXCJcIiB9KTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjaGlwRGF0YSwgc2V0Q2hpcERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcGVuRGlhbG9nLCBzZXRPcGVuRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGlhbG9nKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGlhbG9nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbklucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWdyZWUgPSAoY2hpcERhdGEpID0+IHtcclxuICAgIHNldENoaXBEYXRhKChjaGlwRGF0YSkgPT5cclxuICAgICAgY2hpcERhdGEuZmlsdGVyKChjaGlwKSA9PiBjaGlwLl9pZCAhPT0gY2hpcERhdGEuX2lkKVxyXG4gICAgKTtcclxuICAgIC8vIGxvY2FsaG9zdDoxMDAwL2FwaS90YWcvZGVsZXRlLXRhZy9cclxuICAgIGF4aW9zXHJcbiAgICAgIC5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2RlbGV0ZS10YWcvJHtjaGlwVG9EZWxldGUuX2lkfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VTRPREV3TkN3aVpYaHdJam94TmpFek9UUTRNVEEwZlEuY2hLTldoc3kxa010MWNjdkc2ZEFvRHVjVmdmcDdYZHBoTXB2eXJfNzAyUVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiUG9zdCBkZWxldGVkIFN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiAoKSA9PiB7XHJcbiAgICBoYW5kbGVDbGlja09wZW4oKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2FkZC10YWdcIixcclxuICAgICAgICB7IHRhZzogaW5wdXQgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiUG9zdCBhZGRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VudCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS90YWcvYWxsLXRhZ3NcIiwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVd016WTRPU3dpWlhod0lqb3hOakV6T0RZek5qZzVmUS5zNk1CRHR5T1RYSWxQMUZlZlR0MmJDMHF5alc2ZXRzZGNvVHl6dHBOQkpnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRDaGlwRGF0YShzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW2lzTG9hZGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7ZXJyb3IgPyAoXHJcbiAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNldmVyaXR5PVwiaW5mb1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGVydH0+XHJcbiAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9BbGVydD5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJib3R0b21cIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgIG9wZW49e29wZW4uc3RhdGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgbWVzc2FnZT17b3Blbi5tc2d9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgYSB0YWdcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0SGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVTaHJpbms9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICBzaXplPXsyNH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgQWRkIFRhZ1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxQYXBlciBjb21wb25lbnQ9XCJ1bFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwUm9vdH0+XHJcbiAgICAgICAge2NoaXBEYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGljb247XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtkYXRhLl9pZH0+XHJcbiAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgIGljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZGF0YS50YWd9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubGFiZWwgPT09IFwiUmVhY3RcIiA/IHVuZGVmaW5lZCA6IGhhbmRsZURlbGV0ZShkYXRhKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoaXB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvUGFwZXI+XHJcblxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3BlbkRpYWxvZ31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhbGVydC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICB7XCJVc2UgR29vZ2xlJ3MgbG9jYXRpb24gc2VydmljZT9cIn1cclxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIExldCBHb29nbGUgaGVscCBhcHBzIGRldGVybWluZSBsb2NhdGlvbi4gVGhpcyBtZWFucyBzZW5kaW5nXHJcbiAgICAgICAgICAgIGFub255bW91cyBsb2NhdGlvbiBkYXRhIHRvIEdvb2dsZSwgZXZlbiB3aGVuIG5vIGFwcHMgYXJlIHJ1bm5pbmcuXHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBEaXNhZ3JlZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFncmVlfSBjb2xvcj1cInByaW1hcnlcIiBhdXRvRm9jdXM+XHJcbiAgICAgICAgICAgIEFncmVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5Db250ZW50LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ29udGVudCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=