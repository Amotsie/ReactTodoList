import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoProvider } from "./context/TodoContext";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center alert alert-secondary font-weight-bolder">
            Task Input
          </h3>
          <TodoProvider>
            <TodoInput />
            <TodoList />
          </TodoProvider>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
