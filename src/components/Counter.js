import React, {useState} from 'react'; 

export default function Counter() {
  const  [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  const decrement = () => setCount(count - 1)
  
  const reset = () => setCount(0)

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: (count % 2 === 0 ) ? 'royalblue' : 'crimson',
  };

  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        Number {count} is {count % 2 === 0 ? 'even' : 'odd'} {/* STEP 3 */}
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
