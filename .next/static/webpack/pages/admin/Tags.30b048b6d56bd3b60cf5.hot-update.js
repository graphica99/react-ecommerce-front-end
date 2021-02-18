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
















 //!!WORK ON DELETE

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
  },
  dialog: {}
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
  const {
    0: isEditable,
    1: setIsEditable
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: tempIdEdit,
    1: setTempIdEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const onSubmitHandlerEdit = () => {
    console.log(input, tempIdEdit);
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(`http://localhost:1000/api/tag/edit-tag/${tempIdEdit}`, {
      tag: input
    }, {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg"
      }
    }).then(success => {
      setOpen({
        state: true,
        msg: "Post Edited successfully"
      });
      setIsLoading(false);
      setError("");
      setInput("");
      setIsEditable(false);
      console.log("sent successfully");
    }).catch(e => {
      setError(e.response.data.msg);
      console.log(e.response.data.msg);
      setIsLoading(false);
    });
  };

  const doubleClick = (id, inp) => {
    setInput(inp);
    setTempIdEdit(id);
    setIsEditable(true);
  };

  const onInputHandler = e => {
    setInput(e.target.value);
  };

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip._id !== chipToDelete._id)); // localhost:1000/api/tag/delete-tag/

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
      setOpenDialog(false);
      console.log("deleted successfully");
    }).catch(e => {
      setError(e.response.data.msg);
      console.log(e.response.data.msg);
      setIsLoading(false);
    });
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
      setInput("");
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
      lineNumber: 210,
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
      lineNumber: 216,
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
        lineNumber: 223,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: isEditable ? onSubmitHandlerEdit : onSubmitHandler,
        disableRipple: true,
        children: [isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: classes.progress,
          disableShrink: false,
          variant: "indeterminate",
          size: 24
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }, this) : "", " ", isEditable ? "Edit Tag" : "Add Tag"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__["default"], {
      component: "ul",
      className: classes.chipRoot,
      children: [chipData.map(data => {
        let icon;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            onDoubleClick: () => doubleClick(data._id, data.tag),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__["default"], {
              icon: icon,
              label: data.tag,
              onDelete: data.label === "React" ? undefined : handleDelete(data),
              className: classes.chip
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 17
            }, this)
          }, data._id, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 15
          }, this)
        }, void 0, false);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: chipData.length <= 0 ? "No tags available, Please add one" : "Double click on tag to edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 5
  }, this);
}

