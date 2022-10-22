import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../blocks/App.css';
import Header from './Header';
import Main from './Main';
import Profile from './Profile';
import ModalWithForm from './ModalWithForm';
import NewGarmentForm from './NewGarmentForm';
import AddItemModal from './AddItemModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import Footer from './Footer';
import { currentDate, isDayTime } from '../utils/constants';
import ItemModal from './ItemModal';
import WeatherApi, { getWeatherTemperature } from '../utils/WeatherApi';
import { useGlobalKeydownListener } from '../hooks/useGlobalKeydownListener';
import { useOutsideClickListener } from '../hooks/useOutsideClickListener';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import { getItems, addItem } from '../utils/api';

const api = new WeatherApi();

function App() {
  const [weather, setWeather] = useState({});
  const [isNewGarmentModalOpen, setIsNewGarmentModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemwModalOpen] = useState(false);
  const [itemData, setItemData] = useState({link: '', title: '', descriptions: ''});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [clothingList, setClothingList] = useState([]);

  useEffect(() => {
    api
      .getCurrentWeather("18.0179, -76.8099")
      .then((data) => {
        console.log(data);
        const weatherData = {
          temp_f: `${data.main.temp}°F`, 
          temp_c: `${Math.round((data.main.temp - 32) * 5/9)}°C`,
          range: getWeatherTemperature(data.main.temp),
          location: data.name,
          isDayTime: isDayTime,
          condition: data.weather[0].description,
        }
        setWeather(weatherData);
        console.log(weatherData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getItems(`baseUrl`)
      .then((items) => {
        setClothingList(items);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddNewItemClick() {
    setIsAddItemwModalOpen(true);
  }

  function openNewGarmentModal() {
    setIsNewGarmentModalOpen(true);
  }

  function openConfirmationModal() {
    setIsConfirmModalOpen(true);
  }

  function openPreviewModal(name, data) {
    setIsPreviewModalOpen(true);
    setItemData(data);
  }

  const closeModals = useCallback(() => {
    setIsNewGarmentModalOpen(false);
    setIsPreviewModalOpen(false);
    setIsAddItemwModalOpen(false);
    setIsConfirmModalOpen(false);
  }, [])

  useGlobalKeydownListener('Escape', closeModals);
  useOutsideClickListener('popup', closeModals);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  };

  // const confirmDelete = () => {
  //   return;
  // }

  const handleCardDelete = () => {
    return;
  }

  const handleAddItemSubmit = (name, imageUrl, weatherType) => {
    addItem({ name, imageUrl, weatherType })
      .then((newItem) => {
        setClothingList([newItem, ...clothingList]);
      });
  }

  return (
    <div className='App'>
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <BrowserRouter>
          <Header
            username="Norman Wright"
            name="add"
            currentDate={currentDate}
            currentLocation={weather.location}
            openPopup={openNewGarmentModal}
            onClose={closeModals}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weather={weather}
                clothingItems={clothingList}
                openPopup={openPreviewModal}
              />
            </Route>
            <Route path="/profile">
              <Profile
                user="Norman Wright"
                weather={weather}
                clothingItems={clothingList}
                openPopup={openPreviewModal}
                openPopupWithForm={openNewGarmentModal}
                addNewItem={handleAddNewItemClick}
                isOpen={isAddItemModalOpen}
              />
            </Route>
          </Switch>
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
            confirmDelete={openConfirmationModal}
          />
          <AddItemModal
            onAddItem={handleAddItemSubmit}
          />
          <DeleteConfirmationModal
            name="confirm"
            isOpen={isConfirmModalOpen}
            onClose={closeModals}
            confirmDeletePopup={handleCardDelete}
          />
          <Footer />
        </BrowserRouter>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;