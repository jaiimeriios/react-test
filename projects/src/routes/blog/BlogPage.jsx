import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const BlogPage = () => {
    const { id } = useParams();
    const history = useNavigate();

    const [data, isLoading, error] = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return (
        <div className="blog-details">
            {error && <p>{error}</p>}

            {isLoading ? (
                <p className="loading">Loading...</p>
            ) : (
                <>
                    <button onClick={() => history(-1)}>Go Back</button>
                    <div className="image">
                        <img src="https://via.placeholder.com/940x260" alt="" />
                    </div>

                    <h2>
                        {data.id} - {data.title}
                    </h2>
                    <p>{data.body}</p>
                    <p>{data.body}</p>
                    <p>{data.body}</p>
                    <p>{data.body}</p>
                </>
            )}
        </div>
    );
};

export default BlogPage;
