import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import './styles/styles.css'
import Counter from './components/Counter';
import Input from './components/Input';
import Moods from './components/Moods';
import Spinner from './components/Spinner';
import Squares from './components/Squares';
import Programmers from './components/Programmers';

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
  </>
)
