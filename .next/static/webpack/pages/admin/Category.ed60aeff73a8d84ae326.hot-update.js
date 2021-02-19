webpackHotUpdate_N_E("pages/admin/Category",{

/***/ "./pages/admin/Components/CategoryContent/CategoryContent.js":
/*!*******************************************************************!*\
  !*** ./pages/admin/Components/CategoryContent/CategoryContent.js ***!
  \*******************************************************************/
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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");



var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\CategoryContent\\CategoryContent.js",
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
  const {
    0: subInput,
    1: setSubInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: subArr,
    1: setSubArr
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

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

  const onSubCategoryInputHandler = e => {
    setSubInput(e.target.value);
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
    let subCate = subInput.split(",");

    for (var i = 0; i < subCate.length; i++) {
      subArr.push(subCate[i]);
    }

    console.log(subArr); // setIsLoading(true);
    // axios
    //   .post(
    //     "http://localhost:1000/api/tag/add-tag",
    //     { tag: input },
    //     {
    //       headers: {
    //         "x-auth-token":
    //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg",
    //       },
    //     }
    //   )
    //   .then((success) => {
    //     setOpen({ state: true, msg: "Post added successfully" });
    //     setIsLoading(false);
    //     setError("");
    //     setInput("");
    //     console.log("sent successfully");
    //   })
    //   .catch((e) => {
    //     setError(e.response.data.msg);
    //     console.log(e.response.data.msg);
    //     setIsLoading(false);
    //   });
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "h5",
        children: "Categories"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a Category",
        variant: "outlined",
        onChange: onInputHandler,
        value: input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a sub Category",
        variant: "outlined",
        onChange: onSubCategoryInputHandler,
        value: subInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
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
          lineNumber: 247,
          columnNumber: 13
        }, this) : "", " ", isEditable ? "Edit Tag" : "Add A category"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
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
              lineNumber: 268,
              columnNumber: 17
            }, this)
          }, data._id, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 15
          }, this)
        }, void 0, false);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: chipData.length <= 0 ? "No tags available, Please add one" : "Double click on tag to edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 5
  }, this);
}

