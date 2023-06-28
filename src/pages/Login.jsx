import React from "react";

import "./Login.css";
import { Button } from "../components/common";

const Login = () => {
  return (
    <section className="wrapper">
      <section className="login-container">
        <div>
          <h1 className="form-title">Login</h1>
        </div>
        <div className="form-control">
          <label className="label" style={{ display: "block" }} htmlFor="">
            Email
          </label>
          <input
            className="input"
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              borderWidth: "0.1px",
            }}
            type="email"
            name=""
            id=""
            placeholder="baburao@example.com"
          />
        </div>
        <div className="form-control">
          <label className="label" style={{ display: "block" }} htmlFor="">
            Password
          </label>
          <input
            className="input"
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              borderWidth: "0.1px",
            }}
            type="password"
            name=""
            id=""
            placeholder="kisikobolnekanai"
          />
        </div>
        <div className="form-control">
          <Button text="Login" />
        </div>
      </section>
    </section>
  );
};

export default Login;
