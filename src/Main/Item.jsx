import React from "react";

function Item({ todo, index, onChange, onRemove }) {
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li>
      <span className={classes.join('')}>
        <button
          type="button"
          placeholder="Mark if done"
          className="check"
          checked={todo.completed}
          onClick={() => onChange(todo.id)}
        >
          {index + 1}
        </button>
        <div className="Task">{todo.title}</div>
        <button
        className="remove"
        type="button"
        title="Remove single task"
        onClick={() => onRemove(todo.id)}
      ></button>
      </span>
    </li>
  );
}

export default Item;
