import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import yosemite from './assets/yosemite.jpg';

function App() {
    const [modalEstado1, setEstadoModal1] = useState(false);
    const [modalEstado2, setEstadoModal2] = useState(false);
    const [modalEstado3, setEstadoModal3] = useState(false);

    const modal1Aceptar = () => {
        console.log('close modal 1');
        setEstadoModal1(false)
    };
    const modal2Aceptar = () => {
        console.log('close modal 2');
        setEstadoModal2(false)
    };

    return (
        <>
            <Header title="Modal Windows" />
            <main>
                <div className="d-flex">
                    <button
                        className="modal-button"
                        onClick={() => setEstadoModal1(!modalEstado1)}
                    >
                        Modal 1
                    </button>
                    <button
                        className="modal-button"
                        onClick={() => setEstadoModal2(!modalEstado2)}
                    >
                        Modal 2
                    </button>
                    <button
                        className="modal-button"
                        onClick={() => setEstadoModal3(!modalEstado3)}
                    >
                        Modal 3
                    </button>
                </div>

                <Modal
                    estado={modalEstado1}
                    setEstado={setEstadoModal1}
                    hideOverlay={false}
                    padding={true}
                    showHeader={true}
                    position={'center'}
                    titulo="hola modal 1"
                >
                    <h3>hola</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <button onClick={modal1Aceptar}>Aceptar</button>
                </Modal>
                <Modal
                    estado={modalEstado2}
                    setEstado={setEstadoModal2}
                    hideOverlay={false}
                    padding={true}
                    showHeader={false}
                    position={'center'}
                    titulo="no titulo"
                >
                    <h3>Modal 2</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <button onClick={modal2Aceptar}>Aceptar</button>
                </Modal>
                <Modal
                    estado={modalEstado3}
                    setEstado={setEstadoModal3}
                    hideOverlay={false}
                    padding={false}
                    showHeader={false}
                    position={'center'}
                    titulo="no titulo"
                >
                    <img src={yosemite} alt="Yosemite" />
                </Modal>
            </main>
        </>
    );
}

export default App;
