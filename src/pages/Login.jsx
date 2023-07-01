import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  return (
    <section className="flex justify-center mt-10">
      <section className="border rounded w-4/12 p-5">
        <h1 className="text-center font-display text-5xl">Login</h1>
        <div className="h-1 border-b my-5"></div>
        <div className="mb-2">
          <label className="block mb-1 font-semibold" htmlFor="">
            Email
          </label>
          <input
            className="border py-2 px-4 rounded w-full"
            type="email"
            placeholder="baburao@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="">
            Password
          </label>
          <input
            className="border py-2 px-4 rounded w-full"
            type="password"
            placeholder="shayam kisiko batane ka nahi"
            required
          />
        </div>
        <div className="mb-2">
          <button className="px-5 py-2 rounded w-full bg-black text-white font-display text-xl">
            Login
          </button>
        </div>
        <div className="mb-2">
          <p className="text-center">
            Don't have an account ?{" "}
            <Link className="underline" to="/dashboard">
              Register
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Login;
