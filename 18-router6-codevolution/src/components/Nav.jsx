import { NavLink } from 'react-router-dom';
import { useAuth } from '../pages/auth';

const Nav = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        };
    };

    const auth = useAuth();

    return (
        <nav>
            <NavLink style={navLinkStyle} to="/">
                Home
            </NavLink>
            <NavLink style={navLinkStyle} to="/about">
                About
            </NavLink>
            <NavLink style={navLinkStyle} to="/products">
                Products
            </NavLink>
            <NavLink style={navLinkStyle} to="/users">
                Users
            </NavLink>
            <NavLink style={navLinkStyle} to="/profile">
                Profile
            </NavLink>

            {!auth.user && (
                <NavLink style={navLinkStyle} to="/login">
                    Login
                </NavLink>
            )}

            {/* <NavLink style={navLinkStyle} to="/order-summary">
                Order Summary
            </NavLink> */}
        </nav>
    );
};

export default Nav;
