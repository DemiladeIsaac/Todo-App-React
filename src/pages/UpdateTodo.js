import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, onValue, update } from "firebase/database";
import database from "../util/firebase";

import classes from "./UpdateTodo.module.css";

function UpdateTodo() {
  const params = useParams();
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const titleInputRef = useRef();

  function backHandler() {
    navigate("/", { replace: true });
  }

  function updateHandler() {
    update(ref(database, "todo/" + params.id), {
      title: titleInputRef.current.value,
    });
    navigate("/", { replace: true });
  }

  useEffect(() => {
    const todoRef = ref(database, "todo/" + params.id);
    onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const title = data.title;
        setTodo(title);
      }
    });
  }, [params.id]);

  return (
    <form className={classes.control} onSubmit={updateHandler}>
      <div className={classes.form}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          ref={titleInputRef}
          required
        />
      </div>
      <div className={classes.actions}>
        <button className={classes.actBtn} onClick={backHandler} type="button">
          Back
        </button>
        <button className={classes.actBtn}>Update Todo</button>
      </div>
    </form>
  );
}

export default UpdateTodo;
