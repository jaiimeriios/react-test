import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/logo.svg';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
    const [cartIsEmpty] = useState(true);

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
                    <Link to="/test">Test</Link>
                    <Link to="/redirect">Redirect</Link>
                    <Link to="/checkout">Checkout</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/*" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id/*" element={<ProductDetails />} />
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
                    <Route
                        path="/checkout"
                        element={
                            cartIsEmpty ? (
                                <Navigate to="/products" />
                            ) : (
                                <p>checkout</p>
                            )
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
