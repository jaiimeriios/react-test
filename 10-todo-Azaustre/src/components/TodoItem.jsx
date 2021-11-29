function TodoItem({todo,toggle}) {

    const {id, task, completed} = todo

    const handleToggleClick = () => {
        toggle(id)
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleToggleClick}
            />
            {task}

        </li>
    );
}

export default TodoItem