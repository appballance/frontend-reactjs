import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as P from "./views/pages";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={P.Home} />
      <Route exact path="/bank" component={P.Bank} />
      <Route exact path="/balance" component={P.HomeAuthenticated} />
      <Route exact path="/login" component={P.Login} />
      <Route exact path="/register" component={P.Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
