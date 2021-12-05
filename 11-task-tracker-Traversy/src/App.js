import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header title={'TaskTracker'} />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
