import { useFetch } from '../../hooks/useFetch';

const Fetch = () => {
    const [data, loading, apiGet] = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    return (
        <div>
            My API <br />
            <button onClick={apiGet}>Fetch API</button>
            <br />
            {loading && <p>Loading...</p>}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.userId},{item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Fetch;
