import React from 'react'; 
import "../blocks/Header.css";
import logo from "../images/Header/logo.svg";
import avatar from "../images/Header/avatar.png";
import ToggleSwitch from './ToggleSwitch';

function Header(props) {
  return (
    <header className='header'>
      <div className="header__left-side">
        <img className="header__logo" src={logo} alt="WTWR Logo" />
        <p className="header__date-location">
          {props.currentDate}, {props.currentLocation}
        </p>
      </div>
      <div className="header__right-side">
        <ToggleSwitch />
        <button className="header__add-button" onClick={props.openPopup}>+ Add clothes</button>
        <p className="header__user-name">{props.username}</p>
        <img className="header__avatar" src={avatar} alt="User avatar" />
      </div>
    </header>
  )
}

export default Header;