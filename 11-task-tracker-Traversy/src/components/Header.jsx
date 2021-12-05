import logo from '../img/logo.svg';
import PropTypes from 'prop-types';

function Header({ title }) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{title}</h1>
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
