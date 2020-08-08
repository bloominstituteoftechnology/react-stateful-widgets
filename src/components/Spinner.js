import React, { useState } from 'react'

export default function Spinner() {
  const [spinnerOn, setSpinnerOn] = useState(true)

  const toggleSpinner = () => {
    setSpinnerOn(!spinnerOn)
  }

  return (
    <div className='react-spinner container'>
      <h2>Spinner</h2>
      {
        spinnerOn && <div className='spinner'>--+--</div>
      }
      <button onClick={toggleSpinner}>{spinnerOn ? 'Hide' : 'Show'} spinner</button>
    </div>
  )
}
