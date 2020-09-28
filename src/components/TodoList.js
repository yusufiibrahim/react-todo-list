import React from "react";
// importing components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* ngirim data yang sudah diinput ke dalam list */}
        {filteredTodos.map((todo) => (
          // ngirim isi text yang di inputkan agar tampil di UI
          // dengan menggunakan object text
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
