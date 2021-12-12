import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

function Blog() {
    const apiUrl = 'https://jsonplaceholder.typicode.com';

    const { data, error, loading } = useFetch(`${apiUrl}/posts`);

    let [searchParams, setSearchParams] = useSearchParams();

    if (loading) {
        return <h3>Loading...</h3>;
    }

    if (error !== '') {
        return <h3>{error}</h3>;
    }

    const handleChange = (e) => {
        let filter = e.target.value;
        filter ? setSearchParams({ filter }) : setSearchParams({});
    };

    return (
        <>
            <h2>Blog</h2>
            <input
                type="text"
                name=""
                value={searchParams.get('filter') || ''}
                onChange={handleChange}
            />
            {data
                .filter((item) => {
                    let filter = searchParams.get('filter');
                    if (!filter) return true;
                    return item.title
                        .toLowerCase()
                        .includes(filter.toLowerCase());
                })
                .map((item) => (
                    <h5 key={item.id}>
                        <Link to={`/blog/${item.id}`}>
                            {item.id} - {item.title} {item.userId}
                        </Link>
                    </h5>
                ))}
        </>
    );
}

export default Blog;
