import React, { useState, useEffect } from 'react'; 

export default function Todo() {
  // the HOOKS ------------------------------------------------------------------------------------
  const [inputValue, setInputValue] = useState("");  // the input string in the input field
  const [todoListCompleted, setTodoListCompleted] = useState([]); 
  const [todoList, setTodoList] = useState(["a", "b", "c"]);

  // the HELPER FUNCTIONS -------------------------------------------------------------------------
  const changeInput = evt => {

      // This helper func gets called with input of a string in the input element.  
      // It changes the inputValue state to the "todo" item entered.
      const { value } = evt.target; // assign typed input to variable value

      setInputValue(value); // set inputValue to value

      console.log("Todo assigned to inputValue: ", inputValue);

  }; // assigns typed todo to the inputValue

  const addTodoList = () => {

      setTodoList(todoList.push(inputValue));  //  QUESTION:  You always want to use the set so that the DOM hook knows that a change has been made?  

      console.log(`todoList : ${todoList}`);

  }; // adds the todo to the todoList

  const addToComplete = (todo) => {
    // id === activeSquare ? setActiveSquare(null) : setActiveSquare(id);
    // console.log("State: ", activeSquare);


    // This helper function gets called when the button "Complete" is clicked.
    // The goal:  It will add the element to the todoListCompleted array & delete it from the todoList array.
    
    setTodoListCompleted(todoListCompleted.push(todo)); // add todo to the todoListCompleted array

    console.log(`The todoListCompleted has updated : ${todoListCompleted}`);
    console.log("The todoListCompleted: ", todoListCompleted)

}; // adds the todo to todoListCompleted


    // the STYLES  -------------------------------------------------------------------------
  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color:'royalblue' /*  todoComplete ? 'royalblue' : 'grey',  ---> NEED TO HOOK UP A CONDITIONAL */
  };

  const style2 = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'dodgerblue' /* NEED TO HOOK THIS UP AS A CONDITIONAL IN RETURN SECTION */
  };  

  useEffect(() => {
    console.log("do this if the todoList changes"); 
    // I want to add an invocation for a reset function for the placeholder here
  }, [todoList]);

  return (
    <div className='widget-input container'>
      <h2>To Do List</h2>
      <div id='output' style={style} >{inputValue.toUpperCase()}</div> {/* STEP 3 */}
      <div>
            <input id='todo' type='text' placeholder=" enter to do here" value={inputValue} onChange={changeInput} /> 
            {/* QUESTION:  I want this placeholder to reset back to baseline after the click.  */}
            <button id='addTodo' onClick={addTodoList}>Add</button> 

            {todoList.map(todo => 
              <div className='todo'>
                {`${todo}  `} 
                <button id= 'addToComplete' onClick={addToComplete(todo)} >Complete</button>
              </div>
              )
            }
            
      </div>
    </div>
  );
}

// todoList.map(todo =>
//   <div className='todo' key={dev.id}>
//     {inputValue} <button onClick={() => {setFeaturedId(dev.id) /* in here set the featured id to be dev.id */ }}>Feature</button>
//   </div>