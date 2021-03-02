webpackHotUpdate_N_E("pages/admin/Products",{

/***/ "./pages/admin/Components/ProductContent/ProductContent.js":
/*!*****************************************************************!*\
  !*** ./pages/admin/Components/ProductContent/ProductContent.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_lab_AvatarGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/AvatarGroup */ "./node_modules/@material-ui/lab/esm/AvatarGroup/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");




var _jsxFileName = "D:\\WEB PROJECTS\\SHOPNOW-FRONTEND\\my-app\\pages\\admin\\Components\\ProductContent\\ProductContent.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: uImage,
    1: setUImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: uImages,
    1: setUImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: spinner,
    1: setSpinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: productInput,
    1: setProductInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: priceInput,
    1: setPriceInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: quantityInput,
    1: setQuantityInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: categoryInput,
    1: setCategoryInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: tagInput,
    1: setTagInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: tag,
    1: setTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: categories,
    1: setCategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: imageLimit,
    1: setImageLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    msg: "",
    inputType: ""
  });
  const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(10); // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  //fetching all tags for the tag select option

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("http://localhost:1000/api/tag/all-tags", {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI"
      }
    }).then(success => {
      setTag(success.data);
    }).catch(e => {
      console.log(e.response.data.msg);
    });
  }, []); //fetching all categories for the category select option

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("http://localhost:1000/api/category/all-category", {
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
      //Display image in the UI if it less than 3
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
          arr.push(e.target.files[j]);
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

  function CircularProgressWithLabel(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "relative",
      display: "inline-flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], _objectSpread({
        variant: "determinate"
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["default"], {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "caption",
          component: "div",
          color: "textSecondary",
          children: `${Math.round(props.value)}%`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this);
  }

  const onSubmitHandler = () => {
    let data = new form_data__WEBPACK_IMPORTED_MODULE_16___default.a();
    data.append("name", "productInput");
    data.append("category", "categoryInput");
    data.append("tag", "tagInput");
    data.append("image", uImage);

    for (var x = 0; x < uImages.length; x++) {
      data.append("image", uImages[x]);
    }

    axios__WEBPACK_IMPORTED_MODULE_15___default.a.post("http://localhost:1000/api/product/add-product", data, {
      headers: {
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
        accept: "application/json",
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: data => {
        setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + 10);
      }
    }).then(success => {
      console.log(success);
    }).catch(e => {
      console.log(e);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      className: classes.root,
      noValidate: true,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h5",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "outlined-basic",
        label: "Add product name",
        variant: "outlined",
        value: productInput,
        onChange: e => handleInputs(e, "productName"),
        error: error.msg && error.inputType === "productName" ? true : false,
        helperText: error.msg && error.inputType === "productName" ? error.msg : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 281,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 294,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "outlined-select-currency-native",
        select: true,
        helperText: "Add a tag",
        SelectProps: {
          native: true
        },
        variant: "outlined",
        onFocus: e => handleInputs(e, "tagsValue"),
        onChange: e => handleInputs(e, "tagsValue"),
        children: tag.map((tags, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: tags.tag,
          children: tags.tag
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        children: categories.map((category, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: category.category,
          children: category.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
        lineNumber: 339,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "icon-button-photo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "body2",
          children: "*Upload a picture(s) of the product. Max: 3 picture*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 9
      }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_AvatarGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
        max: 3,
        children: [image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
            alt: image,
            src: image,
            className: classes.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 17
          }, this)]
        }, void 0, true) : "", images ? images.map((previewImages, i) =>
        /*#__PURE__*/
        // <img width="50" height="200" src={images[i]} />
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
            alt: images[i],
            src: images[i],
            className: classes.large
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 398,
            columnNumber: 21
          }, this)]
        }, void 0, true)) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "contained",
      color: "primary",
      className: classes.button,
      onClick: onSubmitHandler,
      disableRipple: true // disabled={!validateInputs()}
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CircularProgressWithLabel, {
        value: progress
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 9
      }, this), " Upload Product"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 267,
    columnNumber: 5
  }, this);
}

_s(Content, "LhHK8zrA0W4/DNRjST3SM4nQVg0=");

