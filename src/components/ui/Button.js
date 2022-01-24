import classes from "./Button.module.css";

function Button({ title, handleAction }) {
  return (
    <div className={classes.actions}>
      <button className={classes.actBtn} onClick={handleAction}>
        {title}
      </button>
    </div>
  );
}

export default Button;
