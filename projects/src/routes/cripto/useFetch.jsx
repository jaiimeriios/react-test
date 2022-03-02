import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // lo mismo con asyn await - falta el try/catch
        // const getApiData = async () => {
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     setData(data);
        //     setLoading(false);
        // }

        const getApiData = () => {
            fetch(url)
                .then((reponse) => reponse.json())
                .then((data) => {
                    setData(data);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        getApiData();
    }, []);

    return { data, loading, error };
}

export default useFetch;
