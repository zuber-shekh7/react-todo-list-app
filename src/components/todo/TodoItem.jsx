import React from "react";

import "./TodoItem.css";

const TodoItem = ({ key, value }) => {
  return (
    <div className="box">
      <h3 className="todo-title">Title</h3>
      <p className="todo-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iusto
        cupiditate cum harum dolorum voluptate suscipit neque, sapiente
        voluptates rerum doloremque illum facilis perferendis totam id quibusdam
        mollitia quos nulla.
      </p>
      <h4 className="todo-status">Pending</h4>
    </div>
  );
};

export default TodoItem;
