import { useState } from "react";

const TodoCard = (props) => {
  const { children, toDOINDEX, handleDeletTodo, handleUpdateTodo, checked: initialChecked, todos, setTodos } = props;
  const [checked, setChecked] = useState(initialChecked);

  const toggleChecked = () => {
    const updatedTodos = [...todos];
    updatedTodos[toDOINDEX].checked = !checked;
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify({ todos: updatedTodos }));
    setChecked(!checked);
  }

  return (
    <li className="todoItem">
      <span onClick={toggleChecked} className={`${checked ? "checkedSpan" : ''}`}>
        <i className={`fa-regular ${checked ? "fa-square-check" : "fa-square"}`}></i>
      </span>
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleUpdateTodo(toDOINDEX)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeletTodo(toDOINDEX)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}

export default TodoCard;
