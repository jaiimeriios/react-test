import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <label className="todo-label">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
      />
      {todo.name}
    </label>
  )
}

export default Todo
