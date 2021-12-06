import { useEffect, useState } from 'react';
import Personaje from './Personaje';
import { notifyToast, notifyToastError } from './Toasts';

function PintarDatos({ nombrePersonaje }) {

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        consumirApi(nombrePersonaje);
    }, [nombrePersonaje]);

    const consumirApi = async (nombre) => {
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
            );

            if (!res.ok) {
                notifyToastError('NO ENCONTRADO');
            }

            const data = await res.json();
            console.log(data.results);

            setPersonajes(data.results)

        } catch (e) {
            notifyToastError(e);
        }
    };

    return (
        <div className="personajes-section">

            {
                personajes.map((item) => (
                    <Personaje key={item.id} character={item} />
                ))
            }

        </div>
    ) 
    
}

export default PintarDatos;
