import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowNav(window.scrollY > 100)
    });
  }, [])

  return (
    <div className={`nav-container ${showNav && 'nav-container-black'}`}>
      <img className='nav-logo' src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png' alt='Netflix'></img>
      <img className='nav-avatar' src='https://i.pinimg.com/originals/c3/3b/32/c33b322b61b8f30f0df1d0b3de690734.png' alt='avatar pessoal'></img>
    </div>
  )
}

export default Nav