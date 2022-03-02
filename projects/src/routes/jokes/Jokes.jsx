// https://www.youtube.com/watch?v=Vspeudp-M9k

import useFetch from './useFetch';

const Jokes = () => {
    const { data, loading, error, getApiData } = useFetch(
        'https://v2.jokeapi.dev/joke/Programming?type=twopart'
    );

    console.log(data);

    if (error) console.log(error);

    return (
        <div className="container">
            <h2>jokes api</h2>
            <h2>custom fetch hook</h2>

            {loading ? (
                <h4>Loading...</h4>
            ) : (
                <>
                    <p>{data.setup}</p>
                    <p>{data.delivery}</p>
                </>
            )}

            <br />

            <button onClick={getApiData}> Refetch</button>
        </div>
    );
};

export default Jokes;
