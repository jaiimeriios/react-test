import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2>Order Summary - Confirmed</h2>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    );
}

export default OrderSummary;
