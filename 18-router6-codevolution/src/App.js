import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Nav from './components/Nav';

// pages
import Home from './pages/Home';
import About from './pages/About';
import OrderSummary from './pages/OrderSummary';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import ProductsFeatured from './pages/ProductsFeatured';
import ProductsNew from './pages/ProductsNew';

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
                    <Route path="/products" element={<Products />}>
                        {/* Nested Routes */}
                        <Route index element={<ProductsNew />} />
                        <Route path="featured" element={<ProductsFeatured />} />
                        <Route path="new" element={<ProductsNew />} />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
