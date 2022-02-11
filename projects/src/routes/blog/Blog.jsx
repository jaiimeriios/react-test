import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import './blog.css';

function Blog() {
    const [data, isLoading, error] = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    return (
        <div className="container">
            <h2>Blogs</h2>

            <div className="blog-section">
                {isLoading && <p className="loading">Loading...</p>}
                {error && <p>{error}</p>}

                {data.map((item) => (
                    <div className="blog" key={item.id}>
                        <Link to={`/blog/${item.id}`}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
