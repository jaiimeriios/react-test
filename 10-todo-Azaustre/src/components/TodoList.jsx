import TodoItem from './TodoItem';

function TodoList({ item, toggle }) {
    return (
        <ul className="todo-list">
            {item.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggle={toggle}
                />
            ))}
        </ul>
    );
}

export default TodoList
