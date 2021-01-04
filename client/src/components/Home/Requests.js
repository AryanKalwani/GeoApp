import React from 'react';
import SingleRequest from './SingleRequest';

const Requests = () => {
    return (
        <div className="newStyle">
            <h1>
                Friend Requests
            </h1>
            <SingleRequest name={" Aryan Pramanick"}/>
            <SingleRequest name={" Hello World"}/>
            <SingleRequest name={" Aryan Pramanick"}/>
            <SingleRequest name={" Hello World"}/>
        </div>
    )
}

export default Requests;