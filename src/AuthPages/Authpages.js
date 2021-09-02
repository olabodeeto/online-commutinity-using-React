import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile";
import Circle from "./Circle";
import PostformProvider from "../store/PostformProvider";

export default function Authpages() {
  return (
    <>
      <PostformProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/circle" component={Circle} />
        </Switch>
      </PostformProvider>
    </>
  );
}
