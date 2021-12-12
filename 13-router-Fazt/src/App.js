import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <header>
                <img src={logo} className="logo" alt="logo" />
                <h1>ROUTER</h1>
            </header>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/usuarios" element={<Navigate to='/users' />} />

                    <Route path="/dashboard/*" element={<Dashboard />}>
                        <Route path="welcome" element={<p>hola :) </p>} />
                        <Route path="bye" element={<p>adios :( </p>} />
                    </Route>

                    <Route path="/user/new" element={<p>Agregar nuebo usuario</p>} />
                    <Route path="/user/:id" element={<UserPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
