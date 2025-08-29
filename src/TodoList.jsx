function TodoList(props) {
  const uncompletedTodos = props.todos.filter((todo) => todo.completed === false);
  
  const renderedTodos = uncompletedTodos.map((todo) => {
    const onDeleteClick = () => {
      props.deleteTodo(todo.id);
    }
    const onCompleteClick = () => {
      props.toggleCompleted(todo);
    }

    return (
      <div className="container">
        <h1 className={Date.parse(todo.due) < new Date().setDate(new Date().getDate()-1) ? "due" : ""} >{todo.title}</h1>
        <p>{todo.description}</p>
        <p className={Date.parse(todo.due) < new Date().setDate(new Date().getDate()-1) ? "due" : ""}>Due Date: {todo.due}</p>
        <p>Completed: No</p>
        <button onClick={onDeleteClick}>Delete</button>
        <button onClick={onCompleteClick}>Complete</button>
      </div>
  )});

  return renderedTodos;
};

export default TodoList;