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
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");


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
  progressTable: {
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
    0: hasLoaded,
    1: setHasLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const onSubmitHandlerEdit = () => {
    // console.log(input, tempIdEdit);
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(`http://localhost:1000/api/category/edit-category/${tempIdEdit}`, {
      category: input,
      subCategory: subInput
    }, {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg"
      }
    }).then(success => {
      setOpen({
        state: true,
        msg: "Category Edited successfully"
      });
      setIsLoading(false);
      setError("");
      setInput("");
      setSubInput("");
      setIsEditable(false);
      console.log("sent successfully");
    }).catch(e => {
      setError(e.response.data.msg);
      console.log(e.response.data.msg);
      setIsLoading(false);
    });
  };

  const editButtonClick = (id, cat, subCat) => {
    // console.log(subCat.toString());
    setSubInput(subCat.toString());
    setTempIdEdit(id);
    setInput(cat);
    setIsEditable(true);
  };

  const onInputHandler = e => {
    setInput(e.target.value);
  };

  const onSubCategoryInputHandler = e => {
    setSubInput(e.target.value);
  };

  const handleDelete = catToDelete => {
    console.log(catToDelete);
    setRows(row => rows.filter(row => row._id !== catToDelete));
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.delete(`http://localhost:1000/api/category/delete-category/${catToDelete}`, {
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
      // setError(e.response.data.msg);
      console.log(e);
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
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:1000/api/category/all-category", {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg"
      }
    }).then(success => {
      setRows(success.data); // console.log(success);
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
      lineNumber: 222,
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
      lineNumber: 228,
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
        lineNumber: 236,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a Category",
        variant: "outlined",
        onChange: onInputHandler,
        value: input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a sub Category",
        variant: "outlined",
        onChange: onSubCategoryInputHandler,
        value: subInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
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
          lineNumber: 259,
          columnNumber: 13
        }, this) : "", " ", isEditable ? "Edit Category" : "Add A category"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_15__["default"], {
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: "Sub Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: hasLoaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: classes.progressTable,
            disableShrink: false,
            variant: "indeterminate",
            size: 24
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 15
          }, this) : rows.map((row, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], {
                color: "primary",
                "aria-label": "Edit category",
                component: "span",
                onClick: () => editButtonClick(row._id, row.category, row.subCategory),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_19___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], {
                color: "primary",
                "aria-label": "Delete category",
                component: "span",
                onClick: () => handleDelete(row._id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: row.category
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: row.subCategory.map(subCat => `${subCat},`)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 19
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 17
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 220,
    columnNumber: 5
  }, this);
}

