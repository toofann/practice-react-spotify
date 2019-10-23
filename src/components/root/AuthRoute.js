import React from "react";
import { Route, Redirect } from "react-router-dom";

let accessToken = !!localStorage.getItem("access_token");
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
