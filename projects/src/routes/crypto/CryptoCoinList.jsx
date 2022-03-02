import { Link } from 'react-router-dom';

const CryptoCoinList = ({ coin }) => {
    return (
        <Link to={`/crypto/${coin.id}`}>
            <img src={coin.icon} alt="crypto coin" />
            <h3>
                {coin.rank} {coin.name}
            </h3>
            <h4>
                {coin.symbol}: {coin.price}
            </h4>
        </Link>
    );
};

export default CryptoCoinList;