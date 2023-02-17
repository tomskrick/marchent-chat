import React from 'react';
import PostSide from '../../Components/PostSide/PostSide';
import Profileside from '../../Components/profileside/Profileside';
import RightSide from '../../Components/RightSide/RightSide';
import './Home.css'
const Home = () => {
    return (
        <div className='Home'>
            <Profileside></Profileside>
            <PostSide></PostSide>
            <RightSide></RightSide>
        </div>
    );
};

export default Home;