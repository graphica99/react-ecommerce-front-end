webpackHotUpdate_N_E("pages/admin/Products",{

/***/ "./pages/admin/Components/ProductContent/ProductContent.js":
/*!*****************************************************************!*\
  !*** ./pages/admin/Components/ProductContent/ProductContent.js ***!
  \*****************************************************************/
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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");


var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\ProductContent\\ProductContent.js",
    _s = $RefreshSig$();













const styles = theme => ({
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
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%",
      marginBottom: "40px"
    }
  }
});

const createData = (name, tag, category, price, owner, image, search) => {
  return {
    name,
    tag,
    category,
    price,
    owner,
    image,
    search
  };
};

function Content(props) {
  _s();

  const {
    classes
  } = props;
  const {
    0: rows,
    1: setRows
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createData("Bag", "Bag", "Fashion", 20.0, "Mends Albert", "img", true), createData("Shoes", "Shoes", "Fashion", 20.0, "Priscilla Mends", "img", true), createData("Jollof", "Rice", "Food", 20.0, "Elvis Mends", "img", true)]);
  const {
    0: searchInput,
    1: setSearchInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const searchHandler = searchVal => {
    const rowData = rows.map(row => Object.values(row)).filter(options => options !== true && options !== false);
    const matches = rowData.map(row => row.map(option => console.log(option)));
    console.log(matches); // option.toLowerCase().includes(searchVal.toLowerCase())
  };

  const inputHandler = e => {
    setSearchInput(e.target.value);
    searchHandler(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: classes.root,
      noValidate: true,
      autoComplete: "off",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "standard-basic",
        label: "Search",
        value: searchInput,
        onChange: e => inputHandler(e)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Tag"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Price"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Owner"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: rows.map((row, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.tag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.category
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.owner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

_s(Content, "l0DDGaDBEU75Ukgh/0hx/k1GL6o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImNvbnRlbnRXcmFwcGVyIiwicm9vdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJ0YWciLCJjYXRlZ29yeSIsInByaWNlIiwib3duZXIiLCJpbWFnZSIsInNlYXJjaCIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJyb3dzIiwic2V0Um93cyIsInVzZVN0YXRlIiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hIYW5kbGVyIiwic2VhcmNoVmFsIiwicm93RGF0YSIsIm1hcCIsInJvdyIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsIm9wdGlvbnMiLCJtYXRjaGVzIiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsImlucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlBhcGVyIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUUsR0FETDtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdM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QUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0UscUVBQUMsb0VBQUQ7QUFBQSx3QkFBWWlCLEdBQUcsQ0FBQ2hCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsZUFJRSxxRUFBQyxvRUFBRDtBQUFBLHdCQUFZZ0IsR0FBRyxDQUFDZjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBS0UscUVBQUMsb0VBQUQ7QUFBQSx3QkFBWWUsR0FBRyxDQUFDZDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLGVBTUUscUVBQUMsb0VBQUQ7QUFBQSx3QkFBWWMsR0FBRyxDQUFDYjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GO0FBQUEsYUFBZTJCLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEOztHQTNFUXpCLE87O0tBQUFBLE87QUE2RVRBLE9BQU8sQ0FBQzBCLFNBQVIsR0FBb0I7QUFDbEJ4QixTQUFPLEVBQUV5QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUMxRCxNQUFELENBQVYsQ0FBbUI0QixPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1Byb2R1Y3RzLjNlZmZkY2MzNGUxNWZkMjI3YTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogOTM2LFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIHNlYXJjaElucHV0OiB7XHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSxcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBhZGRVc2VyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvbnRlbnRXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46IFwiNDBweCAxNnB4XCIsXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjQwcHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBjcmVhdGVEYXRhID0gKG5hbWUsIHRhZywgY2F0ZWdvcnksIHByaWNlLCBvd25lciwgaW1hZ2UsIHNlYXJjaCkgPT4ge1xyXG4gIHJldHVybiB7IG5hbWUsIHRhZywgY2F0ZWdvcnksIHByaWNlLCBvd25lciwgaW1hZ2UsIHNlYXJjaCB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQ29udGVudChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKFtcclxuICAgIGNyZWF0ZURhdGEoXCJCYWdcIiwgXCJCYWdcIiwgXCJGYXNoaW9uXCIsIDIwLjAsIFwiTWVuZHMgQWxiZXJ0XCIsIFwiaW1nXCIsIHRydWUpLFxyXG4gICAgY3JlYXRlRGF0YShcclxuICAgICAgXCJTaG9lc1wiLFxyXG4gICAgICBcIlNob2VzXCIsXHJcbiAgICAgIFwiRmFzaGlvblwiLFxyXG4gICAgICAyMC4wLFxyXG4gICAgICBcIlByaXNjaWxsYSBNZW5kc1wiLFxyXG4gICAgICBcImltZ1wiLFxyXG4gICAgICB0cnVlXHJcbiAgICApLFxyXG4gICAgY3JlYXRlRGF0YShcIkpvbGxvZlwiLCBcIlJpY2VcIiwgXCJGb29kXCIsIDIwLjAsIFwiRWx2aXMgTWVuZHNcIiwgXCJpbWdcIiwgdHJ1ZSksXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoc2VhcmNoVmFsKSA9PiB7XHJcbiAgICBjb25zdCByb3dEYXRhID0gcm93c1xyXG4gICAgICAubWFwKChyb3cpID0+IE9iamVjdC52YWx1ZXMocm93KSlcclxuICAgICAgLmZpbHRlcigob3B0aW9ucykgPT4gb3B0aW9ucyAhPT0gdHJ1ZSAmJiBvcHRpb25zICE9PSBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgbWF0Y2hlcyA9IHJvd0RhdGEubWFwKChyb3cpID0+XHJcbiAgICAgIHJvdy5tYXAoKG9wdGlvbikgPT4gY29uc29sZS5sb2cob3B0aW9uKSlcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhtYXRjaGVzKTtcclxuICAgIC8vIG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbC50b0xvd2VyQ2FzZSgpKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZWFyY2hIYW5kbGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaW5wdXRIYW5kbGVyKGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5OYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UYWc8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPkNhdGVnb3J5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QcmljZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+T3duZXI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPkltYWdlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LnRhZ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5jYXRlZ29yeX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5wcmljZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5vd25lcn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5pbWFnZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==