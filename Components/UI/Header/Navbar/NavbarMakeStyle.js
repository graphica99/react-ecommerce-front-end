import { makeStyles } from "@material-ui/core/styles";
const NavBarMakeStyle = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#ffff",
    marginBottom: "0px",
  },
  logo: {
    // marginLeft: 50,
  },
  logo: {
    width: "70px",
    height: "70px",
    marginLeft: 45,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 7,
      width: 50,
      height: 50,
    },
  },
  divider: {
    zIndex: 300,
    opacity: 0.3,
    backgroundColor: "rgba(255, 255, 255, 0.493)",
  },
  tabs: {
    marginLeft: "auto",

    fontFamily: "Montserrat",
    paddingRight: "30px",
  },
  tabItems: {
    fontFamily: "Montserrat",
    color: "#5d89a2",
    textTransform: "upperCase",
    fontWeight: "300",
    fontSize: "0.90em",
    minWidth: 5,
    marginLeft: "8px",
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "100px",
    marginTop: "10px",
  },
  signButton: {
    backgroundColor: "#04091e",
    textTransform: "none",
    color: "white",
    boxShadow: theme.shadows[0],
    fontSize: "18px",
    paddingLeft: "25px",
    paddingRight: "25px",
    borderRadius: "10px",
    marginLeft: "15px",
    "&:hover": {
      backgroundColor: "#2c7eeb",
    },
  },
  iconButton: {
    marginLeft: "auto",
    marginTop: "7px",
  },
  menuBar: {
    width: "40px",
    height: "40px",
    color: "#2222",
    "&:hover": {
      backgroundColor: "none",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "40%",
    border: "none",
    backgroundColor: "#cccc",
    borderRadius: "20px",
    padding: 5,
    paddingLeft: 15,
    fontFamily: "Montserrat",
  },
  input: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      flex: 1,
      width: "40%",
      border: "none",
      backgroundColor: "#cccc",
      borderRadius: "17px",
      padding: 3,
      paddingLeft: 13,
      fontFamily: "Montserrat",
    },
  },
  // style={{ zIndex: 200 }}
  drawer: {
    backgroundColor: "rgba(0, 0, 0, 0.747)",
    width: "70%",
    zIndex: 200,
    // marginLeft: "5%",
    // marginRight: "5%",
    // textAlign: "center",
  },
}));

export default NavBarMakeStyle;
