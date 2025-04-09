import TodoInput from "./components/TodoInput/TodoInput"
import TodoList from "./components/TodoList/TodoList"
import './App.css'
import { useEffect, useState } from "react";
const App = () => {
    // use useState whenever you are defining a variable that the user gonna interact with, like the list will be 
  // modified when the users REACTs with ===== defeault value is NULL
  const [ todos, setTodos] = useState([]);
  const [todoValue , setTodoValue] = useState('');

  const storeData = (newList) =>{
    localStorage.setItem('todos',JSON.stringify({
      todos: newList
    }))
  }



  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos,newTodo];
    storeData(newTodos);
    setTodos(newTodos);
  }


  //this func will be sent to the TodoList Comp ,  and then we will pass all the props to TodoCard comp
  // now TodoCard have the handleDeletTodo function and can access it easily
  const handleDeletTodo = (index) =>{
    const newTodos = todos.filter( (todo, todoIndex) =>{
      return todoIndex !== index;
    })
    storeData(newTodos);
    setTodos(newTodos);
  }
  
  const handleUpdateTodo = (index) =>{
    const updatedTodo = todos[index];
    setTodoValue(updatedTodo);
    handleDeletTodo(index);
  }

  useEffect(()=>{
    let storedTodos = JSON.parse(localStorage.getItem('todos'));
    if(storedTodos){
      setTodos(storedTodos.todos)
    }
    else return
  },[])
  return (
    <>
      <TodoInput handleAddTodo = {handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList  todos= {todos} handleDeletTodo={handleDeletTodo} handleUpdateTodo={handleUpdateTodo}/>
    </>
  )
}

export default App

