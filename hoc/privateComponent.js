import React from "react";
//import fakeAuth from 'fakeAuth'

const privateComponent = (WrappedComponent) => {
  const user, auth, Router;
  if (user != auth) {
    Router.navigate("/");
  }
  return props=>(
    <React.Fragment>
      <WrappedComponent {...props} />
    </React.Fragment>
  );
};

export default privateComponent;
