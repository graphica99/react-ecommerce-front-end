import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  chipRoot: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    marginLeft: 10,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  button: {
    width: "100%",
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
  alert: {
    width: "100%",
    marginLeft: "10px",
    marginBottom: "10px",
  },
  table: {
    marginTop: "30px",
    width: "100%",
  },
  dialog: {},
});
function Content(props) {
  const { classes } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState({ state: false, msg: "" });
  const [error, setError] = useState("");
  const [chipData, setChipData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [tempIdEdit, setTempIdEdit] = useState("");

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const onSubmitHandlerEdit = () => {
    console.log(input, tempIdEdit);
    setIsLoading(true);
    axios
      .post(
        `http://localhost:1000/api/tag/edit-tag/${tempIdEdit}`,
        { tag: input },
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
          },
        }
      )
      .then((success) => {
        setOpen({ state: true, msg: "Post Edited successfully" });
        setIsLoading(false);
        setError("");
        setInput("");
        setIsEditable(false);
        console.log("sent successfully");
      })
      .catch((e) => {
        setError(e.response.data.msg);
        console.log(e.response.data.msg);
        setIsLoading(false);
      });
  };

  const doubleClick = (id, inp) => {
    setInput(inp);
    setTempIdEdit(id);
    setIsEditable(true);
  };

  const onInputHandler = (e) => {
    setInput(e.target.value);
    axios
      .post(
        "http://localhost:1000/api/tag/isTagExist",
        { tag: `${e.target.value}` },
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
            accept: "application/json",
            // "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((success) => {
        // console.log(success.data);
        success.data ? setError("Tag name Already exist") : setError("");
      })
      .catch((e) => {
        // setError(e.response.data.msg);
        // console.log(e.response.data.msg);
        console.log(e);
      });
  };

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip._id !== chipToDelete._id)
    );
    // localhost:1000/api/tag/delete-tag/
    axios
      .delete(`http://localhost:1000/api/tag/delete-tag/${chipToDelete._id}`, {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
        },
      })
      .then((success) => {
        setOpen({ state: true, msg: "Post deleted Successfully" });
        setIsLoading(false);
        setError("");
        setOpenDialog(false);
        console.log("deleted successfully");
      })
      .catch((e) => {
        setError(e.response.data.msg);
        console.log(e.response.data.msg);
        setIsLoading(false);
      });
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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
            accept: "application/json",
            // "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((success) => {
        setOpen({ state: true, msg: "Tag added successfully" });
        setIsLoading(false);
        setError("");
        setInput("");
        console.log("sent successfully");
      })
      .catch((e) => {
        setError(e.response.data.msg);
        console.log(e);
        setIsLoading(false);
      });
  };

  const deleteTag = () => {
    //delete tag
  };

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/tag/all-tags", {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
        },
      })
      .then((success) => {
        setChipData(success.data);
        // console.log(success);
      })
      .catch((e) => {
        console.log(e.response.data.msg);
      });
  }, [isLoading]);

  return (
    <React.Fragment>
      {error ? (
        <Alert variant="outlined" severity="info" className={classes.alert}>
          {error}
        </Alert>
      ) : (
        ""
      )}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open.state}
        onClose={() => setOpen(false)}
        message={open.msg}
      />
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h5">Tags</Typography>
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
          onClick={isEditable ? onSubmitHandlerEdit : onSubmitHandler}
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
          {isEditable ? "Edit Tag" : "Add Tag"}
        </Button>
      </form>
      <Paper component="ul" className={classes.chipRoot}>
        {chipData.map((data) => {
          let icon;
          return (
            <>
              <li
                key={data._id}
                onDoubleClick={() => doubleClick(data._id, data.tag)}
              >
                <Chip
                  icon={icon}
                  label={data.tag}
                  onDelete={
                    data.label === "React" ? undefined : handleDelete(data)
                  }
                  className={classes.chip}
                />
              </li>
            </>
          );
        })}
        <p>
          {chipData.length <= 0
            ? "No tags available, Please add one"
            : "Double click on tag to edit"}
        </p>
      </Paper>
    </React.Fragment>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
