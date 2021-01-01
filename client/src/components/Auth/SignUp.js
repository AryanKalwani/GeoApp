import React from 'react';
import './authStylesheet.css';

const SignUp = () => {
    return (
        <div className="authStyle">
            <div className="login-box">
            <h1>Sign Up</h1>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="email" name="" required="" />
                    <label>Email Id</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" />
                    <label>Password</label>
                </div>
                <div className="box">
			        <a href="#" className="btn btn-white btn-animation-1">Register</a> 
			    </div>
			    <div className="box">
			        <a href="#" className="btn btn-white btn-animation-1">Switch to Login</a> 
			    </div>
            </form>
            </div>
        </div>
    )
}

export default SignUp;