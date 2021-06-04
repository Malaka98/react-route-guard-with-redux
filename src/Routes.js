import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import RegPage from "./Components/RegPage/RegPage";
import LoginPage from "./Components/LoginPage/LogingPage";

export default function Routes() {
  console.log("Routes Component");
  const routes = [
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/regpage",
      component: RegPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/",
      component: LoginPage,
    },
  ];

  return (
    <Switch>
      {routes.map((route, i) => {
        return <RoutWithSubRoutes key={i} {...route} />;
      })}
    </Switch>
  );
}

const RoutWithSubRoutes = (route) => {
  return (
    <React.Fragment>
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </React.Fragment>
  );
};
