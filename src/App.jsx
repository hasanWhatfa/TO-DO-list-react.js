import TodoInput from "./components/TodoInput/TodoInput"
import TodoList from "./components/TodoList/TodoList"
import './App.css'
import { useEffect, useState } from "react";

const App = () => {

  // Declare state to keep track of all todos in the list
  // Starts empty, but will be updated as user adds/removes items
  const [ todos, setTodos] = useState([]);

  // State to hold the current value of the input field (i.e., what user is typing)
  const [todoValue , setTodoValue] = useState('');

  // Function to save the updated todo list to localStorage
  // This allows the app to persist data even after page reloads
  const storeData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({
      todos: newList
    }))
  }

  // Adds a new todo item to the list
  // It creates a new array with the old todos + the new one
  // Updates both the UI and localStorage
  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    storeData(newTodos);
    setTodos(newTodos);
  }

  // Handles deletion of a todo based on its index in the array
  // Filters out the todo that matches the index and updates state/localStorage
  const handleDeletTodo = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    })
    storeData(newTodos);
    setTodos(newTodos);
  }

  // Handles updating a todo:
  // 1. Gets the selected todo value by its index
  // 2. Fills the input field with that value for editing
  // 3. Deletes the old version from the list (to be replaced after editing)
  const handleUpdateTodo = (index) => {
    const updatedTodo = todos[index];
    setTodoValue(updatedTodo); // show it in input
    handleDeletTodo(index);    // remove old version
  }

  // On component mount, fetch stored todos from localStorage (if any) and load into state
  // This helps persist the list between page refreshes
  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos.todos)
    }
    else return
  }, [])

  // Render the input field and the todo list
  // Pass down necessary state and functions as props
  return (
    <>
      <TodoInput 
        handleAddTodo={handleAddTodo} 
        todoValue={todoValue} 
        setTodoValue={setTodoValue}
      />
      <TodoList  
        todos={todos} 
        handleDeletTodo={handleDeletTodo} 
        handleUpdateTodo={handleUpdateTodo}
      />
    </>
  )
}

export default App
