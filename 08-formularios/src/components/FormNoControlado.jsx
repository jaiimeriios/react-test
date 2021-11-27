import { useRef } from 'react';

function FormNoControlado() {
    const formulario = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const datos = new FormData(formulario.current);
        const objetoDatos = Object.fromEntries([...datos.entries()]);

        // lo mismo desestructurado
        // if (!objetoDatos.todoName.trim() || !objetoDatos.todoText.trim()) {
        // console.log(objetoDatos);

        const { todoName, todoText } = objetoDatos;
        if (!todoName.trim() || !todoText.trim()) {
            console.log('❌');
            return;
        }

        console.log('✅');
    };

    return (
        <>
            <form
                className="no-controlado"
                ref={formulario}
                onSubmit={handleSubmit}
            >
                <h2>No Controlado</h2>
                <input
                    type="text"
                    name="todoName"
                    placeholder="Ingrese Tarea"
                    defaultValue="Tarea"
                />
                <textarea
                    name="todoText"
                    placeholder="Ingresar descripcion de tarea"
                    defaultValue="Descripcion Tarea 1"
                />
                <select name="todoEstado" defaultValue="pendiente">
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <button type="submit">Agregar</button>
            </form>
        </>
    );
}

export default FormNoControlado;
