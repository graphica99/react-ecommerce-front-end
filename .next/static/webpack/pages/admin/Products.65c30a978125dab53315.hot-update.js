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
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_15__);



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
    0: uImage,
    1: setUImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: uImages,
    1: setUImages
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
      setUImage(e.target.files[0]);

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

        var arr = [];

        for (var j = 0; j < e.target.files.length; j++) {
          arr.push(e.target.files[j]); // setUImages((oldArr) => [...oldArr, e.target.files[j]]);
        }

        setUImages(arr);
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

  const onSubmitHandler = () => {
    let data = new form_data__WEBPACK_IMPORTED_MODULE_15___default.a();
    data.append("name", "productInput");
    data.append("category", "categoryInput");
    data.append("tag", "tagInput");
    data.append("image", uImage); // data.append("image", uImages);

    console.log(uImages); // // formData.append('postedBy', postData.content);
    // // formData.append('rating', postData.content);
    // // formData.append('price', postData.content);
    // // formData.append('quantity', postData.content);
    // console.log(JSON.stringify(data));

    axios__WEBPACK_IMPORTED_MODULE_14___default.a.post("http://localhost:1000/api/product/add-product", data, {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
        accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    }).then(success => {
      console.log(success);
    }).catch(e => {
      console.log(e);
    });
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
        lineNumber: 225,
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
        lineNumber: 226,
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
        lineNumber: 237,
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
        lineNumber: 250,
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
          lineNumber: 276,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
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
          lineNumber: 292,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
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
        lineNumber: 295,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "icon-button-photo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "body2",
          children: "*Upload a picture(s) of the product. Max: 3 picture*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "primary",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
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
            lineNumber: 320,
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
              lineNumber: 339,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
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
            lineNumber: 349,
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
              lineNumber: 377,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 21
          }, this)]
        }, void 0, true)) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      className: classes.button,
      onClick: onSubmitHandler,
      disableRipple: true // disabled={!validateInputs()}
      ,
      children: "Upload Product"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 5
  }, this);
}

