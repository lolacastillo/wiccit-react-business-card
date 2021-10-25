import React from 'react';
import logo from "../styling/wiccitlogo.png";
import "../styling/index.css";

const Logo = () => {
    return (
        <div id="logo">
            <img src={logo}
                 id="landing"
                 alt=""
                 className="rotate linear infinite"/>
        </div>
    )
}

export default Logo