import { useRef } from "react";
import classes from "./NewForm.module.css";

function NewForm(props) {
  const titleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;

    const data = {
      title: enteredTitle,
    };

    props.onAdd(data);
  }

  return (
    <form className={classes.control} onSubmit={submitHandler}>
      <div className={classes.form}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required ref={titleInputRef} />
      </div>
      <div className={classes.actions}>
        <button className={classes.actBtn} onClick={props.backHandler}>
          Back
        </button>
        <button className={classes.actBtn}>Create Todo</button>
      </div>
    </form>
  );
}

export default NewForm;
