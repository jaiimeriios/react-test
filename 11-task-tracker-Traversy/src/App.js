import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header title={'TaskTracker'} />

            <Routes>
                <Route index element={<Main />} />
            </Routes>
            <Routes>
                <Route path='/about' element={<About />} />
            </Routes>

            <Footer />
        </div>
        </BrowserRouter>
    );
}

export default App;
