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
  const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(10);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false); //fetching all tags for the tag select option

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
        lineNumber: 203,
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
          lineNumber: 214,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }, this);
  }

  const onSubmitHandler = () => {
    setIsLoading(true);
    let data = new form_data__WEBPACK_IMPORTED_MODULE_16___default.a();
    data.append("name", productInput);
    data.append("category", categoryInput);
    data.append("tag", tagInput);
    data.append("price", priceInput);
    data.append("quantity", quantityInput);
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
        setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + Math.round(100 * data.loaded / data.total));
      }
    }).then(success => {
      console.log(success);
      setIsLoading(false);
      setProductInput("");
      setPriceInput("");
      setQuantityInput("");
      setCategoryInput("");
      setTagInput("");
      setUImages("");
      setUImage("");
      setImage("");
      setImages("");
    }).catch(e => {// console.log(e);
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
        lineNumber: 275,
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
        lineNumber: 276,
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
        lineNumber: 287,
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
        lineNumber: 300,
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
          lineNumber: 326,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
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
          lineNumber: 342,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 329,
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
        lineNumber: 345,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "icon-button-photo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "body2",
          children: "*Upload a picture(s) of the product. Max: 3 picture*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 9
      }, this), spinner ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 365,
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
            lineNumber: 370,
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
              lineNumber: 389,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
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
            lineNumber: 399,
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
              lineNumber: 427,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 21
          }, this)]
        }, void 0, true)) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "contained",
      color: "primary",
      className: classes.button,
      onClick: onSubmitHandler,
      disableRipple: true,
      disabled: !validateInputs(),
      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CircularProgressWithLabel, {
        value: progress
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 11
      }, this) : "Upload Product"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 273,
    columnNumber: 5
  }, this);
}

