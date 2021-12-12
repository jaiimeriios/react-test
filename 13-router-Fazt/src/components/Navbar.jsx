import { NavLink } from 'react-router-dom';

function Navbar() {
    // const setAvtiveNavLink = (data) => {
    //     console.log(data)
    // }

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
            </ul>
        </nav>
    );
}

export default Navbar;
