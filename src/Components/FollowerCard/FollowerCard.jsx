import React from 'react';
import './FollowerCard.css'
import {Follower} from '../../Data/FollowerData'
const FollowerCard = () => {
    return (
        <div className='FollowerCards'>
            <h3 className='font-semibold'>Who is following you</h3>
            {Follower.map((follower, id) => {
                return (
                    <div className='follower'>
                        <div>
                            <img className='followerImage' src={follower.img} alt="" />
                            <div className="name">
                                <span>{ follower.name}</span>
                                <span>@{ follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>Follow</button>

                    </div>
                )
            })}
        </div>
    );
};

export default FollowerCard;