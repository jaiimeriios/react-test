import logo from '../logo.svg';

function Header(props) {

    console.log(props)

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{props.title}</h1>
        </header>
    );
}

Header.defaultProps = {
    title: 'Title',
};

export default Header;
