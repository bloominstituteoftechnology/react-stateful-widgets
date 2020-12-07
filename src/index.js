import React from 'react';
import { render } from 'react-dom';

import Counter from './components/Counter';
import Input from './components/Input';
import Moods from './components/Moods';
import Spinner from './components/Spinner';
import Squares from './components/Squares';
import Programmers from './components/Programmers';

render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
  </>
  ,
  document.querySelector('#root')
);



// import React,{useState} from 'react'; /* STEP 0 */

// export default function Counter() {
//   /* STEP 1 */
//  const [count, setCount] = useState(0)
//   const increment = () => {
//   count === setCount +1
//   };
//   const decrement = () => {
//    count === setCount -1
//   };
//   const reset = () => {
//   count === setCount
//   }

//   const style = {
//     fontSize: '1.5em',
//     marginBottom: '0.3em',
//     color: (increment === 'even' ? 'royalblue' : 'crimson') /* STEP 2 */
//   };

//   return (
//     <div className='widget-counter container'>
//       <h2>Counter</h2>
//       <div id='count' style={style}>
//         Number {count} is ({count === 'even' ? 'even' : 'odd'}) {/* STEP 3 */}
//       </div>
//       <div>
//         <button id='increment' onClick={increment}>Increment</button>
//         <button id='decrement' onClick={decrement}>Decrement</button>
//         <button id='resetCount' onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
