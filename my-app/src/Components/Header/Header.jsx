import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../Home/Assets/logo3.jpg'
import '../Header/Header.css'
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div className="nav-sec">
            <div className="nav-head">
       
       <div className="nav-logo" ><img src={logo}></img>
          <h2>Hope Care</h2></div>
          <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
            <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <Link to='/' className='nav-text' onClick={toggleMenu}><h4 >Home</h4></Link>
                <Link to='/facility' className='nav-text' onClick={toggleMenu}><h4 >Facility</h4></Link>
                <Link to='/appointment' className='nav-text' onClick={toggleMenu}><h4 >Appointment</h4></Link>
                <Link to='/admin' className='nav-text' onClick={toggleMenu}><h4 >Admin</h4></Link>
            </nav>
            </div>
        </div>
    );
}

export default Header;