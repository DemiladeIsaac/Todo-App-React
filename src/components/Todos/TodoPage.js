import TodoItem from "./TodoItem";

function TodoPage(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <TodoItem key={task.id} id={task.id} title={task.title} />
      ))}
    </ul>
  );
}

export default TodoPage;
