import { makeStyles } from "@material-ui/core/styles";

const ProductMakeStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    marginBottom: "40px",
    margin: "18px",
    borderRadius: "10px",
    boxShadow: "0px 25px 60px rgba(66,85,164,0.06)",
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      marginBottom: "30px",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  btn: {
    width: "100%",
    marginTop: "8px",
    marginBottom: "-15px",
    backgroundColor: "#2c7eeb",
  },
  productHeader: {
    textAlign: "center",
    marginTop: "25px",
    marginBottom: "25px",
    fontFamily: "Montserrat",
  },
  loadMore: {
    textAlign: "center",
  },
  loadMoreBtn: {
    backgroundColor: "#5d89a2",
    marginBottom: "20px",
    marginTop: "10px",
    color: "white",
    "&:hover": {
      backgroundColor: "none",
    },
  },
  rating: {
    textAlign: "center",
  },
  pro: {
    fontFamily: "Montserrat",
  },
  chip: {
    marginBottom: "5px",
  },
}));

export default ProductMakeStyle;
