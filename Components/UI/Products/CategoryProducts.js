import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import CategoryProductsMakeStyle from "./CategoryProductsMakeStyle";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Container from "@material-ui/core/Container";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
const Product = () => {
  const classes = CategoryProductsMakeStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const product = [
    {
      p_name: "Gucci Bag",
      price: 70.0,
      desc: `This impressive paella is a perfect party dish and a fun meal
      to cook together with your guests...`,
      image: "/assets/pp1.jpg",
      category: "Bags",
    },
    {
      p_name: "Nike Sneaker",
      price: 95.0,
      desc: `This impressive paella is a perfect party dish and a fun meal
        to cook together with your guests...`,
      image: "/assets/pp2.jpg",
      category: "Sneakers",
    },
    {
      p_name: "Glasses",
      price: 50.0,
      desc: `This impressive paella is a perfect party dish and a fun meal
        to cook together with your guests...`,
      image: "/assets/pp3.jpg",
      category: "Glasses",
    },
    {
      p_name: "Glasses",
      price: 50.0,
      desc: `This impressive paella is a perfect party dish and a fun meal
          to cook together with your guests...`,
      image: "/assets/pp3.jpg",
      category: "Glasses",
    },
    {
      p_name: "Glasses",
      price: 50.0,
      desc: `This impressive paella is a perfect party dish and a fun meal
          to cook together with your guests...`,
      image: "/assets/pp3.jpg",
      category: "Glasses",
    },
  ];
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} direction="row" container></Grid>
    </Container>
  );
};

export default Product;
