import logo from '../img/logo.svg';

function Header({title}) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{title}</h1>
        </header>
    );
}

Header.defaultProps = {
    title: "Tasks Tracker"
}


export default Header;