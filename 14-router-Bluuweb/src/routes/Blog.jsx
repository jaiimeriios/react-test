import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

function Blog() {
    const apiUrl = 'https://jsonplaceholder.typicode.com';

    const { data, error, loading } = useFetch(`${apiUrl}/posts`);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    if (error !== '') {
        return <h3>{error}</h3>;
    }

    return (
        <>
            <h2>Blog</h2>
            {data.map((item) => (
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
