import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

export default function TodoList() {
  const [todo, setTodo, task, setTask, alert, setAlert] = useContext(
    TodoContext
  );

  const clearList = () => {
    if (window.confirm("Are you sure?")) {
      setTask([]);
    }
  };

  const handleDelete = (id) => {
    const freshItems = task.filter((item) => item.id !== id);
    //console.log(freshItems);
    setTask(freshItems);
  };

  const handleEdit = (id) => {
    const freshItems = task.filter((item) => item.id !== id);
    const selectedItem = task.find((item) => item.id === id);

    setTask(freshItems);
    setTodo({
      id: id,
      tittle: selectedItem.tittle,
      editItem: true,
    });
  };

  return (
    <ul className="list-group my-5">
      <h3
        className={
          alert.add
            ? "text-center alert alert-success"
            : "text-center alert alert-secondary font-weight-bolder"
        }
      >
        {alert.add ? "--New Task Adedd--" : "Task List"}
      </h3>
      {task.map((task) => (
        <TodoItem
          handleDelete={() => handleDelete(task.id)}
          handleEdit={() => handleEdit(task.id)}
          tittle={task.tittle}
          key={task.id}
        />
      ))}
      <button
        type="button"
        className="btn btn-danger btn-block mt-5"
        onClick={clearList}
      >
        Clear List
      </button>
    </ul>
  );
}
