import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </nav>
    );
}

export default Nav;
