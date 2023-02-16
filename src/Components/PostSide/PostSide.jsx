import React from 'react';
import Post from '../Post/Post';
import PostShare from '../PostShare/PostShare';
import './PostSide.css'
const PostSide = () => {
    return (
        <div className='PostSide'>
            <PostShare></PostShare>
            <Post></Post>
        </div>
    );
};

export default PostSide;