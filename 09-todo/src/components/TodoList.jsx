import { useEffect, useState } from 'react';
import Formulario from './Formulario';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('todos')) {
            setTodos(JSON.parse(localStorage.getItem('todos')));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const agregarTodo = (todo) => {
        // console.log(todo);
        setTodos((old) => [...old, todo]);
    };

    const eliminarTodo = (id) => {
        setTodos((old) => old.filter((item) => item.id !== id));
    };

    const editarTodo = (id) => {
        const editarTodos = todos.map((item) =>
            item.id === id ? { ...item, estado: !item.estado } : item
        );

        setTodos(editarTodos);
    };
    return (
        <>
            <Formulario agregarTodo={agregarTodo} />

            <ul className="todo-list">
                {todos.map((item) => (
                    <Todo
                        key={item.id}
                        todoItem={item}
                        editarItem={editarTodo}
                        eliminarItem={eliminarTodo}
                    />
                ))}
            </ul>
        </>
    );
}

export default TodoList;
