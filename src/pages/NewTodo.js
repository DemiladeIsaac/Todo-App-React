import { useNavigate } from "react-router-dom";
import NewForm from "../components/Todos/NewForm";
import Card from "../components/ui/Card";

function NewTodo() {
  const navigate = useNavigate();

  function addTodo(data) {
    fetch("https://todo-app-6b4f6-default-rtdb.firebaseio.com/todo.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });

    //console.log(data);
  }

  function backHandler() {
    navigate("/", { replace: true });
  }

  return (
    <section>
      <h1>Add New Todo</h1>
      <Card>
        <NewForm onAdd={addTodo} backHandler={backHandler} />
      </Card>
    </section>
  );
}

export default NewTodo;
