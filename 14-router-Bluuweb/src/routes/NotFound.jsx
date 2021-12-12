import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h2>404 Not Found</h2>
            <Link to="/">Home</Link>
        </>
    );
}

export default NotFound;
