import React from "react";
import { Switch } from "react-router-dom";
import EnRoute from "../components/EnRoute";
import Users from "../containers/Users";
import SignIn from "../containers/SignIn";

const Routes = [
  {
    path: "/",
    component: Users,
    type: "private"
  },
  { path: "/signin", component: SignIn, type: "user", to: "/" }
];

export default store => {
  return (
    <Switch>
      {Routes.map((route, index) => (
        <EnRoute key={index} exact {...route} />
      ))}
    </Switch>
  );
};
