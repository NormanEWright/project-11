// Import day time backgrounds
import cloudyDay from "../images/WeatherCard/Day/cloudy.jpg";
import fogDay from "../images/WeatherCard/Day/fog.jpg";
import rainDay from "../images/WeatherCard/Day/rain.jpg";
import snowDay from "../images/WeatherCard/Day/snow.jpg";
import stormDay from "../images/WeatherCard/Day/storm.jpg";
import sunnyDay from "../images/WeatherCard/Day/sunny.jpg";

// Import night time backgrounds
import cloudyNight from "../images/WeatherCard/Night/cloudy.jpg";
import fogNight from "../images/WeatherCard/Night/fog.jpg";
import rainNight from "../images/WeatherCard/Night/rain.jpg";
import snowNight from "../images/WeatherCard/Night/snow.jpg";
import stormNight from "../images/WeatherCard/Night/storm.jpg";
import sunnyNight from "../images/WeatherCard/Night/sunny.jpg";

// Current Date
export const currentDate = new Date().toLocaleString('default', { 
  month: 'long', 
  day: 'numeric' 
});

// API key
export const apiKey = "8aaee888f88e431bb8112030220410";

// Default Content
export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  }

  ,
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  }

  ,
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  }

  ,
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  }

  ,
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  }

  ,
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  }
]

// Day time background image object
export const day = {
  cloudy: cloudyDay,
  fog: fogDay,
  rain: rainDay,
  snow: snowDay,
  storm: stormDay,
  sunny: sunnyDay,
}

// Night time background image object
export const night = {
  cloudy: cloudyNight,
  fog: fogNight,
  rain: rainNight,
  snow: snowNight,
  storm: stormNight,
  sunny: sunnyNight,
}