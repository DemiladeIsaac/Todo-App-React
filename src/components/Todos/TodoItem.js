//import database from "../../util/firebase";
import { ref, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";
import database from "../../util/firebase";

function TodoItem(props) {
  const navigate = useNavigate();

  function clickHandler() {
    navigate(`/update-todo/${props.id}`, { replace: true });
  }

  function deleteTodo() {
    //const db = getDatabase();
    remove(ref(database, "todo/" + props.id)).then(() =>
      window.location.reload()
    );
  }

  return (
    <div className="center">
      <div className="card">
        <h1>{props.title}</h1>
        <div className="actions">
          <button className="btn" onClick={deleteTodo}>
            Delete
          </button>
          <button className="btn" onClick={clickHandler}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
