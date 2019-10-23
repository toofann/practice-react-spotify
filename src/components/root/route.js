import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const AuthRoute = lazy(() => import("./AuthRoute"));
const Callback = lazy(() => import("../login/callback"));
const Home = lazy(() => import("./home"));
const Categories = lazy(() => import("../categories/categories"));
const Dashboard = lazy(() => import("../dashboard"));
const NotFound = lazy(() => import("./notFound"));
const ErrorHandeling = lazy(() => import("./errorHandeling"));
const CategoriesItem = lazy(() => import("../categories/categoriesItem"));
const PlayLists = lazy(() => import("../categories/playlists"));
const Login = lazy(() => import("../login/login"));

let Routegroup = [
  {
    path: "/callback",
    component: Callback
  },
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/categories/:categoriesItem/:categoriesPlaylist",
    component: PlayLists,
    AuthRoute: true
  },
  {
    path: "/categories/:categoriesItem",
    component: CategoriesItem,
    AuthRoute: true
  },

  {
    path: "/categories",
    component: Categories,
    AuthRoute: true
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/dashboard",
    component: Dashboard,
    AuthRoute: true
  },

  {
    path: "/",
    component: NotFound
  }
];

const Routes = () => {
  return (
    <Switch>
      {Routegroup.map(item => {
        return item.error ? (
          <Route
            key={item.component}
            path={item.path}
            render={props => (
              <ErrorHandeling>
                <item.component {...props} />
              </ErrorHandeling>
            )}
          />
        ) : item.AuthRoute ? (
          <AuthRoute key={item.component} {...item} />
        ) : (
          <Route key={item.component} {...item} />
        );
      })}
    </Switch>
  );
};
export default Routes;
