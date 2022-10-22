import React from 'react';
import { isDayTime } from '../utils/constants';
import getWeatherTemperature from './getWeatherTemperature';


class WeatherApi extends React.Component {
  _processResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
  
  async getCurrentWeather(parsedLocation) {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=18.0179&lon=-76.8099&appid=cd2258b79f5b2bfac5d80485ea366632&units=imperial');
    return this._processResponse(res)
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
    })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default WeatherApi;