import React from "react";


import Logo from "../img/Logo.png";
import Home from "../img/HomeIc.png";
import Chat from "../img/Cross.png";
import Settings from "../img/setting.png";
import profile from "../img/photo.png";



function Header() {
    return (
        <div className="header-container">
            <nav className="header">
                <div className="logo">
                    <img src={Logo} alt="logo" className="logoImg" />
                </div>
                <div className="nav">
                    <img src={Home} alt="nav" className="nav__icons" />
                    <img src={Chat} alt="nav" className="nav__icons" />
                    <img src={Settings} alt="nav" className="nav__icons" />
                    <img src={profile} alt="nav" className="nav__icons" />
                    <select name="" className="nav__language">
                        <option value="eng">ENG</option>
                        <option value="rus">RUS</option>

                    </select>
                </div>
            </nav>
        </div>
    );
}

export default Header;