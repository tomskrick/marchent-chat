import React from 'react';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className="a-right">
            <form action="" className='InfoForm authForm'>
                <h3>Sign Up</h3>
                <div>
                    <input type="text"
                        placeholder='First Name'
                        className='infoInput'
                        name='firstname'
                        id="" />
                    <input type="text"
                        placeholder='Last Name'
                        className='infoInput'
                        name='lastname'
                        id="" />
                </div>
                <div>
                    <input type="text"
                        placeholder='username'
                        className='infoInput'
                        name='username'
                        id="" />
                </div>
                <div>
                    <input type="text"
                        placeholder='Password'
                        className='infoInput'
                        name='password'
                        id="" />
                    <input type="text"
                        placeholder='Confirm Password'
                        className='infoInput'
                        name='confirmPassword'
                        id="" />
                </div>
                <div>
                    <span><span className='text-gray-400 text-[12px]'>Already have an account .</span> Login!</span>
                </div>
                <button className="button info-button" type='submit'>Signup</button>
            </form>
        </div>
    );
};

export default SignUp;