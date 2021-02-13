import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import JumbotronMakeStyles from "./JumbotronMakeStyle";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const Jumbotron = () => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = JumbotronMakeStyles();

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.container}>
        <Grid item>
          <Grid container direction="row" justify="space-between">
            {/* <Grid item xs={0} sm={1} /> */}
            <Grid item sm={12} xs={12} md={6}>
              <img
                src="/assets/navbarImages/undraw_shopping_app_flsj.png"
                className={classes.jumbotronImage}
              />
            </Grid>
            <Grid item sm={12} xs={12} md={6}>
              <Grid
                container
                direction="column"
                justify="center"
                // alignItems="center"
                alignItems={matchesXS ? "center" : ""}
                className={classes.textContainer}
              >
                <Grid item>
                  <Typography variant="h2" className={classes.mainText}>
                    Online Shopping <br /> Platform
                  </Typography>
                </Grid>
                <Grid item style={{ marginTop: "1em" }}>
                  <Typography
                    variant="body1"
                    paragraph
                    className={classes.paragraphText}
                  >
                    Buy any product of your choice right on this platform <br />{" "}
                    ShopNow is world leading e-commerce platform
                  </Typography>
                  <Button
                    color="secondary"
                    variant="contained"
                    disableRipple={true}
                    className={classes.shopNowButton}
                  >
                    Shop Now
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={0} sm={1} /> */}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Jumbotron;
