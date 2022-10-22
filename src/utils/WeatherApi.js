import React from 'react';

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
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=18.0179&lon=-76.8099&appid=cd2258b79f5b2bfac5d80485ea366632&units=imperial');
    return this._processResponse(res);
  }
}

export default WeatherApi;