_s(Content, "LgEIdmpFaC3BufcWaOYH2zry9q0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9DYXRlZ29yeUNvbnRlbnQvQ2F0ZWdvcnlDb250ZW50LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsImNoaXBSb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJsaXN0U3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsImNoaXAiLCJidXR0b24iLCJwYXBlciIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJzZWFyY2hCYXIiLCJib3JkZXJCb3R0b20iLCJzZWFyY2hJbnB1dCIsImZvbnRTaXplIiwidHlwb2dyYXBoeSIsImJsb2NrIiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0IiwiY29udGVudFdyYXBwZXIiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJvZ3Jlc3MiLCJjb2xvciIsImhlaWdodCIsImFsZXJ0IiwibWFyZ2luQm90dG9tIiwidGFibGUiLCJtYXJnaW5Ub3AiLCJkaWFsb2ciLCJDb250ZW50IiwicHJvcHMiLCJjbGFzc2VzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0Iiwib3BlbiIsInNldE9wZW4iLCJzdGF0ZSIsIm1zZyIsImVycm9yIiwic2V0RXJyb3IiLCJjaGlwRGF0YSIsInNldENoaXBEYXRhIiwib3BlbkRpYWxvZyIsInNldE9wZW5EaWFsb2ciLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInRlbXBJZEVkaXQiLCJzZXRUZW1wSWRFZGl0Iiwic3ViSW5wdXQiLCJzZXRTdWJJbnB1dCIsInN1YkFyciIsInNldFN1YkFyciIsIm9uU3VibWl0SGFuZGxlckVkaXQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGFnIiwiaGVhZGVycyIsInRoZW4iLCJzdWNjZXNzIiwiY2F0Y2giLCJlIiwicmVzcG9uc2UiLCJkYXRhIiwiZG91YmxlQ2xpY2siLCJpZCIsImlucCIsIm9uSW5wdXRIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1YkNhdGVnb3J5SW5wdXRIYW5kbGVyIiwiaGFuZGxlRGVsZXRlIiwiY2hpcFRvRGVsZXRlIiwiY2hpcHMiLCJmaWx0ZXIiLCJfaWQiLCJkZWxldGUiLCJvblN1Ym1pdEhhbmRsZXIiLCJzdWJDYXRlIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInVzZUVmZmVjdCIsImdldCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm1hcCIsImljb24iLCJsYWJlbCIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3pCQyxNQUFJLEVBQUU7QUFDSixhQUFTO0FBQ1BDLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBDLFdBQUssRUFBRTtBQUZBO0FBREwsR0FEbUI7QUFPekJDLFVBQVEsRUFBRTtBQUNSQyxXQUFPLEVBQUUsTUFERDtBQUVSQyxrQkFBYyxFQUFFLFFBRlI7QUFHUkMsWUFBUSxFQUFFLE1BSEY7QUFJUkMsYUFBUyxFQUFFLE1BSkg7QUFLUkMsV0FBTyxFQUFFVixLQUFLLENBQUNHLE9BQU4sQ0FBYyxHQUFkLENBTEQ7QUFNUlEsY0FBVSxFQUFFO0FBTkosR0FQZTtBQWV6QkMsTUFBSSxFQUFFO0FBQ0pWLFVBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsR0FBZDtBQURKLEdBZm1CO0FBa0J6QlUsUUFBTSxFQUFFO0FBQ05ULFNBQUssRUFBRSxNQUREO0FBRU5N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YXRlZ29yeS5lZDYwYWVmZjczYThkODRhZTMyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIjtcclxuaW1wb3J0IENoaXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoaXBcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG4vLyEhV09SSyBPTiBERUxFVEVcclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjaGlwUm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgIGxpc3RTdHlsZTogXCJub25lXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICB9LFxyXG4gIGNoaXA6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLjUpLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjExcHhcIixcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogOTM2LFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIHNlYXJjaElucHV0OiB7XHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSxcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBhZGRVc2VyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvbnRlbnRXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46IFwiNDBweCAxNnB4XCIsXHJcbiAgfSxcclxuICBsb2FkaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbiAgcHJvZ3Jlc3M6IHtcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcclxuICAgIGhlaWdodDogXCI1cHhcIixcclxuICAgIHdpZHRoOiBcIjVweFwiLFxyXG4gIH0sXHJcbiAgYWxlcnQ6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICB9LFxyXG4gIHRhYmxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZGlhbG9nOiB7fSxcclxufSk7XHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh7IHN0YXRlOiBmYWxzZSwgbXNnOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NoaXBEYXRhLCBzZXRDaGlwRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wZW5EaWFsb2csIHNldE9wZW5EaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0VkaXRhYmxlLCBzZXRJc0VkaXRhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVtcElkRWRpdCwgc2V0VGVtcElkRWRpdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3ViSW5wdXQsIHNldFN1YklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJBcnIsIHNldFN1YkFycl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyRWRpdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0LCB0ZW1wSWRFZGl0KTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9lZGl0LXRhZy8ke3RlbXBJZEVkaXR9YCxcclxuICAgICAgICB7IHRhZzogaW5wdXQgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiUG9zdCBFZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgICBzZXRJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRJc0VkaXRhYmxlKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb3VibGVDbGljayA9IChpZCwgaW5wKSA9PiB7XHJcbiAgICBzZXRJbnB1dChpbnApO1xyXG4gICAgc2V0VGVtcElkRWRpdChpZCk7XHJcbiAgICBzZXRJc0VkaXRhYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uSW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1YkNhdGVnb3J5SW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldFN1YklucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoY2hpcFRvRGVsZXRlKSA9PiAoKSA9PiB7XHJcbiAgICBzZXRDaGlwRGF0YSgoY2hpcHMpID0+XHJcbiAgICAgIGNoaXBzLmZpbHRlcigoY2hpcCkgPT4gY2hpcC5faWQgIT09IGNoaXBUb0RlbGV0ZS5faWQpXHJcbiAgICApO1xyXG4gICAgLy8gbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9kZWxldGUtdGFnL1xyXG4gICAgYXhpb3NcclxuICAgICAgLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS90YWcvZGVsZXRlLXRhZy8ke2NoaXBUb0RlbGV0ZS5faWR9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVNE9ERXdOQ3dpWlhod0lqb3hOakV6T1RRNE1UQTBmUS5jaEtOV2hzeTFrTXQxY2N2RzZkQW9EdWNWZ2ZwN1hkcGhNcHZ5cl83MDJRXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHsgc3RhdGU6IHRydWUsIG1zZzogXCJQb3N0IGRlbGV0ZWQgU3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgICBzZXRPcGVuRGlhbG9nKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgc3ViQ2F0ZSA9IHN1YklucHV0LnNwbGl0KFwiLFwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ViQ2F0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzdWJBcnIucHVzaChzdWJDYXRlW2ldKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHN1YkFycik7XHJcblxyXG4gICAgLy8gc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gYXhpb3NcclxuICAgIC8vICAgLnBvc3QoXHJcbiAgICAvLyAgICAgXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9hZGQtdGFnXCIsXHJcbiAgICAvLyAgICAgeyB0YWc6IGlucHV0IH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgLy8gICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVd016WTRPU3dpWlhod0lqb3hOakV6T0RZek5qZzVmUS5zNk1CRHR5T1RYSWxQMUZlZlR0MmJDMHF5alc2ZXRzZGNvVHl6dHBOQkpnXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgKVxyXG4gICAgLy8gICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgLy8gICAgIHNldE9wZW4oeyBzdGF0ZTogdHJ1ZSwgbXNnOiBcIlBvc3QgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAvLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIC8vICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgIC8vICAgICBzZXRJbnB1dChcIlwiKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGUpID0+IHtcclxuICAgIC8vICAgICBzZXRFcnJvcihlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgIC8vICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgLy8gICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2FsbC10YWdzXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hpcERhdGEoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtpc0xvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgIDxBbGVydCB2YXJpYW50PVwib3V0bGluZWRcIiBzZXZlcml0eT1cImluZm9cIiBjbGFzc05hbWU9e2NsYXNzZXMuYWxlcnR9PlxyXG4gICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwiYm90dG9tXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICBvcGVuPXtvcGVuLnN0YXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG1lc3NhZ2U9e29wZW4ubXNnfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+Q2F0ZWdvcmllczwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGEgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0SGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgYSBzdWIgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblN1YkNhdGVnb3J5SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgdmFsdWU9e3N1YklucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9e2lzRWRpdGFibGUgPyBvblN1Ym1pdEhhbmRsZXJFZGl0IDogb25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc31cclxuICAgICAgICAgICAgICBkaXNhYmxlU2hyaW5rPXtmYWxzZX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT17MjR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgIHtpc0VkaXRhYmxlID8gXCJFZGl0IFRhZ1wiIDogXCJBZGQgQSBjYXRlZ29yeVwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxQYXBlciBjb21wb25lbnQ9XCJ1bFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwUm9vdH0+XHJcbiAgICAgICAge2NoaXBEYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGljb247XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAga2V5PXtkYXRhLl9pZH1cclxuICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IGRvdWJsZUNsaWNrKGRhdGEuX2lkLCBkYXRhLnRhZyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2RhdGEudGFnfVxyXG4gICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sYWJlbCA9PT0gXCJSZWFjdFwiID8gdW5kZWZpbmVkIDogaGFuZGxlRGVsZXRlKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoaXB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtjaGlwRGF0YS5sZW5ndGggPD0gMFxyXG4gICAgICAgICAgICA/IFwiTm8gdGFncyBhdmFpbGFibGUsIFBsZWFzZSBhZGQgb25lXCJcclxuICAgICAgICAgICAgOiBcIkRvdWJsZSBjbGljayBvbiB0YWcgdG8gZWRpdFwifVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENvbnRlbnQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9