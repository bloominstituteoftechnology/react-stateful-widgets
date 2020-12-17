/*
PROGRAMMERS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif

This component keeps track of a list of pioneers in the field of programming on the one hand,
and the id of the currently featured programmer on the other. That's two slices of state!
We can only feature one awesome programmer at a time.

Find comments below to help you along.
*/

import React, { useState } from 'react';

// [x]Use this variable ONLY to initialize a slice of state!
// [x]There is something in the JSX right now breaking this rule...
export const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
];

export default function Programmers() {
  const [personId, setPersonId] = useState('1');
  // const [name, setName] = useState('Ada Lovelace');
  // [x]We'll have to use the state hook twice, as we need two slices of state.
  // [x]The programmers list on the one hand, and the id of the featured programmer on the other.
  const [awesomePeople, setAwesomePeople] = useState(listOfAwesome);

  const getNameOfFeatured = () => {
    const nameOfFeaturedPerson = awesomePeople.find(person => person.id === personId);

    return nameOfFeaturedPerson.name;
  };

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: personId ? 'gold' : 'royalblue', 
  };

  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {
          /*[x] Nasty bug! We should map over a slice of state, instead of 'listOfAwesome'.
          We might think: "it works, though!" But if the list of programmers is not state,
          we could never add or edit programmers in the future. The list would be a static thing." */
         awesomePeople.map(dev =>
            <div className='programmer' key={dev.id}>
              {dev.name} <button onClick={(evt) => { setPersonId(dev.id)/* in here set the featured id to be dev.id */ }}>Feature</button>
            </div>
          )
        }
      </div>
      <div id='featured' style={style}>
        { personId ? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳`: 'Pick an awesome programmer'
        }
      </div>
    </div>
  );
}

// Ternaries are fantastic to render "one thing or the other" depending on the "truthiness" of something.
          // [x]Pseudo-code: if the currently featured id is truthy render text 1, otherwise render text 2.
          //[x] Replace the hard-coded false with the correct variable.