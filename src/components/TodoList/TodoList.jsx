import TodoCard from "../TodoCard/TodoCard";

const TodoList = (props) => {
    // Receive the full list of todos as well as handlers from App
    const { todos } = props;
    return (
        <div>
            <ul className="main">
                {/* Loop over todos and render each inside a TodoCard component */}
                {todos.map((todo, todoIndex) => {
                    return (
                        // Spread props to pass down handlers (delete, update)
                        // Also send index to help identify the todo
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
// <i class="fa-regular fa-square-check"></i>
// <i class="fa-regular fa-square"></i>
