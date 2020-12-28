/* COMPLETE
I
  Study the component below, and import the state hook.

STEP 1: COMPLETE
  Create a slice of state called 'inputValue' and its 'setInputValue' buddy.
  We should initialize this state to the empty string.

STEP 2: COMPLETE
  Make the color of the text be crimson if the length of 'inputValue' goes over ten.

STEP 3: COMPLETE
  Interpolate the value of the input inside this <div />. How can we make it show in ALL CAPS?

STEP 4: COMPLETE
  Set the value of the input -found inside the event object- into state.

STEP 5: COMPLETE
  Set the input value in state to be empty string. The reset still won't work, though! See the next step.

STEP 6: COMPLETE
  For the input to reset correctly, it needs to "drink" its value from state!
  We need to add an extra prop to the <input /> element like so: value={inputValue}
*/

import React, { useState } from 'react'; /* STEP 0 */

export default function Input() {
  /* STEP 1 */
  const [inputValue, setInputValue] = useState("");

  const changeInput = evt => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;
    console.log(evt.target); 
    setInputValue(value);
    // console.log(value); // works
    console.log("State: ", inputValue);
    /* STEP 4 */
  };

  const reset = () => {
    /* STEP 5 */
    setInputValue("");
    console.log(`State: "" ${inputValue}`);
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: inputValue.length <= 9 ? 'royalblue' : 'crimson', /* STEP 2 */
  };

  return (
    <div className='widget-input container'>
      <h2>Input</h2>
      <div id='output' style={style}>{inputValue.toUpperCase()}</div> {/* STEP 3 */}
      <div>
        <input id='input' type='text' value={inputValue} onChange={changeInput} /> {/* STEP 6 */}
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
