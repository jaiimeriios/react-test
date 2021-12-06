import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <ToastContainer />

            <Header title={'APIs'} />

            <Main />

            <Footer />
        </div>
    );
}

export default App;
