import React from 'react';
import './Header.css';

import {

  Link
} from "react-router-dom";


function Header() {
  return (
    <div className="clearfix">
      <a href="/"><img className="header-logo" src="/images/logo.png" alt="logo" /></a>
      <nav className="header-nav">
        <Link exact className="header-nav-link" to="/">Home
        </Link>
        <Link exact className="header-nav-link" to="/login">Login
        </Link>
        <Link exact className="header-nav-link" to="/r">Register
        </Link>
        <Link exact className="header-nav-link" to="/about">About Us
        </Link>
        <Link exact className="header-nav-link" to="/shop">Shop
        </Link>
      </nav>
    </div>
  );
}

export default Header;