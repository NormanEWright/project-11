import React from 'react';
import "../blocks/Main.css";
import "../blocks/card.css";
import WeatherCard from './WeatherCard';
import ItemCard from './ItemCard';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';

function Main({ weather, clothingItems, openPopup }) {
  const { currentTemperatureUnit } = React.useContext(CurrentTemperatureUnitContext);
  
  return (
    <main className="main">
      <WeatherCard weather={weather} />
      <section className="card__section">
        <h3 className="card__heading">Today is {currentTemperatureUnit === 'F' ? weather.temp_f : weather.temp_c} / You may want to wear:</h3>
        <ul className='card__list'>
          {
            clothingItems.map(item => <ItemCard key={item.id} data={item} openPopup={openPopup} weatherRange={weather.range} />)
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;