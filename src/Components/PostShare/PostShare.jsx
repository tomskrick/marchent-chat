import React from 'react';
import './PostShare.css'
import profileImage from '../../img/profileImg.jpg'
// import {  } from 'react-icons/fa';
import { PhotoIcon, VideoCameraIcon,MapPinIcon,CalendarDaysIcon } from '@heroicons/react/24/solid'

const PostShare = () => {
    return (

        <div className='PostShare'>
            <img src={profileImage} alt="" />
            <div>
                <input type="text" name="" id="" placeholder="What's on your mind?" />
            </div>
            <div className='postOptions'>
                <div className='options'>
                    <PhotoIcon className="h-6 w-6"></PhotoIcon>Photo
                </div>
                <div className='options'>
                    <VideoCameraIcon className="h-6 w-6"></VideoCameraIcon>Video
                </div>
                <div className='options'>
                    <MapPinIcon className="h-6 w-6"></MapPinIcon>Location
                </div>
                <div className='options'>
                    <CalendarDaysIcon className="h-6 w-6"></CalendarDaysIcon>Shedule
                </div>
            </div>
        </div>


    );
};

export default PostShare;