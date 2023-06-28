import React from "react";
import { Button } from "../components/common";
import { TodoItem } from "../components/todo";

const Home = () => {
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <h2 className="welcome-message">Welcome Kabir</h2>
        <Button text={"Add todo"} />
      </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {new Array(10).fill("empty", 0, 10).map((item, index) => {
          return <TodoItem />;
        })}
      </section>
    </>
  );
};

export default Home;
