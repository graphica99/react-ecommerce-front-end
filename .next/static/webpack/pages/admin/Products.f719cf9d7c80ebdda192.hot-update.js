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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_lab_AvatarGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/AvatarGroup */ "./node_modules/@material-ui/lab/esm/AvatarGroup/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);



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
      margin: theme.spacing(0),
      width: "100%",
      marginBottom: "15px"
    }
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: "30px",
    margin: "10px"
  },
  button: {
    width: "100%",
    padding: "11px"
  }
});

function Content(props) {
  _s();

  const {
    classes
  } = props;
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: spinner,
    1: setSpinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: productInput,
    1: setProductInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: priceInput,
    1: setPriceInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: quantityInput,
    1: setQuantityInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: categoryInput,
    1: setCategoryInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: tagInput,
    1: setTagInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: tag,
    1: setTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: imageLimit,
    1: setImageLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    msg: "",
    inputType: ""
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("http://localhost:1000/api/tag/all-tags", {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI"
      }
    }).then(success => {
      setTag(success.data);
    }).catch(e => {
      console.log(e.response.data.msg);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("http://localhost:1000/api/category/all-category", {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg"
      }
    }).then(success => {
      setCategories(success.data); // console.log(success);
    }).catch(e => {
      console.log(e.response.data.msg);
    });
  }, []);

  const handleCapture = e => {
    setSpinner(true);
    const fileReader = new FileReader();

    if (e.target.files.length === 1) {
      fileReader.onload = e => {
        setImage(e.target.result);
        setSpinner(false);
        setImageLimit(true);
      };

      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      if (e.target.files.length > 3) {
        setImageLimit(false);
        setSpinner(false);
      } else {
        for (var i = 0; i < e.target.files.length; i++) {
          const fileReaders = new FileReader();

          fileReaders.onload = e => {
            setImages(oldArr => [...oldArr, e.target.result]);
            setSpinner(false);
            setImageLimit(true);
          };

          fileReaders.readAsDataURL(e.target.files[i]);
        }
      }
    }
  };

  const handleInputs = (e, type) => {
    if (type === "productName") {
      var letters = /^[A-Za-z]+$/;

      if (!e.target.value.match(letters)) {
        setError({
          msg: "Product price must be only alphabets",
          inputType: "productName"
        });
      } else if (e.target.value.match(letters)) {
        setError({});
      }

      setProductInput(e.target.value);
    } else if (type === "priceValue") {
      var numbers = /^[0-9]+$/;

      if (!e.target.value.match(numbers)) {
        setError({
          msg: "Product price must be only numbers",
          inputType: "priceValue"
        });
      } else if (e.target.value.match(numbers)) {
        setError({});
      }

      setPriceInput(e.target.value);
    } else if (type === "quantityValue") {
      var numbers = /^[0-9]+$/;

      if (!e.target.value.match(numbers)) {
        setError({
          msg: "Product quantity must be only numbers",
          inputType: "quantityValue"
        });
      } else if (e.target.value.match(numbers)) {
        setError({});
      }

      setQuantityInput(e.target.value);
    } else if (type === "tagsValue") {
      setTagInput(e.target.value);
    } else if (type === "catValue") {
      setCategoryInput(e.target.value);
    }
  };

  const validateInputs = () => {
    if (productInput && priceInput && quantityInput && categoryInput && tagInput && imageLimit) {
      return true;
    }

    return false;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: classes.root,
      noValidate: true,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h5",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-basic",
        label: "Add product name",
        variant: "outlined",
        value: productInput,
        onChange: e => handleInputs(e, "productName"),
        error: error.msg && error.inputType === "productName" ? true : false,
        helperText: error.msg && error.inputType === "productName" ? error.msg : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-basic",
        label: "Add a price",
        variant: "outlined",
        type: "number",
        value: priceInput,
        onChange: e => handleInputs(e, "priceValue"),
        error: error.msg && error.inputType === "priceValue" ? true : false,
        helperText: error.msg && error.inputType === "priceValue" ? error.msg : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-basic",
        label: "Add the quantity of product",
        variant: "outlined",
        type: "number",
        value: quantityInput,
        onChange: e => handleInputs(e, "quantityValue"),
        error: error.msg && error.inputType === "quantityValue" ? true : false,
        helperText: error.msg && error.inputType === "quantityValue" ? error.msg : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-select-currency-native",
        select: true,
        helperText: "Add a tag",
        SelectProps: {
          native: true
        },
        variant: "outlined",
        onFocus: e => handleInputs(e, "tagsValue"),
        onChange: e => handleInputs(e, "tagsValue"),
        children: tag.map((tags, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: tags.tag,
          children: tags.tag
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "outlined-select-currency-native",
        select: true // label="Add tag"
        ,
        helperText: "Add a category",
        SelectProps: {
          native: true
        },
        variant: "outlined",
        onFocus: e => handleInputs(e, "catValue"),
        onChange: e => handleInputs(e, "catValue"),
        children: categories.map((category, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: category.category,
          children: category.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        accept: "image/*",
        style: {
          display: "none"
        },
        id: "icon-button-photo",
        onChange: handleCapture,
        type: "file",
        multiple: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "icon-button-photo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "body2",
          children: "*Upload a picture(s) of the product. Max: 3 picture*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "primary",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 9
      }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_AvatarGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
        max: 3,
        children: [image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
            alt: image,
            src: image,
            className: classes.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onClick: () => {
              setImage("");
              setImageLimit(false);
            },
            style: {
              backgroundColor: "#616161",
              width: "30px",
              height: "30px",
              borderRadius: "100%",
              color: "white",
              textAlign: "center",
              marginLeft: "-40px",
              zIndex: "3",
              paddingTop: "4.8px",
              cursor: "pointer"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 17
          }, this)]
        }, void 0, true) : "", images ? images.map((previewImages, i) =>
        /*#__PURE__*/
        // <img width="50" height="200" src={images[i]} />
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
            alt: images[i],
            src: images[i],
            className: classes.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onClick: () => {
              const delResult = images.filter(img => img != images[i]);
              setImages(delResult);

              if (images.length === 1) {
                setImageLimit(false);
              }
            },
            style: {
              backgroundColor: "#616161",
              width: "34px",
              height: "34px",
              borderRadius: "100%",
              color: "white",
              textAlign: "center",
              marginLeft: "-40px",
              zIndex: "3",
              paddingTop: "4.8px",
              cursor: "pointer"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 21
          }, this)]
        }, void 0, true)) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      className: classes.button // onClick={isEditable ? onSubmitHandlerEdit : onSubmitHandler}
      ,
      disableRipple: true,
      disabled: !validateInputs(),
      children: "Upload Product"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 5
  }, this);
}

