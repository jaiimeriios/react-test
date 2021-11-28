import { useState } from 'react';
import Formulario from './Formulario';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const agregarTodo = (todo) => {
        console.log(todo);
        setTodos((old) => [...old, todo]);
    };
    return (
        <>
            <Formulario agregarTodo={agregarTodo} />

            {2 < 1 ? <p>asdf</p> : ''}

            <ul className="todo-list">
                {todos.map((item) => (
                    <Todo key={item.id} todo={item} />
                ))}
            </ul>
        </>
    );
}

export default TodoList;
