import { useState } from "react";
import Formulario from "./Formulario";
import PintarDatos from "./PintarDatos";

function Main() {

    const [nombrePersonaje, setNombrePersonaje] = useState('')

    return (
        <main>
            <Formulario setNombrePersonaje={setNombrePersonaje} />
            <PintarDatos nombrePersonaje={nombrePersonaje} />
        </main>
    );
}

export default Main;