_s(Content, "wzvnWTY2iViaIYAoqAqQTM5PVeY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vQ29tcG9uZW50cy9Qcm9kdWN0Q29udGVudC9Qcm9kdWN0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInNlYXJjaEJhciIsImJvcmRlckJvdHRvbSIsInNlYXJjaElucHV0IiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiYmxvY2siLCJkaXNwbGF5IiwiYWRkVXNlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImNvbnRlbnRXcmFwcGVyIiwicm9vdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibGFyZ2UiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJwYWRkaW5nIiwiQ29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdlIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsInVJbWFnZSIsInNldFVJbWFnZSIsInVJbWFnZXMiLCJzZXRVSW1hZ2VzIiwic3Bpbm5lciIsInNldFNwaW5uZXIiLCJwcm9kdWN0SW5wdXQiLCJzZXRQcm9kdWN0SW5wdXQiLCJwcmljZUlucHV0Iiwic2V0UHJpY2VJbnB1dCIsInF1YW50aXR5SW5wdXQiLCJzZXRRdWFudGl0eUlucHV0IiwiY2F0ZWdvcnlJbnB1dCIsInNldENhdGVnb3J5SW5wdXQiLCJ0YWdJbnB1dCIsInNldFRhZ0lucHV0IiwidGFnIiwic2V0VGFnIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJpbWFnZUxpbWl0Iiwic2V0SW1hZ2VMaW1pdCIsImVycm9yIiwic2V0RXJyb3IiLCJtc2ciLCJpbnB1dFR5cGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiUmVhY3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwic3VjY2VzcyIsImRhdGEiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJoYW5kbGVDYXB0dXJlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIm9ubG9hZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpIiwiZmlsZVJlYWRlcnMiLCJvbGRBcnIiLCJhcnIiLCJqIiwicHVzaCIsImhhbmRsZUlucHV0cyIsInR5cGUiLCJsZXR0ZXJzIiwidmFsdWUiLCJtYXRjaCIsIm51bWJlcnMiLCJ2YWxpZGF0ZUlucHV0cyIsIkNpcmN1bGFyUHJvZ3Jlc3NXaXRoTGFiZWwiLCJNYXRoIiwicm91bmQiLCJvblN1Ym1pdEhhbmRsZXIiLCJGb3JtRGF0YSIsImFwcGVuZCIsIngiLCJwb3N0IiwiYWNjZXB0Iiwib25VcGxvYWRQcm9ncmVzcyIsInByZXZQcm9ncmVzcyIsImxvYWRlZCIsInRvdGFsIiwibmF0aXZlIiwibWFwIiwidGFncyIsImNhdGVnb3J5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0IiwiekluZGV4IiwicGFkZGluZ1RvcCIsImN1cnNvciIsInByZXZpZXdJbWFnZXMiLCJkZWxSZXN1bHQiLCJmaWx0ZXIiLCJpbWciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsS0FBWTtBQUN6QkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRSxHQURMO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xDLFlBQVEsRUFBRTtBQUhMLEdBRGtC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LCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBLHdCQUZGLENBREcsR0FvQ0gsRUFoRU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0ZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBa0tFLHFFQUFDLGlFQUFEO0FBQ0UsYUFBTyxFQUFDLFdBRFY7QUFFRSxXQUFLLEVBQUMsU0FGUjtBQUdFLGVBQVMsRUFBRTlGLE9BQU8sQ0FBQ0osTUFIckI7QUFJRSxhQUFPLEVBQUU4RSxlQUpYO0FBS0UsbUJBQWEsRUFBRSxJQUxqQjtBQU1FLGNBQVEsRUFBRSxDQUFDSixjQUFjLEVBTjNCO0FBQUEsZ0JBUUduQyxTQUFTLGdCQUNSLHFFQUFDLHlCQUFEO0FBQTJCLGFBQUssRUFBRUg7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURRLEdBR1I7QUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUxEOztHQTNZUWxDLE87O0tBQUFBLE87QUE2WVRBLE9BQU8sQ0FBQ3FHLFNBQVIsR0FBb0I7QUFDbEJuRyxTQUFPLEVBQUVvRyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVDLDBJQUFVLENBQUNsSSxNQUFELENBQVYsQ0FBbUJ5QixPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL1Byb2R1Y3RzLjMwMDYxZTZkNmZhMzI5YzJjYjk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmFcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCBBdmF0YXJHcm91cCBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdmF0YXJHcm91cFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRm9ybURhdGEgZnJvbSBcImZvcm0tZGF0YVwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXhXaWR0aDogOTM2LFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIHNlYXJjaElucHV0OiB7XHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSxcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBhZGRVc2VyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGNvbnRlbnRXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46IFwiNDBweCAxNnB4XCIsXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGFyZ2U6IHtcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDIwKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyMCksXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxyXG4gICAgbWFyZ2luOiBcIjEwcHhcIixcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcGFkZGluZzogXCIxMXB4XCIsXHJcbiAgfSxcclxufSk7XHJcbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdUltYWdlLCBzZXRVSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VJbWFnZXMsIHNldFVJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcGlubmVyLCBzZXRTcGlubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvZHVjdElucHV0LCBzZXRQcm9kdWN0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlSW5wdXQsIHNldFByaWNlSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3F1YW50aXR5SW5wdXQsIHNldFF1YW50aXR5SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NhdGVnb3J5SW5wdXQsIHNldENhdGVnb3J5SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RhZ0lucHV0LCBzZXRUYWdJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW1hZ2VMaW1pdCwgc2V0SW1hZ2VMaW1pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7IG1zZzogXCJcIiwgaW5wdXRUeXBlOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoMTApO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy9mZXRjaGluZyBhbGwgdGFncyBmb3IgdGhlIHRhZyBzZWxlY3Qgb3B0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjEwMDAvYXBpL3RhZy9hbGwtdGFnc1wiLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhOREk0TmpFM01YMC5MajBNbWo1ZzJ5RUFZcVlWT1F0Vm9Nc3psV3MtMXY3RU9fQktOVC1aZ2tJXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRUYWcoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9mZXRjaGluZyBhbGwgY2F0ZWdvcmllcyBmb3IgdGhlIGNhdGVnb3J5IHNlbGVjdCBvcHRpb25cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvY2F0ZWdvcnkvYWxsLWNhdGVnb3J5XCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIngtYXV0aC10b2tlblwiOlxyXG4gICAgICAgICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU5XWmxOekJqTWpSaU5XVXhZamd5T0dNNFltRmtZakE1SW4wc0ltbGhkQ0k2TVRZeE16VXdNelk0T1N3aVpYaHdJam94TmpFek9EWXpOamc1ZlEuczZNQkR0eU9UWElsUDFGZWZUdDJiQzBxeWpXNmV0c2Rjb1R5enRwTkJKZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXB0dXJlID0gKGUpID0+IHtcclxuICAgIHNldFNwaW5uZXIodHJ1ZSk7XHJcbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAvL0Rpc3BsYXlpbmcgaW1hZ2UgaW4gdGhlIFVJIGlmIGl0IGlzIG9uZVxyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBzZXRVSW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2UoZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICBzZXRTcGlubmVyKGZhbHNlKTtcclxuICAgICAgICBzZXRJbWFnZUxpbWl0KHRydWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9EaXNwbGF5IGltYWdlIGluIHRoZSBVSSBpZiBpdCBsZXNzIHRoYW4gM1xyXG4gICAgICBpZiAoZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMykge1xyXG4gICAgICAgIHNldEltYWdlTGltaXQoZmFsc2UpO1xyXG4gICAgICAgIHNldFNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGZpbGVSZWFkZXJzID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgIGZpbGVSZWFkZXJzLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEltYWdlcygob2xkQXJyKSA9PiBbLi4ub2xkQXJyLCBlLnRhcmdldC5yZXN1bHRdKTtcclxuICAgICAgICAgICAgc2V0U3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEltYWdlTGltaXQodHJ1ZSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgZmlsZVJlYWRlcnMucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBhcnIucHVzaChlLnRhcmdldC5maWxlc1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFVJbWFnZXMoYXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0cyA9IChlLCB0eXBlKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJwcm9kdWN0TmFtZVwiKSB7XHJcbiAgICAgIHZhciBsZXR0ZXJzID0gL15bQS1aYS16XSskLztcclxuICAgICAgaWYgKCFlLnRhcmdldC52YWx1ZS5tYXRjaChsZXR0ZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHtcclxuICAgICAgICAgIG1zZzogXCJQcm9kdWN0IHByaWNlIG11c3QgYmUgb25seSBhbHBoYWJldHNcIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJwcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlLm1hdGNoKGxldHRlcnMpKSB7XHJcbiAgICAgICAgc2V0RXJyb3Ioe30pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFByb2R1Y3RJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicHJpY2VWYWx1ZVwiKSB7XHJcbiAgICAgIHZhciBudW1iZXJzID0gL15bMC05XSskLztcclxuICAgICAgaWYgKCFlLnRhcmdldC52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHtcclxuICAgICAgICAgIG1zZzogXCJQcm9kdWN0IHByaWNlIG11c3QgYmUgb25seSBudW1iZXJzXCIsXHJcbiAgICAgICAgICBpbnB1dFR5cGU6IFwicHJpY2VWYWx1ZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlLm1hdGNoKG51bWJlcnMpKSB7XHJcbiAgICAgICAgc2V0RXJyb3Ioe30pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFByaWNlSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInF1YW50aXR5VmFsdWVcIikge1xyXG4gICAgICB2YXIgbnVtYmVycyA9IC9eWzAtOV0rJC87XHJcbiAgICAgIGlmICghZS50YXJnZXQudmFsdWUubWF0Y2gobnVtYmVycykpIHtcclxuICAgICAgICBzZXRFcnJvcih7XHJcbiAgICAgICAgICBtc2c6IFwiUHJvZHVjdCBxdWFudGl0eSBtdXN0IGJlIG9ubHkgbnVtYmVyc1wiLFxyXG4gICAgICAgICAgaW5wdXRUeXBlOiBcInF1YW50aXR5VmFsdWVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZS5tYXRjaChudW1iZXJzKSkge1xyXG4gICAgICAgIHNldEVycm9yKHt9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRRdWFudGl0eUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0YWdzVmFsdWVcIikge1xyXG4gICAgICBzZXRUYWdJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2F0VmFsdWVcIikge1xyXG4gICAgICBzZXRDYXRlZ29yeUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHZhbGlkYXRlSW5wdXRzID0gKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBwcm9kdWN0SW5wdXQgJiZcclxuICAgICAgcHJpY2VJbnB1dCAmJlxyXG4gICAgICBxdWFudGl0eUlucHV0ICYmXHJcbiAgICAgIGNhdGVnb3J5SW5wdXQgJiZcclxuICAgICAgdGFnSW5wdXQgJiZcclxuICAgICAgaW1hZ2VMaW1pdFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIENpcmN1bGFyUHJvZ3Jlc3NXaXRoTGFiZWwocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHZhcmlhbnQ9XCJkZXRlcm1pbmF0ZVwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICB0b3A9ezB9XHJcbiAgICAgICAgICBsZWZ0PXswfVxyXG4gICAgICAgICAgYm90dG9tPXswfVxyXG4gICAgICAgICAgcmlnaHQ9ezB9XHJcbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgID57YCR7TWF0aC5yb3VuZChwcm9wcy52YWx1ZSl9JWB9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJuYW1lXCIsIHByb2R1Y3RJbnB1dCk7XHJcbiAgICBkYXRhLmFwcGVuZChcImNhdGVnb3J5XCIsIGNhdGVnb3J5SW5wdXQpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJ0YWdcIiwgdGFnSW5wdXQpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJwcmljZVwiLCBwcmljZUlucHV0KTtcclxuICAgIGRhdGEuYXBwZW5kKFwicXVhbnRpdHlcIiwgcXVhbnRpdHlJbnB1dCk7XHJcbiAgICBkYXRhLmFwcGVuZChcImltYWdlXCIsIHVJbWFnZSk7XHJcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHVJbWFnZXMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgZGF0YS5hcHBlbmQoXCJpbWFnZVwiLCB1SW1hZ2VzW3hdKTtcclxuICAgIH1cclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvcHJvZHVjdC9hZGQtcHJvZHVjdFwiLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJ4LWF1dGgtdG9rZW5cIjpcclxuICAgICAgICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJanA3SW1sa0lqb2lOV1psTnpCak1qUmlOV1V4WWpneU9HTTRZbUZrWWpBNUluMHNJbWxoZENJNk1UWXhOREk0TmpFM01YMC5MajBNbWo1ZzJ5RUFZcVlWT1F0Vm9Nc3psV3MtMXY3RU9fQktOVC1aZ2tJXCIsXHJcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFByb2dyZXNzKChwcmV2UHJvZ3Jlc3MpID0+XHJcbiAgICAgICAgICAgIHByZXZQcm9ncmVzcyA+PSAxMDBcclxuICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICA6IHByZXZQcm9ncmVzcyArIE1hdGgucm91bmQoKDEwMCAqIGRhdGEubG9hZGVkKSAvIGRhdGEudG90YWwpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQcm9kdWN0SW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2V0UHJpY2VJbnB1dChcIlwiKTtcclxuICAgICAgICBzZXRRdWFudGl0eUlucHV0KFwiXCIpO1xyXG4gICAgICAgIHNldENhdGVnb3J5SW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2V0VGFnSW5wdXQoXCJcIik7XHJcbiAgICAgICAgc2V0VUltYWdlcyhcIlwiKTtcclxuICAgICAgICBzZXRVSW1hZ2UoXCJcIik7XHJcbiAgICAgICAgc2V0SW1hZ2UoXCJcIik7XHJcbiAgICAgICAgc2V0SW1hZ2VzKFwiXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+QWRkIFByb2R1Y3Q8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCBwcm9kdWN0IG5hbWVcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHZhbHVlPXtwcm9kdWN0SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInByb2R1Y3ROYW1lXCIpfVxyXG4gICAgICAgICAgZXJyb3I9e2Vycm9yLm1zZyAmJiBlcnJvci5pbnB1dFR5cGUgPT09IFwicHJvZHVjdE5hbWVcIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICBlcnJvci5tc2cgJiYgZXJyb3IuaW5wdXRUeXBlID09PSBcInByb2R1Y3ROYW1lXCIgPyBlcnJvci5tc2cgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgIGxhYmVsPVwiQWRkIGEgcHJpY2VcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3ByaWNlSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcInByaWNlVmFsdWVcIil9XHJcbiAgICAgICAgICBlcnJvcj17ZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJwcmljZVZhbHVlXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJwcmljZVZhbHVlXCIgPyBlcnJvci5tc2cgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICBsYWJlbD1cIkFkZCB0aGUgcXVhbnRpdHkgb2YgcHJvZHVjdFwiXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICB2YWx1ZT17cXVhbnRpdHlJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwicXVhbnRpdHlWYWx1ZVwiKX1cclxuICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgZXJyb3IubXNnICYmIGVycm9yLmlucHV0VHlwZSA9PT0gXCJxdWFudGl0eVZhbHVlXCIgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICBlcnJvci5tc2cgJiYgZXJyb3IuaW5wdXRUeXBlID09PSBcInF1YW50aXR5VmFsdWVcIiA/IGVycm9yLm1zZyA6IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWN1cnJlbmN5LW5hdGl2ZVwiXHJcbiAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgIGhlbHBlclRleHQ9XCJBZGQgYSB0YWdcIlxyXG4gICAgICAgICAgU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmF0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwidGFnc1ZhbHVlXCIpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dHMoZSwgXCJ0YWdzVmFsdWVcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RhZy5tYXAoKHRhZ3MsIGkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGFncy50YWd9Pnt0YWdzLnRhZ308L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWN1cnJlbmN5LW5hdGl2ZVwiXHJcbiAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgIC8vIGxhYmVsPVwiQWRkIHRhZ1wiXHJcbiAgICAgICAgICBoZWxwZXJUZXh0PVwiQWRkIGEgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgbmF0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4gaGFuZGxlSW5wdXRzKGUsIFwiY2F0VmFsdWVcIil9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0cyhlLCBcImNhdFZhbHVlXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnkuY2F0ZWdvcnl9PntjYXRlZ29yeS5jYXRlZ29yeX08L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgaWQ9XCJpY29uLWJ1dHRvbi1waG90b1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2FwdHVyZX1cclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImljb24tYnV0dG9uLXBob3RvXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgKlVwbG9hZCBhIHBpY3R1cmUocykgb2YgdGhlIHByb2R1Y3QuIE1heDogMyBwaWN0dXJlKlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7c3Bpbm5lciA/IChcclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxBdmF0YXJHcm91cCBtYXg9ezN9PlxyXG4gICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtpbWFnZX0gc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlTGltaXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNjE2MTYxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi00MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjQuOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2ltYWdlc1xyXG4gICAgICAgICAgICAgID8gaW1hZ2VzLm1hcCgocHJldmlld0ltYWdlcywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAvLyA8aW1nIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCIyMDBcIiBzcmM9e2ltYWdlc1tpXX0gLz5cclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlc1tpXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2ldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsUmVzdWx0ID0gaW1hZ2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoaW1nKSA9PiBpbWcgIT0gaW1hZ2VzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlcyhkZWxSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEltYWdlTGltaXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM2MTYxNjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI0LjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgPC9BdmF0YXJHcm91cD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgb25DbGljaz17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgZGlzYWJsZWQ9eyF2YWxpZGF0ZUlucHV0cygpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzV2l0aExhYmVsIHZhbHVlPXtwcm9ncmVzc30gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgXCJVcGxvYWQgUHJvZHVjdFwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb250ZW50KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==