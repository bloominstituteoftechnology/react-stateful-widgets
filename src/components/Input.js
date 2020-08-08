/*
INPUT Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/a664dfe7-2dde-48d1-8fa2-48066d98e515_input.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

Yup, a single slice of state is enough! In it we'll keep track of the value of the input.
Whether the text shows royalblue or crimson can be derived from the length of the value of the input.

STEP 0:
  Study the component below, and import the state hook.

STEP 1:
  Create a slice of state called 'inputValue' and its 'setInputValue' buddy.
  We should initialize this state to the empty string.

STEP 2:
  Make the color of the text be royalblue if the length of 'inputValue' goes over ten.

STEP 3:
  Interpolate the value of the input inside this <div />. How can we make it show in ALL CAPS?

STEP 4:
  Set the value of the input -found inside the event object- into state.

STEP 5:
  What should we do inside this click handler?
*/

import React from 'react'; /* STEP 0 */

export default function Input() {
  /* STEP 1 */

  const changeInput = evt => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;

    /* STEP 4 */
  };
  const reset = () => {
    /* STEP 5 */
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'royalblue', /* STEP 2 */
  };

  return (
    <div className='widget-input container'>
      <h2>Input</h2>
      <div style={style}></div> {/* STEP 3 */}
      <div>
        <input type='text' onChange={changeInput} />
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
