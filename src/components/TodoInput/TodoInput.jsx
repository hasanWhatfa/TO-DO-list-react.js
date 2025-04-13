import { useState } from "react";

const TodoInput = (props) => {
    // Destructure props received from App component
    const { handleAddTodo, todoValue, setTodoValue } = props;

    return (
        <header>
            <input 
                type="text" 
                placeholder="Enter todo...." 
                value={todoValue} 
                onChange={(e) => {
                    // Update the input value in state as user types
                    setTodoValue(e.target.value)
                }}
            />
            
            <button onClick={() => {
                // Prevent adding an empty todo
                if (todoValue === '') {
                    // Optionally: could show a warning or shake animation here
                } else {
                    // Add the new todo and reset the input field
                    handleAddTodo(todoValue);
                    setTodoValue('')
                }
            }}>
                Add
            </button>
        </header>
    )
}

export default TodoInput
