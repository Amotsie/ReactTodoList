import React, { useState, createContext, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  //Holds the list of all the todo's [{id, tittlt}]
  const [task, setTask] = useState(initialState);

  //to be used by the todo form inputs in creating new todo tasks.
  const [todo, setTodo] = useState({
    id: uuid(),
    tittle: "",
    editItem: false,
  });

  //Strore to local storage when there is (new task || edit task) changes to the state.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(task));
  }, [task]);

  //for item added alert
  const [alert, setAlert] = useState({ add: false, edit: false });

  return (
    <TodoContext.Provider
      value={[todo, setTodo, task, setTask, alert, setAlert]}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