_s(Content, "bIr5fFZBH5tzg7Z9r/YlIOCZqrI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImNvbnRlbnRXcmFwcGVyIiwicm9vdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibGFyZ2UiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJwYWRkaW5nIiwiQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdlIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsInVJbWFnZSIsInNldFVJbWFnZSIsInVJbWFnZXMiLCJzZXRVSW1hZ2VzIiwic3Bpbm5lciIsInNldFNwaW5uZXIiLCJwcm9kdWN0SW5wdXQiLCJzZXRQcm9kdWN0SW5wdXQiLCJwcmljZUlucHV0Iiwic2V0UHJpY2VJbnB1dCIsInF1YW50aXR5SW5wdXQiLCJzZXRRdWFudGl0eUlucHV0IiwiY2F0ZWdvcnlJbnB1dCIsInNldENhdGVnb3J5SW5wdXQiLCJ0YWdJbnB1dCIsInNldFRhZ0lucHV0IiwidGFnIiwic2V0VGFnIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJpbWFnZUxpbWl0Iiwic2V0SW1hZ2VMaW1pdCIsImVycm9yIiwic2V0RXJyb3IiLCJtc2ciLCJpbnB1dFR5cGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwic3VjY2VzcyIsImRhdGEiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJoYW5kbGVDYXB0dXJlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIm9ubG9hZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpIiwiZmlsZVJlYWRlcnMiLCJvbGRBcnIiLCJhcnIiLCJqIiwicHVzaCIsImhhbmRsZUlucHV0cyIsInR5cGUiLCJsZXR0ZXJzIiwidmFsdWUiLCJtYXRjaCIsIm51bWJlcnMiLCJ2YWxpZGF0ZUlucHV0cyIsIm9uU3VibWl0SGFuZGxlciIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsImFjY2VwdCIsIm5hdGl2ZSIsIm1hcCIsInRhZ3MiLCJjYXRlZ29yeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luTGVmdCIsInpJbmRleCIsInBhZGRpbmdUb3AiLCJjdXJzb3IiLCJwcmV2aWV3SW1hZ2VzIiwiZGVsUmVzdWx0IiwiZmlsdGVyIiwiaW1nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUUsR0FETDtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMQyxZQUFRLEVBQUU7QUFITCxHQURrQjtBQU16QkMsV0FBUyxFQUFFO0FBQ1RDLGdCQUFZLEVBQUU7QUFETCxHQU5jO0FBU3pCQyxhQUFXLEVBQUU7QUFDWEMsWUFBUSxFQUFFUixLQUFLLENBQUNTLFVBQU4sQ0FBaUJEO0FBRGhCLEdBVFk7QUFZekJFLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFESixHQVprQjtBQWV6QkMsU0FBTyxF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RUFBRSxNQUpUO0FBS0xpRixtQkFBSyxFQUFFLE9BTEY7QUFNTEMsdUJBQVMsRUFBRSxRQU5OO0FBT0xDLHdCQUFVLEVBQUUsT0FQUDtBQVFMQyxvQkFBTSxFQUFFLEdBUkg7QUFTTEMsd0JBQVUsRUFBRSxPQVRQO0FBVUxDLG9CQUFNLEVBQUU7QUFWSCxhQVZUO0FBQUEsbUNBdUJFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBLHdCQUZGLENBREcsR0E4Q0gsRUExRU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0ZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBNEtFLHFFQUFDLGlFQUFEO0FBQ0UsYUFBTyxFQUFDLFdBRFY7QUFFRSxXQUFLLEVBQUMsU0FGUjtBQUdFLGVBQVMsRUFBRWpGLE9BQU8sQ0FBQ0osTUFIckI7QUFJRSxhQUFPLEVBQUVzRSxlQUpYO0FBS0UsbUJBQWEsRUFBRSxJQUxqQixDQU1FO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5TEQ7O0dBaFdRcEUsTzs7S0FBQUEsTztBQWtXVEEsT0FBTyxDQUFDd0YsU0FBUixHQUFvQjtBQUNsQnRGLFNBQU8sRUFBRXVGLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBcEI7QUFJZUMsMElBQVUsQ0FBQ3JILE1BQUQsQ0FBVixDQUFtQnlCLE9BQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vUHJvZHVjdHMuNjVjMzBhOTc4MTI1ZGFiNTMzMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcclxuaW1wb3J0IEF2YXRhckdyb3VwIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F2YXRhckdyb3VwXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGb3JtRGF0YSBmcm9tIFwiZm9ybS1kYXRhXCI7XHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgbWF4V2lkdGg6IDkzNixcclxuICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIHNlYXJjaEJhcjoge1xyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgfSxcclxuICBzZWFyY2hJbnB1dDoge1xyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUsXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgYWRkVXNlcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBjb250ZW50V3JhcHBlcjoge1xyXG4gICAgbWFyZ2luOiBcIjQwcHggMTZweFwiLFxyXG4gIH0sXHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwKSxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMTVweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygyMCksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIixcclxuICAgIG1hcmdpbjogXCIxMHB4XCIsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmc6IFwiMTFweFwiLFxyXG4gIH0sXHJcbn0pO1xyXG5mdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VJbWFnZSwgc2V0VUltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1SW1hZ2VzLCBzZXRVSW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0U3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RJbnB1dCwgc2V0UHJvZHVjdElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZUlucHV0LCBzZXRQcmljZUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtxdWFudGl0eUlucHV0LCBzZXRRdWFudGl0eUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeUlucHV0LCBzZXRDYXRlZ29yeUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWdJbnB1dCwgc2V0VGFnSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlTGltaXQsIHNldEltYWdlTGltaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoeyBtc2c6IFwiXCIsIGlucHV0VHlwZTogXCJcIiB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2FsbC10YWdzXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE5ESTROakUzTVgwLkxqME1tajVnMnlFQVlxWVZPUXRWb01zemxXcy0xdjdFT19CS05ULVpna0lcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldFRhZyhzdWNjZXNzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvY2F0ZWdvcnkvYWxsLWNhdGVnb3J5XCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXB0dXJlID0gKGUpID0+IHtcclxuICAgIHNldFNwaW5uZXIodHJ1ZSk7XHJcbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgc2V0VUltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SW1hZ2VMaW1pdCh0cnVlKTtcclxuICAgICAgfTtcclxuICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgc2V0SW1hZ2VMaW1pdChmYWxzZSk7XHJcbiAgICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZmlsZVJlYWRlcnMgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgZmlsZVJlYWRlcnMub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0SW1hZ2VzKChvbGRBcnIpID0+IFsuLi5vbGRBcnIsIGUudGFyZ2V0LnJlc3VsdF0pO1xyXG4gICAgICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SW1hZ2VMaW1pdCh0cnVlKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBmaWxlUmVhZGVycy5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZS50YXJnZXQuZmlsZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGFyci5wdXNoKGUudGFyZ2V0LmZpbGVzW2pdKTtcclxuICAgICAgICAgIC8vIHNldFVJbWFnZXMoKG9sZEFycikgPT4gWy4uLm9sZEFyciwgZS50YXJnZXQuZmlsZXNbal1dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VUltYWdlcyhhcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVJbnB1dHMgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwicHJvZHVjdE5hbWVcIikge1xyXG4gICAgICB2YXIgbGV0dGVycyA9IC9eW0EtWmEtel0rJC87XHJcbiAgICAgIGlmICghZS50YXJnZXQudmFsdWUubWF0Y2gobGV0dGVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7XHJcbiAgICAgICAgICBtc2c6IFwiUHJvZHVjdCBwcmljZSBtdXN0IGJlIG9ubHkgYWxwaGFiZXRzXCIsXHJcbiAgICAgICAgICBpbnB1dFR5cGU6IFwicHJvZHVjdE5hbWVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZS5tYXRjaChsZXR0ZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHt9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRQcm9kdWN0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInByaWNlVmFsdWVcIikge1xyXG4gICAgICB2YXIgbnVtYmVycyA9IC9eWzAtOV0rJC87XHJcbiAgICAgIGlmICghZS50YXJnZXQudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7XHJcbiAgICAgICAgICBtc2c6IFwiUHJvZHVjdCBwcmljZSBtdXN0IGJlIG9ubHkgbnVtYmVyc1wiLFxyXG4gICAgICAgICAgaW5wdXRUeXBlOiBcInByaWNlVmFsdWVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHt9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRQcmljZUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIpIHtcclxuICAgICAgdmFyIG51bWJlcnMgPSAvXlswLTldKyQvO1xyXG4gICAgICBpZiAoIWUudGFyZ2V0LnZhbHVlLm1hdGNoKG51bWJlcnMpKSB7XHJcbiAgICAgICAgc2V0RXJyb3Ioe1xyXG4gICAgICAgICAgbXNnOiBcIlByb2R1Y3QgcXVhbnRpdHkgbXVzdCBiZSBvbmx5IG51bWJlcnNcIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJxdWFudGl0eVZhbHVlXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7fSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0UXVhbnRpdHlJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidGFnc1ZhbHVlXCIpIHtcclxuICAgICAgc2V0VGFnSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNhdFZhbHVlXCIpIHtcclxuICAgICAgc2V0Q2F0ZWdvcnlJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCB2YWxpZGF0ZUlucHV0cyA9ICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgcHJvZHVjdElucHV0ICYmXHJcbiAgICAgIHByaWNlSW5wdXQgJiZcclxuICAgICAgcXVhbnRpdHlJbnB1dCAmJlxyXG4gICAgICBjYXRlZ29yeUlucHV0ICYmXHJcbiAgICAgIHRhZ0lucHV0ICYmXHJcbiAgICAgIGltYWdlTGltaXRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBkYXRhLmFwcGVuZChcIm5hbWVcIiwgXCJwcm9kdWN0SW5wdXRcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcImNhdGVnb3J5XCIsIFwiY2F0ZWdvcnlJbnB1dFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwidGFnXCIsIFwidGFnSW5wdXRcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcImltYWdlXCIsIHVJbWFnZSk7XHJcbiAgICAvLyBkYXRhLmFwcGVuZChcImltYWdlXCIsIHVJbWFnZXMpO1xyXG4gICAgY29uc29sZS5sb2codUltYWdlcyk7XHJcbiAgICAvLyAvLyBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RlZEJ5JywgcG9zdERhdGEuY29udGVudCk7XHJcbiAgICAvLyAvLyBmb3JtRGF0YS5hcHBlbmQoJ3JhdGluZycsIHBvc3REYXRhLmNvbnRlbnQpO1xyXG4gICAgLy8gLy8gZm9ybURhdGEuYXBwZW5kKCdwcmljZScsIHBvc3REYXRhLmNvbnRlbnQpO1xyXG4gICAgLy8gLy8gZm9ybURhdGEuYXBwZW5kKCdxdWFudGl0eScsIHBvc3REYXRhLmNvbnRlbnQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS9wcm9kdWN0L2FkZC1wcm9kdWN0XCIsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE5ESTROakUzTVgwLkxqME1tajVnMnlFQVlxWVZPUXRWb01zemxXcy0xdjdFT19CS05ULVpna0lcIixcclxuICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+QWRkIFByb2R1Y3Q8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCBwcm9kdWN0IG5hbWVcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHZhbHVlPXtwcm9kdWN0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInByb2R1Y3ROYW1lXCIpfVxyXG4gICAgICAgICAgZXJyb3I9e2Vycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicHJvZHVjdE5hbWVcIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICBlcnJvci5tc2cgJiYgZXJyb3IuaW5wdXRUeXBlID09PSBcInByb2R1Y3ROYW1lXCIgPyBlcnJvci5tc2cgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGEgcHJpY2VcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3ByaWNlSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInByaWNlVmFsdWVcIil9XHJcbiAgICAgICAgICBlcnJvcj17ZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJwcmljZVZhbHVlXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJwcmljZVZhbHVlXCIgPyBlcnJvci5tc2cgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCB0aGUgcXVhbnRpdHkgb2YgcHJvZHVjdFwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICB2YWx1ZT17cXVhbnRpdHlJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwicXVhbnRpdHlWYWx1ZVwiKX1cclxuICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICBlcnJvci5tc2cgJiYgZXJyb3IuaW5wdXRUeXBlID09PSBcInF1YW50aXR5VmFsdWVcIiA/IGVycm9yLm1zZyA6IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWN1cnJlbmN5LW5hdGl2ZVwiXHJcbiAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgIGhlbHBlclRleHQ9XCJBZGQgYSB0YWdcIlxyXG4gICAgICAgICAgU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmF0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwidGFnc1ZhbHVlXCIpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJ0YWdzVmFsdWVcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RhZy5tYXAoKHRhZ3MsIGkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGFncy50YWd9Pnt0YWdzLnRhZ308L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWN1cnJlbmN5LW5hdGl2ZVwiXHJcbiAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgIC8vIGxhYmVsPVwiQWRkIHRhZ1wiXHJcbiAgICAgICAgICBoZWxwZXJUZXh0PVwiQWRkIGEgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmF0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwiY2F0VmFsdWVcIil9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcImNhdFZhbHVlXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnkuY2F0ZWdvcnl9PntjYXRlZ29yeS5jYXRlZ29yeX08L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgaWQ9XCJpY29uLWJ1dHRvbi1waG90b1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2FwdHVyZX1cclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImljb24tYnV0dG9uLXBob3RvXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgKlVwbG9hZCBhIHBpY3R1cmUocykgb2YgdGhlIHByb2R1Y3QuIE1heDogMyBwaWN0dXJlKlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7c3Bpbm5lciA/IChcclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxBdmF0YXJHcm91cCBtYXg9ezN9PlxyXG4gICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtpbWFnZX0gc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlTGltaXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjE2MTYxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi00MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjQuOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2ltYWdlc1xyXG4gICAgICAgICAgICAgID8gaW1hZ2VzLm1hcCgocHJldmlld0ltYWdlcywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAvLyA8aW1nIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCIyMDBcIiBzcmM9e2ltYWdlc1tpXX0gLz5cclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlc1tpXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsUmVzdWx0ID0gaW1hZ2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nKSA9PiBpbWcgIT0gaW1hZ2VzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlcyhkZWxSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlTGltaXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM2MTYxNjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI0LjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbFJlc3VsdCA9IGltYWdlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGltZykgPT4gaW1nICE9IGltYWdlc1tpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXMoZGVsUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgPC9BdmF0YXJHcm91cD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgb25DbGljaz17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgLy8gZGlzYWJsZWQ9eyF2YWxpZGF0ZUlucHV0cygpfVxyXG4gICAgICA+XHJcbiAgICAgICAgVXBsb2FkIFByb2R1Y3RcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==