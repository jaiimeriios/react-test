import { Link, Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <>
            <Link to="">User 1</Link>
            <br />
            <Link to="">User 2</Link>
            <br />
            <Link to="">User 3</Link>
            <br />
            <Outlet />
        </>
    );
};

export default Users;