_s(Content, "TjXA7IS0dE8T7zRwDHgbOly1X+U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9DYXRlZ29yeUNvbnRlbnQvQ2F0ZWdvcnlDb250ZW50LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsImNoaXBSb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJsaXN0U3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsImNoaXAiLCJidXR0b24iLCJwYXBlciIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJzZWFyY2hCYXIiLCJib3JkZXJCb3R0b20iLCJzZWFyY2hJbnB1dCIsImZvbnRTaXplIiwidHlwb2dyYXBoeSIsImJsb2NrIiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0IiwiY29udGVudFdyYXBwZXIiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJvZ3Jlc3MiLCJjb2xvciIsImhlaWdodCIsImFsZXJ0IiwibWFyZ2luQm90dG9tIiwidGFibGUiLCJtYXJnaW5Ub3AiLCJwcm9ncmVzc1RhYmxlIiwiQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiaGFzTG9hZGVkIiwic2V0SGFzTG9hZGVkIiwiaW5wdXQiLCJzZXRJbnB1dCIsIm9wZW4iLCJzZXRPcGVuIiwic3RhdGUiLCJtc2ciLCJlcnJvciIsInNldEVycm9yIiwiY2hpcERhdGEiLCJzZXRDaGlwRGF0YSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidGVtcElkRWRpdCIsInNldFRlbXBJZEVkaXQiLCJzdWJJbnB1dCIsInNldFN1YklucHV0Iiwicm93cyIsInNldFJvd3MiLCJvblN1Ym1pdEhhbmRsZXJFZGl0IiwiYXhpb3MiLCJwb3N0IiwiY2F0ZWdvcnkiLCJzdWJDYXRlZ29yeSIsImhlYWRlcnMiLCJ0aGVuIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJyZXNwb25zZSIsImRhdGEiLCJlZGl0QnV0dG9uQ2xpY2siLCJpZCIsImNhdCIsInN1YkNhdCIsInRvU3RyaW5nIiwib25JbnB1dEhhbmRsZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3ViQ2F0ZWdvcnlJbnB1dEhhbmRsZXIiLCJoYW5kbGVEZWxldGUiLCJjYXRUb0RlbGV0ZSIsInJvdyIsImZpbHRlciIsIl9pZCIsImRlbGV0ZSIsInNldE9wZW5EaWFsb2ciLCJvblN1Ym1pdEhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJnZXQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJQYXBlciIsIm1hcCIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3pCQyxNQUFJLEVBQUU7QUFDSixhQUFTO0FBQ1BDLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBDLFdBQUssRUFBRTtBQUZBO0FBREwsR0FEbUI7QUFPekJDLFVBQVEsRUFBRTtBQUNSQyxXQUFPLEVBQUUsTUFERDtBQUVSQyxrQkFBYyxFQUFFLFFBRlI7QUFHUkMsWUFBUSxFQUFFLE1BSEY7QUFJUkMsYUFBUyxFQUFFLE1BSkg7QUFLUkMsV0FBTyxFQUFFVixLQUFLLENBQUNHLE9BQU4sQ0FBYyxHQUFkLENBTEQ7QUFNUlEsY0FBVSxFQUFFO0FBTkosR0FQZTtBQWV6QkMsTUFBSSxFQUFFO0FBQ0pWLFVBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsR0FB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LFVBREY7QUF5R0Q7O0dBNU9RL0QsTzs7S0FBQUEsTztBQThPVEEsT0FBTyxDQUFDZ0UsU0FBUixHQUFvQjtBQUNsQjlELFNBQU8sRUFBRStELGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBcEI7QUFJZUMsMElBQVUsQ0FBQ3pHLE1BQUQsQ0FBVixDQUFtQnFDLE9BQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vQ2F0ZWdvcnkuMjE5Yzc4NGIzYmFhMDUyYjFmMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNoaXBSb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAuNSksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmc6IFwiMTFweFwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIG1heFdpZHRoOiA5MzYsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBzZWFyY2hCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXQ6IHtcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIGFkZFVzZXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgY29udGVudFdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogXCI0MHB4IDE2cHhcIixcclxuICB9LFxyXG4gIGxvYWRpbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgfSxcclxuICBwcm9ncmVzczoge1xyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjVweFwiLFxyXG4gICAgd2lkdGg6IFwiNXB4XCIsXHJcbiAgfSxcclxuICBhbGVydDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gIH0sXHJcbiAgdGFibGU6IHtcclxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBwcm9ncmVzc1RhYmxlOiB7XHJcbiAgICBtYXJnaW5SaWdodDogXCIyMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiNXB4XCIsXHJcbiAgICB3aWR0aDogXCI1cHhcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hhc0xvYWRlZCwgc2V0SGFzTG9hZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoeyBzdGF0ZTogZmFsc2UsIG1zZzogXCJcIiB9KTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjaGlwRGF0YSwgc2V0Q2hpcERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0VkaXRhYmxlLCBzZXRJc0VkaXRhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVtcElkRWRpdCwgc2V0VGVtcElkRWRpdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3ViSW5wdXQsIHNldFN1YklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyRWRpdCA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGlucHV0LCB0ZW1wSWRFZGl0KTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL2NhdGVnb3J5L2VkaXQtY2F0ZWdvcnkvJHt0ZW1wSWRFZGl0fWAsXHJcbiAgICAgICAgeyBjYXRlZ29yeTogaW5wdXQsIHN1YkNhdGVnb3J5OiBzdWJJbnB1dCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHsgc3RhdGU6IHRydWUsIG1zZzogXCJDYXRlZ29yeSBFZGl0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgICBzZXRJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRTdWJJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRJc0VkaXRhYmxlKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlZGl0QnV0dG9uQ2xpY2sgPSAoaWQsIGNhdCwgc3ViQ2F0KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdWJDYXQudG9TdHJpbmcoKSk7XHJcbiAgICBzZXRTdWJJbnB1dChzdWJDYXQudG9TdHJpbmcoKSk7XHJcbiAgICBzZXRUZW1wSWRFZGl0KGlkKTtcclxuICAgIHNldElucHV0KGNhdCk7XHJcbiAgICBzZXRJc0VkaXRhYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uSW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1YkNhdGVnb3J5SW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldFN1YklucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoY2F0VG9EZWxldGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNhdFRvRGVsZXRlKTtcclxuICAgIHNldFJvd3MoKHJvdykgPT4gcm93cy5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCAhPT0gY2F0VG9EZWxldGUpKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5kZWxldGUoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvY2F0ZWdvcnkvZGVsZXRlLWNhdGVnb3J5LyR7Y2F0VG9EZWxldGV9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelU0T0RFd05Dd2laWGh3SWpveE5qRXpPVFE0TVRBMGZRLmNoS05XaHN5MWtNdDFjY3ZHNmRBb0R1Y1ZnZnA3WGRwaE1wdnlyXzcwMlFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiUG9zdCBkZWxldGVkIFN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgICAgc2V0T3BlbkRpYWxvZyhmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gc2V0RXJyb3IoZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL2NhdGVnb3J5L2FkZC1jYXRlZ29yeVwiLFxyXG4gICAgICAgIHsgY2F0ZWdvcnk6IGlucHV0LCBzdWJDYXRlZ29yeTogc3ViSW5wdXQgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiQ2F0ZWdvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgICBzZXRJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRTdWJJbnB1dChcIlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvY2F0ZWdvcnkvYWxsLWNhdGVnb3J5XCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0Um93cyhzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW2lzTG9hZGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7ZXJyb3IgPyAoXHJcbiAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNldmVyaXR5PVwiaW5mb1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGVydH0+XHJcbiAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9BbGVydD5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJib3R0b21cIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgIG9wZW49e29wZW4uc3RhdGV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgbWVzc2FnZT17b3Blbi5tc2d9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5DYXRlZ29yaWVzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgYSBDYXRlZ29yeVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCBhIHN1YiBDYXRlZ29yeVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uU3ViQ2F0ZWdvcnlJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICB2YWx1ZT17c3ViSW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17aXNFZGl0YWJsZSA/IG9uU3VibWl0SGFuZGxlckVkaXQgOiBvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVTaHJpbms9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICBzaXplPXsyNH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAge2lzRWRpdGFibGUgPyBcIkVkaXQgQ2F0ZWdvcnlcIiA6IFwiQWRkIEEgY2F0ZWdvcnlcIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5DYXRlZ29yeTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+U3ViIENhdGVnb3J5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIHsvKiB7IGhhc0xvYWRlZCA/ICB9ICovfVxyXG4gICAgICAgICAgICB7aGFzTG9hZGVkID8gKFxyXG4gICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucHJvZ3Jlc3NUYWJsZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVTaHJpbms9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImluZGV0ZXJtaW5hdGVcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT17MjR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICByb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVkaXQgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uQ2xpY2socm93Ll9pZCwgcm93LmNhdGVnb3J5LCByb3cuc3ViQ2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShyb3cuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5jYXRlZ29yeX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICB7cm93LnN1YkNhdGVnb3J5Lm1hcCgoc3ViQ2F0KSA9PiBgJHtzdWJDYXR9LGApfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==