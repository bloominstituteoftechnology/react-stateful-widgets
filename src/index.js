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


// How many things can I return from a fucntion?
// Answer: ONE, [1,2,3,4,5], { name: 'Casey', password: 'rocks'}
// React fragments are open and close tags that are holding data