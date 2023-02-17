import React from 'react';
import './InfoCard.css'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

const InfoCard = () => {
    return (
        <div className='InfoCard'>
            <div className="infoHead">
                <h4>Your Info</h4>
                <PencilSquareIcon></PencilSquareIcon>
            </div>
        </div>
    );
};

export default InfoCard;