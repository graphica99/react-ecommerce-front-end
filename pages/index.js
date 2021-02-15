import React from "react";
import Layout from "../Components/Layout/Layout";
import ProductSection from "../Components/UI/Products/Product";
import Jumbotron from "../Components/UI/Header/Jumbotron/Jumbotron";
// import privateComponent from '../hoc/privateComponent';
const App = (props) => {
  // console.log(props.user);
  return (
    <Layout>
      <Jumbotron />
      <ProductSection />
    </Layout>
  );
};

// App.getInitialProps = async (context) => {
//   return {
//     user: "mends albert",
//     email: "mendsalbert@gmail.com",
//   };
// };

export default App;
