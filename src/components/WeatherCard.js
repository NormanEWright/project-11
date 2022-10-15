import React from 'react';
import "../blocks/WeatherCard.css";
import '../blocks/card.css';
import { day, night } from "../utils/constants";
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';

function WeatherCard({ weather }) {
  const { currentTemperatureUnit } = React.useContext(CurrentTemperatureUnitContext);

  let background = "";
  const weatherCondition = String(weather.condition).toLowerCase();
  const timeOfDay = weather.isDay === 1 ? day : night;

  // Set the background image based on weather condition
  if (weatherCondition.includes("cloud")) {
    background = timeOfDay.cloudy;
  } else if (weatherCondition.includes("fog")) {
    background = timeOfDay.fog;
  } else if ((weatherCondition.includes("rain")) || (weatherCondition.includes("sleet"))) {
    background = timeOfDay.rain;
  } else if (weatherCondition.includes("snow")) {
    background = timeOfDay.snow;
  } else if (weatherCondition.includes("storm")) {
    background = timeOfDay.storm;
  } else if (weatherCondition.includes("sun")) {
    background = timeOfDay.sunny;
  }

  return (
    <section className='weather__card' style={{ backgroundImage: `url(${background })` }} >
      <h2 className='weather__temp'>{currentTemperatureUnit === 'F' ? weather.temp_f : weather.temp_c}</h2>
    </section>
  )
}

export default WeatherCard;