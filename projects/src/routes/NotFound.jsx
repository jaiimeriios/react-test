import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container">
            <h2>404</h2>
            <h3>Page Not Found</h3>

            <Link className="not-found" to="/">
                Go back Home
            </Link>
        </div>
    );
}

export default NotFound;
