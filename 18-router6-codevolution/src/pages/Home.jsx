import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2>Home</h2>

            <button onClick={() => navigate('order-summary')}>
                Place Order
            </button>
        </>
    );
};

export default Home;
