import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { LoginScreen } from "../components/auth/LoginScreen";

export const AppRouter = () => {
  return (
    <div>
      <Router>
          <div>
              <Switch>
                  <Route exact path="/login" component={LoginScreen} />
                  <Route exact path="/" component={HomeScreen} />
                  <Redirect to="/" />
              </Switch>
          </div>
      </Router>
    </div>
  );
};
