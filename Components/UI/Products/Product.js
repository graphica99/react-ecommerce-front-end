import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ProductMakeStyle from "./ProductMakeStyle";
import Skeleton from "@material-ui/lab/Skeleton";
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
import Box from "@material-ui/core/Box";
const Product = () => {
  const classes = ProductMakeStyle();
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
      p_name: "Nike Sneakers",
      price: 85.0,
      desc: `This impressive paella is a perfect party dish and a fun meal
        to cook together with your guests...`,
      image: "/assets/pp4.jpg",
      category: "Sneakers",
    },
    {
      p_name: "Salad",
      price: 10.0,
      desc: `This impressive paella is a perfect party dish and a fun meal
        to cook together with your guests...`,
      image: "/assets/p2.jpg",
      category: "Food",
    },
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const productGrid = (
    <Grid item container direction="row" justify="space-between">
      {/* <Grid item xs={0} sm={1} /> */}
      {product.map((products) => (
        <Grid item md={4} lg={3} sm={6} xs={12}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={products.image}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="h5" component="h4" className={classes.pro}>
                {products.p_name}
              </Typography>
              <Typography variant="h6" component="h5" className={classes.pro}>
                GHc: {products.price}
              </Typography>
              <Chip
                label={products.category}
                component="a"
                href="#chip"
                clickable
                className={classes.chip}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.pro}
              >
                {products.desc}
              </Typography>
              <Rating
                name="read-only"
                value={4}
                readOnly
                className={classes.rating}
              />{" "}
              <br />
              <Button
                color="secondary"
                variant="contained"
                className={classes.btn}
              >
                View Details
              </Button>
            </CardContent>

            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="addCart">
                <ShoppingCartIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const skeletonGrid = (
    <Grid item container direction="row" justify="space-between">
      {product.map((products) => (
        <Grid item md={4} lg={3} sm={6} xs={12}>
          <Skeleton
            variant="rect"
            width={250}
            height={250}
            className={classes.skeleton}
          />
          <Box pt={1} pb={4}>
            <Skeleton width="250px" className={classes.skeleton} />
            <Skeleton width="250px" className={classes.skeleton} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
  return (
    <Container>
      <Grid>
        <Grid
          item
          alignItems="center"
          justify="center"
          className={classes.productHeader}
        >
          <Typography variant="h4" className={classes.pro}>
            Products
          </Typography>
        </Grid>
        {loading ? skeletonGrid : productGrid}
        <Grid item className={classes.loadMore}>
          <Button
            variant="contained"
            disableRipple={true}
            className={classes.loadMoreBtn}
            color="primary"
          >
            Load More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
