import React, { useState, useRef, useEffect } from 'react'
import logo from './logo.svg'
import TodoList from './Todolist'
// import uuidv4 from 'uuid/v4'
import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

const App = () => {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos)
      setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo (id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value

    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClear () {
    const newTodos =  todos.filter(todo => !todo.complete)
    setTodos(newTodos) 
  }


  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClear}>Clear Todo</button>
      <div>{todos.filter(todo => !todo.complete).length} left ToDos</div>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App
