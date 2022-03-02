import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';

const CriptoCoin = () => {
    const { id } = useParams();
    const history = useNavigate();

    const { data, loading, error } = useFetch(
        `https://api.coinstats.app/public/v1/coins/${id}`
    );

    return (
        <div>
            <br />
            <br />
            <button onClick={() => history(-1)}>Go Back</button>
            <br />
            <br />

            {
                error && <p>{error}</p>
            }

            {loading ? (
                <h4>Loading...</h4>
            ) : (
                <>
                    <img src={data.coin.icon} alt="cripto coin" />
                    <h3>
                        {data.coin.rank} {data.coin.name}
                    </h3>
                    <h4>
                        {data.coin.symbol}: {data.coin.price}
                    </h4>
                </>
            )}
        </div>
    );
};

export default CriptoCoin;
