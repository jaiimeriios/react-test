// https://www.youtube.com/watch?v=cgG2_tBDWjE

import { useEffect, useState } from 'react';
import CryptoCoinList from './CryptoCoinList';

const Crypto = () => {
    const [coinsList, setCoinsList] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        fetch('https://api.coinstats.app/public/v1/coins')
            .then((reponse) => reponse.json())
            .then((data) => {
                setCoinsList(data.coins);
            })
            .finally(() => {
                console.log(coinsList);
            });
    }, [coinsList, searchWord]);

    const filteredCoins = coinsList.filter((coin) => {
        return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    return (
        <div className="container">
            <h2>Cryptocurrencies</h2>
            <h2>fetch and filters with useEffect & useState</h2>

            <input
                type="text"
                placeholder="Search Coins"
                onChange={(event) => {
                    setSearchWord(event.target.value);
                }}
            />
            {filteredCoins.map((coin) => (
                <CryptoCoinList key={coin.id} coin={coin} />
            ))}
        </div>
    );
};

export default Crypto;
