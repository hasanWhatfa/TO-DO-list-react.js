import { useState } from "react";

const TodoInput = (props) => {
    const { handleAddTodo, todoValue, setTodoValue } = props;

    return (
        <header>
            <input 
                type="text" 
                placeholder="Enter todo...." 
                value={todoValue} 
                onChange={(e) => {
                    setTodoValue(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && todoValue !== '') {
                      handleAddTodo(todoValue);
                      setTodoValue('');
                    }
                  }}
            />
            
            <button onClick={() => {
                if (todoValue === '') {
                    // could show a warning
                } else {
                    handleAddTodo(todoValue);
                    setTodoValue('')
                }
            }}>
                Add
            </button>
        </header>
    )
}

export default TodoInput;
