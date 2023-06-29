import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return (
    <section className="container mx-auto mt-5">
      <section className="flex justify-center">
        <div className="border w-8/12 text-center rounded p-5">
          <h1 className="font-display text-4xl">Home</h1>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            excepturi dolorem vero tempore omnis quo quia vel voluptates
            asperiores, accusantium voluptatibus corporis fugit aliquid
            molestias optio eligendi quibusdam ut quas rem architecto porro
            culpa sequi odio! Impedit incidunt, corrupti reiciendis nisi cum
            atque, nostrum veniam esse vel molestias animi quos?
          </p>
          <div className="text-center mt-5">
            <Link className="px-4 py-3 bg-black text-white rounded" to="/login">
              <span className="font-display text-2xl">Get Started</span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
