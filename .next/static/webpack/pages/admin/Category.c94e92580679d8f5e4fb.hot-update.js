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
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://localhost:1000/api/category/add-category", {
      category: input,
      subCategory: subInput
    }, {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg"
      }
    }).then(success => {
      setOpen({
        state: true,
        msg: "Category added successfully"
      });
      setIsLoading(false);
      setError("");
      setInput("");
      setSubInput("");
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
      lineNumber: 205,
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
      lineNumber: 211,
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
        lineNumber: 219,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a Category",
        variant: "outlined",
        onChange: onInputHandler,
        value: input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a sub Category",
        variant: "outlined",
        onChange: onSubCategoryInputHandler,
        value: subInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
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
          lineNumber: 242,
          columnNumber: 13
        }, this) : "", " ", isEditable ? "Edit Tag" : "Add A category"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 218,
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
              lineNumber: 263,
              columnNumber: 17
            }, this)
          }, data._id, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 15
          }, this)
        }, void 0, false);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: chipData.length <= 0 ? "No tags available, Please add one" : "Double click on tag to edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 203,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9DYXRlZ29yeUNvbnRlbnQvQ2F0ZWdvcnlDb250ZW50LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsImNoaXBSb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJsaXN0U3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsImNoaXAiLCJidXR0b24iLCJwYXBlciIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJzZWFyY2hCYXIiLCJib3JkZXJCb3R0b20iLCJzZWFyY2hJbnB1dCIsImZvbnRTaXplIiwidHlwb2dyYXBoeSIsImJsb2NrIiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0IiwiY29udGVudFdyYXBwZXIiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJvZ3Jlc3MiLCJjb2xvciIsImhlaWdodCIsImFsZXJ0IiwibWFyZ2luQm90dG9tIiwidGFibGUiLCJtYXJnaW5Ub3AiLCJkaWFsb2ciLCJDb250ZW50IiwicHJvcHMiLCJjbGFzc2VzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0Iiwib3BlbiIsInNldE9wZW4iLCJzdGF0ZSIsIm1zZyIsImVycm9yIiwic2V0RXJyb3IiLCJjaGlwRGF0YSIsInNldENoaXBEYXRhIiwib3BlbkRpYWxvZyIsInNldE9wZW5EaWFsb2ciLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInRlbXBJZEVkaXQiLCJzZXRUZW1wSWRFZGl0Iiwic3ViSW5wdXQiLCJzZXRTdWJJbnB1dCIsInN1YkFyciIsInNldFN1YkFyciIsIm9uU3VibWl0SGFuZGxlckVkaXQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGFnIiwiaGVhZGVycyIsInRoZW4iLCJzdWNjZXNzIiwiY2F0Y2giLCJlIiwicmVzcG9uc2UiLCJkYXRhIiwiZG91YmxlQ2xpY2siLCJpZCIsImlucCIsIm9uSW5wdXRIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1YkNhdGVnb3J5SW5wdXRIYW5kbGVyIiwiaGFuZGxlRGVsZXRlIiwiY2hpcFRvRGVsZXRlIiwiY2hpcHMiLCJmaWx0ZXIiLCJfaWQiLCJkZWxldGUiLCJvblN1Ym1pdEhhbmRsZXIiLCJjYXRlZ29yeSIsInN1YkNhdGVnb3J5IiwidXNlRWZmZWN0IiwiZ2V0IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwibWFwIiwiaWNvbiIsImxhYmVsIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0EsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE1BQUksRUFBRTtBQUNKLGFBQVM7QUFDUEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsV0FBSyxFQUFFO0FBRkE7QUFETCxHQURtQjtBQU96QkMsVUFBUSxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxNQUREO0FBRVJDLGtCQUFjLEVBQUUsUUFGUjtBQUdSQyxZQUFRLEVBQUUsTUFIRjtBQUlSQyxhQUFTLEVBQUUsTUFKSDtBQUtSQyxXQUFPLEVBQUVWLEtBQUssQ0FBQ0csT0FBTixDQUFjLEdBQWQsQ0FMRDtBQU1SUSxjQUFVLEVBQUU7QUFOSixHQVBlO0FBZXpCQyxNQUFJLEVBQUU7QUFDSlYsVUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxHQUFkO0FBREosR0FmbUI7QUFrQnpCVSxRQUFNLEVBQUU7QUFDTlQsU0FBSyxFQUFFLE1BREQ7QUFFTk0sV0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUZEOztHQS9NUS9ELE87O0tBQUFBLE87QUFpTlRBLE9BQU8sQ0FBQ2dFLFNBQVIsR0FBb0I7QUFDbEI5RCxTQUFPLEVBQUUrRCxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUN6RyxNQUFELENBQVYsQ0FBbUJxQyxPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL0NhdGVnb3J5LmM5NGU5MjU4MDY3OWQ4ZjVlNGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiO1xyXG5pbXBvcnQgQ2hpcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbi8vISFXT1JLIE9OIERFTEVURVxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNoaXBSb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmc6IFwiMTFweFwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIG1heFdpZHRoOiA5MzYsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBzZWFyY2hCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXQ6IHtcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIGFkZFVzZXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgY29udGVudFdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogXCI0MHB4IDE2cHhcIixcclxuICB9LFxyXG4gIGxvYWRpbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgfSxcclxuICBwcm9ncmVzczoge1xyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjVweFwiLFxyXG4gICAgd2lkdGg6IFwiNXB4XCIsXHJcbiAgfSxcclxuICBhbGVydDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gIH0sXHJcbiAgdGFibGU6IHtcclxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBkaWFsb2c6IHt9LFxyXG59KTtcclxuZnVuY3Rpb24gQ29udGVudChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHsgc3RhdGU6IGZhbHNlLCBtc2c6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2hpcERhdGEsIHNldENoaXBEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3BlbkRpYWxvZywgc2V0T3BlbkRpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRWRpdGFibGUsIHNldElzRWRpdGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZW1wSWRFZGl0LCBzZXRUZW1wSWRFZGl0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJJbnB1dCwgc2V0U3ViSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YkFyciwgc2V0U3ViQXJyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXJFZGl0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5wdXQsIHRlbXBJZEVkaXQpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2VkaXQtdGFnLyR7dGVtcElkRWRpdH1gLFxyXG4gICAgICAgIHsgdGFnOiBpbnB1dCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHsgc3RhdGU6IHRydWUsIG1zZzogXCJQb3N0IEVkaXRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICAgIHNldElucHV0KFwiXCIpO1xyXG4gICAgICAgIHNldElzRWRpdGFibGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VudCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvdWJsZUNsaWNrID0gKGlkLCBpbnApID0+IHtcclxuICAgIHNldElucHV0KGlucCk7XHJcbiAgICBzZXRUZW1wSWRFZGl0KGlkKTtcclxuICAgIHNldElzRWRpdGFibGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25JbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3ViQ2F0ZWdvcnlJbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3ViSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChjaGlwVG9EZWxldGUpID0+ICgpID0+IHtcclxuICAgIHNldENoaXBEYXRhKChjaGlwcykgPT5cclxuICAgICAgY2hpcHMuZmlsdGVyKChjaGlwKSA9PiBjaGlwLl9pZCAhPT0gY2hpcFRvRGVsZXRlLl9pZClcclxuICAgICk7XHJcbiAgICAvLyBsb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2RlbGV0ZS10YWcvXHJcbiAgICBheGlvc1xyXG4gICAgICAuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9kZWxldGUtdGFnLyR7Y2hpcFRvRGVsZXRlLl9pZH1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelU0T0RFd05Dd2laWGh3SWpveE5qRXpPVFE0TVRBMGZRLmNoS05XaHN5MWtNdDFjY3ZHNmRBb0R1Y1ZnZnA3WGRwaE1wdnlyXzcwMlFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oeyBzdGF0ZTogdHJ1ZSwgbXNnOiBcIlBvc3QgZGVsZXRlZCBTdWNjZXNzZnVsbHlcIiB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICAgIHNldE9wZW5EaWFsb2coZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS9jYXRlZ29yeS9hZGQtY2F0ZWdvcnlcIixcclxuICAgICAgICB7IGNhdGVnb3J5OiBpbnB1dCwgc3ViQ2F0ZWdvcnk6IHN1YklucHV0IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVd016WTRPU3dpWlhod0lqb3hOakV6T0RZek5qZzVmUS5zNk1CRHR5T1RYSWxQMUZlZlR0MmJDMHF5alc2ZXRzZGNvVHl6dHBOQkpnXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oeyBzdGF0ZTogdHJ1ZSwgbXNnOiBcIkNhdGVnb3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgICAgc2V0SW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2V0U3ViSW5wdXQoXCJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW50IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9hbGwtdGFnc1wiLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldENoaXBEYXRhKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICB9KTtcclxuICB9LCBbaXNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtlcnJvciA/IChcclxuICAgICAgICA8QWxlcnQgdmFyaWFudD1cIm91dGxpbmVkXCIgc2V2ZXJpdHk9XCJpbmZvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFsZXJ0fT5cclxuICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcImJvdHRvbVwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgb3Blbj17b3Blbi5zdGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICBtZXNzYWdlPXtvcGVuLm1zZ31cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkNhdGVnb3JpZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCBhIENhdGVnb3J5XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGEgc3ViIENhdGVnb3J5XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25TdWJDYXRlZ29yeUlucHV0SGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtzdWJJbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICBvbkNsaWNrPXtpc0VkaXRhYmxlID8gb25TdWJtaXRIYW5kbGVyRWRpdCA6IG9uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZVNocmluaz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImluZGV0ZXJtaW5hdGVcIlxyXG4gICAgICAgICAgICAgIHNpemU9ezI0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICB7aXNFZGl0YWJsZSA/IFwiRWRpdCBUYWdcIiA6IFwiQWRkIEEgY2F0ZWdvcnlcIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8UGFwZXIgY29tcG9uZW50PVwidWxcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2hpcFJvb3R9PlxyXG4gICAgICAgIHtjaGlwRGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgIGxldCBpY29uO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGtleT17ZGF0YS5faWR9XHJcbiAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiBkb3VibGVDbGljayhkYXRhLl9pZCwgZGF0YS50YWcpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGlwXHJcbiAgICAgICAgICAgICAgICAgIGljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtkYXRhLnRhZ31cclxuICAgICAgICAgICAgICAgICAgb25EZWxldGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGFiZWwgPT09IFwiUmVhY3RcIiA/IHVuZGVmaW5lZCA6IGhhbmRsZURlbGV0ZShkYXRhKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7Y2hpcERhdGEubGVuZ3RoIDw9IDBcclxuICAgICAgICAgICAgPyBcIk5vIHRhZ3MgYXZhaWxhYmxlLCBQbGVhc2UgYWRkIG9uZVwiXHJcbiAgICAgICAgICAgIDogXCJEb3VibGUgY2xpY2sgb24gdGFnIHRvIGVkaXRcIn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==