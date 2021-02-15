import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

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
});

const createData = (name, tag, category, price, owner, image) => {
  return { name, tag, category, price, owner, image };
};

function Content(props) {
  const { classes } = props;

  const [rows, setRows] = useState([
    createData("Bag", "Bag", "Bags", 20.0, "Mends Albert", "img"),
    createData("Bag", "Bag", "Bags", 20.0, "Mends Albert", "img"),
    createData("Bag", "Bag", "Bags", 20.0, "Mends Albert", "img"),
    createData("Bag", "Bag", "Bags", 20.0, "Mends Albert", "img"),
    createData("Bag", "Bag", "Bags", 20.0, "Mends Albert", "img"),
    createData("Bag", "Bag", "Bags", 20.0, "Mends Albert", "img"),
    createData("Bag", "Bag", "Bags", 20.0, "Mends Albert", "img"),
  ]);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.tag}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
