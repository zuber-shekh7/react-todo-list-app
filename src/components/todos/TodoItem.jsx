import React from "react";

const TodoItem = ({ title, description, status }) => {
  return (
    <div className="col-span-4 border p-5 rounded shadow mb-5 mr-5 hover:shadow-lg">
      <h2 className="font-display text-2xl mb-5 truncate">{title}</h2>
      <p className="font-thin mb-5 truncate">{description}</p>
      <p className="uppercase font-semibold">{status}</p>
    </div>
  );
};

export default TodoItem;
