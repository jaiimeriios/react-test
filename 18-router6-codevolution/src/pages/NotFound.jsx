import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2>404</h2>
            <h3>Page not found</h3>
        </>
    );
};

export default NotFound;
