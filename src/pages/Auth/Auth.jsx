import React from 'react';
import './Auth.css'
import logo from '../../img/logo.png'
import SignUp from '../../Components/SignUp/SignUp';
import LogIn from '../../Components/LogIn/LogIn';



const Auth = () => {
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={logo} alt="" />
                <div className="web-name">
                    <h1 className='text-5xl'>Marchent Chat</h1>
                    <h6 className='text-gray-400 text-[13px]'>Explore The Ideas Go more Fun</h6>
                </div>
            </div>
            <LogIn></LogIn>
        </div>
    );
};



export default Auth;