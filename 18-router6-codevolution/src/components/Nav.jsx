import { NavLink } from 'react-router-dom';

const Nav = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        };
    };

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
            {/* <NavLink style={navLinkStyle} to="/order-summary">
                Order Summary
            </NavLink> */}
        </nav>
    );
};

export default Nav;
