import logo from '../assets/logo.svg';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <h1>{title}</h1>
        </header>
    );
};

Header.defaultProps = {
    title: 'TITLE',
};

Header.protoTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
