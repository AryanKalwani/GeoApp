import React, {useState} from 'react';
import Requests from './Requests';
import Search from './Search';
import './dashStyle.css';

const Dash = () => {
    const [utilString, setUtilString] = useState("nodis");
    const myFunction = () => {
        if (utilString==="nodis") {
            setUtilString("dis");
        }
        else {
            setUtilString("nodis");
        }
    }
    return (
        <div>
            <div className="topnav">
                <a className="heavy"> G E O M E E T </a>
                <button className="icon" onClick={myFunction}>
                    <i className="fa fa-bars"></i>
                </button>
                <div className={utilString}>
                    <a className="items" href="#">Friend Requests</a>
                    <a href="#">Add Friends</a>
                    <a href="#">Search If Someone's Around</a>
                </div> 
            </div>
            <Search />
        </div>
    )
}

export default Dash;