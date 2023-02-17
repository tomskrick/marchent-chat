import React from 'react';
import './ProfileCard.css'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'

const ProfileCard = () => {

    const ProfilePage = true;

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
            <div className="followStatus text-[12px]">
                <hr />
                <div>
                    <div className="follow">
                        <span className='text-gray-500'>9,032</span>
                        <span className='font-bold'>Followings</span>
                    </div>
                    <div className='vl'></div>
                    <div className="follow">
                        <span className='text-gray-500'>2</span>
                        <span className='font-bold'>Followerers</span>
                    </div>

                    {ProfilePage && (
                        <>
                            <div className="vl">

                            </div>
                            <div className="follow">
                                <span className='text-gray-500'>3</span>
                                <span className='font-bold'>Posts</span>
                            </div>
                        </>
                    )}

                </div>
                <hr />
            </div>
            {ProfilePage ? '' : <span>
                My profile
            </span>}
        </div>
    );
};

export default ProfileCard;