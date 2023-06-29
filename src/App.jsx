import React from "react";
import { Header, Sidebar } from "./components/layout";

import "./App.css";

import { Button } from "./components/common";
import { TodoItem } from "./components/todo";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        {/* <Home /> */}
        <Login />
      </main>
    </div>
  );
};

export default App;
