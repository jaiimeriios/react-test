import { Link } from 'react-router-dom';

function HomePage() {
    const userId = 10;

    return (
        <div>
            <h2>index</h2>
            <Link to="/about">About</Link>
            <Link to={`/user/${userId}`}>User 10</Link>
        </div>
    );
}

export default HomePage;
