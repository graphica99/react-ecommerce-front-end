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

    console.log(subArr);
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://localhost:1000/api/category/add-category", {
      category: input,
      subCategory: subArr
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
      console.log("sent successfully");
    }).catch(e => {
      setError(e.response.data.msg);
      console.log(e.response.data.msg);
      setIsLoading(false);
    });
  }; // useEffect(() => {
  //   axios
  //     .get("http://localhost:1000/api/tag/all-tags", {
  //       headers: {
  //         "x-auth-token":
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg",
  //       },
  //     })
  //     .then((success) => {
  //       setChipData(success.data);
  //       // console.log(success);
  //     })
  //     .catch((e) => {
  //       console.log(e.response.data.msg);
  //     });
  // }, [isLoading]);


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

_s(Content, "20AzbHneydp2W+eJkUwkLNcGhAo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9DYXRlZ29yeUNvbnRlbnQvQ2F0ZWdvcnlDb250ZW50LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsImNoaXBSb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJsaXN0U3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsImNoaXAiLCJidXR0b24iLCJwYXBlciIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJzZWFyY2hCYXIiLCJib3JkZXJCb3R0b20iLCJzZWFyY2hJbnB1dCIsImZvbnRTaXplIiwidHlwb2dyYXBoeSIsImJsb2NrIiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0IiwiY29udGVudFdyYXBwZXIiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJvZ3Jlc3MiLCJjb2xvciIsImhlaWdodCIsImFsZXJ0IiwibWFyZ2luQm90dG9tIiwidGFibGUiLCJtYXJnaW5Ub3AiLCJkaWFsb2ciLCJDb250ZW50IiwicHJvcHMiLCJjbGFzc2VzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0Iiwib3BlbiIsInNldE9wZW4iLCJzdGF0ZSIsIm1zZyIsImVycm9yIiwic2V0RXJyb3IiLCJjaGlwRGF0YSIsInNldENoaXBEYXRhIiwib3BlbkRpYWxvZyIsInNldE9wZW5EaWFsb2ciLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInRlbXBJZEVkaXQiLCJzZXRUZW1wSWRFZGl0Iiwic3ViSW5wdXQiLCJzZXRTdWJJbnB1dCIsInN1YkFyciIsInNldFN1YkFyciIsIm9uU3VibWl0SGFuZGxlckVkaXQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGFnIiwiaGVhZGVycyIsInRoZW4iLCJzdWNjZXNzIiwiY2F0Y2giLCJlIiwicmVzcG9uc2UiLCJkYXRhIiwiZG91YmxlQ2xpY2siLCJpZCIsImlucCIsIm9uSW5wdXRIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1YkNhdGVnb3J5SW5wdXRIYW5kbGVyIiwiaGFuZGxlRGVsZXRlIiwiY2hpcFRvRGVsZXRlIiwiY2hpcHMiLCJmaWx0ZXIiLCJfaWQiLCJkZWxldGUiLCJvblN1Ym1pdEhhbmRsZXIiLCJzdWJDYXRlIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicHVzaCIsImNhdGVnb3J5Iiwic3ViQ2F0ZWdvcnkiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtYXAiLCJpY29uIiwibGFiZWwiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsS0FBWTtBQUN6QkMsTUFBSSxFQUFFO0FBQ0osYUFBUztBQUNQQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQQyxXQUFLLEVBQUU7QUFGQTtBQURMLEdBRG1CO0FBT3pCQyxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLE1BREQ7QUFFUkMsa0JBQWMsRUFBRSxRQUZSO0FBR1JDLFlBQVEsRUFBRSxNQUhGO0FBSVJDLGFBQVMsRUFBRSxNQUpIO0FBS1JDLFdBQU8sRUFBRVYsS0FBSyxDQUFDRyxPQUFOLENBQWMsR0FBZCxDQUxEO0FBTVJRLGNBQVUsRUFBRTtBQU5KLEdBUGU7QUFlekJDLE1BQUksRUFBRTtBQUNKVixVQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLEdBQWQ7QUFESixHQWZtQjtBQWtCekJVLFFBQU0sRUFBRTtBQUNOVCxTQUFLLEVBQUUsTUFE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QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUZEOztHQXBOUXhELE87O0tBQUFBLE87QUFzTlRBLE9BQU8sQ0FBQ2tFLFNBQVIsR0FBb0I7QUFDbEJoRSxTQUFPLEVBQUVpRSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUMzRyxNQUFELENBQVYsQ0FBbUJxQyxPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL0NhdGVnb3J5LjA1N2FhZjdlMzkyZjAxMDBhODBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiO1xyXG5pbXBvcnQgQ2hpcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbi8vISFXT1JLIE9OIERFTEVURVxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNoaXBSb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmc6IFwiMTFweFwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIG1heFdpZHRoOiA5MzYsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBzZWFyY2hCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXQ6IHtcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIGFkZFVzZXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgY29udGVudFdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogXCI0MHB4IDE2cHhcIixcclxuICB9LFxyXG4gIGxvYWRpbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgfSxcclxuICBwcm9ncmVzczoge1xyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjVweFwiLFxyXG4gICAgd2lkdGg6IFwiNXB4XCIsXHJcbiAgfSxcclxuICBhbGVydDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gIH0sXHJcbiAgdGFibGU6IHtcclxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBkaWFsb2c6IHt9LFxyXG59KTtcclxuZnVuY3Rpb24gQ29udGVudChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHsgc3RhdGU6IGZhbHNlLCBtc2c6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2hpcERhdGEsIHNldENoaXBEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3BlbkRpYWxvZywgc2V0T3BlbkRpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRWRpdGFibGUsIHNldElzRWRpdGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZW1wSWRFZGl0LCBzZXRUZW1wSWRFZGl0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJJbnB1dCwgc2V0U3ViSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YkFyciwgc2V0U3ViQXJyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXJFZGl0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5wdXQsIHRlbXBJZEVkaXQpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2VkaXQtdGFnLyR7dGVtcElkRWRpdH1gLFxyXG4gICAgICAgIHsgdGFnOiBpbnB1dCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHsgc3RhdGU6IHRydWUsIG1zZzogXCJQb3N0IEVkaXRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICAgIHNldElucHV0KFwiXCIpO1xyXG4gICAgICAgIHNldElzRWRpdGFibGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VudCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvdWJsZUNsaWNrID0gKGlkLCBpbnApID0+IHtcclxuICAgIHNldElucHV0KGlucCk7XHJcbiAgICBzZXRUZW1wSWRFZGl0KGlkKTtcclxuICAgIHNldElzRWRpdGFibGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25JbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3ViQ2F0ZWdvcnlJbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3ViSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChjaGlwVG9EZWxldGUpID0+ICgpID0+IHtcclxuICAgIHNldENoaXBEYXRhKChjaGlwcykgPT5cclxuICAgICAgY2hpcHMuZmlsdGVyKChjaGlwKSA9PiBjaGlwLl9pZCAhPT0gY2hpcFRvRGVsZXRlLl9pZClcclxuICAgICk7XHJcbiAgICAvLyBsb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2RlbGV0ZS10YWcvXHJcbiAgICBheGlvc1xyXG4gICAgICAuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9kZWxldGUtdGFnLyR7Y2hpcFRvRGVsZXRlLl9pZH1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelU0T0RFd05Dd2laWGh3SWpveE5qRXpPVFE0TVRBMGZRLmNoS05XaHN5MWtNdDFjY3ZHNmRBb0R1Y1ZnZnA3WGRwaE1wdnlyXzcwMlFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oeyBzdGF0ZTogdHJ1ZSwgbXNnOiBcIlBvc3QgZGVsZXRlZCBTdWNjZXNzZnVsbHlcIiB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICAgIHNldE9wZW5EaWFsb2coZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIGxldCBzdWJDYXRlID0gc3ViSW5wdXQuc3BsaXQoXCIsXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJDYXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHN1YkFyci5wdXNoKHN1YkNhdGVbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN1YkFycik7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvY2F0ZWdvcnkvYWRkLWNhdGVnb3J5XCIsXHJcbiAgICAgICAgeyBjYXRlZ29yeTogaW5wdXQsIHN1YkNhdGVnb3J5OiBzdWJBcnIgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiQ2F0ZWdvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgICBzZXRJbnB1dChcIlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgYXhpb3NcclxuICAvLyAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2FsbC10YWdzXCIsIHtcclxuICAvLyAgICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gIC8vICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgLy8gICAgICAgc2V0Q2hpcERhdGEoc3VjY2Vzcy5kYXRhKTtcclxuICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH0sIFtpc0xvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgIDxBbGVydCB2YXJpYW50PVwib3V0bGluZWRcIiBzZXZlcml0eT1cImluZm9cIiBjbGFzc05hbWU9e2NsYXNzZXMuYWxlcnR9PlxyXG4gICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwiYm90dG9tXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICBvcGVuPXtvcGVuLnN0YXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG1lc3NhZ2U9e29wZW4ubXNnfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+Q2F0ZWdvcmllczwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGEgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0SGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgYSBzdWIgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblN1YkNhdGVnb3J5SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgdmFsdWU9e3N1YklucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9e2lzRWRpdGFibGUgPyBvblN1Ym1pdEhhbmRsZXJFZGl0IDogb25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc31cclxuICAgICAgICAgICAgICBkaXNhYmxlU2hyaW5rPXtmYWxzZX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT17MjR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgIHtpc0VkaXRhYmxlID8gXCJFZGl0IFRhZ1wiIDogXCJBZGQgQSBjYXRlZ29yeVwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxQYXBlciBjb21wb25lbnQ9XCJ1bFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwUm9vdH0+XHJcbiAgICAgICAge2NoaXBEYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGljb247XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAga2V5PXtkYXRhLl9pZH1cclxuICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IGRvdWJsZUNsaWNrKGRhdGEuX2lkLCBkYXRhLnRhZyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2RhdGEudGFnfVxyXG4gICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sYWJlbCA9PT0gXCJSZWFjdFwiID8gdW5kZWZpbmVkIDogaGFuZGxlRGVsZXRlKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoaXB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtjaGlwRGF0YS5sZW5ndGggPD0gMFxyXG4gICAgICAgICAgICA/IFwiTm8gdGFncyBhdmFpbGFibGUsIFBsZWFzZSBhZGQgb25lXCJcclxuICAgICAgICAgICAgOiBcIkRvdWJsZSBjbGljayBvbiB0YWcgdG8gZWRpdFwifVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENvbnRlbnQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9