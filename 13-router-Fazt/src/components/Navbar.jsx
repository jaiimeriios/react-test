import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/users">Users</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/usuarios">Usuarios</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
