import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="container mx-auto">
      <section className="flex justify-between items-center py-5">
        {/* LEFT */}
        <section>
          <h1 className="font-display text-4xl">todoApp</h1>
        </section>
        {/* RIGHT */}
        <section className="flex justify-around gap-2">
          <Link className="hover:underline" to="/">
            <span className="font-display">Home</span>
          </Link>
          <Link className="hover:underline" to="/login">
            <span className="font-display">Login</span>
          </Link>
          <Link className="hover:underline" to="/register">
            <span className="font-display">Register</span>
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Header;
