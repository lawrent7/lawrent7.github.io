import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FiX, FiMenu } from "react-icons/fi";
import Social from '../Social';
import './style.scss';

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpened(!isMenuOpened);
  };

  window.addEventListener('scroll', function() {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <header className={`${isScrolled ? 'sticky' : ''} ${isMenuOpened ? 'menu-open' : ''}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <NavLink exact to="/">
              <img src={require('../../assets/images/logo.png')} alt="Laurentiu Cuciureanu" />
            </NavLink>
          </div>
          <nav className="main-menu">
            <ul className="menu">
              <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/about" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink exact to="/portfolio" activeClassName="active">Portfolio</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <Social />
        </div>
      </div>

      <div className="mobile-menu d-lg-none">
        <nav className="main-menu">
          <ul className="menu">
            <li>
              <NavLink exact to="/" activeClassName="active" onClick={toggleMobileMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName="active" onClick={toggleMobileMenu}>About</NavLink>
            </li>
            <li>
              <NavLink exact to="/portfolio" activeClassName="active" onClick={toggleMobileMenu}>Portfolio</NavLink>
            </li>
          </ul>
        </nav>
        <Social />
      </div>
      <div className="menu-trigger d-block d-lg-none">
        <span role="button" onClick={toggleMobileMenu}>
          {isMenuOpened ? <FiX /> : <FiMenu />}
        </span>
      </div>
    </header>
  );
};

export default Header;
