import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Redirect root path "/" to "/users" */}
        <Route exact path="/" render={() => <Redirect to="/users" />} />
        <Route exact path="/users" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
