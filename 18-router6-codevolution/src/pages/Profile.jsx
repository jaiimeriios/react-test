import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };

    return (
        <>
            <h2>Welcome {auth.user}</h2>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt exercitationem quia magni saepe magnam non eum
                mollitia! Similique quos quisquam ipsam illo ipsum nemo,
                distinctio minus ipsa amet ratione praesentium!
            </p>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Profile;
