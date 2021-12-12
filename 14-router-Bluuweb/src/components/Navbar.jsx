import { NavLink } from "react-router-dom";

function Navbar() {
    return (
       <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/blog">Blog</NavLink>
           <NavLink to="/contacto">contacto</NavLink>
       </nav>
    );
}

export default Navbar;
