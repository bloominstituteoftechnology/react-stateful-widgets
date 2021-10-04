import React, { useState } from 'react';

const initialMood = 'Not sure how I feel';
const happyMood = 'Quite happy!';
const sadMood = 'Rather sad';

export default function Moods() {
  const [mood, setMood] = useState(initialMood)

  const makeHappy = () => {
    setMood(happyMood)/* STEP 4 */
  };
  const makeSad = () => {
    setMood(sadMood)/* STEP 5 */
  };
  const reset = () => {
    setMood(initialMood)/* STEP 6 */
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'crimson', /* STEP 2 */
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div id='mood' style={style}>{mood}</div> {/* STEP 3 */}
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>
        <button id='makeSad' onClick={makeSad}>Make Sad</button>
        <button id='resetMood' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