_s(Content, "yK5Hm4Ui4IcnUtzEzLwZ1mkG/7I=");

_c = Content;
Content.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Content));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImNvbnRlbnRXcmFwcGVyIiwicm9vdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibGFyZ2UiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJwYWRkaW5nIiwiQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdlIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsInNwaW5uZXIiLCJzZXRTcGlubmVyIiwicHJvZHVjdElucHV0Iiwic2V0UHJvZHVjdElucHV0IiwicHJpY2VJbnB1dCIsInNldFByaWNlSW5wdXQiLCJxdWFudGl0eUlucHV0Iiwic2V0UXVhbnRpdHlJbnB1dCIsImNhdGVnb3J5SW5wdXQiLCJzZXRDYXRlZ29yeUlucHV0IiwidGFnSW5wdXQiLCJzZXRUYWdJbnB1dCIsInRhZyIsInNldFRhZyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiaW1hZ2VMaW1pdCIsInNldEltYWdlTGltaXQiLCJlcnJvciIsInNldEVycm9yIiwibXNnIiwiaW5wdXRUeXBlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwidGhlbiIsInN1Y2Nlc3MiLCJkYXRhIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiaGFuZGxlQ2FwdHVyZSIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiaSIsImZpbGVSZWFkZXJzIiwib2xkQXJyIiwiaGFuZGxlSW5wdXRzIiwidHlwZSIsImxldHRlcnMiLCJ2YWx1ZSIsIm1hdGNoIiwibnVtYmVycyIsInZhbGlkYXRlSW5wdXRzIiwibmF0aXZlIiwibWFwIiwidGFncyIsImNhdGVnb3J5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0IiwiekluZGV4IiwicGFkZGluZ1RvcCIsImN1cnNvciIsInByZXZpZXdJbWFnZXMiLCJkZWxSZXN1bHQiLCJmaWx0ZXIiLCJpbWciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3pCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLEdBREw7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEMsWUFBUSxFQUFFO0FBSEwsR0FEa0I7QUFNekJDLFdBQVMsRUFBRTtBQUNUQyxnQkFBWSxFQUFFO0FBREwsR0FOYztBQVN6QkMsYUFBVyxFQUFFO0FBQ1hDLFlBQVEsRUFBRVIsS0FBSyxDQUFDUyxVQUFOLENBQWlCRDtBQURoQixHQVRZO0FBWXpCRSxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFO0FBREosR0Faa0I7QUFlekJDLFNBQU8sRUFBRTtBQUNQQyxlQUFXLEVBQUViLEtBQUssQ0FBQ2MsT0FBTixDQUFjLENBQWQ7QUFETixHQWZnQjtBQWtCekJDLGdCQUFjLEVBQUU7QUFDZFosVUFBTSxFQUFFO0FBRE0sR0FsQlM7QUFxQnpCYSxNQUFJLEVBQUU7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Q0UsYUFBTyxFQUFDLFdBRFY7QUFFRSxXQUFLLEVBQUMsU0FGUjtBQUdFLGVBQVMsRUFBRXJFLE9BQU8sQ0FBQ0osTUFIckIsQ0FJRTtBQUpGO0FBS0UsbUJBQWEsRUFBRSxJQUxqQjtBQU1FLGNBQVEsRUFBRSxDQUFDOEQsY0FBYyxFQU4zQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlMRDs7R0F6VFE1RCxPOztLQUFBQSxPO0FBMlRUQSxPQUFPLENBQUM0RSxTQUFSLEdBQW9CO0FBQ2xCMUUsU0FBTyxFQUFFMkUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEUixDQUFwQjtBQUllQywwSUFBVSxDQUFDekcsTUFBRCxDQUFWLENBQW1CeUIsT0FBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9Qcm9kdWN0cy5mNzE5Y2Y5ZDdjODBlYmRkYTE5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgQXZhdGFyR3JvdXAgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXZhdGFyR3JvdXBcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogOTM2LFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIHNlYXJjaElucHV0OiB7XHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSxcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBhZGRVc2VyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvbnRlbnRXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46IFwiNDBweCAxNnB4XCIsXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGFyZ2U6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDIwKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyMCksXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxyXG4gICAgbWFyZ2luOiBcIjEwcHhcIixcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcGFkZGluZzogXCIxMXB4XCIsXHJcbiAgfSxcclxufSk7XHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0U3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RJbnB1dCwgc2V0UHJvZHVjdElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZUlucHV0LCBzZXRQcmljZUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtxdWFudGl0eUlucHV0LCBzZXRRdWFudGl0eUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeUlucHV0LCBzZXRDYXRlZ29yeUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWdJbnB1dCwgc2V0VGFnSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlTGltaXQsIHNldEltYWdlTGltaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoeyBtc2c6IFwiXCIsIGlucHV0VHlwZTogXCJcIiB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2FsbC10YWdzXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE5ESTROakUzTVgwLkxqME1tajVnMnlFQVlxWVZPUXRWb01zemxXcy0xdjdFT19CS05ULVpna0lcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldFRhZyhzdWNjZXNzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvY2F0ZWdvcnkvYWxsLWNhdGVnb3J5XCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXB0dXJlID0gKGUpID0+IHtcclxuICAgIHNldFNwaW5uZXIodHJ1ZSk7XHJcbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SW1hZ2VMaW1pdCh0cnVlKTtcclxuICAgICAgfTtcclxuICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgc2V0SW1hZ2VMaW1pdChmYWxzZSk7XHJcbiAgICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZmlsZVJlYWRlcnMgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgZmlsZVJlYWRlcnMub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0SW1hZ2VzKChvbGRBcnIpID0+IFsuLi5vbGRBcnIsIGUudGFyZ2V0LnJlc3VsdF0pO1xyXG4gICAgICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SW1hZ2VMaW1pdCh0cnVlKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBmaWxlUmVhZGVycy5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0cyA9IChlLCB0eXBlKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJwcm9kdWN0TmFtZVwiKSB7XHJcbiAgICAgIHZhciBsZXR0ZXJzID0gL15bQS1aYS16XSskLztcclxuICAgICAgaWYgKCFlLnRhcmdldC52YWx1ZS5tYXRjaChsZXR0ZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHtcclxuICAgICAgICAgIG1zZzogXCJQcm9kdWN0IHByaWNlIG11c3QgYmUgb25seSBhbHBoYWJldHNcIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlLm1hdGNoKGxldHRlcnMpKSB7XHJcbiAgICAgICAgc2V0RXJyb3Ioe30pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFByb2R1Y3RJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicHJpY2VWYWx1ZVwiKSB7XHJcbiAgICAgIHZhciBudW1iZXJzID0gL15bMC05XSskLztcclxuICAgICAgaWYgKCFlLnRhcmdldC52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHtcclxuICAgICAgICAgIG1zZzogXCJQcm9kdWN0IHByaWNlIG11c3QgYmUgb25seSBudW1iZXJzXCIsXHJcbiAgICAgICAgICBpbnB1dFR5cGU6IFwicHJpY2VWYWx1ZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlLm1hdGNoKG51bWJlcnMpKSB7XHJcbiAgICAgICAgc2V0RXJyb3Ioe30pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFByaWNlSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInF1YW50aXR5VmFsdWVcIikge1xyXG4gICAgICB2YXIgbnVtYmVycyA9IC9eWzAtOV0rJC87XHJcbiAgICAgIGlmICghZS50YXJnZXQudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7XHJcbiAgICAgICAgICBtc2c6IFwiUHJvZHVjdCBxdWFudGl0eSBtdXN0IGJlIG9ubHkgbnVtYmVyc1wiLFxyXG4gICAgICAgICAgaW5wdXRUeXBlOiBcInF1YW50aXR5VmFsdWVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHt9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRRdWFudGl0eUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0YWdzVmFsdWVcIikge1xyXG4gICAgICBzZXRUYWdJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2F0VmFsdWVcIikge1xyXG4gICAgICBzZXRDYXRlZ29yeUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHZhbGlkYXRlSW5wdXRzID0gKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBwcm9kdWN0SW5wdXQgJiZcclxuICAgICAgcHJpY2VJbnB1dCAmJlxyXG4gICAgICBxdWFudGl0eUlucHV0ICYmXHJcbiAgICAgIGNhdGVnb3J5SW5wdXQgJiZcclxuICAgICAgdGFnSW5wdXQgJiZcclxuICAgICAgaW1hZ2VMaW1pdFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkFkZCBQcm9kdWN0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgcHJvZHVjdCBuYW1lXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICB2YWx1ZT17cHJvZHVjdElucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJwcm9kdWN0TmFtZVwiKX1cclxuICAgICAgICAgIGVycm9yPXtlcnJvci5tc2cgJiYgZXJyb3IuaW5wdXRUeXBlID09PSBcInByb2R1Y3ROYW1lXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJwcm9kdWN0TmFtZVwiID8gZXJyb3IubXNnIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCBhIHByaWNlXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHZhbHVlPXtwcmljZUlucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJwcmljZVZhbHVlXCIpfVxyXG4gICAgICAgICAgZXJyb3I9e2Vycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicHJpY2VWYWx1ZVwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgIGVycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicHJpY2VWYWx1ZVwiID8gZXJyb3IubXNnIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgdGhlIHF1YW50aXR5IG9mIHByb2R1Y3RcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInF1YW50aXR5VmFsdWVcIil9XHJcbiAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgIGVycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicXVhbnRpdHlWYWx1ZVwiID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIgPyBlcnJvci5tc2cgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1jdXJyZW5jeS1uYXRpdmVcIlxyXG4gICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PVwiQWRkIGEgdGFnXCJcclxuICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgb25Gb2N1cz17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInRhZ3NWYWx1ZVwiKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwidGFnc1ZhbHVlXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0YWcubWFwKCh0YWdzLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RhZ3MudGFnfT57dGFncy50YWd9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1jdXJyZW5jeS1uYXRpdmVcIlxyXG4gICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAvLyBsYWJlbD1cIkFkZCB0YWdcIlxyXG4gICAgICAgICAgaGVscGVyVGV4dD1cIkFkZCBhIGNhdGVnb3J5XCJcclxuICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgb25Gb2N1cz17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcImNhdFZhbHVlXCIpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJjYXRWYWx1ZVwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NhdGVnb3J5LmNhdGVnb3J5fT57Y2F0ZWdvcnkuY2F0ZWdvcnl9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgIGlkPVwiaWNvbi1idXR0b24tcGhvdG9cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhcHR1cmV9XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpY29uLWJ1dHRvbi1waG90b1wiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICpVcGxvYWQgYSBwaWN0dXJlKHMpIG9mIHRoZSBwcm9kdWN0LiBNYXg6IDMgcGljdHVyZSpcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge3NwaW5uZXIgPyAoXHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QXZhdGFyR3JvdXAgbWF4PXszfT5cclxuICAgICAgICAgICAge2ltYWdlID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17aW1hZ2V9IHNyYz17aW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZUxpbWl0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzYxNjE2MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI0LjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtpbWFnZXNcclxuICAgICAgICAgICAgICA/IGltYWdlcy5tYXAoKHByZXZpZXdJbWFnZXMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgLy8gPGltZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiMjAwXCIgc3JjPXtpbWFnZXNbaV19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZXNbaV19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpXX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbFJlc3VsdCA9IGltYWdlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGltZykgPT4gaW1nICE9IGltYWdlc1tpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXMoZGVsUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZUxpbWl0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjE2MTYxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi00MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiNC44cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxSZXN1bHQgPSBpbWFnZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpbWcpID0+IGltZyAhPSBpbWFnZXNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VzKGRlbFJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIGRlbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvQXZhdGFyR3JvdXA+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIC8vIG9uQ2xpY2s9e2lzRWRpdGFibGUgPyBvblN1Ym1pdEhhbmRsZXJFZGl0IDogb25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgZGlzYWJsZWQ9eyF2YWxpZGF0ZUlucHV0cygpfVxyXG4gICAgICA+XHJcbiAgICAgICAgVXBsb2FkIFByb2R1Y3RcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==