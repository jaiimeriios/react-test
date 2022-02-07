import { Link } from "react-router-dom";


const NotFound = () => {
     return (
        <>
            <h2>404</h2>
            <h3>Page not found</h3>
            <br/>
            <Link to='/'>Go Back Home</Link>
        </>
    );
};

export default NotFound;
