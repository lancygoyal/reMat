import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashLayout from "./DashLayout";

export default ({
  component: Component,
  type = "public",
  auth = true,
  to = "/signin",
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (type === "public") return <Component {...props} />;
      if (type === "private")
        return auth ? (
          <DashLayout>
            <Component {...props} />
          </DashLayout>
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { from: props.location }
            }}
          />
        );
      if (type === "user")
        return !auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { from: props.location }
            }}
          />
        );
    }}
  />
);
