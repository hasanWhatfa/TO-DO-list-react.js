import TodoCard from "../TodoCard/TodoCard";

const TodoList = (props) => {
    const {todos} = props;
  return (
    <div>
        <ul className="main">
            {todos.map((todo,todoIndex) => {
                return(
                    <TodoCard {...props} key={todoIndex} toDOINDEX={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoList
