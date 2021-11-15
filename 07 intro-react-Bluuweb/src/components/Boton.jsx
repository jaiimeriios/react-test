import { Fragment } from 'react/cjs/react.production.min';
import Colores from './Colores';

function Boton() {
    const regreso = (otro) => {
        console.log('👆');
    };
    const regresoParam = (otro) => {
        console.log(`✌ ${otro}`);
    };

    return (
        <Fragment>
            <button
                className={`btn btn-info ${Colores.texto.white}`}
                onClick={regreso}
            >
                normal
            </button>
            <button
                className="btn btn-primary ms-3"
                onClick={() => {
                    return regresoParam('👈');
                }}
            >
                Param
            </button>
            <button
                className="btn btn-success ms-3"
                onClick={() => (
                    regresoParam('🤙')
                )}
            >
                No Return
            </button>
        </Fragment>
    );
}

export default Boton;
