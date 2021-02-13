import React from "react";
import Layout from "../Components/Layout/Layout";
import ProductSection from "../Components/UI/Products/Product";
import Jumbotron from "../Components/UI/Header/Jumbotron/Jumbotron";
// import privateComponent from '../hoc/privateComponent';
const App = () => {
  return (
    <Layout>
      <Jumbotron />
      <ProductSection />
    </Layout>
  );
};

export default App;
