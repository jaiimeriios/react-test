
import { useFetch } from '../hooks/useFetch';
import Loading from './Loading';
import Personaje from './Personaje';

function PintarDatos({ nombrePersonaje }) {

    const [personajes, loading] = useFetch(nombrePersonaje);

    return (             
        <div className="personajes-section">
            {
                loading
                ?
                <Loading />
                :
                personajes.map((item) => (
                    <Personaje key={item.id} character={item} />
                ))
            }
        </div>
    ) 
    
}

export default PintarDatos;
