import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: count % 2 === 0 ? 'royalblue' : 'crimson',
  }

  return (
    <div className='react-counter container'>
      <h2>Counter</h2>
      <div style={style}>Number {count} is {count % 2 === 0 ? 'even' : 'odd'}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
