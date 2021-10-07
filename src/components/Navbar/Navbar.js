import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    return (
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link activeClass='active' to='home' spy={true} smooth={true} duration={1} className='navbar-name' onClick={closeMobileMenu}>
            David Iosilevich
          </Link>
          <div className='menu-icon' onClick={handleClick} role='presentation'>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' role='presentation'>
              <Link activeClass='active' to='home' spy={true} smooth={true} duration={1} className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link activeClass='active' to='projects' spy={true} smooth={true} duration={1} className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link activeClass='active' to='contact' spy={true} smooth={true} duration={1} className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar