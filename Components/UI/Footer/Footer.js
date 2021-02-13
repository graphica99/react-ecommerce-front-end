import React from "react";
import Grid from "@material-ui/core/Grid";
import FooterMakeStyle from "./FooterMakeStyle";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
export default function Footer() {
  const classes = FooterMakeStyle();

  return (
    <footer
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      {/* <Container> */}
      <Grid
        container
        justify="space-between"
        alignContent="center"
        direction="row"
        className={classes.footerContainer}
      >
        <Grid item className={classes.gridItem}>
          <Grid
            item
            container
            direction="column"
            spacing={3}
            alignContent="stretch"
          >
            <Grid item className={classes.link}>
              <Typography variant="h5">About</Typography>
            </Grid>
            <Grid item className={classes.link}>
              <Typography variant="body1">Lorem ipsum dolor sit</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid item container direction="column" spacing={3}>
            <Grid item className={classes.link}>
              <Typography variant="h5">Others</Typography>
            </Grid>
            <Grid item className={classes.link}>
              Home2
            </Grid>
            <Grid item className={classes.link}>
              Home2
            </Grid>
            <Grid item className={classes.link}>
              Home2
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid item container direction="column" spacing={3}>
            <Grid item className={classes.link}>
              <Typography variant="h5">Follow us</Typography>
            </Grid>
            <Grid item className={classes.link}>
              home3
            </Grid>
            <Grid item className={classes.link}>
              home3
            </Grid>
            <Grid item className={classes.link}>
              home3
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </footer>
  );
}
