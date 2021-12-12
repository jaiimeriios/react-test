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
                    {item.userId} - {item.title}
                </h5>
            ))}
        </>
    );
}

export default Blog;
