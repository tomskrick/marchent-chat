import React from 'react';
import './InfoCard.css'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

const InfoCard = () => {
    return (
        <div className='InfoCard'>
            <div className="infoHead">
                <h4 className='font-bold'>Your Info</h4>
                <PencilSquareIcon className='h-6 w-6'></PencilSquareIcon>
            </div>
            <div className='info'>
                <span>
                    <b>status</b>
                </span>
                <span>
                    in Relationship
                </span>
            </div>
            <div className='info'>
                <span>
                    <b>Lives in</b>
                </span>
                <span>
                   Chittagong
                </span>
            </div>
            <div className='info'>
                <span>
                    <b>Works at</b>
                </span>
                <span>
                   Softwer Engeeniars
                </span>
            </div>
            <button className='button'>Log out</button>
        </div>
    );
};

export default InfoCard;