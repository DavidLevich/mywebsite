import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <p className='navbar-name' onClick={closeMobileMenu}>
              David Iosilevich
            </p>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <p className='nav-links' onClick={closeMobileMenu}>
                  About
                </p>
              </li>
              <li className='nav-item'>
                <p
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Projects
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }

export default Navbar