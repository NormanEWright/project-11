import React from "react";
import '../blocks/Profile.css';
import avatar from "../images/Header/avatar.png";

function Sidebar({ user }) {
  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-header">
        <img className="profile__avatar" src={avatar} alt="User avatar" />
        <p className="profile__user-name">{user}</p>
      </div>
    </div>
  )
}

export default Sidebar;