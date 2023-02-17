import React from 'react';
import './Rightside.css'
import home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import TrendCard from '../TrendCard/TrendCard';
const RightSide = () => {
    return (
        <div className='RightSide'>
            <div className="navIcon">
                <img src={home} alt="" />
                <Cog6ToothIcon></Cog6ToothIcon>
                <img src={noti} alt="" />
                <img src={comment} alt="" />
            </div>
            <TrendCard></TrendCard>
        </div>
    );
};

export default RightSide;