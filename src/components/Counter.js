/*
COUNTER Instructions

Watch this short video carefully, paying attention to the UI and Chrome Devtools:
https://tk-assets.lambdaschool.com/59036a85-0980-42c8-81ad-9afc8354497f_counter-clip.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

 --- THREE? SINCE THERE ARE 3 OPTIONS? - NO, 

A naive developer might say 3 different slices:
  - The count
  - Whether the text is color crimson or royalblue
  - Whether the text reads "even" or "odd"

But a single slice of state is all that's needed here: the count!
The other things can simply be _derived_ from the count itself.

STEP 0:
  Start by studying the component below, and importing the state hook. - DONE

STEP 1:
  Using the state hook, create a 'count', 'setCount' pair. - DONE
  The 'count' state should be initialized to the number zero. - ??? let count = 0 ???

STEP 2:
  The 'style' object has the 'color' property hard-coded to "royalblue".
  What the value of 'color' should be instead is a ternary expression that goes like this:

  If count is even, then "royalblue", else "crimson". ----DONE

STEP 3:
  We need to replace some hard-coded info in the JSX with expressions, interpolated inside curly brackets.
  Start by replacing the character "0" with {count}. The 'count' slice of state is the source of truth here. - DONE
  Then, replace the word "even" with a ternary: {if count is even number, then string "even", else string "odd"}. - DONE ???

STEP 4:
  This click handler needs to use 'setCount' to schedule the 'count' to become the current 'count', plus one.
  These state changes are not synchronous: the updated count arrives on the next run of the Counter component.
  Do NOT simply do count++. The plus plus is forbidden! We never mutate a slice of state in place. Even if you could
  reassign a const, React would not be aware anything changed. Always use the state updater, passing in a new value.

  I have no idea how to begin doing this, the first sentence is very confusing. What "schedules" something in coding lingo? I don't recall this phrase being used in class or notes. Today's project follow along also ended with a single example that was super advanced by the end of the whole lesson and there's not many other notes to go off of learning this besides watching other class lectures and it's already so late. bleh. 

STEP 5:
  This click handler needs to use 'setCount' to set the 'count' to be the current 'count' minus one.
  Do NOT do count--. That amounts to trying to mutate 'count' in place. This is the road to perdition.

STEP 6:
  This click handler needs to use 'setCount' to set the 'count' to be zero again.
*/

import React, {useState} from 'react'; /* STEP 0 - Import the State Hook to React */

export default function Counter() {

  const [count, setCount]  = useState(0) // Step 1 - setting the State hook with 2 "States", one is the 'count' State, and the other is the 'setCount' state. - to initialize the 'count' State at 0, or to have the STARTING/DEFAULT State be one of the States you passed in, put it inside the useState() parenthesis.
  
  const increment = () => {
    useState(count(count + 1))
  };

  const decrement = () => {
    useState(count(count + 1))
  };

  const reset = () => {
    useState(setCount)
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: count % 2 === 0 ? 'royalBlue' : 'crimson' /* Ternary Operator that asks if the 'count' is equal to 0, an even number, then it shall return the color as 'royalBlue', if it is not even, it will be 'false' in the eyes of JSX, and return the other, dictated after the ':', as 'crimson' - The Ternary Operator is based off of the true/false boolean mentality
            It's saying "Is the 'color' state variable set to even? If so render 'royalBlue', otherwise render 'crimson' */
  };

  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        Number {count} is {count % 2 === 0 ? 'even' : 'odd'} 
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
