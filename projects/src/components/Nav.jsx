import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/slideshow">Slideshow</NavLink>
            <NavLink to="/budget">Budget</NavLink>
            <NavLink to="/jokes">Jokes</NavLink>
            <NavLink to="/crypto">Crypto</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </nav>
    );
}

export default Nav;
