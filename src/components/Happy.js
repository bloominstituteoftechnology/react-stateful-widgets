import React, { useState } from 'react'

const initialMood = 'Not sure how I feel'
const happyMood = 'Quite happy!'
const sadMood = 'Rather sad'

export default function Happy() {
  const [mood, setMood] = useState(initialMood)

  const makeHappy = () => {
    setMood(happyMood)
  }
  const makeSad = () => {
    setMood(sadMood)
  }
  const reset = () => {
    setMood(initialMood)
  }

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: mood === happyMood ? 'royalblue' : 'crimson',
  }

  return (
    <div className='react-happy container'>
      <h2>Happy</h2>
      <div style={style}>{mood}</div>
      <div>
        <button onClick={makeHappy}>Make Happy</button>
        <button onClick={makeSad}>Make Sad</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
