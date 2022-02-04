import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
    const [modalEstado1, setEstadoModal1] = useState(false);

    return (
        <>
            <Header title="Modal Windows" />
            <main>
                <div className="d-flex">
                    <button 
                        className="modal-button"
                        onClick={() => setEstadoModal1(!modalEstado1)}
                    >Modal 1</button>
                    <button className="modal-button">Modal 2</button>
                    <button className="modal-button">Modal 3</button>
                    <button className="modal-button">Modal 4</button>
                </div>

                <Modal
                    estado={modalEstado1}
                    setEstado={setEstadoModal1}
                >
                    <h3>hola</h3>
                    <p>Lorem ipsum dolor sit amet </p>
                    <button>Aceptar</button>
                </Modal>
            </main>
        </>
    );
}

export default App;
