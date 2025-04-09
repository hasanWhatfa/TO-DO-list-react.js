
const TodoCard = (props) => {
    const {children ,toDOINDEX,handleDeletTodo,handleUpdateTodo} = props;
  return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button onClick={()=>handleUpdateTodo(toDOINDEX)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDeletTodo(toDOINDEX)}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
  )
}

export default TodoCard
