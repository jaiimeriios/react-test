import Colores from './Colores';
import Frutas from './Frutas';
import Boton from './Boton';
import { SaludoBienvenida, SaludoDespedida } from './Saludos';
import Carros from './Carros';
import Contador from './Contador';

function Main() {
    const user = true;
    const lorem = 'lorem ipsum dolor sit amer';
    const carros = ['🚗', '🚓', '🚕', '🚙'];

    return (
        <main>
            <div className="container pt-5">
                <p className={Colores.texto.info}>{lorem}</p>
                {user ? <SaludoBienvenida /> : <SaludoDespedida />}
                <Frutas />
                <Carros carrosArr={carros} />
                <Boton />

                {/* HOOK - UseState */}
                <Contador />
            </div>
        </main>
    );
}

export default Main;
