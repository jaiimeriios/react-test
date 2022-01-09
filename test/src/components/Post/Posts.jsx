import SinglePost from './SinglePost';
import postData from './postsData.json';

const Posts = ({ title }) => {
    
    console.log(postData);

    return (
        <>
            <h2>{title}</h2>
            <div className="posts">
                {postData.map((post, i) => (
                    <SinglePost key={i} i={i} post={post} />
                ))}
            </div>
        </>
    );
};

export default Posts;
