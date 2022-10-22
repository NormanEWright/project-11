import React from "react";
import '../blocks/Profile.css';
import "../blocks/card.css";
import ItemCard from "./ItemCard";

function ClothesSection({ weather, clothingItems, openPopup, openPopupWithForm }) {
  return (
    <div className="profile__clothes-section">
      <div className="profile__main-header">
        <p className="profile__clothes-section-title">Your items</p>
        <button className="profile__add-button" onClick={openPopupWithForm}>+ Add new</button>
      </div>
      <ul className="profile__card-list">
        {
          clothingItems.map(item => <ItemCard
            key={item._id}
            data={item}
            openPopup={openPopup}
            currentWeather={weather.range}
          />)
        }
      </ul>
    </div>
  )
}

export default ClothesSection;