import React from 'react';
import './InfoCard.css'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import ProfileModel from '../ProfileModel/ProfileModel';

const InfoCard = () => {

    const [modalOpend, setModalOpend] = useState(false)

    return (
        <div className='InfoCard'>
            <div className="infoHead">
                <h4 className='font-bold'>Your Info</h4>
                <div>
                    <PencilSquareIcon onClick={() => setModalOpend(true)} className='h-6 w-6'></PencilSquareIcon>
                    <ProfileModel
                        modalOpend={modalOpend}
                        setModalOpend={setModalOpend}>
                    </ProfileModel>
                </div>
            </div>
            <div className='info'>
                <span>
                    <b>status </b>
                </span>
                <span>
                    in Relationship
                </span>
            </div>
            <div className='info'>
                <span>
                    <b>Lives  </b>
                </span>
                <span>
                    in Chittagong
                </span>
            </div>
            <div className='info'>
                <span>
                    <b>Works  </b>
                </span>
                <span>
                    at Google
                </span>
            </div>
            <button className='button logout-button'>Log out</button>
        </div>
    );
};

export default InfoCard;