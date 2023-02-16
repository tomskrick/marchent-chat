import React from 'react';
import FollowerCard from '../FollowerCard/FollowerCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard.jsx/ProfileCard';
import './ProfileSide.css'
const Profileside = () => {
    return (
        <div className='Profileside'>
            <LogoSearch></LogoSearch>
            <ProfileCard></ProfileCard>
            <FollowerCard></FollowerCard>
        </div>
    );
};

export default Profileside;