import logo from '../assets/logo.svg';

const Header = ({title}) => {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <h1>{title}</h1>
        </header>
    )
}

export default Header