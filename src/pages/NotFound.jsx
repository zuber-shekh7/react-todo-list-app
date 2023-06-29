import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="container mx-auto mt-5">
      <section className="flex justify-center">
        <div>
          <h1 className="text-center font-display text-7xl mb-5">Not Found</h1>
          <p className="italic mb-5">
            Looks like you are lost. Click on Home to reach Home.
          </p>
          <div className="text-center mt-2">
            <Link className="px-4 py-3 bg-black text-white rounded" to="/">
              <span className="font-display text-2xl">Go to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NotFound;
