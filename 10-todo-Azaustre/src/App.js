import logo from './img/logo.svg';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Todos</h1>
            </header>

            <Main />

            <Footer />
        </div>
    );
}

export default App;
