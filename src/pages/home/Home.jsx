import React from 'react';
import PostSide from '../../Components/PostSide/PostSide';
import Profileside from '../../Components/profileside/Profileside';
import './Home.css'
const Home = () => {
    return (
        <div className='Home'>
            <Profileside></Profileside>

            <PostSide></PostSide>
            <div className="rightSide">Rightside</div>
        </div>
    );
};

export default Home;