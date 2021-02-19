webpackHotUpdate_N_E("pages/admin/Category",{

/***/ "./node_modules/@material-ui/icons/Edit.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Edit.js ***!
  \*************************************************/
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');

exports.default = _default;

/***/ }),

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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_19__);


var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\CategoryContent\\CategoryContent.js",
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
  },
  dialog: {}
});

const createData = (category, subCategory) => {
  return {
    category,
    subCategory
  };
};

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
    0: rows,
    1: setRows
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createData("Cat1", "sub1,sub2,sub3")]);

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
      lineNumber: 216,
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
      lineNumber: 222,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: classes.root,
      noValidate: true,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h5",
        children: "Categories"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a Category",
        variant: "outlined",
        onChange: onInputHandler,
        value: input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a sub Category",
        variant: "outlined",
        onChange: onSubCategoryInputHandler,
        value: subInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
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
          lineNumber: 253,
          columnNumber: 13
        }, this) : "", " ", isEditable ? "Edit Tag" : "Add A category"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_15__["default"], {
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: "Sub Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: rows.map((row, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_19___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: row.category
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: row.subCategory
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 17
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 214,
    columnNumber: 5
  }, this);
}

_s(Content, "ZWapvTmoq6Rb2VVlhNx2FsEcSbw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9FZGl0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9Db21wb25lbnRzL0NhdGVnb3J5Q29udGVudC9DYXRlZ29yeUNvbnRlbnQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiY2hpcFJvb3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImxpc3RTdHlsZSIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiY2hpcCIsImJ1dHRvbiIsInBhcGVyIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJhZGRVc2VyIiwibWFyZ2luUmlnaHQiLCJjb250ZW50V3JhcHBlciIsImxvYWRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9ncmVzcyIsImNvbG9yIiwiaGVpZ2h0IiwiYWxlcnQiLCJtYXJnaW5Cb3R0b20iLCJ0YWJsZSIsIm1hcmdpblRvcCIsImRpYWxvZyIsImNyZWF0ZURhdGEiLCJjYXRlZ29yeSIsInN1YkNhdGVnb3J5IiwiQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsIm9wZW4iLCJzZXRPcGVuIiwic3RhdGUiLCJtc2ciLCJlcnJvciIsInNldEVycm9yIiwiY2hpcERhdGEiLCJzZXRDaGlwRGF0YSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidGVtcElkRWRpdCIsInNldFRlbXBJZEVkaXQiLCJzdWJJbnB1dCIsInNldFN1YklucHV0Iiwicm93cyIsInNldFJvd3MiLCJvblN1Ym1pdEhhbmRsZXJFZGl0IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicG9zdCIsInRhZyIsImhlYWRlcnMiLCJ0aGVuIiwic3VjY2VzcyIsImNhdGNoIiwiZSIsInJlc3BvbnNlIiwiZGF0YSIsImRvdWJsZUNsaWNrIiwiaWQiLCJpbnAiLCJvbklucHV0SGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwib25TdWJDYXRlZ29yeUlucHV0SGFuZGxlciIsImhhbmRsZURlbGV0ZSIsImNoaXBUb0RlbGV0ZSIsImNoaXBzIiwiZmlsdGVyIiwiX2lkIiwiZGVsZXRlIiwic2V0T3BlbkRpYWxvZyIsIm9uU3VibWl0SGFuZGxlciIsInVzZUVmZmVjdCIsImdldCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlBhcGVyIiwibWFwIiwicm93IiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsS0FBWTtBQUN6QkMsTUFBSSxFQUFFO0FBQ0osYUFBUztBQUNQQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQQyxXQUFLLEVBQUU7QUFGQTtBQURMLEdBRG1CO0FBT3pCQyxVQUFR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QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFLHFFQUFDLG9FQUFEO0FBQUEsb0JBQ0dsQyxJQUFJLENBQUNtQyxHQUFMLENBQVMsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLGtCQUNSLHFFQUFDLG1FQUFEO0FBQUEsb0NBQ0UscUVBQUMsb0VBQUQ7QUFBQSxzQ0FDRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUUscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFLRSxxRUFBQyxvRUFBRDtBQUFBLHdCQUFZRCxHQUFHLENBQUM1RDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLGVBTUUscUVBQUMsb0VBQUQ7QUFBQSx3QkFBWTRELEdBQUcsQ0FBQzNEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkY7QUFBQSxhQUFlNEQsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkVEOztHQTVNUTNELE87O0tBQUFBLE87QUE4TVRBLE9BQU8sQ0FBQzRELFNBQVIsR0FBb0I7QUFDbEIxRCxTQUFPLEVBQUUyRCxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUN4RyxNQUFELENBQVYsQ0FBbUJ3QyxPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL0NhdGVnb3J5LmYyZDAyN2FmMzMyNTE0MTZiMDQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGEuOTk1OS45OTU5IDAgMDAtMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcIlxufSksICdFZGl0Jyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiO1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNoaXBSb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmc6IFwiMTFweFwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIG1heFdpZHRoOiA5MzYsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBzZWFyY2hCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXQ6IHtcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIGFkZFVzZXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgY29udGVudFdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogXCI0MHB4IDE2cHhcIixcclxuICB9LFxyXG4gIGxvYWRpbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgfSxcclxuICBwcm9ncmVzczoge1xyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjVweFwiLFxyXG4gICAgd2lkdGg6IFwiNXB4XCIsXHJcbiAgfSxcclxuICBhbGVydDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gIH0sXHJcbiAgdGFibGU6IHtcclxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBkaWFsb2c6IHt9LFxyXG59KTtcclxuY29uc3QgY3JlYXRlRGF0YSA9IChjYXRlZ29yeSwgc3ViQ2F0ZWdvcnkpID0+IHtcclxuICByZXR1cm4geyBjYXRlZ29yeSwgc3ViQ2F0ZWdvcnkgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh7IHN0YXRlOiBmYWxzZSwgbXNnOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NoaXBEYXRhLCBzZXRDaGlwRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzRWRpdGFibGUsIHNldElzRWRpdGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZW1wSWRFZGl0LCBzZXRUZW1wSWRFZGl0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWJJbnB1dCwgc2V0U3ViSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKFtjcmVhdGVEYXRhKFwiQ2F0MVwiLCBcInN1YjEsc3ViMixzdWIzXCIpXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlckVkaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dCwgdGVtcElkRWRpdCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS90YWcvZWRpdC10YWcvJHt0ZW1wSWRFZGl0fWAsXHJcbiAgICAgICAgeyB0YWc6IGlucHV0IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVd016WTRPU3dpWlhod0lqb3hOakV6T0RZek5qZzVmUS5zNk1CRHR5T1RYSWxQMUZlZlR0MmJDMHF5alc2ZXRzZGNvVHl6dHBOQkpnXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oeyBzdGF0ZTogdHJ1ZSwgbXNnOiBcIlBvc3QgRWRpdGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgICAgc2V0SW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2V0SXNFZGl0YWJsZShmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW50IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG91YmxlQ2xpY2sgPSAoaWQsIGlucCkgPT4ge1xyXG4gICAgc2V0SW5wdXQoaW5wKTtcclxuICAgIHNldFRlbXBJZEVkaXQoaWQpO1xyXG4gICAgc2V0SXNFZGl0YWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbklucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJDYXRlZ29yeUlucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRTdWJJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGNoaXBUb0RlbGV0ZSkgPT4gKCkgPT4ge1xyXG4gICAgc2V0Q2hpcERhdGEoKGNoaXBzKSA9PlxyXG4gICAgICBjaGlwcy5maWx0ZXIoKGNoaXApID0+IGNoaXAuX2lkICE9PSBjaGlwVG9EZWxldGUuX2lkKVxyXG4gICAgKTtcclxuICAgIC8vIGxvY2FsaG9zdDoxMDAwL2FwaS90YWcvZGVsZXRlLXRhZy9cclxuICAgIGF4aW9zXHJcbiAgICAgIC5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2RlbGV0ZS10YWcvJHtjaGlwVG9EZWxldGUuX2lkfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VTRPREV3TkN3aVpYaHdJam94TmpFek9UUTRNVEEwZlEuY2hLTldoc3kxa010MWNjdkc2ZEFvRHVjVmdmcDdYZHBoTXB2eXJfNzAyUVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiUG9zdCBkZWxldGVkIFN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgICAgc2V0T3BlbkRpYWxvZyhmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL2NhdGVnb3J5L2FkZC1jYXRlZ29yeVwiLFxyXG4gICAgICAgIHsgY2F0ZWdvcnk6IGlucHV0LCBzdWJDYXRlZ29yeTogc3ViSW5wdXQgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiQ2F0ZWdvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgICBzZXRJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRTdWJJbnB1dChcIlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2FsbC10YWdzXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hpcERhdGEoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtpc0xvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgIDxBbGVydCB2YXJpYW50PVwib3V0bGluZWRcIiBzZXZlcml0eT1cImluZm9cIiBjbGFzc05hbWU9e2NsYXNzZXMuYWxlcnR9PlxyXG4gICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwiYm90dG9tXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICBvcGVuPXtvcGVuLnN0YXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG1lc3NhZ2U9e29wZW4ubXNnfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+Q2F0ZWdvcmllczwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGEgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0SGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgYSBzdWIgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblN1YkNhdGVnb3J5SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgdmFsdWU9e3N1YklucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9e2lzRWRpdGFibGUgPyBvblN1Ym1pdEhhbmRsZXJFZGl0IDogb25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc31cclxuICAgICAgICAgICAgICBkaXNhYmxlU2hyaW5rPXtmYWxzZX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT17MjR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgIHtpc0VkaXRhYmxlID8gXCJFZGl0IFRhZ1wiIDogXCJBZGQgQSBjYXRlZ29yeVwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPkNhdGVnb3J5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5TdWIgQ2F0ZWdvcnk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAge3Jvd3MubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5jYXRlZ29yeX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5zdWJDYXRlZ29yeX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==