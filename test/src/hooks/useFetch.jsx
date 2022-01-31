import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const apiGet = () => {
        
        setLoading(true);

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setData(json);
            })
            .catch((e) => {
                console.error('Error::', e);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return [data, loading, apiGet];
};
