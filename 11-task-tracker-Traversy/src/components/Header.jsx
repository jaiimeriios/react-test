import logo from '../img/logo.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';

function Header({ title }) {
    return (
        <header className="App-header">
            <div className="logo-title">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{title}</h1>
            </div>

            <div className="links">
                <Link to="./">
                    <AiOutlineHome />Home
                </Link>
                <Link to="/about">
                    <FiGlobe />About
                </Link>
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'Tasks Tracker',
};

Header.protoTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
