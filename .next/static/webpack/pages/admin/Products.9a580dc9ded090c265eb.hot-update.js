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
    const fileReader = new FileReader(); //Displaying image in the UI if it is one

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
    data.append("image", uImage);

    for (var x = 0; x < uImages.length; x++) {
      data.append("image", uImages[x]);
    } // // formData.append('postedBy', postData.content);
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
        lineNumber: 228,
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
        lineNumber: 229,
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
        lineNumber: 240,
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
        lineNumber: 253,
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
          lineNumber: 279,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
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
          lineNumber: 295,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
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
        lineNumber: 298,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "icon-button-photo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "body2",
          children: "*Upload a picture(s) of the product. Max: 3 picture*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "primary",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 318,
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
            lineNumber: 323,
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
              lineNumber: 342,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
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
            lineNumber: 352,
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
              lineNumber: 380,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 21
          }, this)]
        }, void 0, true)) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
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
      lineNumber: 398,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 226,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImNvbnRlbnRXcmFwcGVyIiwicm9vdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibGFyZ2UiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJwYWRkaW5nIiwiQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdlIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsInVJbWFnZSIsInNldFVJbWFnZSIsInVJbWFnZXMiLCJzZXRVSW1hZ2VzIiwic3Bpbm5lciIsInNldFNwaW5uZXIiLCJwcm9kdWN0SW5wdXQiLCJzZXRQcm9kdWN0SW5wdXQiLCJwcmljZUlucHV0Iiwic2V0UHJpY2VJbnB1dCIsInF1YW50aXR5SW5wdXQiLCJzZXRRdWFudGl0eUlucHV0IiwiY2F0ZWdvcnlJbnB1dCIsInNldENhdGVnb3J5SW5wdXQiLCJ0YWdJbnB1dCIsInNldFRhZ0lucHV0IiwidGFnIiwic2V0VGFnIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJpbWFnZUxpbWl0Iiwic2V0SW1hZ2VMaW1pdCIsImVycm9yIiwic2V0RXJyb3IiLCJtc2ciLCJpbnB1dFR5cGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwic3VjY2VzcyIsImRhdGEiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJoYW5kbGVDYXB0dXJlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIm9ubG9hZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpIiwiZmlsZVJlYWRlcnMiLCJvbGRBcnIiLCJhcnIiLCJqIiwicHVzaCIsImhhbmRsZUlucHV0cyIsInR5cGUiLCJsZXR0ZXJzIiwidmFsdWUiLCJtYXRjaCIsIm51bWJlcnMiLCJ2YWxpZGF0ZUlucHV0cyIsIm9uU3VibWl0SGFuZGxlciIsIkZvcm1EYXRhIiwiYXBwZW5kIiwieCIsInBvc3QiLCJhY2NlcHQiLCJuYXRpdmUiLCJtYXAiLCJ0YWdzIiwiY2F0ZWdvcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJ6SW5kZXgiLCJwYWRkaW5nVG9wIiwiY3Vyc29yIiwicHJldmlld0ltYWdlcyIsImRlbFJlc3VsdCIsImZpbHRlciIsImltZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3pCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLEdBREw7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEMsWUFBUSxFQUFFO0FBSEwsR0FEa0I7QUFNekJDLFdBQVMsRUFBRTtBQUNUQyxnQkFBWSxFQUFFO0FBREwsR0FOYztBQVN6QkMsYUFBVyxFQUFFO0FBQ1hDLFlBQVEsRUFBRVIsS0FBSyxDQUFDUyxVQUFOLENBQWlCRDtBQURoQixHQVRZO0FBWXpCRSxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFO0FBREosR0Faa0I7QUFlekJDLFNB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dEIsNkJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDtBQUNGLGFBVEg7QUFVRSxpQkFBSyxFQUFFO0FBQ0xpRCw2QkFBZSxFQUFFLFNBRFo7QUFFTHJGLG1CQUFLLEVBQUUsTUFGRjtBQUdMRyxvQkFBTSxFQUFFLE1BSEg7QUFJTEMsMEJBQVksRUFBRSxNQUpUO0FBS0xrRixtQkFBSyxFQUFFLE9BTEY7QUFNTEMsdUJBQVMsRUFBRSxRQU5OO0FBT0xDLHdCQUFVLEVBQUUsT0FQUDtBQVFMQyxvQkFBTSxFQUFFLEdBUkg7QUFTTEMsd0JBQVUsRUFBRSxPQVRQO0FBVUxDLG9CQUFNLEVBQUU7QUFWSCxhQVZUO0FBQUEsbUNBdUJFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBLHdCQUZGLENBREcsR0E4Q0gsRUExRU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0ZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBNEtFLHFFQUFDLGlFQUFEO0FBQ0UsYUFBTyxFQUFDLFdBRFY7QUFFRSxXQUFLLEVBQUMsU0FGUjtBQUdFLGVBQVMsRUFBRWxGLE9BQU8sQ0FBQ0osTUFIckI7QUFJRSxhQUFPLEVBQUVzRSxlQUpYO0FBS0UsbUJBQWEsRUFBRSxJQUxqQixDQU1FO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5TEQ7O0dBbldRcEUsTzs7S0FBQUEsTztBQXFXVEEsT0FBTyxDQUFDeUYsU0FBUixHQUFvQjtBQUNsQnZGLFNBQU8sRUFBRXdGLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBcEI7QUFJZUMsMElBQVUsQ0FBQ3RILE1BQUQsQ0FBVixDQUFtQnlCLE9BQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vUHJvZHVjdHMuOWE1ODBkYzlkZWQwOTBjMjY1ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcclxuaW1wb3J0IEF2YXRhckdyb3VwIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F2YXRhckdyb3VwXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGb3JtRGF0YSBmcm9tIFwiZm9ybS1kYXRhXCI7XHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgbWF4V2lkdGg6IDkzNixcclxuICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIHNlYXJjaEJhcjoge1xyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgfSxcclxuICBzZWFyY2hJbnB1dDoge1xyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUsXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgYWRkVXNlcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBjb250ZW50V3JhcHBlcjoge1xyXG4gICAgbWFyZ2luOiBcIjQwcHggMTZweFwiLFxyXG4gIH0sXHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwKSxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMTVweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygyMCksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIixcclxuICAgIG1hcmdpbjogXCIxMHB4XCIsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmc6IFwiMTFweFwiLFxyXG4gIH0sXHJcbn0pO1xyXG5mdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VJbWFnZSwgc2V0VUltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1SW1hZ2VzLCBzZXRVSW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0U3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RJbnB1dCwgc2V0UHJvZHVjdElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZUlucHV0LCBzZXRQcmljZUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtxdWFudGl0eUlucHV0LCBzZXRRdWFudGl0eUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeUlucHV0LCBzZXRDYXRlZ29yeUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWdJbnB1dCwgc2V0VGFnSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlTGltaXQsIHNldEltYWdlTGltaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoeyBtc2c6IFwiXCIsIGlucHV0VHlwZTogXCJcIiB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdGFnL2FsbC10YWdzXCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE5ESTROakUzTVgwLkxqME1tajVnMnlFQVlxWVZPUXRWb01zemxXcy0xdjdFT19CS05ULVpna0lcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldFRhZyhzdWNjZXNzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvY2F0ZWdvcnkvYWxsLWNhdGVnb3J5XCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXB0dXJlID0gKGUpID0+IHtcclxuICAgIHNldFNwaW5uZXIodHJ1ZSk7XHJcbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAvL0Rpc3BsYXlpbmcgaW1hZ2UgaW4gdGhlIFVJIGlmIGl0IGlzIG9uZVxyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBzZXRVSW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2UoZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgICBzZXRJbWFnZUxpbWl0KHRydWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICBzZXRJbWFnZUxpbWl0KGZhbHNlKTtcclxuICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlUmVhZGVycyA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICBmaWxlUmVhZGVycy5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbWFnZXMoKG9sZEFycikgPT4gWy4uLm9sZEFyciwgZS50YXJnZXQucmVzdWx0XSk7XHJcbiAgICAgICAgICAgIHNldFNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJbWFnZUxpbWl0KHRydWUpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGZpbGVSZWFkZXJzLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgYXJyLnB1c2goZS50YXJnZXQuZmlsZXNbal0pO1xyXG4gICAgICAgICAgLy8gc2V0VUltYWdlcygob2xkQXJyKSA9PiBbLi4ub2xkQXJyLCBlLnRhcmdldC5maWxlc1tqXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRVSW1hZ2VzKGFycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0cyA9IChlLCB0eXBlKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJwcm9kdWN0TmFtZVwiKSB7XHJcbiAgICAgIHZhciBsZXR0ZXJzID0gL15bQS1aYS16XSskLztcclxuICAgICAgaWYgKCFlLnRhcmdldC52YWx1ZS5tYXRjaChsZXR0ZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHtcclxuICAgICAgICAgIG1zZzogXCJQcm9kdWN0IHByaWNlIG11c3QgYmUgb25seSBhbHBoYWJldHNcIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlLm1hdGNoKGxldHRlcnMpKSB7XHJcbiAgICAgICAgc2V0RXJyb3Ioe30pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFByb2R1Y3RJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicHJpY2VWYWx1ZVwiKSB7XHJcbiAgICAgIHZhciBudW1iZXJzID0gL15bMC05XSskLztcclxuICAgICAgaWYgKCFlLnRhcmdldC52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHtcclxuICAgICAgICAgIG1zZzogXCJQcm9kdWN0IHByaWNlIG11c3QgYmUgb25seSBudW1iZXJzXCIsXHJcbiAgICAgICAgICBpbnB1dFR5cGU6IFwicHJpY2VWYWx1ZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlLm1hdGNoKG51bWJlcnMpKSB7XHJcbiAgICAgICAgc2V0RXJyb3Ioe30pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFByaWNlSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInF1YW50aXR5VmFsdWVcIikge1xyXG4gICAgICB2YXIgbnVtYmVycyA9IC9eWzAtOV0rJC87XHJcbiAgICAgIGlmICghZS50YXJnZXQudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7XHJcbiAgICAgICAgICBtc2c6IFwiUHJvZHVjdCBxdWFudGl0eSBtdXN0IGJlIG9ubHkgbnVtYmVyc1wiLFxyXG4gICAgICAgICAgaW5wdXRUeXBlOiBcInF1YW50aXR5VmFsdWVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHt9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRRdWFudGl0eUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0YWdzVmFsdWVcIikge1xyXG4gICAgICBzZXRUYWdJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2F0VmFsdWVcIikge1xyXG4gICAgICBzZXRDYXRlZ29yeUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHZhbGlkYXRlSW5wdXRzID0gKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBwcm9kdWN0SW5wdXQgJiZcclxuICAgICAgcHJpY2VJbnB1dCAmJlxyXG4gICAgICBxdWFudGl0eUlucHV0ICYmXHJcbiAgICAgIGNhdGVnb3J5SW5wdXQgJiZcclxuICAgICAgdGFnSW5wdXQgJiZcclxuICAgICAgaW1hZ2VMaW1pdFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGRhdGEuYXBwZW5kKFwibmFtZVwiLCBcInByb2R1Y3RJbnB1dFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiY2F0ZWdvcnlcIiwgXCJjYXRlZ29yeUlucHV0XCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJ0YWdcIiwgXCJ0YWdJbnB1dFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgdUltYWdlKTtcclxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdUltYWdlcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICBkYXRhLmFwcGVuZChcImltYWdlXCIsIHVJbWFnZXNbeF0pO1xyXG4gICAgfVxyXG4gICAgLy8gLy8gZm9ybURhdGEuYXBwZW5kKCdwb3N0ZWRCeScsIHBvc3REYXRhLmNvbnRlbnQpO1xyXG4gICAgLy8gLy8gZm9ybURhdGEuYXBwZW5kKCdyYXRpbmcnLCBwb3N0RGF0YS5jb250ZW50KTtcclxuICAgIC8vIC8vIGZvcm1EYXRhLmFwcGVuZCgncHJpY2UnLCBwb3N0RGF0YS5jb250ZW50KTtcclxuICAgIC8vIC8vIGZvcm1EYXRhLmFwcGVuZCgncXVhbnRpdHknLCBwb3N0RGF0YS5jb250ZW50KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvcHJvZHVjdC9hZGQtcHJvZHVjdFwiLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhOREk0TmpFM01YMC5MajBNbWo1ZzJ5RUFZcVlWT1F0Vm9Nc3psV3MtMXY3RU9fQktOVC1aZ2tJXCIsXHJcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkFkZCBQcm9kdWN0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgcHJvZHVjdCBuYW1lXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICB2YWx1ZT17cHJvZHVjdElucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJwcm9kdWN0TmFtZVwiKX1cclxuICAgICAgICAgIGVycm9yPXtlcnJvci5tc2cgJiYgZXJyb3IuaW5wdXRUeXBlID09PSBcInByb2R1Y3ROYW1lXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJwcm9kdWN0TmFtZVwiID8gZXJyb3IubXNnIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCBhIHByaWNlXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHZhbHVlPXtwcmljZUlucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJwcmljZVZhbHVlXCIpfVxyXG4gICAgICAgICAgZXJyb3I9e2Vycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicHJpY2VWYWx1ZVwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgIGVycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicHJpY2VWYWx1ZVwiID8gZXJyb3IubXNnIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgbGFiZWw9XCJBZGQgdGhlIHF1YW50aXR5IG9mIHByb2R1Y3RcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInF1YW50aXR5VmFsdWVcIil9XHJcbiAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgIGVycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicXVhbnRpdHlWYWx1ZVwiID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIgPyBlcnJvci5tc2cgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1jdXJyZW5jeS1uYXRpdmVcIlxyXG4gICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PVwiQWRkIGEgdGFnXCJcclxuICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgb25Gb2N1cz17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInRhZ3NWYWx1ZVwiKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwidGFnc1ZhbHVlXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0YWcubWFwKCh0YWdzLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RhZ3MudGFnfT57dGFncy50YWd9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1jdXJyZW5jeS1uYXRpdmVcIlxyXG4gICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAvLyBsYWJlbD1cIkFkZCB0YWdcIlxyXG4gICAgICAgICAgaGVscGVyVGV4dD1cIkFkZCBhIGNhdGVnb3J5XCJcclxuICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgb25Gb2N1cz17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcImNhdFZhbHVlXCIpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJjYXRWYWx1ZVwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NhdGVnb3J5LmNhdGVnb3J5fT57Y2F0ZWdvcnkuY2F0ZWdvcnl9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgIGlkPVwiaWNvbi1idXR0b24tcGhvdG9cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhcHR1cmV9XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpY29uLWJ1dHRvbi1waG90b1wiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICpVcGxvYWQgYSBwaWN0dXJlKHMpIG9mIHRoZSBwcm9kdWN0LiBNYXg6IDMgcGljdHVyZSpcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge3NwaW5uZXIgPyAoXHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QXZhdGFyR3JvdXAgbWF4PXszfT5cclxuICAgICAgICAgICAge2ltYWdlID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17aW1hZ2V9IHNyYz17aW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZUxpbWl0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzYxNjE2MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI0LjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtpbWFnZXNcclxuICAgICAgICAgICAgICA/IGltYWdlcy5tYXAoKHByZXZpZXdJbWFnZXMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgLy8gPGltZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiMjAwXCIgc3JjPXtpbWFnZXNbaV19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZXNbaV19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tpXX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbFJlc3VsdCA9IGltYWdlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGltZykgPT4gaW1nICE9IGltYWdlc1tpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZXMoZGVsUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZUxpbWl0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjE2MTYxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi00MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiNC44cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxSZXN1bHQgPSBpbWFnZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpbWcpID0+IGltZyAhPSBpbWFnZXNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VzKGRlbFJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIGRlbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvQXZhdGFyR3JvdXA+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgIC8vIGRpc2FibGVkPXshdmFsaWRhdGVJbnB1dHMoKX1cclxuICAgICAgPlxyXG4gICAgICAgIFVwbG9hZCBQcm9kdWN0XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5Db250ZW50LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ29udGVudCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=