import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuid } from "uuid";

export default function TodoInput() {
  const [todo, setTodo, task, setTask, alert, setAlert] = useContext(
    TodoContext
  );

  const hadleChange = (e) => {
    setTodo({ ...todo, tittle: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.tittle === "") {
    } else {
      const newItem = {
        id: todo.id,
        tittle: todo.tittle,
      };
      setTask([...task, newItem]);
      setTodo({ id: uuid(), tittle: "", editItem: false });
      setAlert({ add: true, edit: false });
      setTimeout(() => setAlert({ add: false, edit: false }), 3000);
    }
  };

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book-open"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="type a todo task"
            value={todo.tittle}
            onChange={hadleChange}
          />
        </div>
        <button
          type="submit"
          className={
            todo.editItem
              ? "btn btn-block btn-success mt-3"
              : "btn btn-block btn-primary mt-3"
          }
        >
          {todo.editItem ? "Submit Changes" : "Add Item"}
        </button>
      </form>
    </div>
  );
}
