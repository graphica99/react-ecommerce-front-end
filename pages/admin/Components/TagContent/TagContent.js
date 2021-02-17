import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";

const styles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
  button: {
    width: "80%",
    padding: "11px",
  },
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
  loading: {
    backgroundColor: "#fff",
  },
  progress: {
    color: "#fff",
    marginRight: "20px",
    height: "5px",
    width: "5px",
  },
});

function Content(props) {
  const { classes } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const onInputHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = () => {
    setIsLoading(true);

    axios
      .post(
        "http://localhost:1000/api/tag/add-tag",
        { tag: input },
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg",
          },
        }
      )
      .then((success) => {
        setOpen(true);
        setIsLoading(false);
        console.log("sent successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        message="Tag added successfully"
      />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Add a tag"
          variant="outlined"
          onChange={onInputHandler}
          value={input}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onSubmitHandler}
          disableRipple={true}
        >
          {isLoading ? (
            <CircularProgress
              className={classes.progress}
              disableShrink={false}
              variant="indeterminate"
              size={24}
            />
          ) : (
            ""
          )}{" "}
          Add Tag
        </Button>
      </form>
    </React.Fragment>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
