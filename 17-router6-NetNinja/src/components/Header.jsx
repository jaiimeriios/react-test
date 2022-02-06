import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/">
                    <img src={logo} />
                    React Router 6
                </Link>
            </h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/test">Test</NavLink>
                <NavLink to="/redirect">Redirect</NavLink>
                <NavLink to="/checkout">Checkout</NavLink>
            </nav>
        </header>
    );
};

export default Header;
