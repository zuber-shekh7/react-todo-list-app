import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="">
      <h1 className="font-display text-4xl">Not Found</h1>
      <Link to="/">
        <span className="font-display">Go to Home</span>
      </Link>
    </section>
  );
};

export default NotFound;