_s(Content, "SfuAlfAwFImjmwPKXYet4gqHkOI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9UYWdDb250ZW50L1RhZ0NvbnRlbnQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiY2hpcFJvb3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImxpc3RTdHlsZSIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiY2hpcCIsImJ1dHRvbiIsInBhcGVyIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJhZGRVc2VyIiwibWFyZ2luUmlnaHQiLCJjb250ZW50V3JhcHBlciIsImxvYWRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9ncmVzcyIsImNvbG9yIiwiaGVpZ2h0IiwiYWxlcnQiLCJtYXJnaW5Cb3R0b20iLCJ0YWJsZSIsIm1hcmdpblRvcCIsImRpYWxvZyIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJvcGVuIiwic2V0T3BlbiIsInN0YXRlIiwibXNnIiwiZXJyb3IiLCJzZXRFcnJvciIsImNoaXBEYXRhIiwic2V0Q2hpcERhdGEiLCJvcGVuRGlhbG9nIiwic2V0T3BlbkRpYWxvZyIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidGVtcElkRWRpdCIsInNldFRlbXBJZEVkaXQiLCJoYW5kbGVDbGlja09wZW4iLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0SGFuZGxlckVkaXQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGFnIiwiaGVhZGVycyIsInRoZW4iLCJzdWNjZXNzIiwiY2F0Y2giLCJlIiwicmVzcG9uc2UiLCJkYXRhIiwiZG91YmxlQ2xpY2siLCJpZCIsImlucCIsIm9uSW5wdXRIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEZWxldGUiLCJjaGlwVG9EZWxldGUiLCJjaGlwcyIsImZpbHRlciIsIl9pZCIsImRlbGV0ZSIsIm9uU3VibWl0SGFuZGxlciIsInVzZUVmZmVjdCIsImdldCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm1hcCIsImljb24iLCJsYWJlbCIsInVuZGVmaW5lZCIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3pCQyxNQUFJLEVBQUU7QUFDSixhQUFTO0FBQ1BDLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBDLFdBQUssRUFBRTtBQUZBO0FBREwsR0FEbUI7QUFPekJDLFVBQVEsRUFBRTtBQUNSQyxXQUFPLEVBQUUsTUFERDtBQUVSQyxrQkFBYyxFQUFFLFFBRlI7QUFHUkMsWUFBUSxFQUFFLE1BSEY7QUFJUkMsYUFBUyxFQUFFLE1BSkg7QUFLUkMsV0FBTyxFQUFFVixLQUFLLENBQUNHLE9BQU4sQ0FBYyxHQUFkLENBTEQ7QUFNUlEsY0FBVSxFQUFFO0FBTkosR0FQZTtBQWV6QkMsTUFBSSxFQUFFO0FBQ0pWLFVBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsR0FBZDtBQURKLEdBZm1CO0FBa0J6QlUsUUFBTSxFQUFFO0FBQ05ULFNBQUssRUFBRSxNQUREO0FBRU5NLFdBQU8sRUFBRTtBQUZILEdBbEJpQjtBQXNCekJJLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUUs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QVcsQ0FBQ0QsSUFBSSxDQUFDVyxHQUFOLEVBQVdYLElBQUksQ0FBQ1AsR0FBaEIsQ0FGbEM7QUFBQSxtQ0FJRSxxRUFBQywrREFBRDtBQUNFLGtCQUFJLEVBQUUwQixJQURSO0FBRUUsbUJBQUssRUFBRW5CLElBQUksQ0FBQ1AsR0FGZDtBQUdFLHNCQUFRLEVBQ05PLElBQUksQ0FBQ29CLEtBQUwsS0FBZSxPQUFmLEdBQXlCQyxTQUF6QixHQUFxQ2QsWUFBWSxDQUFDUCxJQUFELENBSnJEO0FBTUUsdUJBQVMsRUFBRWxDLE9BQU8sQ0FBQzFCO0FBTnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixhQUNPNEQsSUFBSSxDQUFDVyxHQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix5QkFERjtBQWlCRCxPQW5CQSxDQURILGVBcUJFO0FBQUEsa0JBQ0dqQyxRQUFRLENBQUM0QyxNQUFULElBQW1CLENBQW5CLEdBQ0csbUNBREgsR0FFRztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0VEOztHQXZNUTFELE87O0tBQUFBLE87QUF5TVRBLE9BQU8sQ0FBQzJELFNBQVIsR0FBb0I7QUFDbEJ6RCxTQUFPLEVBQUUwRCxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUNwRyxNQUFELENBQVYsQ0FBbUJxQyxPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1RhZ3MuMzBiMDQ4YjZkNTZiZDNiNjBjZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCI7XHJcbmltcG9ydCBDaGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGlwXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG4vLyEhV09SSyBPTiBERUxFVEVcclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjaGlwUm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgIGxpc3RTdHlsZTogXCJub25lXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICB9LFxyXG4gIGNoaXA6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLjUpLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjExcHhcIixcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogOTM2LFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIHNlYXJjaElucHV0OiB7XHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSxcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBhZGRVc2VyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvbnRlbnRXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46IFwiNDBweCAxNnB4XCIsXHJcbiAgfSxcclxuICBsb2FkaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbiAgcHJvZ3Jlc3M6IHtcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcclxuICAgIGhlaWdodDogXCI1cHhcIixcclxuICAgIHdpZHRoOiBcIjVweFwiLFxyXG4gIH0sXHJcbiAgYWxlcnQ6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICB9LFxyXG4gIHRhYmxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZGlhbG9nOiB7fSxcclxufSk7XHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh7IHN0YXRlOiBmYWxzZSwgbXNnOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NoaXBEYXRhLCBzZXRDaGlwRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wZW5EaWFsb2csIHNldE9wZW5EaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0VkaXRhYmxlLCBzZXRJc0VkaXRhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVtcElkRWRpdCwgc2V0VGVtcElkRWRpdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRpYWxvZyh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRpYWxvZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyRWRpdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0LCB0ZW1wSWRFZGl0KTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9lZGl0LXRhZy8ke3RlbXBJZEVkaXR9YCxcclxuICAgICAgICB7IHRhZzogaW5wdXQgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiUG9zdCBFZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgICBzZXRJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRJc0VkaXRhYmxlKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb3VibGVDbGljayA9IChpZCwgaW5wKSA9PiB7XHJcbiAgICBzZXRJbnB1dChpbnApO1xyXG4gICAgc2V0VGVtcElkRWRpdChpZCk7XHJcbiAgICBzZXRJc0VkaXRhYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uSW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoY2hpcFRvRGVsZXRlKSA9PiAoKSA9PiB7XHJcbiAgICBzZXRDaGlwRGF0YSgoY2hpcHMpID0+XHJcbiAgICAgIGNoaXBzLmZpbHRlcigoY2hpcCkgPT4gY2hpcC5faWQgIT09IGNoaXBUb0RlbGV0ZS5faWQpXHJcbiAgICApO1xyXG4gICAgLy8gbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9kZWxldGUtdGFnL1xyXG4gICAgYXhpb3NcclxuICAgICAgLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS90YWcvZGVsZXRlLXRhZy8ke2NoaXBUb0RlbGV0ZS5faWR9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVNE9ERXdOQ3dpWlhod0lqb3hOakV6T1RRNE1UQTBmUS5jaEtOV2hzeTFrTXQxY2N2RzZkQW9EdWNWZ2ZwN1hkcGhNcHZ5cl83MDJRXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHsgc3RhdGU6IHRydWUsIG1zZzogXCJQb3N0IGRlbGV0ZWQgU3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgICBzZXRPcGVuRGlhbG9nKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2FkZC10YWdcIixcclxuICAgICAgICB7IHRhZzogaW5wdXQgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiUG9zdCBhZGRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICAgIHNldElucHV0KFwiXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VudCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS90YWcvYWxsLXRhZ3NcIiwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVd016WTRPU3dpWlhod0lqb3hOakV6T0RZek5qZzVmUS5zNk1CRHR5T1RYSWxQMUZlZlR0MmJDMHF5alc2ZXRzZGNvVHl6dHBOQkpnXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRDaGlwRGF0YShzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW2lzTG9hZGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7ZXJyb3IgPyAoXHJcbiAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNldmVyaXR5PVwiaW5mb1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGVydH0+XHJcbiAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9BbGVydD5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJib3R0b21cIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgIG9wZW49e29wZW4uc3RhdGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgbWVzc2FnZT17b3Blbi5tc2d9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgYSB0YWdcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0SGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICBvbkNsaWNrPXtpc0VkaXRhYmxlID8gb25TdWJtaXRIYW5kbGVyRWRpdCA6IG9uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZVNocmluaz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImluZGV0ZXJtaW5hdGVcIlxyXG4gICAgICAgICAgICAgIHNpemU9ezI0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICB7aXNFZGl0YWJsZSA/IFwiRWRpdCBUYWdcIiA6IFwiQWRkIFRhZ1wifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxQYXBlciBjb21wb25lbnQ9XCJ1bFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwUm9vdH0+XHJcbiAgICAgICAge2NoaXBEYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGljb247XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAga2V5PXtkYXRhLl9pZH1cclxuICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IGRvdWJsZUNsaWNrKGRhdGEuX2lkLCBkYXRhLnRhZyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2RhdGEudGFnfVxyXG4gICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sYWJlbCA9PT0gXCJSZWFjdFwiID8gdW5kZWZpbmVkIDogaGFuZGxlRGVsZXRlKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoaXB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtjaGlwRGF0YS5sZW5ndGggPD0gMFxyXG4gICAgICAgICAgICA/IFwiTm8gdGFncyBhdmFpbGFibGUsIFBsZWFzZSBhZGQgb25lXCJcclxuICAgICAgICAgICAgOiBcIkRvdWJsZSBjbGljayBvbiB0YWcgdG8gZWRpdFwifVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENvbnRlbnQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9