import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const abortCont = new AbortController();

        // fetch(url, { signal: abortCont.signal })
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not fetch data');
                }
                // console.log('Fetching...', res);
                return res.json();
            })
            .then((data) => {
                setData(data); // store Data in State Data Variable
                setIsLoading(false);
                setError(null);
                // console.log('Fetched...', data);
            })
            .catch((e) => {
                if (e.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    console.log('error:: ', e);
                    setIsLoading(false);
                    setError(e.message);
                }
            });

        // return () => abortCont.abort();
    }, [url]);

    return [data, isLoading, error];
};

export default useFetch;
