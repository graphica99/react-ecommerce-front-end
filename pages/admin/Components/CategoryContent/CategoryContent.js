import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
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
  progressTable: {
    marginLeft: "100px",
    height: "5px",
    width: "5px",
  },
});

function Content(props) {
  const { classes } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(true);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState({ state: false, msg: "" });
  const [error, setError] = useState("");
  const [chipData, setChipData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [tempIdEdit, setTempIdEdit] = useState("");
  const [subInput, setSubInput] = useState("");
  const [rows, setRows] = useState([]);

  const onSubmitHandlerEdit = () => {
    // console.log(input, tempIdEdit);
    setIsLoading(true);
    axios
      .post(
        `http://localhost:1000/api/category/edit-category/${tempIdEdit}`,
        { category: input, subCategory: subInput },
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
          },
        }
      )
      .then((success) => {
        setOpen({ state: true, msg: "Category Edited successfully" });
        setIsLoading(false);
        setError("");
        setInput("");
        setSubInput("");
        setIsEditable(false);
        console.log("sent successfully");
      })
      .catch((e) => {
        setError(e.response.data.msg);
        console.log(e.response.data.msg);
        setIsLoading(false);
      });
  };

  const editButtonClick = (id, cat, subCat) => {
    // console.log(subCat.toString());
    setSubInput(subCat.toString());
    setTempIdEdit(id);
    setInput(cat);
    setIsEditable(true);
  };

  const onInputHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubCategoryInputHandler = (e) => {
    setSubInput(e.target.value);
  };

  const handleDelete = (catToDelete) => {
    console.log(catToDelete);
    setRows((row) => rows.filter((row) => row._id !== catToDelete));
    axios
      .delete(
        `http://localhost:1000/api/category/delete-category/${catToDelete}`,
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
          },
        }
      )
      .then((success) => {
        setOpen({ state: true, msg: "Post deleted Successfully" });
        setIsLoading(false);
        setError("");
        setOpenDialog(false);
        console.log("deleted successfully");
      })
      .catch((e) => {
        // setError(e.response.data.msg);
        console.log(e);
        setIsLoading(false);
      });
  };

  const onSubmitHandler = () => {
    setIsLoading(true);
    axios
      .post(
        "http://localhost:1000/api/category/add-category",
        { category: input, subCategory: subInput },
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxNDI4NjE3MX0.Lj0Mmj5g2yEAYqYVOQtVoMszlWs-1v7EO_BKNT-ZgkI",
          },
        }
      )
      .then((success) => {
        setOpen({ state: true, msg: "Category added successfully" });
        setIsLoading(false);
        setError("");
        setInput("");
        setSubInput("");
        console.log("sent successfully");
      })
      .catch((e) => {
        setError(e.response.data.msg);
        console.log(e.response.data.msg);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/category/all-category", {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNzBjMjRiNWUxYjgyOGM4YmFkYjA5In0sImlhdCI6MTYxMzUwMzY4OSwiZXhwIjoxNjEzODYzNjg5fQ.s6MBDtyOTXIlP1FefTt2bC0qyjW6etsdcoTyztpNBJg",
        },
      })
      .then((success) => {
        setRows(success.data);
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
        <Typography variant="h5">Categories</Typography>
        <TextField
          id="outlined-basic"
          label="Add a Category"
          variant="outlined"
          onChange={onInputHandler}
          value={input}
        />
        <TextField
          id="outlined-basic"
          label="Add a sub Category"
          variant="outlined"
          onChange={onSubCategoryInputHandler}
          value={subInput}
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
          {isEditable ? "Edit Category" : "Add A category"}
        </Button>
      </form>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Sub Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <IconButton
                    color="primary"
                    aria-label="Edit category"
                    component="span"
                    onClick={() =>
                      editButtonClick(row._id, row.category, row.subCategory)
                    }
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="Delete category"
                    component="span"
                    onClick={() => handleDelete(row._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>
                  {row.subCategory.map((subCat) => `${subCat},`)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
