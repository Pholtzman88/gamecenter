import React from "react";
import router, {
  Route,
  Router,
  hashHistory,
  IndexRoute
} from "react-router";
import Main from "../components/main";
import Game from "../components/views/Game";
import Landing from "../components/views/Landing";
module.exports = (
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
      	<Route path="/Home" component={Landing}/>
      	<Route path="/Game" component={Game}/>
        <IndexRoute component={Landing}/>
      </Route>
  </Router>
);