import React, { useState } from 'react'
import '../Components/Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <div className='brand'>UMAR HANIF</div>
      <nav>
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          aria-label='Toggle navigation menu'
          onClick={handleMenuToggle}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li><a href='#home'>Home</a></li>
          <li><a href='#About'>About</a></li>
          <li><a href='#project'>Project</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='cv-container'>
          <button className='cv' id='cv'>
            <a href='my-portfolio.pdf'>Portfolio</a>
          </button>
          <span className='click-me-arrow'>
            <span className='arrow'>&#8593;</span>
            <span className='click-me-text'>click me</span>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header
