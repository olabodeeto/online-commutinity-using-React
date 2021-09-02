import React from "react";
import { Switch, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import Signup from "./Signup";
import Login from "./Login";

export default function PublicPages() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}
