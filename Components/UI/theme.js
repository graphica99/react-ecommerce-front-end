import { createMuiTheme } from "@material-ui/core";
const navBarCol = "#5d89a2";
const deepBlue = "#04091e";
const black = "#222222";
const skyBlue = "#2c7eeb";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    type: "dark",
    common: {
      navBarCol: navBarCol,
      deepBlue: deepBlue,
      black: black,
      skyBlue: skyBlue,
    },
    primary: {
      main: skyBlue,
    },
    secondary: {
      main: deepBlue,
    },
  },
  typography: {
    h2: {
      fontFamily: "Montserrat",
      fontWeight: "900",
      color: black,
    },
    body1: {
      fontFamily: "Montserrat",
      color: black,
    },
    h4: {
      fontWeight: "bold",
      fontSize: "25px",
      fontFamily: "Montserrat",
      color: black,
    },
    body2: {
      fontFamily: "Montserrat",
      color: black,
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: "700",
      color: black,
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontFamily: "Montserrat",
    },
  },
});

export default theme;
