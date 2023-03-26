import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as P from "./views/pages";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={P.Login} />
      <Route exact path="/register" component={P.Register} />
      <Route exact path="/banks" component={P.Banks} />
      <Route exact path="/bank" component={P.Bank} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
