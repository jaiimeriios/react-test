const SinglePost = ({ post: { title, img, body, author }, i }) => (
    <div className="post">
        <h3>{title}</h3>
        <img alt="img" src={img} />
        <p>{body}</p>
        <div className="info">
            <h4>Number: {i + 1}</h4>
            <h5>Written By: {author}</h5>
        </div>
    </div>
);

export default SinglePost;
