import { useState, useEffect } from 'react';
import styled from 'styled-components';
import generarPassword from '../functions/generarPassword';

import {
    BotonIncrementar,
    BotonDisminuir,
    BotonCheck,
    BotonGenerar,
} from './Boton';

function Main() {
    const conf = {
        caracteres: 7,
        simbolos: true,
        numeros: true,
        mayusculas: true,
    };
    const [configuracion, setConfiguracion] = useState(conf);

    const maxCaracters = 20;
    const minCaracters = 5;
    const [disabledIncrementar, setDisabledIncrementar] = useState(false);
    const [disabledDisminuir, setDisabledDisminuir] = useState(false);

    const [passwordGenerado, setPasswordGenerado] = useState('');
    
    useEffect(() => {
        setPasswordGenerado(generarPassword(configuracion));
    }, [configuracion])

    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordGenerado(generarPassword(configuracion));
    };

    const incrementarCaracteres = () => {
        setConfiguracion((prevConf) => {
            const newConf = { ...prevConf };
            newConf.caracteres += 1;
            if (newConf.caracteres == maxCaracters) {
                setDisabledIncrementar(true);
            }
            if (newConf.caracteres >= minCaracters) {
                setDisabledDisminuir(false);
            }
            return newConf;
        });
    };

    const disminuirNumero = () => {
        setConfiguracion((prevConf) => {
            const newConf = { ...prevConf };
            newConf.caracteres -= 1;
            if (newConf.caracteres == minCaracters) {
                setDisabledDisminuir(true);
            }
            if (newConf.caracteres <= maxCaracters) {
                setDisabledIncrementar(false);
            }
            return newConf;
        });
    };

    const toggleSimbolos = () => {
        setConfiguracion((prevConf) => {
            const newConf = { ...prevConf };
            newConf.simbolos = !newConf.simbolos;
            return newConf;
        });
    };

    const toggleNumeros = () => {
        setConfiguracion((prevConf) => {
            const newConf = { ...prevConf };
            newConf.numeros = !newConf.numeros;
            return newConf;
        });
    };

    const toggleMayusculas = () => {
        setConfiguracion((prevConf) => {
            const newConf = { ...prevConf };
            newConf.mayusculas = !newConf.mayusculas;
            return newConf;
        });
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <Fila>
                    <label>Numero de Caracteres</label>
                    <Controles>
                        <BotonDisminuir
                            disabled={disabledDisminuir}
                            clickEvent={disminuirNumero}
                        />

                        <span>{configuracion.caracteres}</span>
                        <BotonIncrementar
                            disabled={disabledIncrementar}
                            clickEvent={incrementarCaracteres}
                        />
                    </Controles>
                </Fila>
                <Fila>
                    <label>Incluir Simbolos</label>
                    <Controles>
                        <BotonCheck
                            clickEvent={toggleSimbolos}
                            seleccionado={configuracion.simbolos}
                        />
                    </Controles>
                </Fila>
                <Fila>
                    <label>Incluir Numeros</label>
                    <Controles>
                        <BotonCheck
                            clickEvent={toggleNumeros}
                            seleccionado={configuracion.numeros}
                        />
                    </Controles>
                </Fila>
                <Fila>
                    <label>Incluir Mayusculas</label>
                    <Controles>
                        <BotonCheck
                            clickEvent={toggleMayusculas}
                            seleccionado={configuracion.mayusculas}
                        />
                    </Controles>
                </Fila>
                <Fila>
                    <BotonGenerar />
                    <Input type="text" readOnly value={passwordGenerado} />
                </Fila>
            </form>
        </main>
    );
}

export default Main;

const Fila = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin-bottom: 25px;
`;

const Controles = styled.div`
    display: flex;
    justify-content: space-between;

    & > * {
        flex: 1;
    }

    span {
        line-height: 40px;
        text-align: center;
        background-color: #26374c;
    }
`;

const Input = styled.input`
    width: 100%;
    color: #fff;
    align-items: center;
    height: 40px;
    font-size: 18px;
    text-align: center;
    border-radius: 0.25rem;
    outline: none;
    background-color: #26374c;
    transition: all 200ms ease-in;
    border: solid 1px rgba(255, 255, 255, 0.15);

    &:hover {
        border-color: #127e74;
    }

    // &::selection {
    //     background-color: #26374c;
    // }
    // &::moz-selection {
    //     background-color: #26374c;
    // }
`;
