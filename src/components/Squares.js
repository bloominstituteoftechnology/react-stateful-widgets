/*
SQUARES Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/0aebd463-7c5e-4d0b-ad22-4da8f4b54e92_squares.gif

This component keeps track of a list of "square ids" on the one hand,
and the currently active id on the other. That's two slices of state!
One is used as the source of truth to render the squares, and the other
so that the component knows which square is currently active.

Only one square (or none) can be active at any given point.

Find comments below to help you along.
*/

import React, { useState } from 'react';


const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Squares() {
  const [activeSquareId, setActiveSquareId] = useState(null);
  const [squareIds, setSquareIds] = useState(listOfSquareIds);
 
  // so the value of 'activeSquare' should be null.
  
  const getClassName = id => {
    const thisIdIsActive = activeSquareId === id;
    console.log('state: ', activeSquareId)
    return `square${thisIdIsActive ? ' active' : ''}`
  };

  const markActive = id => {
    
  activeSquareId === id ? setActiveSquareId(null) : setActiveSquareId(id);
  console.log(activeSquareId) //to double check which square is the active one
  
  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {
         
         squareIds.map(id =>
            <div
              id={id}
              key={id}
              className={getClassName(id)}
              onClick={(evt) => markActive(id)}
            >
            </div>
          )
        }
      </div>
    </div>
  );
}
