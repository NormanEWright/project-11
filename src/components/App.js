import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../blocks/App.css';
import Header from './Header';
import Main from './Main';
import Profile from './Profile';
import ModalWithForm from './ModalWithForm';
import AddItemModal from './AddItemModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import Footer from './Footer';
import { currentDate, coords } from '../utils/constants';
import ItemModal from './ItemModal';
import WeatherApi from '../utils/WeatherApi';
import { useGlobalKeydownListener } from '../hooks/useGlobalKeydownListener';
import { useOutsideClickListener } from '../hooks/useOutsideClickListener';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import { getItems, addItem, removeItem } from '../utils/api';

const api = new WeatherApi();

function App() {
  const [weather, setWeather] = useState({});
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [itemData, setItemData] = useState({link: '', title: '', descriptions: ''});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [clothingList, setClothingList] = useState([]);
  const [deleteItem, setDeleteItem] = useState(null);

  useEffect(() => {
    api
      .getCurrentWeather(`${coords.lat}, ${coords.long}`)
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingList(items);
      })
      .catch((err) => console.log(err));
  }, []);

  function openAddNewItemModal() {
    setIsAddItemModalOpen(true);
  }

  function openConfirmationModal() {
    setIsConfirmModalOpen(true);
  }

  function openPreviewModal(name, data) {
    setIsPreviewModalOpen(true);
    setItemData(data);
  }

  const closeModals = useCallback(() => {
    setIsPreviewModalOpen(false);
    setIsAddItemModalOpen(false);
    setIsConfirmModalOpen(false);
  }, [])

  useGlobalKeydownListener('Escape', closeModals);
  useOutsideClickListener('popup', closeModals);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  };

  const handleCardDelete = () => {
    removeItem(deleteItem)
    .then((res) => {
      setClothingList(clothingList.filter((item) => item.id !== deleteItem))
      setDeleteItem(null);
      closeModals();
    })
    .catch((err) => console.log(err));
  };

  const handleAddItemSubmit = (name, imageUrl, weatherType) => {
    addItem(name, imageUrl, weatherType)
    .then((item) => {
      setClothingList([item, ...clothingList]);
      setIsAddItemModalOpen(false);
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className='App'>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <BrowserRouter basename='/project-11'>
          <Header
            username="Norman Wright"
            name="add"
            currentDate={currentDate}
            currentLocation={weather.location}
            openPopupWithForm={openAddNewItemModal}
            closePopup={closeModals}
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
                openPopupWithForm={openAddNewItemModal}
                isOpen={isAddItemModalOpen}
              />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
        <ModalWithForm
          title="New garment"
          name="add"
          buttonText="Add garment"
          isOpen={isAddItemModalOpen}
          closePopup={closeModals}
          onAddItem={handleAddItemSubmit}
        />
        <ItemModal
          name="item"
          isOpen={isPreviewModalOpen}
          closePopup={closeModals}
          data={itemData}
          openConfirmationModal={openConfirmationModal}
          setDeleteItem={setDeleteItem}
        />
        <AddItemModal
          isOpen={isAddItemModalOpen}
          closePopup={closeModals}
          onAddItem={handleAddItemSubmit}
        />
        <DeleteConfirmationModal
          name="confirm" 
          isOpen={isConfirmModalOpen}
          onClose={closeModals}
          deleteCard={handleCardDelete}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;