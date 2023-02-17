import React from 'react';
import FollowerCard from '../FollowerCard/FollowerCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import './ProfileLeft.css'
const ProfileLeft = () => {
    return (
        <div className='proFileLeft'>
            <LogoSearch></LogoSearch>
            
            <FollowerCard></FollowerCard>
        </div>
    );
};

export default ProfileLeft;