import React, { useState } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    return (
      <nav className='navbar'>
        <div className='navbar-container'>
          <AnchorLink to='/#home' className='navbar-name' onClick={closeMobileMenu}>
            David Iosilevich
          </AnchorLink>
          <div className='menu-icon' onClick={handleClick} role='presentation'>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' role='presentation' onClick={closeMobileMenu}>
              <AnchorLink to='/#home' className='nav-links'>
                About
              </AnchorLink>
            </li>
            <li className='nav-item' role='presentation' onClick={closeMobileMenu}>
              <AnchorLink to='/#projects' className='nav-links'>
                Projects
              </AnchorLink>
            </li>
            <li className='nav-item' role='presentation' onClick={closeMobileMenu}>
              <AnchorLink to='/#contact' className='nav-links'>
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar