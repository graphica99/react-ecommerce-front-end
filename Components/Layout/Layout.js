import React from "react";
import NavBar from "../UI/Header/Navbar/Navbar";

import Footer from "../UI/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />

      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
