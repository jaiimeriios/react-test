import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/slideshow">Slideshow</NavLink>
            <NavLink to="/budget">Budget</NavLink>
            <NavLink to="/crud-table">CRUD Table</NavLink>
        </nav>
    );
}

export default Nav;
