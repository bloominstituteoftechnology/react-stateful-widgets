
import React, { useState } from 'react';

// Use this variable ONLY to initialize a slice of state!
const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Squares() {

  const [sqr, setSqr] = useState(listOfSquareIds);
  const [activeSquare, setActiveSquare] = useState(null);


  const getClassName = id => {
    // This is NOT a click handler but a helper, used inside the JSX (see below).
    // It should return a string containing the class 
    //name of 'active', if the id passed
    // as the argument matches the active square in state, empty string otherwise.
    // Right-click and "inspect element" on the square to see its effect.
    if(id === activeSquare) {
      return 'active'
    } else {
      return ''
    }
  };

  const markActive = id => {
    // This is a helper used inside an _inlined_ click handler (see below).
    // Set the id argument to become the active id in state
    // (unless it already is, in which case we should reset
    // the currently active square id back to initial state).
    if(id === activeSquare) {
      setActiveSquare(null)
    } else {
      setActiveSquare(id)
    }
  };

  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {
          /* Nasty bug! We should map over a slice of state, instead of 'listOfSquareIds'.
          We might say: "it works, though!" But if the list 
          of squares is not state,
          we could never add squares, change squares or 
          remove squares in the future. Fix!" */
          sqr.map(id =>
            <div
              id={id}
              key={id}
              className={`square ${getClassName(id)}`}
              onClick={() => markActive(id)}
            >
            </div>
          )
        }
      </div>
    </div>
  );
}