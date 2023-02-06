import React from 'react';
import './Footer.css';



function Footer() {
    return (
        <div className="footer">
            &copy; HomeHeroes
            <div>
                {new Date().toLocaleString() + ""}
            </div>
            <div className="header-top-bar">
                <span class="header-top-bar-number">
                    Call Us: +40758765988
                </span>
                <div>
                </div>
                Email:
                <a href="#">
                    home_heroes@gmail.com
                </a>
            </div>
        </div>
    );
}

export default Footer;