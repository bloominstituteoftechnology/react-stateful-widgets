import React, { useState } from 'react'

export default function Todo(){

    const someThing = ""
    const listOfThings = []

    // one single slice of state is enough
    const [newThing, setNewThing] = useState(someThing)
    const [newList, setNewList] = useState(listOfThings)
 
    const addThing = evt => {
      const { value } = evt.target;
      setNewThing(value)
    }

    const addToList = ()=> {
      const updatedList = Array.from(newList);
      updatedList.push(newThing)
      setNewList(updatedList)
    }

    const done = (evt) => {
      const updatedList = newList.filter( item => item !== evt.target.id)
      setNewList(updatedList)
    }
  


    return(
    <div className='container'>
      <h2>Todo List</h2>
      <div className='programmers'>
        {
          newList.map(thing =>
            <div key={thing}>
              {thing} 
              <button id={thing} onClick={(evt) => {done(evt)}}>Delete</button>
            </div>
          )
        }
      </div>
        <input id='thingsInput' type='text' onChange={addThing} value={newThing} placeholder="add something to do"/> {/* STEP 6 */}
        <button onClick={() => {addToList()}}>Add to list</button>

    </div>

    )
}