import { Link } from 'react-router-dom';
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
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/test">Test</Link>
                <Link to="/redirect">Redirect</Link>
                <Link to="/checkout">Checkout</Link>
            </nav>
        </header>
    );
};

export default Header;
