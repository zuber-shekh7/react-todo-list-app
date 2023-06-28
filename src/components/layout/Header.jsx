import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <h1 className="title">todoApp</h1>
      </div>
      <div className="right">
        <h1 className="title">Login</h1>
        <h1 className="title">Signup</h1>
      </div>
    </header>
  );
};

export default Header;
