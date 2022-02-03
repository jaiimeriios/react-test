import Header from './components/Header';
import Modal from './components/Modal';

function App() {
    return (
        <>
            <Header title="Modal Windows" />
            <main>
                <div className="d-flex">
                    <button className="modal-button">Modal 1</button>
                    <button className="modal-button">Modal 2</button>
                    <button className="modal-button">Modal 3</button>
                    <button className="modal-button">Modal 4</button>
                </div>

                <Modal />
            </main>
        </>
    );
}

export default App;
