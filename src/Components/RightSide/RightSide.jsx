import React from 'react';
import './Rightside.css'
import home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import TrendCard from '../TrendCard/TrendCard';
import { useState } from 'react';
import ShareModal from '../ShareModal/ShareModal';
const RightSide = () => {
    const [modalOpend, setModalOpend] = useState(false)
    return (
        <div className='RightSide'>
            <div className="navIcon">
                <img src={home} alt="" />
                <Cog6ToothIcon></Cog6ToothIcon>
                <img src={noti} alt="" />
                <img src={comment} alt="" />
            </div>
            <TrendCard></TrendCard>
            <button className="button r-button h-6 w-6" onClick={() => setModalOpend(true)}>
                Share
            </button>
                <ShareModal
                    modalOpend={modalOpend}
                    setModalOpend={setModalOpend}>
                </ShareModal>
        </div>
    );
};

export default RightSide;