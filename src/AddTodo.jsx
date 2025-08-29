function AddTodo(props) {
  const formSubmit = (e) => {
    e.preventDefault();

    const form = document.getElementById('form');
    const error = document.getElementById('error');
    const errorMessage = document.getElementById('error-message');

    const title = document.getElementById('title').value.trim();
    if(title.length < 5) {
      errorMessage.innerHTML = "Invalid title!";
      error.hidden = false;
      return;
    }

    const description = document.getElementById('description').value.trim();
    if(description.length < 25) {
      errorMessage.innerHTML = "Invalid description!";
      error.hidden = false;
      return;
    }

    let due = document.getElementById('due').value.trim();

    const [year, month, day] = due.split('-');
    due = `${month}/${day}/${year}`

    const today = new Date().setHours(0,0,0,0);
    const dueDate = new Date(due).setHours(0,0,0,0);

    if(dueDate < today) {
      errorMessage.innerHTML = "Invalid date!";
      error.hidden = false;
      return;
    }

    error.hidden = true;

    props.addTodo(title, description, due);

    form.reset();
  }

  return (
    <form id="form" onSubmit={formSubmit} className="container">
      <label>
        Title:
        <input id="title" name="title" type="text" required/>
      </label>
      <br />
      <label>
        Description:
        <input id="description" name="description" type="textarea" required/>
      </label>
      <br />
      <label>
        Due:
        <input id="due" name="due" type="date" min={new Date().toISOString().substring(0,10)} required/>
      </label>
      <br />
      <input type="submit" value="submit"/>
      <div id="error" class="error" hidden>
        <span>Error: </span>
        <span id="error-message"></span>
      </div>
    </form>
  )
}

export default AddTodo;