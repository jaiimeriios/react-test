import { Link } from "react-router-dom";

function Navbar() {
    return (
       <nav>
           <Link to="/">Home</Link>
           <Link to="/blog">Blog</Link>
           <Link to="/contacto">contacto</Link>
       </nav>
    );
}

export default Navbar;
