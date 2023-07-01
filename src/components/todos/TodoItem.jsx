import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TodoItem = ({ id, title, description, status }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/todos/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="col-span-4 border p-5 rounded shadow hover:shadow-lg"
    >
      <h2 className="font-display text-2xl mb-5 truncate">{title}</h2>
      <p className="font-thin mb-5 truncate">{description}</p>
      <p className="uppercase font-semibold">{status}</p>
    </div>
  );
};

export default TodoItem;
