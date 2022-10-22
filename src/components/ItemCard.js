import React from 'react';
import '../blocks/card.css';

function ItemCard({ data, openPopup, currentWeather }) {
  const openPreview = () => {
    openPopup("item", {
      link: data.imageUrl,
      title: data.name,
      description: data.weather,
    });
  }
  
  if (data.weather === currentWeather) {
    return (
      <li
        key={data._id}
        className="card"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        onClick={openPreview}
      >
        <div>
          <h3 className='card__title'>{data.name}</h3>
        </div>
      </li >
    )
  }
}

export default ItemCard;