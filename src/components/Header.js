import React from 'react';
import { NavLink } from 'react-router-dom';
import "../blocks/Header.css";
import logo from "../images/Header/logo.svg";
import avatar from "../images/Header/avatar.png";
import ToggleSwitch from './ToggleSwitch';

function Header(props) {
  return (
    <header className='header'>
      <div className="header__left-side">
        <NavLink exact to="/" activeClassName='menu__item-active'>
          <img className="header__logo" src={logo} alt="WTWR Logo" />
        </NavLink>
        <p className="header__date-location">
          {props.currentDate}, {props.currentLocation}
        </p>
      </div>
      <div className="header__right-side">
        <ToggleSwitch />
        <button className="header__add-button" onClick={props.openPopup}>+ Add clothes</button>
        <NavLink to="/profile" className="header__user-name" activeClassName='menu__item-active'>{props.username}</NavLink>
        <img className="header__avatar" src={avatar} alt="User avatar" />
      </div>
    </header>
  )
}

export default Header;