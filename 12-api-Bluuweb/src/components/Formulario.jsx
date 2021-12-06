import { useFormulario } from '../hooks/useFormulario';
import { notifyToast, notifyToastError } from './Toasts';

function Formulario({ setNombrePersonaje }) {
    const [inputs, handleChange, reset] = useFormulario({
        nombre: '',
    });

    const { nombre } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre.trim().toLowerCase());

        if (nombre.trim() === '') {
            notifyToastError('ponle algo')
            return;
        }

        // notifyToast(`Buscando a ${nombre}`);
        setNombrePersonaje(nombre.trim().toLowerCase());
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                autoComplete="off"
                placeholder="personaje"
                name="nombre"
                value={nombre}
                onChange={handleChange}
            />

            <button type="submit">Buscar</button>
        </form>
    );
}

export default Formulario;
