import React, { useState, useEffect, useCallback } from 'react';
import '../blocks/App.css';
import Header from './Header';
import Main from './Main';
import WeatherCard from './WeatherCard';
import ItemCard from './ItemCard';
import ModalWithForm from './ModalWithForm';
import NewGarmentForm from './NewGarmentForm';
import Footer from './Footer';
import { defaultClothingItems, currentDate } from '../utils/constants';
import ItemModal from './ItemModal';
import WeatherApi, { getWeatherTemperature } from '../utils/WeatherApi';
import { useGlobalKeydownListener } from '../hooks/useGlobalKeydownListener';
import { useOutsideClickListener } from '../hooks/useOutsideClickListener';

const api = new WeatherApi();

function App() {
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("Kingston");
  const [isDay, setIsDay] = useState(1);
  const [isNewGarmentModalOpen, setIsNewGarmentModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [itemData, setItemData] = useState({link: '', title: '', descriptions: ''});

  useEffect(() => {
    api
      .getCurrentWeather("18.0179, -76.8099")
      .then((currentWeather) => {
        setWeather(currentWeather.current.condition.text);
        setLocation(`${currentWeather.location.name}`);
        setIsDay(currentWeather.current.is_day);
        setTemperature(Math.round(currentWeather.current.temp_f));
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

  return (
    <div className='App'>
      <Header
        username="Norman Wright"
        name="add"
        currentDate={currentDate}
        currentLocation={location}
        openPopup={openNewGarmentModal}
        onClose={closeModals}
      />
      <Main temp={temperature} >
        <WeatherCard
          id="weather"
          key="weatherCard"
          temp={temperature}
          weather={weather}
          isDay={isDay}
        />
          <ul className='card__list'>
            {
              defaultClothingItems.map(item => <ItemCard
                key={item._id}
                data={item}
                openPopup={openPreviewModal}
                currentWeather={getWeatherTemperature(temperature)}
              />)
            }
          </ul>
      </Main>
      <ModalWithForm
        title="New garment"
        id="addGarment"
        name="add"
        buttonText="Add garment"
        isOpen={isNewGarmentModalOpen}
        onClose={closeModals}
      >
        <NewGarmentForm />
      </ModalWithForm>
      <ItemModal
        name="item"
        isOpen={isPreviewModalOpen}
        onClose={closeModals}
        data={itemData}
      />
      <Footer />
    </div>
  );
}

export default App;