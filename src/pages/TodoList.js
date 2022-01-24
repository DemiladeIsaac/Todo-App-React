import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoPage from "../components/Todos/TodoPage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { CradleLoader } from "react-loader-spinner";
import classes from "./TodoList.module.css";

function TodoList() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setTodo] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setInterval(() => {
      fetch("https://todo-app-6b4f6-default-rtdb.firebaseio.com/todo.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const todos = [];

          for (const key in data) {
            const todo = {
              id: key,
              ...data[key],
            };
            todos.push(todo);
          }
          setIsLoading(false);
          setTodo(todos);
        });
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className={classes.center}>
        <CradleLoader
          type="ThreeDots"
          heigth="100"
          width="100"
          color="grey"
          arialLabel="loading"
        />
      </div>
    );
  }

  return (
    <div>
      <h1>
        My TODOS
        <span className="link">
          <Link to="/add-todo">Add Todo</Link>
        </span>
      </h1>
      <TodoPage tasks={loadedTodos} />
    </div>
  );
}

export default TodoList;
