import React, { useState } from 'react';
import logo from '/public/images/logo-1.png';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";

import './navbar.css';

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='navbar-center'>
  <ul className={isActive ? 'list-items active' : 'list-items hidden'}>
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</div>
      <div className='navbar-right'>
        <button>50TH ANNIVERSARY</button>
        <div onClick={toggleMenu}>
        <FaBars className={`hamburger ${isActive ? 'active' : ''}`} />
        <RxCross1 className={`cross-icon ${isActive ? 'active' : ''}`}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
