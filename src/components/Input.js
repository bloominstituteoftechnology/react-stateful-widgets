/*
INPUT Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/a664dfe7-2dde-48d1-8fa2-48066d98e515_input.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

Yup, a single slice of state is enough! In it we'll keep track of the value of the input.
Whether the text shows royalblue or crimson can be derived from the length of the value of the input.

-STEP 0:
  Study the component below, and import the state hook.

-STEP 1:
  Create a slice of state called 'inputValue' and its 'setInputValue' buddy.
  We should initialize this state to the empty string.

-STEP 2:
  Make the color of the text be crimson if the length of 'inputValue' goes over ten.

-STEP 3:
  Interpolate the value of the input inside this <div />. How can we make it show in ALL CAPS?

---STEP 4:
  Set the value of the input -found inside the event object- into state.

-STEP 5:
  Set the input value in state to be empty string. The reset still won't work, though! See the next step.

-STEP 6:
  For the input to reset correctly, it needs to "drink" its value from state!
  We need to add an extra prop to the <input /> element like so: value={inputValue}
*/


/* STEP 0 */
//Importing react (statehook)from react
//Import React from library react, extends jsx code functionality to the project
import React from "react";



/* STEP 1 */
//Define the Input function
export default function Input() 
{
  //Destructure
  //Declare state variable, input value" "
  const {inputValue, setInputValue } = useState(" ");

  /* STEP 4 */
  //Define the changeInput function, takes event object
  const changeInput = evt => 
  {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;

    //invoke setInputValue, assign value
    setInputValue(value);
    
  };

  
  /* STEP 5 */
  //Define the reset function
  const reset = () => 
  {
    //Set the input to empty string
    setInputValue(" ")
  };

  //Define the style and assign to style
  const style = 
  {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    /* STEP 2
     * If length is > 10, color: crimson  */
    color: (inputValue.length > 10) ? "crimson" : "royalblue", 
  };

  //Define the return function
  return (
    <div className='widget-input container'>
      <h2>Input</h2>

      {/* STEP 3 
        * Interpolate value of style, convert to uppercase*/}
      <div id = "output" style = {style}> {inputValue.toUpperCase()} </div> 

      <div>
        {/* STEP 6 
          * Add value = {inputValue} tag*/}
        <input id = "input" type = "text" value = {inputValue} onChange = {changeInput} /> 

        <button id = "resetInput" onClick = {reset} > Reset </button>
      </div>
    </div>
  );
}
