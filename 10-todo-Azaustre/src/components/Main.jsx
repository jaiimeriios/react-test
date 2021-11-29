import { useRef, useState, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const KEY = "todoApp.todos"

function Main() {
    const lista = [
        {
            id: '',
            task: '',
            completed: false,
        }
    ];

    const [todo, setTodo] = useState(lista);

    const todoTaskRef = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY))
        if (storedTodos) {
            setTodo(storedTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todo))
    }, [todo])

    const handleTodoAdd = (e) => {
        e.preventDefault()
        const value = todoTaskRef.current.value;
        if (value === '') return

        setTodo((prevTodo) => {
            return[
                ...prevTodo,
                {
                    id: uuidv4(),
                    task: value,
                    completed: false
                }
            ]
        })

        todoTaskRef.current.value = ''
    }


    const handleClearAdd = (e) => {
        e.preventDefault()
        const newTodos = todo.filter((todo) => !todo.completed)
        setTodo(newTodos)
    }



    const toggleTodo = (id) => {
        const newTodos = [...todo];
        const todos = newTodos.find((todo) => todo.id === id);
        todos.completed = !todos.completed;
        setTodo(newTodos)
    }


    return (
        <main>
            <form>
                <input
                    type="text"
                    name=""
                    placeholder="Agregar tarea"
                    ref={todoTaskRef}
                    key={todo.id}
                />
                <button
                    onClick={handleTodoAdd}
                >➕</button>
                <button
                    onClick={handleClearAdd}
                >🗑</button>
            </form>

            <p>Te quedan {todo.filter((todo) => !todo.completed).length} tareas por completar</p>
            
            <TodoList item={todo} toggle={toggleTodo} key={todo.id} />
        </main>
    );
}

export default Main;
