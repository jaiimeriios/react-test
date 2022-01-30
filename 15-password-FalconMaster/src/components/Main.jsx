import styled from 'styled-components';
import { BotonIncrementar, BotonDisminuir, BotonCheck, BotonGenerar } from './Boton';

function Main() {
    return (
        <main>
            <form>
                <Fila>
                    <label>Numero de Caracteres</label>
                    <Controles>
                        <BotonDisminuir />
                        <span>0</span>
                        <BotonIncrementar />
                    </Controles>
                </Fila>
                <Fila>
                    <label>Incluir Simbolos</label>
                    <Controles>
                        <BotonCheck />
                    </Controles>
                </Fila>
                <Fila>
                    <label>Incluir Numeros</label>
                    <Controles>
                        <BotonCheck />
                    </Controles>
                </Fila>
                <Fila>
                    <label>Incluir Mayusculas</label>
                    <Controles>
                        <BotonCheck />
                    </Controles>
                </Fila>
                <Fila>
                    <BotonGenerar />
                    <Input type="text" readOnly value="adsfsd" />
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
    border: solid 1px rgba(255,255,255,.15);
    
    &:hover {
        border-color: #127e74;
    }

    &::selection{
        background-color: #26374c;
    }
    &::moz-selection {
        background-color: #26374c;
    }
`