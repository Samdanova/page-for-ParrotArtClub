import React from "react";
import Logo from "../img/Logo2.png";
import Facebook from "../img/Facebook.png";
import Inst from "../img/instagram.png";
import Whats from "../img/WhatsApp.png";

function Footer() {
    return (
        <div className="footer-background">
            <div className="footer">
                <div className="footer__columns">
                    <div className="footer__logo">
                        <img src={Logo} alt="logo" className="footer__logo-icon" />
                    </div>
                    <div className="footer__rules">
                        <p>Contract offer</p>
                        <p>Card payment rules
                        </p>
                    </div>
                </div>
                <div className="footer__contacts">
                    <p>imagine.com</p>
                    <p>info@imagine.com</p>
                    <p className='footer__copy'>
                        &copy; IMAGINE 2021. All rights Reserved</p>
                </div>
                <div className="footer__icons">
                    <img src={Facebook} alt="logo" className="footer__icons-social" />
                    <img src={Inst} alt="logo" className="footer__icons-social" />
                    <img src={Whats} alt="logo" className="footer__icons-social" />
                </div>
            </div>
        </div>
    )
}

export default Footer;