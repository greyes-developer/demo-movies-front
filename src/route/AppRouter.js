import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { HomeScreen } from "../components/home/HomeScreen";
import { LoginScreen } from "../components/auth/LoginScreen";
import { FavoritesScreen } from "../components/favorites/FavoritesScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const { authenticated } = useSelector((state) => state.auth);

  const authenticatedStored = localStorage.getItem("is-authenticated")
    ? true
    : false;

  return (
    <div>
      <Router>
        <div className="root-container">
          <Switch>
            <PublicRoute
              exact
              path="/login"
              component={LoginScreen}
              isAuthenticated={authenticatedStored || authenticated}
            />
            <PrivateRoute
              exact
              path="/"
              component={HomeScreen}
              isAuthenticated={authenticatedStored || authenticated}
            />
            <PrivateRoute
              exact
              path="/favorites"
              component={FavoritesScreen}
              isAuthenticated={authenticatedStored || authenticated}
            />
            <PrivateRoute
              exact
              path="/profile"
              component={ProfileScreen}
              isAuthenticated={authenticatedStored || authenticated}
            />
            <Redirect
              to={`${authenticatedStored || authenticated ? "/" : "/login"}`}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
