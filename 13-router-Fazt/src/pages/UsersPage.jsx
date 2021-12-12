import { Link } from 'react-router-dom';

function UsersPage() {
    return (
        <div>
            <h3>Users</h3>
            <br />
            <Link to="/user/100">User 100</Link>
            <br />
            <Link to="/user/new">New</Link>
        </div>
    );
}

export default UsersPage;
