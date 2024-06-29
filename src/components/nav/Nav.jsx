import React, { useState } from 'react';
import './Nav.css';
import 'remixicon/fonts/remixicon.css';

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleToggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleToggleLogin = () => {
    setLoginOpen(!isLoginOpen);
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a className="nav__logo" href="#">
            Logo
          </a>

          <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a className="nav__link" href="#">Home</a></li>
              <li className="nav__item"><a className="nav__link" href="#">About us</a></li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={handleToggleMenu}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            <i className="ri-search-line nav__search" id="search-btn" onClick={handleToggleSearch}></i>
            <i className="ri-user-line nav__login" id="login-btn" onClick={handleToggleLogin}></i>
            <div className="nav__toggle" id="nav-toggle" onClick={handleToggleMenu}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>

      <div className={`search ${isSearchOpen ? 'show-search' : ''}`} id="search">
        <form className="search__form" action="">
          <i className="ri-search-line search__icon"></i>
          <input className="search__input" type="search" placeholder="What are you looking for?" />
        </form>
        <i className="ri-close-line search__close" id="search-close" onClick={handleToggleSearch}></i>
      </div>

      <div className={`login ${isLoginOpen ? 'show-login' : ''}`} id="login">
        <form className="login__form" action="">
          <h2 className="login__title">Log In</h2>

          <div className="login__group">
            <div className="login__item">
              <label className="login__label" htmlFor="email">
                Email
              </label>
              <input className="login__input" type="email" placeholder="Write your email" id="email" />
            </div>

            <div className="login__item">
              <label className="login__label" htmlFor="password">
                Password
              </label>
              <input className="login__input" type="password" placeholder="Enter your password" id="password" />
            </div>
          </div>

          <div className="login__register">
            <p className="login__signup">
              You do not have an account? <a href="#">Sign up</a>
            </p>

            <a className="login__forgot" href="#">
              You forgot your password
            </a>

            <button className="login__button" type="submit">
              Log In
            </button>
          </div>
        </form>
        <i className="ri-close-line login__close" id="login-close" onClick={handleToggleLogin}></i>
      </div>
    </>
  );
}

export default Nav;
