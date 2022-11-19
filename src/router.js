import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as P from "./pages";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={P.Home} />
      <Route exact path="/home" component={P.HomeAuthenticated} />
      <Route exact path="/login" component={P.Login} />
      <Route exact path="/register" component={P.Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
