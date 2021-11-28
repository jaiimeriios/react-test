import { useState } from 'react';

function Formulario() {
    const [todo, setTodo] = useState({
        todoName: '',
        todoText: '',
        todoEstado: 'pendiente',
        todoCheck: false,
    });

    const [errorNombre, setErrorNombre] = useState(false);
    const [errorTexto, setErrorTexto] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);

        const { todoName, todoText } = todo;


        // simple validation
        if (!todoName.trim() && !todoText.trim()) {
            setErrorNombre(true);
            setErrorTexto(true);
            console.log('⭕⭕');
        } else if (!todoName.trim() && todoText.trim()) {
            setErrorNombre(true);
            setErrorTexto(false);
            console.log('⭕🌲');
        } else if (todoName.trim() && !todoText.trim()) {
            setErrorNombre(false);
            setErrorTexto(true);
            console.log('🌲⭕');
        } else {
            setErrorNombre(false);
            setErrorTexto(false);
            console.log('🌲🌲');
        }
    };

    const PintarError = () => {
        return (
            <div className="alert-danger">
                <p>campo obligatorio</p>
            </div>
        );
    };

    const handleChange = (e) => {
        console.log(e.target.value);

        // setTodo({
        //     ...todo,
        //     [e.target.name]: e.target.value,
        // });

        // setTodo((prev) => ({
        //     ...prev,
        //     [e.target.name]:
        //         e.target.type === 'checkbox'
        //             ? e.target.checked
        //             : e.target.value,
        // }));

        const { name, type, checked, value } = e.target;

        setTodo((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <>
            <form className="no-controlado" onSubmit={handleSubmit}>
                <h2>Formulario</h2>

                <input
                    type="text"
                    name="todoName"
                    placeholder="Ingrese Tarea"
                    value={todo.todoName}
                    onChange={handleChange}
                />

                {errorNombre ? <PintarError /> : null}

                <textarea
                    name="todoText"
                    placeholder="Ingresar descripcion de tarea"
                    value={todo.todoText}
                    onChange={handleChange}
                />

                {errorTexto && <PintarError />}

                <select
                    name="todoEstado"
                    value={todo.todoEstado}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <label htmlFor="check">checkbox</label>
                <input
                    type="checkbox"
                    id="check"
                    name="todoCheck"
                    checked={todo.todoCheck}
                    onChange={handleChange}
                />

                {/* <input type="file" name="" id="" /> */}

                <button type="submit">Agregar</button>
            </form>
        </>
    );
}

export default Formulario;
