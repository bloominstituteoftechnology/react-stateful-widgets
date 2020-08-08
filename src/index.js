import React from 'react';
import { render } from 'react-dom';

import Counter from './components/Counter';
import Input from './components/Input';
import Happy from './components/Happy';
import Spinner from './components/Spinner';
import Squares from './components/Squares';

render(
  <>
    <Counter />
    <Input />
    <Happy />
    <Spinner />
    <Squares />
  </>
  ,
  document.querySelector('#root')
);
