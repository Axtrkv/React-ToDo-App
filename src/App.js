import React from "react";
import AddBtn from "./Main/AddBtn";
import List from "./Main/List";

function App() {
  
  const [todos, setTodos] = React.useState([
    { id: 1, completed: true, title: "Add a Task" },
  ]);

  function toggleToDo(id) {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function onRemoveToDo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function onCreateToDo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  function ClearToDos (todos) {
    setTodos(todos = [])
  }

  return (
    <div className="App">
      <div className="header">To Do Application</div>
      <AddBtn onCreate={onCreateToDo} ClearAll={ClearToDos}/>
      {todos.length ? (
        <List todos={todos} onToggle={toggleToDo} onRemove={onRemoveToDo} />
      ) : (
        <h5>There are no ToDos left</h5>
      )}
    </div>
  );
}

export default App;
