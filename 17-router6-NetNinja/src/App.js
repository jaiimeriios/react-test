import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.svg';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <h1>
                        <Link to="/">
                            <img src={logo} />
                            React Router 6
                        </Link>
                    </h1>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route
                        path="/test"
                        element={
                            <div>
                                <h2>test</h2>
                                <p>Hello</p>
                            </div>
                        }
                    />
                    <Route
                        path="/redirect"
                        element={<Navigate to="/about" />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
