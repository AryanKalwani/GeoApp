import React from 'react';

const SingleRequest = (props) => {
    return (
        <div className="container">
            <div className="columnBox">
                <i className="fa fa-user"> {props.name} </i> 
                <div  className="singleReqBtn">
                <button> <i className="fa fa-check"> Accept </i></button>
                <button> <i className="fa fa-times"> Reject </i></button> 
                </div>
            </div>
        </div>
    )
}

export default SingleRequest;