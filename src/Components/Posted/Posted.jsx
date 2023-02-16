import React from 'react';
import './Posted.css'
// import { HeartIcon } from '@heroicons/react/24/solid'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import heart from '../../img/like.png'
import notlike from '../../img/notlike.png'
const Posted = ({ data }) => {
    return (
        <div className='Post'>
            <img src={data.img} alt="" />
            <div className='postReact'>
                <img src={data.liked ? heart : notlike} alt="" />
                <img src={comment} alt="" />
                <img src={share} alt="" />
            </div>
            <span>{data.likes}Likes</span>
            <div className="details">
                <span><b>{data.name}</b></span>
                <span>{ data.desc}</span>
            </div>
        </div>
    );
};

export default Posted;