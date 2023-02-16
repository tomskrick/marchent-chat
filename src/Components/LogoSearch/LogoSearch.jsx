import React from 'react';
import './LogoSearch.css'
import logo from '../../img/logo.png'
import { FaSearch } from 'react-icons/fa';
const LogoSearch = () => {
    return (
        <div className='LogoSearch'>
            <img src={logo} alt="" />
            <div className="Search">
                <input type="text" name="" id="" placeholder='#Explore' />
                <div className="s-icon">
                    <FaSearch></FaSearch>
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;