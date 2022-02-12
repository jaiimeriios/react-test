import { PropTypes } from 'prop-types';
import Nav from './Nav';
import logo from '../assets/logo.svg';

const Header = ({ title }) => {
    return (
        <>
            <header>
                <img src={logo} className="logo" alt="logo" />
                <h1>{title}</h1>
            </header>
            <Nav />
        </>
    );
}

Header.defaultProps = {
    title: 'TITLE',
};

Header.protoTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
