import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import logo from './logo.svg';

function App() {
    return (
        <>
            <header>
                <img src={logo} className="logo" alt="logo" />
                <h1>ROUTER</h1>
            </header>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;
