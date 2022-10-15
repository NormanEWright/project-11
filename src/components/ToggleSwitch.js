import React, {useState} from 'react';
import '../blocks/ToggleSwitch.css';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(CurrentTemperatureUnitContext);

  const handleChange = (evt) => {
    setChecked(evt.target.checked);
    handleToggleSwitchChange();
  }

  return (
    <label className="switch" htmlFor='checkbox'>
      <input type="checkbox" id='checkbox' onChange={handleChange} />
      <span className="slider round">
        <span className='fahrenheit'>F</span>
        <span className='celsius'>C</span>
      </span>
    </label>
  )
}

export default ToggleSwitch;