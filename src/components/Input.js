import React from 'react'; /* STEP 0 */
import React, {useState} from 'react'; 

export default function Input() {
  /* STEP 1 */


    const [inputValue, setImputValue] = useState("")
  const changeInput = evt => {


    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;

    setImputValue(value)
    /* STEP 4 */
  };
  const reset = () => {
    /* STEP 5 */
    setImputValue("")
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'royalblue', /* STEP 2 */
    color: inputValue.length <10 ? 'royalblue': "crimson", /* STEP 2 */
  };

  return (
    <div className='widget-input container'>
      <h2>Input</h2>
      <div id='output' style={style}></div> {/* STEP 3 */}
      <div id='output'  style={style}>{inputValue}</div> {/* STEP 3 */}
      <div>
        <input id='input' type='text' onChange={changeInput} /> {/* STEP 6 */}
        <input id='input' type='text' onChange={changeInput} value={inputValue}  /> {/* STEP 6 */}
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}