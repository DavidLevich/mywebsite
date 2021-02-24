import React, { useState } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <AnchorLink to='/#home' className='navbar-name' onClick={closeMobileMenu}>
              David Iosilevich
            </AnchorLink>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <AnchorLink to='/#home' className='nav-links' onClick={closeMobileMenu}>
                  About
                </AnchorLink>
              </li>
              <li className='nav-item'>
                <AnchorLink to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </AnchorLink>
              </li>
              <li className='nav-item'>
                <AnchorLink to='/#contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }

export default Navbar