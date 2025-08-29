import { useState } from 'react'
import {v4 as uuid} from 'uuid';
import TodoList from './TodoList.jsx';
import CompletedTodos from './CompletedTodos.jsx';
import AddTodo from './AddTodo.jsx';

const seedTodos = [
  {
    id: uuid(),
    title: 'Senior Design Meeting',
    description: 'Finish assigned tasks from prevoius week\'s meeting',
    due: '03/7/2025',
    completed: false
  },
  {
    id: uuid(),
    title: 'Study for CS521 Midterm',
    description: 'Study chapters 1-3 in textbook to prepare for the midterm',
    due: '03/12/2025',
    completed: false
  },
  {
    id: uuid(),
    title: 'Schedule dentist appointment',
    description: 'Call the dentist to book an appointment',
    due: '03/13/2025',
    completed: false
  },
  {
    id: uuid(),
    title: 'CS554 Lab 4',
    description: 'Complete CS554 Lab 4: A Simple React Todo App, by midnight',
    due: '03/14/2025',
    completed: false
  },
  {
    id: uuid(),
    title: 'Submit CA hours',
    description: 'Gather and submit all necessary documents',
    due: '03/15/2025',
    completed: false
  },
  {
    id: uuid(),
    title: 'Renew gym membership',
    description: 'Renew the monthly gym membership before it expires',
    due: '03/16/2025',
    completed: false
  },
  {
    id: uuid(),
    title: 'CS615 HW4',
    description: 'Complete CS615 HW4: capturing DNS traffic, by 4:00 PM',
    due: '03/17/2025',
    completed: false
  },
  {
    id: uuid(),
    title: 'Call mom',
    description: 'Catch up with mom over a phone call',
    due: '03/18/2025',
    completed: false
  },
  {
    id: uuid(),
    title: 'Organize workspace',
    description: 'Declutter and organize the home office space',
    due: '03/19/2025',
    completed: false
  },
  {
    id: uuid(),
    title: 'Read a book',
    description: 'Start reading a new book this month',
    due: '03/20/2025',
    completed: false
  }
];

function App() {
  const [todos, setTodos] = useState(seedTodos);

  const deleteTodo = (id) => {
    setTodos(todos.filter((td) => td.id !== id));
  };

  const toggleCompleted = (todo) => {
    setTodos(todos.map((td) => td.id === todo.id ? {...td, completed: !td.completed} : td));
  };

  const addTodo = (title, description, due) => {
    const todo = {
      id: uuid(),
      title: title,
      description: description,
      due: due,
      completed: false
    }

    setTodos([...todos, todo])
  }

  return (
    <>
      <AddTodo
        addTodo={addTodo}
      />
      <TodoList 
        todos={todos}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
      <CompletedTodos
        todos={todos}
        toggleCompleted={toggleCompleted}
      />
    </>
  )
}

export default App
