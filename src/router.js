import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as P from "./pages";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/welcome" component={P.Home} />
      <Route exact path="/" component={P.HomeAuthenticated} />
      <Route exact path="/login" component={P.Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
