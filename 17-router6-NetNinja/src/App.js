import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// components
import Header from './components/Header';
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

                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/*" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products/:id/*"
                        element={<ProductDetails />}
                    />
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
