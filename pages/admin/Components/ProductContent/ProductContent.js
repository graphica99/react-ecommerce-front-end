import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
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
      margin: theme.spacing(1),
      width: "50%",
      // marginBottom: "40px",
    },
  },
});

function Content(props) {
  const { classes } = props;

  const [image, setImage] = useState([]);

  const handleCapture = (e) => {
    console.log(e.target.files[0]);
    // const fileReader = new FileReader();
    // const name = target.accept.includes("image") ? "images" : "videos";

    // fileReader.readAsDataURL(target.files[0]);
    // fileReader.onload = (e) => {
    //   setImage([...image, e.target.result]);
    //   // setImage((prevState) => ({
    //   //   [name]: [...prevState[name], e.target.result],
    //   // }));
    // };
  };
  console.log(image);
  return (
    <React.Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <img width="50" height="50" src={image} />
        <Typography variant="h5">Product</Typography>

        <TextField
          id="outlined-basic"
          label="Add a tag"
          variant="outlined"
          // onChange={onInputHandler}
          // value={input}
        />
        <Select
          native
          variant="outlined"
          // value={10}
          // onChange={handleChange}
          label="Age"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        >
          {/* <option aria-label="None" /> */}
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>

        <Select
          native
          variant="outlined"
          // value={10}
          // onChange={handleChange}
          label="Age"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        >
          {/* <option aria-label="None" /> */}
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <input
          accept="image/*"
          // className=/{classes.input}
          style={{ display: "none" }}
          id="icon-button-photo"
          onChange={handleCapture}
          type="file"
        />
        <label htmlFor="icon-button-photo">
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </form>
    </React.Fragment>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
