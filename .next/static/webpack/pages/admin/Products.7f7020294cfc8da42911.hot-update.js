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
    const rowData = rows.map(row => Object.values(row));
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
        lineNumber: 78,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
              lineNumber: 90,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Tag"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Price"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Owner"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: "Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: rows.map((row, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.tag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.category
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.owner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: row.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImNvbnRlbnRXcmFwcGVyIiwicm9vdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJ0YWciLCJjYXRlZ29yeSIsInByaWNlIiwib3duZXIiLCJpbWFnZSIsInNlYXJjaCIsIkNvbnRlbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJyb3dzIiwic2V0Um93cyIsInVzZVN0YXRlIiwic2V0U2VhcmNoSW5wdXQiLCJzZWFyY2hIYW5kbGVyIiwic2VhcmNoVmFsIiwicm93RGF0YSIsIm1hcCIsInJvdyIsIk9iamVjdCIsInZhbHVlcyIsImlucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlBhcGVyIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUUsR0FETDtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMQyxZQUFRLEVBQUU7QUFITCxHQURrQjtBQU16QkMsV0FBUyxFQUFFO0FBQ1RDLGdCQUFZLEVB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QUFBQTtBQUFBO0FBQUEsb0JBTkY7QUFBQSxhQUFlcUIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1Q0Q7O0dBbkVRbkIsTzs7S0FBQUEsTztBQXFFVEEsT0FBTyxDQUFDb0IsU0FBUixHQUFvQjtBQUNsQmxCLFNBQU8sRUFBRW1CLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBcEI7QUFJZUMsMElBQVUsQ0FBQ3BELE1BQUQsQ0FBVixDQUFtQjRCLE9BQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vUHJvZHVjdHMuN2Y3MDIwMjk0Y2ZjOGRhNDI5MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1heFdpZHRoOiA5MzYsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgfSxcclxuICBzZWFyY2hCYXI6IHtcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXQ6IHtcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIGFkZFVzZXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgY29udGVudFdyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogXCI0MHB4IDE2cHhcIixcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiNDBweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGNyZWF0ZURhdGEgPSAobmFtZSwgdGFnLCBjYXRlZ29yeSwgcHJpY2UsIG93bmVyLCBpbWFnZSwgc2VhcmNoKSA9PiB7XHJcbiAgcmV0dXJuIHsgbmFtZSwgdGFnLCBjYXRlZ29yeSwgcHJpY2UsIG93bmVyLCBpbWFnZSwgc2VhcmNoIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoW1xyXG4gICAgY3JlYXRlRGF0YShcIkJhZ1wiLCBcIkJhZ1wiLCBcIkZhc2hpb25cIiwgMjAuMCwgXCJNZW5kcyBBbGJlcnRcIiwgXCJpbWdcIiwgdHJ1ZSksXHJcbiAgICBjcmVhdGVEYXRhKFxyXG4gICAgICBcIlNob2VzXCIsXHJcbiAgICAgIFwiU2hvZXNcIixcclxuICAgICAgXCJGYXNoaW9uXCIsXHJcbiAgICAgIDIwLjAsXHJcbiAgICAgIFwiUHJpc2NpbGxhIE1lbmRzXCIsXHJcbiAgICAgIFwiaW1nXCIsXHJcbiAgICAgIHRydWVcclxuICAgICksXHJcbiAgICBjcmVhdGVEYXRhKFwiSm9sbG9mXCIsIFwiUmljZVwiLCBcIkZvb2RcIiwgMjAuMCwgXCJFbHZpcyBNZW5kc1wiLCBcImltZ1wiLCB0cnVlKSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChzZWFyY2hWYWwpID0+IHtcclxuICAgIGNvbnN0IHJvd0RhdGEgPSByb3dzLm1hcCgocm93KSA9PiBPYmplY3QudmFsdWVzKHJvdykpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlucHV0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZWFyY2hIYW5kbGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaW5wdXRIYW5kbGVyKGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5OYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UYWc8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPkNhdGVnb3J5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QcmljZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+T3duZXI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPkltYWdlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LnRhZ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5jYXRlZ29yeX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5wcmljZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5vd25lcn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5pbWFnZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==