import React, {useState} from 'react';

export const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
];

export default function Programmers() {

  const [programmers] = useState(listOfAwesome)

  const [programmerID, setProgrammerID] = useState(null)

  const getNameOfFeatured = () => programmers[programmerID - 1].name

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: programmerID === null ? 'royalblue' : 'gold' 
  };

  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {
          programmers.map(dev =>
            <div className='programmer' key={dev.id}>
              {dev.name} <button onClick={() => setProgrammerID(dev.id)}>Feature</button>
            </div>
          )
        }
      </div>
      <div id='featured' style={style}>
        {
          programmerID !== null ? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳` : 'Pick an awesome programmer' 
        }
      </div>
    </div>
  );
}
