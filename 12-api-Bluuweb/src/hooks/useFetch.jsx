import { useEffect, useState } from 'react';
import { notifyToast, notifyToastError } from '../components/Toasts';

export const useFetch = (nombre) => {

    const [personajes, setPersonajes] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        consumirApi(nombre);
    }, [nombre]);

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

    return [personajes, loading];
}
