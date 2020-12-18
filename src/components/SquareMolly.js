import React, { useState } from 'react';

const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];
export default function Squares() {
  const [squareId, setSquareId] = useState('sqB');
  const [activeSquareId, setActiveSquareId] = useState(listOfSquareIds);
  // so the value of 'activeSquare' should be null.
  const getClassName = id => {
  let selectedSquare = activeSquareId.find(squares => squares.id === squareId);
    if (squareId === id){
      return selectedSquare.id;
    } else {
      return '';
    }
  };
  const markActive = id => {
    // This is a helper used inside an _inlined_ click handler (see below).
    // Set the id argument to become the active id in state
    // (unless it already is, in which case we should reset
    // the currently active square id back to initial state).
    if (squareId !== id){
      return '';
    }
  };
  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {
          activeSquareId.map(id =>
            <div
              id={id}
              key={id}
              className={`square${getClassName(id)}`}
              onClick={(evt) => markActive(id)}
            >
            </div>
          )
        }
      </div>
    </div>
  );
}