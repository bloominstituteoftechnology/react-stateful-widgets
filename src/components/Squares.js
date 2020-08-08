import React, { useState } from 'react'

export default function Squares() {
  const [active, setActive] = useState(null)

  const isActive = id => {
    return active === id ? ' active' : ''
  }

  const markActive = evt => {
    const { id } = evt.target
    setActive(active === id ? null : id)
  }

  return (
    <div className='react-squares container'>
      <h2>Squares</h2>
      <div className='squares' onClick={markActive}>
        {
          ['s00', 's10', 's01', 's11'].map(id =>
            <div key={id} id={id} className={`square${isActive(id)}`}></div>
          )
        }
      </div>
    </div>
  )
}
