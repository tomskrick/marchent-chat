import React from 'react';
import './Auth.css'
import logo from '../../img/logo.png'
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
            <h1>Form</h1>
        </div>
    );
};

export default Auth;