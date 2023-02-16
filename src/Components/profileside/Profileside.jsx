import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard.jsx/ProfileCard';
import './ProfileSide.css'
const Profileside = () => {
    return (
        <div className='Profileside'>
            <LogoSearch></LogoSearch>
            <ProfileCard></ProfileCard>
        </div>
    );
};

export default Profileside;