import React from "react";
import router, {
  Route,
  Router,
  hashHistory,
  IndexRoute
} from "react-router";
import Main from "../components/main";
module.exports = (
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Main}/>
      </Route>
  </Router>
);