import React from 'react';
import { apiKey } from './constants';

export function getWeatherTemperature(temperature) {
  if (temperature >= 86) {
    return 'hot';
  } else if (temperature >= 66 && temperature <= 85) {
    return 'warm';
  } else if (temperature <= 65) {
    return 'cold';
  }
}

class WeatherApi extends React.Component {
  _processResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async getCurrentWeather(parsedLocation) {
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${parsedLocation}&days=1`);
    return this._processResponse(res);
  }
}


export default WeatherApi;