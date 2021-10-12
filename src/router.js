import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as P from "./pages"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={P.Home}/>
        <Route exact path="/login" component={P.Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;