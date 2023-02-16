import React from 'react';
import './PostShare.css'
import profileImage from '../../img/profileImg.jpg'
// import {  } from 'react-icons/fa';
import { PhotoIcon, VideoCameraIcon, MapPinIcon, CalendarDaysIcon ,XCircleIcon} from '@heroicons/react/24/solid'
import { useState, useRef } from 'react';

const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }

    return (
        <div className='PostShare'>
            <img src={profileImage} alt="" />
            <div>
                <input type="text" name="" id="" placeholder="What's on your mind?" />
                <div className='postOptions'>
                    <div className='options' style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <PhotoIcon className="h-6 w-6"></PhotoIcon>Photo
                    </div>
                    <div className='options' style={{ color: "var(--video)" }}>
                        <VideoCameraIcon className="h-6 w-6"></VideoCameraIcon>Video
                    </div>
                    <div className='options' style={{ color: "var(--location)" }}>
                        <MapPinIcon className="h-6 w-6"></MapPinIcon>Location
                    </div>
                    <div className='options' style={{ color: "var(--shedule)" }}>
                        <CalendarDaysIcon className="h-6 w-6"></CalendarDaysIcon>Shedule
                    </div>
                    <button className='button ps-button'>
                        Share
                    </button>
                    <div style={{ display: 'none' }}>
                        <input
                            type="file"
                            name="myImage"
                            ref={imageRef}
                            id=""
                            onChange={onImageChange} />
                    </div>
                </div>

                {image && (
                    <div className="previewImage">
                        <XCircleIcon onClick={()=>setImage(null)} className='h-9 w-7'></XCircleIcon>
                        <img src={image.image} alt="" />
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default PostShare;