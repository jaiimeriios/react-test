import { Link } from 'react-router-dom';

const CriptoCoinList = ({ coin }) => {
    return (
        <Link to={`/cripto/${coin.id}`}>
            <img src={coin.icon} alt="cripto coin" />
            <h3>
                {coin.rank} {coin.name}
            </h3>
            <h4>
                {coin.symbol}: {coin.price}
            </h4>
        </Link>
    );
};

export default CriptoCoinList;