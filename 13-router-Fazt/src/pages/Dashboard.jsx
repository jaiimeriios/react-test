import { useNavigate, Link, Outlet } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Dashboard</h2>

            <Link to="/dashboard/welcome">welcome</Link><br />
            <Link to="/dashboard/bye">Bye</Link><br /><br />

            <button onClick={handleClick}>Logout</button><br /><br />

            <Outlet />
        </div>
    );
}

export default Dashboard;
