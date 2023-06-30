import React from "react";

import TodoItem from "../components/todos/TodoItem";

const Todos = () => {
  return (
    <section className="container mx-auto mt-5">
      <section>
        <h1 className="font-display text-3xl">Today's Tasks</h1>
        <div className="border-b h-1 my-5"></div>
        <div className="mb-5">
          <select className="border py-2 px-2 rounded">
            <option value="">New</option>
            <option value="">Completed</option>
            <option value="">Cancelled</option>
          </select>
        </div>
        <div className="grid grid-cols-12">
          {new Array(10).fill("", 0, 10).map((item, index) => {
            return (
              <TodoItem
                title="Watch Spiderman"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                velit quos voluptatibus eius fugit. Provident, quisquam saepe fuga
                dolor enim accusantium, qui, unde atque asperiores doloremque
                voluptatibus nihil ratione molestiae."
                status="Pending"
              />
            );
          })}
          <TodoItem
            title="Watch Spiderman and watch secret invastion"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                velit quos voluptatibus eius fugit. Provident, quisquam saepe fuga
                dolor enim accusantium, qui, unde atque asperiores doloremque
                voluptatibus nihil ratione molestiae."
            status="Pending"
          />
        </div>
      </section>
    </section>
  );
};

export default Todos;
