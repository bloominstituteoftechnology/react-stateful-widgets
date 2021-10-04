/*
SPINNER Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/38201164-4df9-4c89-923b-5325dc72124d_spinner.gif


STEP 3:
  Use a ternary expression inside the text of the button, to render "Hide" or "Show" depending on the value of 'spinnerOn'.

STEP 4:
  This click handler needs to toggle the spinner by setting "whether on" to be the opposite of what it currently is.
  Do you remember the operator we use to do "not"?
*/

import React, { useState } from 'react'; /* STEP 0 */

export default function Spinner() {
  const [spinnerOn, setSpinnerOn] = useState(true)/* STEP 1 */

  const toggleSpinner = () => {
  
  };

  return (
    <div className='widget-spinner container'>
      <h2>Spinner</h2>
      {
        toggleSpinner && <div id='spinner' className='spinner'>---+---</div> /* STEP 2 */
      }
      <button id='toggleSpinner' onClick={toggleSpinner(false)}>
       {spinnerOn ? 'Show spinner' : 'Hide spinner'}{/* STEP 3 */}
      </button>
    </div>
  );
}
