import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import CircularProgress from "@material-ui/core/CircularProgress";
import Skeleton from "@material-ui/lab/Skeleton";
import Button from "@material-ui/core/Button";
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
  const [spinner, setSpinner] = useState(false);
  const [productInput, setProductInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleCapture = (e) => {
    setSpinner(true);
    const fileReader = new FileReader();
    if (e.target.files.length === 1) {
      fileReader.onload = (e) => {
        setImage(e.target.result);
        setSpinner(false);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      for (var i = 0; i < e.target.files.length; i++) {
        const fileReaders = new FileReader();
        fileReaders.onload = (e) => {
          setImages((oldArr) => [...oldArr, e.target.result]);
          setSpinner(false);
        };
        fileReaders.readAsDataURL(e.target.files[i]);
      }
    }
  };
  const handleInputs = (e, type) => {
    switch (type) {
      case "productName":
        setProductInput(e.target.value);
        console.log("seen");
      default:
        break;
    }
  };
  console.log(productInput);
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
        />
        <TextField
          id="outlined-basic"
          label="Add a price"
          variant="outlined"
          // onChange={onInputHandler}
          // value={input}
        />

        <TextField
          id="outlined-basic"
          label="Add the quantity of product"
          variant="outlined"
          // onChange={onInputHandler}
          // value={input}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          label="Add category"
          // value={currency}
          // onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </TextField>

        <TextField
          id="outlined-select-currency-native"
          select
          label="Add tag"
          // value={currency}
          // onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
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
              <Avatar alt={image} src={image} className={classes.large} />
            ) : (
              ""
            )}
            {images
              ? images.map((previewImages, i) => (
                  // <img width="50" height="200" src={images[i]} />
                  <Avatar
                    alt={images[i]}
                    src={images[i]}
                    className={classes.large}
                  />
                ))
              : ""}
          </AvatarGroup>
        )}
      </form>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        // onClick={isEditable ? onSubmitHandlerEdit : onSubmitHandler}
        disableRipple={true}
        disabled={true}
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
