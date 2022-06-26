import { Home, Login, Register } from "pages";
import React from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">{/* <Login /> */}</Route>
        <Route path="/register">{/* <Register /> */}</Route>
      </Switch>
    </div>
  );
};

export default App;
