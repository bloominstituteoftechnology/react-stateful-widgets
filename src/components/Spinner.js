import React, {useState} from 'react'

export default function Spinner() {

  const [spinnerOn, setSpinnerOn] = useState(true)

  const toggleSpinner = () => setSpinnerOn(!spinnerOn)

  return (
    <div className='widget-spinner container'>
      <h2>Spinner</h2>
      {
        spinnerOn && <div id='spinner' className='spinner'>--+--</div>
      }
      <button id='toggleSpinner' onClick={toggleSpinner}>
        {spinnerOn ? 'Hide Spinner' : 'Show Spinner'}
      </button>
    </div>
  );
}
