import React from "react";
import Item from "./Item";

function List(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <Item
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
            onRemove={props.onRemove}
            ClearAll={props.ClearToDos}
          />
        );
      })}
    </ul>
  );
}

export default List;
