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
      lineNumber: 217,
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
      lineNumber: 223,
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
        lineNumber: 231,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a Category",
        variant: "outlined",
        onChange: onInputHandler,
        value: input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-basic",
        label: "Add a sub Category",
        variant: "outlined",
        onChange: onSubCategoryInputHandler,
        value: subInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
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
          lineNumber: 254,
          columnNumber: 13
        }, this) : "", " ", isEditable ? "Edit Category" : "Add A category"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_15__["default"], {
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: "Sub Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: rows.map((row, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], {
                color: "primary",
                "aria-label": "Edit category",
                component: "span",
                onClick: () => editButtonClick(row._id, row.category, row.subCategory),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_19___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], {
                color: "primary",
                "aria-label": "Delete category",
                component: "span",
                onClick: () => handleDelete(row._id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: row.category
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
              children: row.subCategory.map(subCat => `${subCat},`)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 17
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 215,
    columnNumber: 5
  }, this);
}

_s(Content, "cl2IK8juu36rzUaIamiIR0CgZjc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9DYXRlZ29yeUNvbnRlbnQvQ2F0ZWdvcnlDb250ZW50LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsImNoaXBSb290IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJsaXN0U3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsImNoaXAiLCJidXR0b24iLCJwYXBlciIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJzZWFyY2hCYXIiLCJib3JkZXJCb3R0b20iLCJzZWFyY2hJbnB1dCIsImZvbnRTaXplIiwidHlwb2dyYXBoeSIsImJsb2NrIiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0IiwiY29udGVudFdyYXBwZXIiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicHJvZ3Jlc3MiLCJjb2xvciIsImhlaWdodCIsImFsZXJ0IiwibWFyZ2luQm90dG9tIiwidGFibGUiLCJtYXJnaW5Ub3AiLCJkaWFsb2ciLCJDb250ZW50IiwicHJvcHMiLCJjbGFzc2VzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0Iiwib3BlbiIsInNldE9wZW4iLCJzdGF0ZSIsIm1zZyIsImVycm9yIiwic2V0RXJyb3IiLCJjaGlwRGF0YSIsInNldENoaXBEYXRhIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ0ZW1wSWRFZGl0Iiwic2V0VGVtcElkRWRpdCIsInN1YklucHV0Iiwic2V0U3ViSW5wdXQiLCJyb3dzIiwic2V0Um93cyIsIm9uU3VibWl0SGFuZGxlckVkaXQiLCJheGlvcyIsInBvc3QiLCJjYXRlZ29yeSIsInN1YkNhdGVnb3J5IiwiaGVhZGVycyIsInRoZW4iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZSIsInJlc3BvbnNlIiwiZGF0YSIsImVkaXRCdXR0b25DbGljayIsImlkIiwiY2F0Iiwic3ViQ2F0IiwidG9TdHJpbmciLCJvbklucHV0SGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwib25TdWJDYXRlZ29yeUlucHV0SGFuZGxlciIsImhhbmRsZURlbGV0ZSIsImNhdFRvRGVsZXRlIiwicm93IiwiZmlsdGVyIiwiX2lkIiwiZGVsZXRlIiwic2V0T3BlbkRpYWxvZyIsIm9uU3VibWl0SGFuZGxlciIsInVzZUVmZmVjdCIsImdldCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlBhcGVyIiwibWFwIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE1BQUksRUFBRTtBQUNKLGFBQVM7QUFDUEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsV0FBSyxFQUFFO0FBRkE7QUFETCxHQURtQjtBQU96QkMsVUFBUSxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxNQUREO0FBRVJDLGtCQUFjLEVBQUUsUUFGUjtBQUdSQyxZQUFRLEVBQUUsTUFIRjtBQUlSQyxhQUFTLEVBQUUsTUFKSDtBQUtSQyxXQUFPLEVBQUVWLEtBQUssQ0FBQ0csT0FBTixDQUFjLEdBQWQsQ0FMRDtBQU1SUSxjQUFVLEVBQUU7QUFOSixHQVBlO0FBZXpCQyxNQUFJLEVBQUU7QUFDSlYsVUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxHQUFkO0FBREosR0FmbUI7QUFrQnpCVSxRQUFNLEVBQUU7QUFD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Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2hpcFJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLjUpLFxyXG4gICAgbWFyZ2luTGVmdDogMTAsXHJcbiAgfSxcclxuICBjaGlwOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcGFkZGluZzogXCIxMXB4XCIsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgbWF4V2lkdGg6IDkzNixcclxuICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIHNlYXJjaEJhcjoge1xyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgfSxcclxuICBzZWFyY2hJbnB1dDoge1xyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUsXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgYWRkVXNlcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBjb250ZW50V3JhcHBlcjoge1xyXG4gICAgbWFyZ2luOiBcIjQwcHggMTZweFwiLFxyXG4gIH0sXHJcbiAgbG9hZGluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICB9LFxyXG4gIHByb2dyZXNzOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCIyMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiNXB4XCIsXHJcbiAgICB3aWR0aDogXCI1cHhcIixcclxuICB9LFxyXG4gIGFsZXJ0OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgfSxcclxuICB0YWJsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGRpYWxvZzoge30sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQ29udGVudChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHsgc3RhdGU6IGZhbHNlLCBtc2c6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2hpcERhdGEsIHNldENoaXBEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNFZGl0YWJsZSwgc2V0SXNFZGl0YWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RlbXBJZEVkaXQsIHNldFRlbXBJZEVkaXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YklucHV0LCBzZXRTdWJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlckVkaXQgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpbnB1dCwgdGVtcElkRWRpdCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS9jYXRlZ29yeS9lZGl0LWNhdGVnb3J5LyR7dGVtcElkRWRpdH1gLFxyXG4gICAgICAgIHsgY2F0ZWdvcnk6IGlucHV0LCBzdWJDYXRlZ29yeTogc3ViSW5wdXQgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih7IHN0YXRlOiB0cnVlLCBtc2c6IFwiQ2F0ZWdvcnkgRWRpdGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgICAgc2V0SW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2V0U3ViSW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2V0SXNFZGl0YWJsZShmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW50IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdEJ1dHRvbkNsaWNrID0gKGlkLCBjYXQsIHN1YkNhdCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coc3ViQ2F0LnRvU3RyaW5nKCkpO1xyXG4gICAgc2V0U3ViSW5wdXQoc3ViQ2F0LnRvU3RyaW5nKCkpO1xyXG4gICAgc2V0VGVtcElkRWRpdChpZCk7XHJcbiAgICBzZXRJbnB1dChjYXQpO1xyXG4gICAgc2V0SXNFZGl0YWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbklucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJDYXRlZ29yeUlucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRTdWJJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGNhdFRvRGVsZXRlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjYXRUb0RlbGV0ZSk7XHJcbiAgICBzZXRSb3dzKChyb3cpID0+IHJvd3MuZmlsdGVyKChyb3cpID0+IHJvdy5faWQgIT09IGNhdFRvRGVsZXRlKSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZGVsZXRlKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL2NhdGVnb3J5L2RlbGV0ZS1jYXRlZ29yeS8ke2NhdFRvRGVsZXRlfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVNE9ERXdOQ3dpWlhod0lqb3hOakV6T1RRNE1UQTBmUS5jaEtOV2hzeTFrTXQxY2N2RzZkQW9EdWNWZ2ZwN1hkcGhNcHZ5cl83MDJRXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oeyBzdGF0ZTogdHJ1ZSwgbXNnOiBcIlBvc3QgZGVsZXRlZCBTdWNjZXNzZnVsbHlcIiB9KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICAgIHNldE9wZW5EaWFsb2coZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS9jYXRlZ29yeS9hZGQtY2F0ZWdvcnlcIixcclxuICAgICAgICB7IGNhdGVnb3J5OiBpbnB1dCwgc3ViQ2F0ZWdvcnk6IHN1YklucHV0IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TXpVd016WTRPU3dpWlhod0lqb3hOakV6T0RZek5qZzVmUS5zNk1CRHR5T1RYSWxQMUZlZlR0MmJDMHF5alc2ZXRzZGNvVHl6dHBOQkpnXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oeyBzdGF0ZTogdHJ1ZSwgbXNnOiBcIkNhdGVnb3J5IGFkZGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgICAgc2V0SW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2V0U3ViSW5wdXQoXCJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW50IHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL2NhdGVnb3J5L2FsbC1jYXRlZ29yeVwiLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldFJvd3Moc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtpc0xvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgIDxBbGVydCB2YXJpYW50PVwib3V0bGluZWRcIiBzZXZlcml0eT1cImluZm9cIiBjbGFzc05hbWU9e2NsYXNzZXMuYWxlcnR9PlxyXG4gICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwiYm90dG9tXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICBvcGVuPXtvcGVuLnN0YXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG1lc3NhZ2U9e29wZW4ubXNnfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+Q2F0ZWdvcmllczwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGEgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0SGFuZGxlcn1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgYSBzdWIgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblN1YkNhdGVnb3J5SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgdmFsdWU9e3N1YklucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9e2lzRWRpdGFibGUgPyBvblN1Ym1pdEhhbmRsZXJFZGl0IDogb25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc31cclxuICAgICAgICAgICAgICBkaXNhYmxlU2hyaW5rPXtmYWxzZX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT17MjR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgIHtpc0VkaXRhYmxlID8gXCJFZGl0IENhdGVnb3J5XCIgOiBcIkFkZCBBIGNhdGVnb3J5XCJ9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q2F0ZWdvcnk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlN1YiBDYXRlZ29yeTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICB7cm93cy5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVkaXQgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uQ2xpY2socm93Ll9pZCwgcm93LmNhdGVnb3J5LCByb3cuc3ViQ2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShyb3cuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LmNhdGVnb3J5fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAge3Jvdy5zdWJDYXRlZ29yeS5tYXAoKHN1YkNhdCkgPT4gYCR7c3ViQ2F0fSxgKX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENvbnRlbnQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9