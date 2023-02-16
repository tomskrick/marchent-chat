import React from 'react';
import './Post.css'
import {PostsData} from '../../Data/PostData'
import Posted from '../Posted/Posted';
const Post = () => {
    return (
        <div className='posts'>
            {PostsData.map((post, id) => {
                return<Posted data={post} id={id}></Posted>
            })}
        </div>
    );
};

export default Post;