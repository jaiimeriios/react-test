import { Link, Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const showActiveUsers = searchParams.get('filter') === 'active';

    return (
        <>
            <Link to="/admin">Admin</Link>
            <br />
            <Link to="/">User 1</Link>
            <br />
            <Link to="">User 2</Link>
            <br />
            <Link to="">User 3</Link>
            <br />
            <Outlet />

            <button onClick={() => setSearchParams({ filter: 'active' })}>
                Active Users
            </button>
            <button onClick={() => setSearchParams({})}>Reset</button>
            {showActiveUsers ? (
                <h3>Showing active users</h3>
            ) : (
                <h3>Showing all users</h3>
            )}
        </>
    );
};

export default Users;