_c = Content;
Content.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImNvbnRlbnRXcmFwcGVyIiwicm9vdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibGFyZ2UiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJwYWRkaW5nIiwiQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdlIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsInVJbWFnZSIsInNldFVJbWFnZSIsInVJbWFnZXMiLCJzZXRVSW1hZ2VzIiwic3Bpbm5lciIsInNldFNwaW5uZXIiLCJwcm9kdWN0SW5wdXQiLCJzZXRQcm9kdWN0SW5wdXQiLCJwcmljZUlucHV0Iiwic2V0UHJpY2VJbnB1dCIsInF1YW50aXR5SW5wdXQiLCJzZXRRdWFudGl0eUlucHV0IiwiY2F0ZWdvcnlJbnB1dCIsInNldENhdGVnb3J5SW5wdXQiLCJ0YWdJbnB1dCIsInNldFRhZ0lucHV0IiwidGFnIiwic2V0VGFnIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJpbWFnZUxpbWl0Iiwic2V0SW1hZ2VMaW1pdCIsImVycm9yIiwic2V0RXJyb3IiLCJtc2ciLCJpbnB1dFR5cGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwic3VjY2VzcyIsImRhdGEiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJoYW5kbGVDYXB0dXJlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIm9ubG9hZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpIiwiZmlsZVJlYWRlcnMiLCJvbGRBcnIiLCJhcnIiLCJqIiwicHVzaCIsImhhbmRsZUlucHV0cyIsInR5cGUiLCJsZXR0ZXJzIiwidmFsdWUiLCJtYXRjaCIsIm51bWJlcnMiLCJ2YWxpZGF0ZUlucHV0cyIsIkNpcmN1bGFyUHJvZ3Jlc3NXaXRoTGFiZWwiLCJNYXRoIiwicm91bmQiLCJvblN1Ym1pdEhhbmRsZXIiLCJGb3JtRGF0YSIsImFwcGVuZCIsIngiLCJwb3N0IiwiYWNjZXB0Iiwib25VcGxvYWRQcm9ncmVzcyIsInByZXZQcm9ncmVzcyIsIm5hdGl2ZSIsIm1hcCIsInRhZ3MiLCJjYXRlZ29yeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luTGVmdCIsInpJbmRleCIsInBhZGRpbmdUb3AiLCJjdXJzb3IiLCJwcmV2aWV3SW1hZ2VzIiwiZGVsUmVzdWx0IiwiZmlsdGVyIiwiaW1nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUUsR0FETDtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMQyxZQUFRLEVBQUU7QUFITCxHQURrQjtBQU16QkMsV0FBUyxFQUFFO0FBQ1RDLGdCQUFZLEVBQUU7QUFETCxHQU5j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QUFEUixDQUFwQjtBQUllQywwSUFBVSxDQUFDOUgsTUFBRCxDQUFWLENBQW1CeUIsT0FBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9Qcm9kdWN0cy43N2EzZmNjYTgyMGMwMGU3MjA5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQgQXZhdGFyR3JvdXAgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXZhdGFyR3JvdXBcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEZvcm1EYXRhIGZyb20gXCJmb3JtLWRhdGFcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCI7XHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgbWF4V2lkdGg6IDkzNixcclxuICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICB9LFxyXG4gIHNlYXJjaEJhcjoge1xyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgfSxcclxuICBzZWFyY2hJbnB1dDoge1xyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUsXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgYWRkVXNlcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBjb250ZW50V3JhcHBlcjoge1xyXG4gICAgbWFyZ2luOiBcIjQwcHggMTZweFwiLFxyXG4gIH0sXHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwKSxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMTVweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxhcmdlOiB7XHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygyMCksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMjApLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIixcclxuICAgIG1hcmdpbjogXCIxMHB4XCIsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmc6IFwiMTFweFwiLFxyXG4gIH0sXHJcbn0pO1xyXG5mdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VJbWFnZSwgc2V0VUltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1SW1hZ2VzLCBzZXRVSW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0U3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RJbnB1dCwgc2V0UHJvZHVjdElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZUlucHV0LCBzZXRQcmljZUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtxdWFudGl0eUlucHV0LCBzZXRRdWFudGl0eUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeUlucHV0LCBzZXRDYXRlZ29yeUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0YWdJbnB1dCwgc2V0VGFnSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlTGltaXQsIHNldEltYWdlTGltaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoeyBtc2c6IFwiXCIsIGlucHV0VHlwZTogXCJcIiB9KTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIC8vICAgICBzZXRQcm9ncmVzcygocHJldlByb2dyZXNzKSA9PiAocHJldlByb2dyZXNzID49IDEwMCA/IDAgOiBwcmV2UHJvZ3Jlc3MgKyAxMCkpO1xyXG4gIC8vICAgfSwgODAwKTtcclxuICAvLyAgIHJldHVybiAoKSA9PiB7XHJcbiAgLy8gICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIC8vICAgfTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIC8vZmV0Y2hpbmcgYWxsIHRhZ3MgZm9yIHRoZSB0YWcgc2VsZWN0IG9wdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS90YWcvYWxsLXRhZ3NcIiwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6XHJcbiAgICAgICAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5SWpwN0ltbGtJam9pTldabE56QmpNalJpTldVeFlqZ3lPR000WW1Ga1lqQTVJbjBzSW1saGRDSTZNVFl4TkRJNE5qRTNNWDAuTGowTW1qNWcyeUVBWXFZVk9RdFZvTXN6bFdzLTF2N0VPX0JLTlQtWmdrSVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0VGFnKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vZmV0Y2hpbmcgYWxsIGNhdGVnb3JpZXMgZm9yIHRoZSBjYXRlZ29yeSBzZWxlY3Qgb3B0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL2NhdGVnb3J5L2FsbC1jYXRlZ29yeVwiLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhNelV3TXpZNE9Td2laWGh3SWpveE5qRXpPRFl6TmpnNWZRLnM2TUJEdHlPVFhJbFAxRmVmVHQyYkMwcXlqVzZldHNkY29UeXp0cE5CSmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FwdHVyZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTcGlubmVyKHRydWUpO1xyXG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgLy9EaXNwbGF5aW5nIGltYWdlIGluIHRoZSBVSSBpZiBpdCBpcyBvbmVcclxuICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgc2V0VUltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgICAgc2V0SW1hZ2VMaW1pdCh0cnVlKTtcclxuICAgICAgfTtcclxuICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vRGlzcGxheSBpbWFnZSBpbiB0aGUgVUkgaWYgaXQgbGVzcyB0aGFuIDNcclxuICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICBzZXRJbWFnZUxpbWl0KGZhbHNlKTtcclxuICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlUmVhZGVycyA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICBmaWxlUmVhZGVycy5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbWFnZXMoKG9sZEFycikgPT4gWy4uLm9sZEFyciwgZS50YXJnZXQucmVzdWx0XSk7XHJcbiAgICAgICAgICAgIHNldFNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJbWFnZUxpbWl0KHRydWUpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGZpbGVSZWFkZXJzLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgYXJyLnB1c2goZS50YXJnZXQuZmlsZXNbal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRVSW1hZ2VzKGFycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dHMgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwicHJvZHVjdE5hbWVcIikge1xyXG4gICAgICB2YXIgbGV0dGVycyA9IC9eW0EtWmEtel0rJC87XHJcbiAgICAgIGlmICghZS50YXJnZXQudmFsdWUubWF0Y2gobGV0dGVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7XHJcbiAgICAgICAgICBtc2c6IFwiUHJvZHVjdCBwcmljZSBtdXN0IGJlIG9ubHkgYWxwaGFiZXRzXCIsXHJcbiAgICAgICAgICBpbnB1dFR5cGU6IFwicHJvZHVjdE5hbWVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZS5tYXRjaChsZXR0ZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHt9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRQcm9kdWN0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInByaWNlVmFsdWVcIikge1xyXG4gICAgICB2YXIgbnVtYmVycyA9IC9eWzAtOV0rJC87XHJcbiAgICAgIGlmICghZS50YXJnZXQudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7XHJcbiAgICAgICAgICBtc2c6IFwiUHJvZHVjdCBwcmljZSBtdXN0IGJlIG9ubHkgbnVtYmVyc1wiLFxyXG4gICAgICAgICAgaW5wdXRUeXBlOiBcInByaWNlVmFsdWVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHt9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRQcmljZUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIpIHtcclxuICAgICAgdmFyIG51bWJlcnMgPSAvXlswLTldKyQvO1xyXG4gICAgICBpZiAoIWUudGFyZ2V0LnZhbHVlLm1hdGNoKG51bWJlcnMpKSB7XHJcbiAgICAgICAgc2V0RXJyb3Ioe1xyXG4gICAgICAgICAgbXNnOiBcIlByb2R1Y3QgcXVhbnRpdHkgbXVzdCBiZSBvbmx5IG51bWJlcnNcIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJxdWFudGl0eVZhbHVlXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7fSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0UXVhbnRpdHlJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidGFnc1ZhbHVlXCIpIHtcclxuICAgICAgc2V0VGFnSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNhdFZhbHVlXCIpIHtcclxuICAgICAgc2V0Q2F0ZWdvcnlJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCB2YWxpZGF0ZUlucHV0cyA9ICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgcHJvZHVjdElucHV0ICYmXHJcbiAgICAgIHByaWNlSW5wdXQgJiZcclxuICAgICAgcXVhbnRpdHlJbnB1dCAmJlxyXG4gICAgICBjYXRlZ29yeUlucHV0ICYmXHJcbiAgICAgIHRhZ0lucHV0ICYmXHJcbiAgICAgIGltYWdlTGltaXRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBDaXJjdWxhclByb2dyZXNzV2l0aExhYmVsKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgdG9wPXswfVxyXG4gICAgICAgICAgbGVmdD17MH1cclxuICAgICAgICAgIGJvdHRvbT17MH1cclxuICAgICAgICAgIHJpZ2h0PXswfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+e2Ake01hdGgucm91bmQocHJvcHMudmFsdWUpfSVgfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGRhdGEuYXBwZW5kKFwibmFtZVwiLCBcInByb2R1Y3RJbnB1dFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiY2F0ZWdvcnlcIiwgXCJjYXRlZ29yeUlucHV0XCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJ0YWdcIiwgXCJ0YWdJbnB1dFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgdUltYWdlKTtcclxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdUltYWdlcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICBkYXRhLmFwcGVuZChcImltYWdlXCIsIHVJbWFnZXNbeF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDoxMDAwL2FwaS9wcm9kdWN0L2FkZC1wcm9kdWN0XCIsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE5ESTROakUzTVgwLkxqME1tajVnMnlFQVlxWVZPUXRWb01zemxXcy0xdjdFT19CS05ULVpna0lcIixcclxuICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJvZ3Jlc3MoKHByZXZQcm9ncmVzcykgPT5cclxuICAgICAgICAgICAgcHJldlByb2dyZXNzID49IDEwMCA/IDAgOiBwcmV2UHJvZ3Jlc3MgKyAxMFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+QWRkIFByb2R1Y3Q8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCBwcm9kdWN0IG5hbWVcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHZhbHVlPXtwcm9kdWN0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInByb2R1Y3ROYW1lXCIpfVxyXG4gICAgICAgICAgZXJyb3I9e2Vycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicHJvZHVjdE5hbWVcIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICBlcnJvci5tc2cgJiYgZXJyb3IuaW5wdXRUeXBlID09PSBcInByb2R1Y3ROYW1lXCIgPyBlcnJvci5tc2cgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGEgcHJpY2VcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3ByaWNlSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInByaWNlVmFsdWVcIil9XHJcbiAgICAgICAgICBlcnJvcj17ZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJwcmljZVZhbHVlXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJwcmljZVZhbHVlXCIgPyBlcnJvci5tc2cgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCB0aGUgcXVhbnRpdHkgb2YgcHJvZHVjdFwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICB2YWx1ZT17cXVhbnRpdHlJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwicXVhbnRpdHlWYWx1ZVwiKX1cclxuICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICBlcnJvci5tc2cgJiYgZXJyb3IuaW5wdXRUeXBlID09PSBcInF1YW50aXR5VmFsdWVcIiA/IGVycm9yLm1zZyA6IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWN1cnJlbmN5LW5hdGl2ZVwiXHJcbiAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgIGhlbHBlclRleHQ9XCJBZGQgYSB0YWdcIlxyXG4gICAgICAgICAgU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmF0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwidGFnc1ZhbHVlXCIpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJ0YWdzVmFsdWVcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RhZy5tYXAoKHRhZ3MsIGkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGFncy50YWd9Pnt0YWdzLnRhZ308L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWN1cnJlbmN5LW5hdGl2ZVwiXHJcbiAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgIC8vIGxhYmVsPVwiQWRkIHRhZ1wiXHJcbiAgICAgICAgICBoZWxwZXJUZXh0PVwiQWRkIGEgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmF0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwiY2F0VmFsdWVcIil9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcImNhdFZhbHVlXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnkuY2F0ZWdvcnl9PntjYXRlZ29yeS5jYXRlZ29yeX08L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgaWQ9XCJpY29uLWJ1dHRvbi1waG90b1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2FwdHVyZX1cclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImljb24tYnV0dG9uLXBob3RvXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgKlVwbG9hZCBhIHBpY3R1cmUocykgb2YgdGhlIHByb2R1Y3QuIE1heDogMyBwaWN0dXJlKlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7c3Bpbm5lciA/IChcclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxBdmF0YXJHcm91cCBtYXg9ezN9PlxyXG4gICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtpbWFnZX0gc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlTGltaXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjE2MTYxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi00MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjQuOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2ltYWdlc1xyXG4gICAgICAgICAgICAgID8gaW1hZ2VzLm1hcCgocHJldmlld0ltYWdlcywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAvLyA8aW1nIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCIyMDBcIiBzcmM9e2ltYWdlc1tpXX0gLz5cclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlc1tpXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsUmVzdWx0ID0gaW1hZ2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nKSA9PiBpbWcgIT0gaW1hZ2VzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlcyhkZWxSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlTGltaXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM2MTYxNjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI0LjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgPC9BdmF0YXJHcm91cD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgb25DbGljaz17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgLy8gZGlzYWJsZWQ9eyF2YWxpZGF0ZUlucHV0cygpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NXaXRoTGFiZWwgdmFsdWU9e3Byb2dyZXNzfSAvPiBVcGxvYWQgUHJvZHVjdFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENvbnRlbnQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9