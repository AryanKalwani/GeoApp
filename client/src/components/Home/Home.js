import React, {useState} from 'react';
import './dashStyle.css';

const Dash = () => {
    const [utilString, setUtilString] = useState("nodis");
    const myFunction = () => {
        console.log(utilString);
        if (utilString==="nodis") {
            setUtilString("dis");
        }
        else {
            setUtilString("nodis");
        }
    }
    return (
        <div className="topnav">
            <a href="#" className="active"> Geomeet </a>
            <button className="icon" onClick={myFunction}>
                <i className="fa fa-bars"></i>
            </button>
            <div className={utilString}>
                <a href="#">Friend Requests</a>
                <a href="#">Add Friends</a>
                <a href="#">Search If Someone's Around</a>
            </div> 
        </div>
    )
}

export default Dash;