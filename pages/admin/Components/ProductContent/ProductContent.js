import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import axios from "axios";
import FormData from "form-data";
const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: "block",
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: "40px 16px",
  },
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "100%",
      marginBottom: "15px",
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: "30px",
    margin: "10px",
  },
  button: {
    width: "100%",
    padding: "11px",
  },
});
function Content(props) {
  const { classes } = props;
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [uImage, setUImage] = useState("");
  const [uImages, setUImages] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [productInput, setProductInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tag, setTag] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imageLimit, setImageLimit] = useState(false);
  const [error, setError] = useState({ msg: "", inputType: "" });
  useEffect(() => {
    axios
      .get("http://localhost:1000/api/tag/all-tags", {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
        },
      })
      .then((success) => {
        setTag(success.data);
      })
      .catch((e) => {
        console.log(e.response.data.msg);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/category/all-category", {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg",
        },
      })
      .then((success) => {
        setCategories(success.data);
        // console.log(success);
      })
      .catch((e) => {
        console.log(e.response.data.msg);
      });
  }, []);

  const handleCapture = (e) => {
    setSpinner(true);
    const fileReader = new FileReader();

    //Displaying image in the UI if it is one
    if (e.target.files.length === 1) {
      setUImage(e.target.files[0]);
      fileReader.onload = (e) => {
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
          fileReaders.onload = (e) => {
            setImages((oldArr) => [...oldArr, e.target.result]);
            setSpinner(false);
            setImageLimit(true);
          };
          fileReaders.readAsDataURL(e.target.files[i]);
        }
        var arr = [];
        for (var j = 0; j < e.target.files.length; j++) {
          arr.push(e.target.files[j]);
          // setUImages((oldArr) => [...oldArr, e.target.files[j]]);
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
          inputType: "productName",
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
          inputType: "priceValue",
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
          inputType: "quantityValue",
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
    if (
      productInput &&
      priceInput &&
      quantityInput &&
      categoryInput &&
      tagInput &&
      imageLimit
    ) {
      return true;
    }
    return false;
  };
  const onSubmitHandler = () => {
    let data = new FormData();
    data.append("name", "productInput");
    data.append("category", "categoryInput");
    data.append("tag", "tagInput");
    data.append("image", uImage);
    for (var x = 0; x < uImages.length; x++) {
      data.append("image", uImages[x]);
    }
    // // formData.append('postedBy', postData.content);
    // // formData.append('rating', postData.content);
    // // formData.append('price', postData.content);
    // // formData.append('quantity', postData.content);
    // console.log(JSON.stringify(data));

    axios
      .post("http://localhost:1000/api/product/add-product", data, {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h5">Add Product</Typography>
        <TextField
          id="outlined-basic"
          label="Add product name"
          variant="outlined"
          value={productInput}
          onChange={(e) => handleInputs(e, "productName")}
          error={error.msg && error.inputType === "productName" ? true : false}
          helperText={
            error.msg && error.inputType === "productName" ? error.msg : ""
          }
        />
        <TextField
          id="outlined-basic"
          label="Add a price"
          variant="outlined"
          type="number"
          value={priceInput}
          onChange={(e) => handleInputs(e, "priceValue")}
          error={error.msg && error.inputType === "priceValue" ? true : false}
          helperText={
            error.msg && error.inputType === "priceValue" ? error.msg : ""
          }
        />

        <TextField
          id="outlined-basic"
          label="Add the quantity of product"
          variant="outlined"
          type="number"
          value={quantityInput}
          onChange={(e) => handleInputs(e, "quantityValue")}
          error={
            error.msg && error.inputType === "quantityValue" ? true : false
          }
          helperText={
            error.msg && error.inputType === "quantityValue" ? error.msg : ""
          }
        />
        <TextField
          id="outlined-select-currency-native"
          select
          helperText="Add a tag"
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          onFocus={(e) => handleInputs(e, "tagsValue")}
          onChange={(e) => handleInputs(e, "tagsValue")}
        >
          {tag.map((tags, i) => (
            <option value={tags.tag}>{tags.tag}</option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          // label="Add tag"
          helperText="Add a category"
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          onFocus={(e) => handleInputs(e, "catValue")}
          onChange={(e) => handleInputs(e, "catValue")}
        >
          {categories.map((category, i) => (
            <option value={category.category}>{category.category}</option>
          ))}
        </TextField>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="icon-button-photo"
          onChange={handleCapture}
          type="file"
          multiple
        />
        <br />
        <label htmlFor="icon-button-photo">
          <Typography variant="body2">
            *Upload a picture(s) of the product. Max: 3 picture*
          </Typography>
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>

        <br />
        {spinner ? (
          <CircularProgress />
        ) : (
          <AvatarGroup max={3}>
            {image ? (
              <>
                <Avatar alt={image} src={image} className={classes.large} />
                <Card
                  onClick={() => {
                    setImage("");
                    setImageLimit(false);
                  }}
                  style={{
                    backgroundColor: "#616161",
                    width: "30px",
                    height: "30px",
                    borderRadius: "100%",
                    color: "white",
                    textAlign: "center",
                    marginLeft: "-40px",
                    zIndex: "3",
                    paddingTop: "4.8px",
                    cursor: "pointer",
                  }}
                >
                  <CloseIcon />
                </Card>
              </>
            ) : (
              ""
            )}
            {images
              ? images.map((previewImages, i) => (
                  // <img width="50" height="200" src={images[i]} />
                  <>
                    <Avatar
                      alt={images[i]}
                      src={images[i]}
                      className={classes.large}
                    />
                    <Card
                      onClick={() => {
                        const delResult = images.filter(
                          (img) => img != images[i]
                        );
                        setImages(delResult);
                        if (images.length === 1) {
                          setImageLimit(false);
                        }
                      }}
                      style={{
                        backgroundColor: "#616161",
                        width: "34px",
                        height: "34px",
                        borderRadius: "100%",
                        color: "white",
                        textAlign: "center",
                        marginLeft: "-40px",
                        zIndex: "3",
                        paddingTop: "4.8px",
                        cursor: "pointer",
                      }}
                    >
                      <CloseIcon />
                    </Card>
                    {/* <Button
                      onClick={() => {
                        const delResult = images.filter(
                          (img) => img != images[i]
                        );
                        setImages(delResult);
                      }}
                    >
                      del
                    </Button> */}
                  </>
                ))
              : ""}
          </AvatarGroup>
        )}
      </form>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onSubmitHandler}
        disableRipple={true}
        // disabled={!validateInputs()}
      >
        Upload Product
      </Button>
    </React.Fragment>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
