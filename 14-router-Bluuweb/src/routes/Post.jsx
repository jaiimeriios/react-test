import { Link, useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

function Post() {
    const apiUrl = 'https://jsonplaceholder.typicode.com';

    const location = useLocation();
    const params = useParams();
    const { data, error, loading } = useFetch(`${apiUrl}/posts/${params.id}`);

    console.log(location);
    // console.log(params);
    // console.log(data);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    if (error !== '') {
        return <h3>{error}</h3>;
    }

    return (
        <>
            {/* <div>
                <p>Blog > {location.pathname}</p>
            </div> */}

            <div key={data.id}>
                <h4>
                    {data.id} - {data.title}
                </h4>
                <p> {data.body} </p>
                <Link to="/blog">Back to Blog</Link>
            </div>
        </>
    );
}

export default Post;
