import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../blocks/App.css';
import Header from './Header';
import Main from './Main';
import Profile from './Profile';
import ModalWithForm from './ModalWithForm';
import NewGarmentForm from './NewGarmentForm';
import Footer from './Footer';
import { defaultClothingItems, currentDate } from '../utils/constants';
import ItemModal from './ItemModal';
import WeatherApi, { getWeatherTemperature } from '../utils/WeatherApi';
import { useGlobalKeydownListener } from '../hooks/useGlobalKeydownListener';
import { useOutsideClickListener } from '../hooks/useOutsideClickListener';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';

const api = new WeatherApi();

function App() {
  const [weather, setWeather] = useState({});
  const [isNewGarmentModalOpen, setIsNewGarmentModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [itemData, setItemData] = useState({link: '', title: '', descriptions: ''});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  useEffect(() => {
    api
      .getCurrentWeather("18.0179, -76.8099")
      .then((data) => {
        const weatherData = {
          temp_f: `${data.current.temp_f}°F`, 
          temp_c: `${data.current.temp_c}°C`,
          range: getWeatherTemperature(data.current.temp_f),
          location: data.location.name,
          is_day: data.current.is_day,
          condition: data.current.condition.text,
        }
        setWeather(weatherData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function openNewGarmentModal() {
    setIsNewGarmentModalOpen(true);
  }

  function openPreviewModal(name, data) {
    setIsPreviewModalOpen(true);
    setItemData(data);
  }

  const closeModals = useCallback(() => {
    setIsNewGarmentModalOpen(false);
    setIsPreviewModalOpen(false);
  }, [])

  useGlobalKeydownListener('Escape', closeModals);
  useOutsideClickListener('popup', closeModals);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  };

  return (
    <div className='App'>
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <BrowserRouter>
          <Header username="Norman Wright" name="add" currentDate={currentDate} currentLocation={weather.location} openPopup={openNewGarmentModal} onClose={closeModals} />
          <Switch>
            <Route exact path="/">
              <Main weather={weather} clothingItems={defaultClothingItems} openPopup={openPreviewModal} />
            </Route>
            <Route path="/profile">
              <Profile user="Norman Wright" weather={weather} clothingItems={defaultClothingItems} openPopup={openPreviewModal} />
            </Route>
          </Switch>
          <ModalWithForm title="New garment" id="addGarment" name="add" buttonText="Add garment" isOpen={isNewGarmentModalOpen} onClose={closeModals} >
            <NewGarmentForm />
          </ModalWithForm>
          <ItemModal name="item" isOpen={isPreviewModalOpen} onClose={closeModals} data={itemData} />
          <Footer />
        </BrowserRouter>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;