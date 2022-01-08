import React from 'react';
import SinglePost from './SinglePost';
import postJson from './posts.json';

const Posts = ({ title }) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="posts">
                {postJson.map((post, i) => (
                    <SinglePost key={i} i={i} post={post} />
                ))}
            </div>
        </>
    );
};

export default Posts;
