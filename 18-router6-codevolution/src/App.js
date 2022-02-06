import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

// Components
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <Header title="React Router 6" />
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                {/* <Home />
                <About /> */}
            </main>
        </>
    );
}

export default App;
