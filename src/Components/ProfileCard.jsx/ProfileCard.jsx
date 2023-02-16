import React from 'react';
import './ProfileCard.css'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
const ProfileCard = () => {
    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={cover} alt="" />
                <img src={profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>Toms Krick</span>
                <span>Junior Web developer</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>9,032</span>
                        <span>Followings</span>
                    </div>
                    <div className='vl'></div>
                    <div className="follow">
                        <span>2</span>
                        <span>Follower</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>
                My profile
            </span>
        </div>
    );
};

export default ProfileCard;