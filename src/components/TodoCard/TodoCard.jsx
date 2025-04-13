import { useState } from "react";

const TodoCard = (props) => {
    // Destructure the props: 
    // - children = todo text
    // - toDOINDEX = position in the array
    // - handleDeletTodo and handleUpdateTodo = actions
    const { children, toDOINDEX, handleDeletTodo, handleUpdateTodo } = props;
    const [checked,setChecked] = useState(false);
    return (
        <li className="todoItem">
            <span onClick={()=>setChecked(!checked)} className={`${checked ? "checkedSpan" : ''}`}><i className={`fa-regular ${checked ? "fa-square-check" : "fa-square"}`}></i></span>
            {/* Render the actual todo text */}
            {children}

            <div className="actionsContainer">
                {/* Update/Edit button: triggers edit functionality */}
                <button onClick={() => handleUpdateTodo(toDOINDEX)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                {/* Delete button: removes the todo */}
                <button onClick={() => handleDeletTodo(toDOINDEX)}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}

export default TodoCard
