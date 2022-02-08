import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Nav from './components/Nav';
import { AuthProvider } from './pages/auth';
import Login from './pages/login';
import RequiredAuth from './pages/RequiredAuth';

// pages
import Home from './pages/Home';
import OrderSummary from './pages/OrderSummary';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import ProductsFeatured from './pages/ProductsFeatured';
import ProductsNew from './pages/ProductsNew';
import Users from './pages/Users';
import UsersAdmin from './pages/UsersAdmin';
import UsersDetails from './pages/UsersDetails';
import Profile from './pages/Profile';

// import About from './pages/About';
const LazyAbout = React.lazy(() => import('./pages/About'));

function App() {
    return (
        <AuthProvider>
            <Header title="React Router 6" />
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/about"
                        element={
                            <React.Suspense fallback="Loading...">
                                <LazyAbout />
                            </React.Suspense>
                        }
                    />
                    <Route path="/order-summary" element={<OrderSummary />} />
                    <Route path="/products" element={<Products />}>
                        {/* Nested Routes */}
                        <Route index element={<ProductsNew />} />
                        <Route path="featured" element={<ProductsFeatured />} />
                        <Route path="new" element={<ProductsNew />} />
                    </Route>
                    <Route path="/users" element={<Users />}>
                        {/* Add the Outlet component to parent component <Users /> */}
                        <Route path="admin" element={<UsersAdmin />} />
                        <Route path=":userId" element={<UsersDetails />} />
                    </Route>

                    <Route
                        path="/profile"
                        element={
                            <RequiredAuth>
                                <Profile />
                            </RequiredAuth>
                        }
                    />
                    <Route path="/login" element={<Login />} />

                    {/* 
                        // lo mismo que arrib
                        <Route path="/users" element={<Users />} />
                        <Route path="/users/admin" element={<UsersAdmin />} />
                        <Route path="/users/:userId" element={<UsersDetails />} />
                    */}

                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </AuthProvider>
    );
}

export default App;
