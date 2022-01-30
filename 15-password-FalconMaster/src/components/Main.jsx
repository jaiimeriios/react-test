import styled from 'styled-components';

function Main() {
    return (
        <main>
            <form>
                <Fila>
                    <label>Numero de Caracteres</label>
                    <Controles>
                        <Boton>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-dash-lg"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                                />
                            </svg>
                        </Boton>
                        <span>0</span>
                        <Boton>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-plus-lg"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                />
                            </svg>
                        </Boton>
                    </Controles>
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

const Boton = styled.button`
    width: 100%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    height: 40px;
    font-size: 18px;
    text-align: center;
    justify-content: center;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 200ms ease-in;
    background-color: #127e74;

    &:hover {
        background-color: #039b8d;
    }
`;
