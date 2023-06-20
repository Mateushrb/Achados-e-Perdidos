import React from 'react';
import logoUnisenai from '../../assets/unisenai-logo.png';
import './headerStyles.css';

function Header() {
  return (
    <>
      <header className="header">
        <div className='logo-unisenai'>
          <img src={logoUnisenai} alt='Logo UniSenai' />
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link">
                Início
              </a>
            </li>
            <li className="nav__item">
              <a href="/contato" className="nav__link">
                Contato
              </a>
            </li>
            <li className="nav__item">
              <a href="/login" className="nav__link">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;