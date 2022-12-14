import React from 'react';
import { isDayTime, key } from '../utils/constants';
import getWeatherTemperature from './getWeatherTemperature';
import { coords } from '../utils/constants';

class WeatherApi extends React.Component {
  _processResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _request(url) {
    return fetch(url).then(this._processResponse)
  }

  getCurrentWeather(parsedLocation) {
    return this._request(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.long}&lon=${coords.lat}&appid=${key}&units=imperial`)
      .then((res) => {
        const data = {
          temp_f: `${Math.round(res.main.temp)}°F`,
          temp_c: `${Math.round((res.main.temp - 32) * 5 / 9)}°C`,
          range: getWeatherTemperature(Math.round(res.main.temp)),
          location: res.name,
          isDayTime: isDayTime,
          condition: res.weather[0].description,
        }
        return data;
      });
  }
}

export default WeatherApi;