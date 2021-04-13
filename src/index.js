import React from 'react';
import { render } from 'react-dom';

import Counter from './components/Counter';
import Input from './components/Input';
import Moods from './components/Moods';
import Spinner from './components/Spinner';
import Squares from './components/Squares';
import Programmers from './components/Programmers';

function App(props){
  const {} = props 
  return (
    <div>
      <Counter blank={blank} />
      <Input blank={blank} />
      <Moods blank={blank} />
      <Spinner blank={blank} />
      <Squares blank ={blank} />
      <Programmers blank={blank}/>
      </div>

  )
}
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


// - [ ] You will add functionality to all components inside inside `src/components`.
// - [ ] Work on the components **in the same order in which they display in Chrome** (to go from easiest challenge to hardest).
// - [ ] Each file includes a link to a video, and a set of instructions which can be summarized as:
//   - Watch the video demoing the finished component, and think about how much state is needed.
//   - Create the necessary slices of component state using the state hook.
//   - Fix the JSX so it displays information derived from state, instead of hard-coded data.
//   - Fix the event handlers so they allow the user to update state by interacting with the page.