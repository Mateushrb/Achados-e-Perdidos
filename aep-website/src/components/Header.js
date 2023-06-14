import React from 'react';
import logoUnisenai from '../assets/unisenai-logo.png';

function Header() {
  return (
    <header className="header">
      <nav className='navbar'>
      <div className='logo-unisenai'>
        <img src={logoUnisenai} alt='Logo UniSenai' />
      </div>
        <ul className='navbar__ul'>
          <li><a className='navbar-item' href="/">Início</a></li>
          <li><a className='navbar-item' href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
