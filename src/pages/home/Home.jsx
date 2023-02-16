import React from 'react';
import Profileside from '../../Components/profileside/Profileside';
import './Home.css'
const Home = () => {
    return (
        <div className='Home'>
            <Profileside></Profileside>
            <div className="postSide">Posts</div>
            <div className="rightSide">Rightside</div>
        </div>
    );
};

export default Home;