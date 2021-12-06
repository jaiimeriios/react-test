import { useEffect, useState } from 'react';
import Loading from './Loading';
import Personaje from './Personaje';
import { notifyToast, notifyToastError } from './Toasts';

function PintarDatos({ nombrePersonaje }) {

    const [personajes, setPersonajes] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        consumirApi(nombrePersonaje);
    }, [nombrePersonaje]);

    const consumirApi = async (nombre) => {
        setLoading(true)
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}`
            );

            if (!res.ok) {
                notifyToastError('NO ENCONTRADO');
                return
            }

            const data = await res.json();
            console.log(data.results);

            setPersonajes(data.results)

        } catch (e) {
            notifyToastError(e);
        } finally {
            setLoading(false)
            notifyToast(`${nombre} Encontrado`)
        }
    };

    if(loading) {
        return <Loading />
    }
    
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
