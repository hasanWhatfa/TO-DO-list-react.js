import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import './App.css';
import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue , setTodoValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModeReady, setIsModeReady] = useState(false); // ⬅️ حالة تحميل الوضع

  const storeData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({
      todos: newList
    }));
  }

  const handleAddTodo = (newTodo) => {
    const newTodoObject = { text: newTodo, checked: false };
    const newTodos = [...todos, newTodoObject];
    storeData(newTodos);
    setTodos(newTodos);
  }

  const handleDeletTodo = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    storeData(newTodos);
    setTodos(newTodos);
  }

  const handleUpdateTodo = (index) => {
    const updatedTodo = todos[index];
    setTodoValue(updatedTodo.text);
    handleDeletTodo(index);
  }

  // read todos from storage
  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos.todos);
    }
  }, []);

  // read mode from storage (once)
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    setIsModeReady(true); // ⬅️ صار جاهز
  }, []);

  // save mode to storage
  useEffect(() => {
    if (isModeReady) {
      localStorage.setItem('darkMode', isDarkMode);
    }
  }, [isDarkMode, isModeReady]);

  // apply class to body
  useEffect(() => {
    if (!isModeReady) return;
    if (isDarkMode) {
      document.body.classList.add("darkMode");
      document.body.classList.remove("lightMode");
    } else {
      document.body.classList.add("lightMode");
      document.body.classList.remove("darkMode");
    }
  }, [isDarkMode, isModeReady]);

  if (!isModeReady) return null;

  return (
    <div className={`newMainContainer ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
      <button onClick={() => setIsDarkMode(!isDarkMode)} id="darkModeToggler">
        <i className="fa-solid fa-circle-half-stroke"></i> : {isDarkMode ? 'Dark Mode' : "Light Mode"}
      </button>

      <TodoInput 
        handleAddTodo={handleAddTodo} 
        todoValue={todoValue} 
        setTodoValue={setTodoValue}
      />

      <div className="ProgressShow">
        <p>
          {todos.filter(todo => todo.checked).length} / {todos.length} done
        </p>
      </div>

      <p id='goodJob' className={`gootJob ${todos.length === todos.filter(todo => todo.checked).length ? 'goodJobShow' : ''}`}>
        Good Job! <br />You have done everything today
      </p>

      <TodoList  
        todos={todos} 
        setTodos={setTodos}
        handleDeletTodo={handleDeletTodo} 
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default App;
