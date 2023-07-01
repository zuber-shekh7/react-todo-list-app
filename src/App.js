import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { Header } from "./components/layout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Todos from "./pages/Todos";
import TodoInfo from "./pages/TodoInfo";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mx-auto">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/todos">
            <Todos />
          </Route>
          <Route exact path="/todos/:id">
            <TodoInfo />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
