import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

// Components
import Header from './components/Header';
import Nav from './components/Nav';
import OrderSummary from './pages/OrderSummary';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <Header title="React Router 6" />
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/order-summary" element={<OrderSummary />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
