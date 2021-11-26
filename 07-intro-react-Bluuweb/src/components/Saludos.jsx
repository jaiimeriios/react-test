import Colores from "./Colores";

export const SaludoBienvenida = () => {
    return <h2 className={Colores.texto.success}>Hola ✋</h2>;
};
export const SaludoDespedida = () => {
    return <h2 className={Colores.texto.danger}>Adios 👋</h2>;
};
