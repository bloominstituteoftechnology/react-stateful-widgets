import React from 'react'; /* STEP 0 */

const initialMood = 'Not sure how I feel';
const happyMood = 'Quite happy!';
const sadMood = 'Rather sad';

export default function Moods() {
  /* STEP 1 */

  const makeHappy = () => {
    /* STEP 4 */
  };
  const makeSad = () => {
    /* STEP 5 */
  };
  const reset = () => {
    /* STEP 6 */
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'crimson', /* STEP 2 */
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div id='mood' style={style}>Not sure how I feel</div> {/* STEP 3 */}
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>
        <button id='makeSad' onClick={makeSad}>Make Sad</button>
        <button id='resetMood' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}