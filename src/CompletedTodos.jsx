function CompletedTodos(props) {
  const completedTodos = props.todos.filter((todo) => todo.completed === true);
  
  const renderedTodos = completedTodos.map((todo) => {
    const onCompleteClick = () => {
      props.toggleCompleted(todo);
    }

    return (
      <div className="container">
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <p>Due Date: {todo.due}</p>
        <p>Completed: Yes</p>
        <button onClick={onCompleteClick}>Mark Incomplete</button>
      </div>
  )});

  return renderedTodos;
}

export default CompletedTodos;