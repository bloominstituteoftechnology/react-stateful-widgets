import React, { useState } from 'react'; /* STEP 0 */

export default function Counter(Props) {
  const [count, setCount] = useState(0);
  const [evenNum, setEven] = useState(true)

  const increment = () => {
    setCount(count + 1)
    setEven(true)
  };
  const decrement = () => {
    setCount(count - 1)
    setEven(false)
  };
  const reset = () => {
    setCount(0)
    setEven(true)
  };

  if (evenNum){
  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: count%2 === 0 ? 'royalblue' : 'crimson',
  };
  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        Number {count} is {count%2 === 0 ? 'even' : 'odd'}
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
 }else{
  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: count%2 === 0 ? 'royalblue' : 'crimson',
  };
  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        Number {count} is {count%2 === 0 ? 'even' : 'odd'}
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
 }
}