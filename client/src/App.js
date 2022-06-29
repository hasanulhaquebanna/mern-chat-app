import { Box } from "@chakra-ui/react";
import { Home, Login, Register } from "pages";
import React from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Box overflow="hidden">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Box>
  );
};

export default App;
