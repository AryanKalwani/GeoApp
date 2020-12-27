import React from 'react';
import HomeStyle from './homestyle.css';

const home = () => {
	return (
		<div className="bodyStyle">
			<h1> G E O M E E T </h1>
			<div className="box">
			  <a href="#" className="btn btn-white btn-animation-1">Login/Sign In</a> 
			</div>
			<div className="box">
			  <a href="#" className="btn btn-white btn-animation-1">Register/Sign Up</a> 
			</div>
		</div>
	)
}

export default home;