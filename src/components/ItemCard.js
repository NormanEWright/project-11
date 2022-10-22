import React from 'react';
import '../blocks/card.css';

function ItemCard({ data, openPopup, weatherRange }) {
  const openPreview = () => {
    openPopup("item", {
      id: data.id,
      link: data.imageUrl,
      title: data.name,
      description: data.weather,
    });
  }

  if (data.weather === weatherRange) {
    return (
      <li key={data.id} className="card" style={{ backgroundImage: `url(${data.imageUrl})` }} onClick={openPreview} >
        <div>
          <h3 className='card__title'>{data.name}</h3>
        </div>
      </li >
    )
  }
}

export default ItemCard;