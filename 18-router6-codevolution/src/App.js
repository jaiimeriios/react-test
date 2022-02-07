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
import Users from './pages/Users';
import UsersAdmin from './pages/UsersAdmin';
import UsersDetails from './pages/UsersDetails';

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
                    <Route path="/users" element={<Users />}>
                        {/* Add the Outlet component to parent component: <Users /> */}
                        <Route path="admin" element={<UsersAdmin />} />
                        <Route path=":userId" element={<UsersDetails />} />
                    </Route>

                    {/* 
                        // lo mismo que arrib
                        <Route path="/users" element={<Users />} />
                        <Route path="/users/admin" element={<UsersAdmin />} />
                        <Route path="/users/:userId" element={<UsersDetails />} />
                    */}

                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
