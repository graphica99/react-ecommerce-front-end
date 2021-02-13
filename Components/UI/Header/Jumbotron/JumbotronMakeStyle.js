import { makeStyles } from "@material-ui/core/styles";
const JumbotronMakeStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "50%",
    marginTop: "-20px",
  },
  jumbotronImage: {
    width: "80%",
    height: "450px",
    margin: "40px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      width: "60%",

      display: "none",
      height: "350px",
      marginBottom: 0,
    },
    [theme.breakpoints.down("xm")]: {
      marginTop: "20px",
      width: "100%",
      height: "250px",
      marginBottom: 0,
    },
  },
  textContainer: {
    marginTop: 100,
    marginRight: "100px",
    // marginLeft: "110px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "55px",
      // textTransform: "upperCase",
      // marginRight: 0,
      margin: "auto",
      textAlign: "center",
      // marginLeft: 0,
    },
  },

  mainText: {
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
      // marginTop: 0,
      // marginBottom: 0,
      // marginRight: 15,
      // marginLeft: 15,
      margin: "auto",
    },
  },
  paragraphText: {
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9em",
      // marginTop: 0,
      marginBottom: 10,
      // marginRight: 15,
      // marginLeft: 20,

      margin: "auto",
    },
  },
  shopNowButton: {
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      // marginTop: 0,
      // marginBottom: 10,
      // marginRight: 15,
      // marginLeft: 20,
      margin: "auto",
    },
  },
}));

export default JumbotronMakeStyle;
