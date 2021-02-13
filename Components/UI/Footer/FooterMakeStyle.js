import { makeStyles } from "@material-ui/core/styles";

const FooterMakeStyle = makeStyles((theme) => ({
  footerContainer: {
    width: "100%",
    // height: "500px",
    backgroundColor: "#04091e",
    color: "#fff",
  },
  link: {
    color: "white",
    fontFamily: "Montserrat",
  },
  gridItem: {
    margin: "6em",
  },
}));

export default FooterMakeStyle;
