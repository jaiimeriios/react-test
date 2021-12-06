import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import PintarDatos from "./PintarDatos";

function Main() {

    const [nombrePersonaje, setNombrePersonaje] = useState('')

    useEffect(() => {
        if (localStorage.getItem('nombreApi')) {
            setNombrePersonaje(JSON.parse(localStorage.getItem('nombreApi')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('nombreApi', JSON.stringify(nombrePersonaje))
    }, [nombrePersonaje])

    return (
        <main>
            <Formulario setNombrePersonaje={setNombrePersonaje} />
            <PintarDatos nombrePersonaje={nombrePersonaje} />
        </main>
    );
}

export default Main;