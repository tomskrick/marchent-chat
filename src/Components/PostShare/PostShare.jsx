import React from 'react';
import './PostShare.css'
import profileImage from '../../img/profileImg.jpg'
import {  } from 'react-icons/fa';

const PostShare = () => {
    return (

        <div className='PostShare'>
            <img src={profileImage} alt="" />
            <div>
                <input type="text" name="" id="" placeholder="What's on your mind?" />
            </div>
            <div className='postOptions'>
                <div className='options'></div>
            </div>
        </div>


    );
};

export default PostShare;