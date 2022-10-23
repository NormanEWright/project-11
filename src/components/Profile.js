import React from 'react';
import '../blocks/Profile.css';
import Sidebar from './Sidebar';
import ClothesSection from './ClothesSection';

function Profile({ user, weather, clothingItems, openPopup, openPopupWithForm }) {
  return (
    <div className='profile__wrapper'>
      <Sidebar user={user} />
      <ClothesSection weather={weather} clothingItems={clothingItems} openPopup={openPopup} openPopupWithForm={openPopupWithForm} />
    </div>
  )
}

export default Profile;