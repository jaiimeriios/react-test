import { useFormulario } from '../hooks/useFormulario';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

function Formulario({ agregarTodo }) {

    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: false,
    };

    const [inputs, handleChange, reset] = useFormulario(initialState);
    const { nombre, descripcion, estado, prioridad } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            e.target[0].focus();
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
            return;
        }
        if (!descripcion.trim()) {
            e.target[0].focus();
            Swal.fire({
                title: 'Error!',
                text: 'No deje la descripcion en blanco',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
            return;
        }

        // Swal.fire({
        //     title: 'Exito!',
        //     text: 'Tarea Agregada',
        //     icon: 'success',
        //     confirmButtonText: 'Ok',
        // });

        console.log('Agregado 🌲')


        // funcion que viene de TodoList
        agregarTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === 'pendiente' ? false : true,
            prioridad: prioridad,
            id: uuidv4()
        });


        // Reiniciar Forma
        reset()
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Todo</h2>

            <input
                type="text"
                name="nombre"
                placeholder="Ingresar Tarea"
                autocomplete="off"
                value={nombre}
                onChange={handleChange}
            />

            <textarea
                name="descripcion"
                placeholder="Descripcion de Tarea"
                autocomplete="off"
                value={descripcion}
                onChange={handleChange}
            />

            <select
                name="estado"
                value={estado}
                onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <div className="checkbox-section">
                <label htmlFor="idCheckbox">Prioridad</label>
                <input
                    type="checkbox"
                    name="prioridad"
                    id="idCheckbox"
                    checked={prioridad}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Agregar Todo</button>
        </form>
    );
}

export default Formulario;
