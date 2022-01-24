import Button from "./Button";
import classes from "./Form.module.css";

function Form({ title, name, setEmail, setPassword, handleAction }) {
  return (
    <div className={classes.card}>
      <h1>{name} Form</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button title={title} handleAction={handleAction} />
      </form>
    </div>
  );
}

export default Form;
