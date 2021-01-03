import React from 'react';
import './authStylesheet.css';

const SignUp = () => {
    return (
        <div className="authStyle">
            <div className="login-box">
            <h1>Sign In</h1>
            <form>
                <div className="user-box">
                    <input type="email" name="" required="" />
                    <label>Email Id</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" />
                    <label>Password</label>
                </div>
                <div className="box new-size">
			        <a href="#" className="btn btn-white btn-animation-1">Login</a> 
			    </div>
			    <div className="box new-size">
			        <a href="#" className="btn btn-white btn-animation-1">Switch to Registration</a> 
			    </div>
            </form>
            </div>
        </div>
    )
}

export default SignUp;